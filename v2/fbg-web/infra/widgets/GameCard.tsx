import { GameSummary } from 'fbg-web/infra/games/GameSummaryParser';
import { GameTranslations, GameTranslationStatus } from 'fbg-web/infra/games/GameTranslationsParser';
import { Box } from '@mui/system';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WarningIcon from '@mui/icons-material/Warning';
import React, { HTMLAttributes } from 'react';
import { useTranslation } from "next-i18next";
import ButtonBase from '@mui/material/ButtonBase';

const PANEL_STYLES = {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    borderRadius: '8px',
    backgroundColor: 'white',
};

interface IGameCardProps {
  gameSummary: GameSummary,
  gameTranslations: GameTranslations,
  isLink?: boolean;
}
export function GameCard({ 
  gameSummary,
  gameTranslations,
  isLink,
}: IGameCardProps) {
  const isFullyTranslated = gameTranslations[gameSummary.lang] === GameTranslationStatus.DONE;
  const { t } = useTranslation('GameCard');
  return (
    <Box
      component="div"
      sx={{
            position: 'relative',
            height: '250px',
            width: '100%',
            backgroundPosition: 'left center',
            backgroundSize: 'cover',
            color: 'black',
            ...(isLink && {
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
            borderRadius: '8px',
            }),
        }}
      style={{ backgroundImage: `url(${gameSummary.id}.png)` }}
      data-testid={`gamecard-${gameSummary.id}`}
    >
      <Heading>
        <Title>{gameSummary.name}</Title>

        {!isFullyTranslated && (
          <Tooltip title={t('missing_translation_warning')} placement="top">
            <a
              href="/docs?path=/story/documentation-game-translation--page"
              aria-label="translation docs"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <Warning />
            </a>
          </Tooltip>
        )}
      </Heading>

      <Description>
        <>{gameSummary.callout}</>
      </Description>

      {isLink && <NavigateButton />}
    </Box>
  );
}

export const Heading = ({ children }: HTMLAttributes<HTMLDivElement>) => { 
  return (
    <Box 
      component="div" 
      sx={{
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        gridGap: '8px',
        top: '12px',
        left: '8px',
      }}>
      {children}
    </Box>
  );
};

export const Title = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Box 
      component="div" 
      sx={{
        ...PANEL_STYLES,
        display: 'flex',
        flexWrap: 'wrap',
        gridGap: '8px',
        top: '12px',
        left: '8px',
        padding: '0px 8px',
        paddingTop: '4px',
      }} {...props}>
      <Typography gutterBottom={false} variant="h4" component="h2" style={{ fontWeight: 300 }}>
        {children}
      </Typography>
    </Box>
  );
};

export const Warning = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <ButtonBase sx={{
      alignItems: 'center',
      height: '100%',
      borderRadius: '8px',
      minHeight: '42px',
    }}>
      <Box 
        component="div" 
        sx={{
            ...PANEL_STYLES,
            flexShrink: '0',
            height: '100%',
            minHeight: '45px',
            minWidth: '45px',
        }}
        {...props} ref={ref}>
        <WarningIcon sx={{
            width: '32px',
            height: '100%',
            padding: '0 4px'
        }} />
      </Box>
    </ButtonBase>
  );
});

export const Description = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => { 
  return (
    <Box 
      component="div" 
      sx={{
        position: 'absolute',
        bottom: '12px',
        left: '8px',
      }} {...props}>
      <Box 
      component="div" 
      sx={{
          ...PANEL_STYLES,
          padding: '0px 8px',
      }}>
        <Typography gutterBottom={false} variant="overline" component="h5">
          {children}
        </Typography>
      </Box>
    </Box>
  );
};

export const NavigateButton = (props: HTMLAttributes<HTMLDivElement>) => { 
  return (
    <Box 
      component="div" 
      sx={{
        position: 'absolute',
        bottom: '12px',
        right: '8px',
        padding: '0',
      }}
      {...props}>
    <Box 
      component="div" 
      sx={{
        ...PANEL_STYLES,
        borderRadius: '32px',
      }}>
        <IconButton aria-label="Next">
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};