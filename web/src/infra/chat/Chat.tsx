import React, { useState, useEffect, useRef } from 'react';
import { gql, useSubscription } from '@apollo/client';
import Message from './internal/Message';
import ChatInput from './internal/ChatInput';
import ChatMessageHistory from './internal/ChatMessageHistory';
import { Dispatch } from 'redux';
import { LobbyService } from 'infra/common/services/LobbyService';
import { detectIsMobile } from 'infra/common/device/detectIsMobile';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import css from './Chat.module.css';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import { withTranslation, WithTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface ChatInnerProps extends WithTranslation {}

export interface ChatOutterProps {
  channelType: 'room' | 'match';
  channelId: string;
  dispatch: Dispatch;
}

export interface ChatState {
  messageHistory: Message[];
  isOpen: boolean;
  unseenMessages: number;
}

interface InitialMessageResolver {
  (t: WithTranslation['t']): Message;
}

const INITIAL_MESSAGE: InitialMessageResolver = (t) => ({
  userId: 0,
  userNickname: t('notice.title'),
  message: t('notice.message'),
  isoTimestamp: '',
});

const isMobile = detectIsMobile();
export const CHAT_SUBSCRIPTION = gql`
  subscription ChatMutated($channelType: String!, $channelId: String!) {
    chatMutated(channelType: $channelType, channelId: $channelId) {
      userId
      userNickname
      isoTimestamp
      message
    }
  }
`;

const ChatInternal: React.FC<ChatInnerProps & ChatOutterProps> = ({ channelType, channelId, dispatch, t }) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const [messageHistory, setMessageHistory] = useState<Message[]>([INITIAL_MESSAGE(t)]);
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [unseenMessages, setUnseenMessages] = useState(0);

  const { data: subscriptionData } = useSubscription(CHAT_SUBSCRIPTION, {
    variables: { channelType, channelId }
  });

  // Handle new messages from subscription
  useEffect(() => {
    const newMessage = subscriptionData?.chatMutated;
    if (newMessage) {
      setMessageHistory(prevHistory => {
        const lastMessage = prevHistory[prevHistory.length - 1];
        if (isSameMessage(newMessage, lastMessage)) {
          return prevHistory;
        }
        const updatedHistory = [...prevHistory, newMessage];

        // Update unseen messages if panel is closed
        if (!isOpen) {
          setUnseenMessages(prev => prev + 1);
        }

        return updatedHistory;
      });
    }
  }, [subscriptionData, isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messageHistory]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      updateBodyRightMargin(true);
    };
  }, []);

  // Update body margin when isOpen changes
  useEffect(() => {
    updateBodyRightMargin();
  }, [isOpen]);

  const renderPanel = (messages: Message[]) => {
    if (!isOpen) {
      return null;
    }
    if (isMobile) {
      return (
        <AlertLayer onClickaway={_togglePanel}>
          <Card className={css.MobileCard}>{renderInnerPanel(messages, false)}</Card>
        </AlertLayer>
      );
    } else {
      return (
        <Paper elevation={4} className={css.DesktopPanelWrapper}>
          {renderInnerPanel(messages, true)}
        </Paper>
      );
    }
  };

  const renderInnerPanel = (messages: Message[], isDesktop: boolean) => {
    let className = '';
    const closeButton = renderMobileHeader();
    if (isDesktop) {
      className = css.DesktopInput;
    }
    return (
      <div className={css.InnerPanel}>
        {closeButton}
        <div style={{ flex: '1', overflowY: 'auto' }} ref={messagesRef}>
          <ChatMessageHistory messages={messages} />
        </div>
        <ChatInput sendMessage={_sendMessage} className={className} />
      </div>
    );
  };

  const renderMobileHeader = () => {
    return (
      <div>
        <IconButton aria-label="close" onClick={_togglePanel} className={css.ChatClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="span" className={css.ChatTitle}>
          {t('chat')}
        </Typography>
      </div>
    );
  };

  const renderButton = () => {
    return (
      <IconButton aria-label="Toggle chat panel" onClick={_togglePanel}>
        <Badge badgeContent={unseenMessages} color="secondary">
          <ChatIcon style={{ color: 'white' }} />
        </Badge>
      </IconButton>
    );
  };

  const isSameMessage = (m1?: Message, m2?: Message) => {
    return m1?.message === m2?.message && m1?.userId === m2?.userId && m1?.isoTimestamp === m2?.isoTimestamp;
  };

  const updateBodyRightMargin = (forceClose?: boolean) => {
    let newPadding;
    if (forceClose || typeof window === 'undefined' || !isOpen || detectIsMobile()) {
      newPadding = '0px';
    } else {
      newPadding = '250px';
    }
    document.getElementsByTagName('body')[0].style.marginRight = newPadding;
  };

  const scrollToBottom = () => {
    const el = messagesRef.current;
    if (!el) {
      return;
    }
    el.scrollTop = el.scrollHeight;
  };

  const _sendMessage = (msg: string) => {
    // TODO: Refactor this out of lobby service.
    LobbyService.sendMessage(dispatch, channelType, channelId, msg);
  };

  const _togglePanel = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) {
      setUnseenMessages(0);
    }
  };

  const button = renderButton();
  const panel = renderPanel(messageHistory);

  return (
    <>
      {button}
      {panel}
    </>
  );
};

const enhance = compose<ChatInnerProps, ChatOutterProps>(withTranslation('Chat'));

export const Chat = enhance(ChatInternal);
