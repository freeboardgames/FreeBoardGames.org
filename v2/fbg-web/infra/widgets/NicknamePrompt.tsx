import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTranslation } from "next-i18next";
import AlertLayer from 'infra/alert/AlertLayer';
import css from './NicknamePrompt.module.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const VALID_NICKNAME_REGEX = /^[A-Za-z0-9]*$/;

interface NicknamePromptProps {
  setNickname: (nickname: string) => void;
}

function isValidNickname(nickname: string) { 
    return nickname?.length > 0 && nickname.match(VALID_NICKNAME_REGEX);
}

function getNicknameError(nickname: string) {
    const { t } = useTranslation('NicknamePrompt');
    let error;
    if (!nickname.match(VALID_NICKNAME_REGEX)) {
        error = t('alphanumerical_characters_only');
    }
    return error;
}

const onChange = (setTempNick: (nickname: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => { 
    setTempNick(event.target.value!);
}

const onClick = (tempNick: string, setNickname: (nickname: string) => void) => () => { 
    if (isValidNickname(tempNick)) {
        setNickname(tempNick);
    }
}

const onKeyPress = (tempNick: string, setNickname: (nickname: string) => void) => (event: React.KeyboardEvent<HTMLElement>) => {  
    if (event.key === 'Enter') {
        setNickname(tempNick);
    }
}

export function NicknamePrompt(props: NicknamePromptProps) {
  const { t } = useTranslation('NicknamePrompt');
  const [ tempNick, setTempNick ] = useState('');
  const isValid = isValidNickname(tempNick);
  const errorText = getNicknameError(tempNick);
  let content = (
        <>
          <div>
            <TextField
              autoFocus={true}
              type="text"
              defaultValue={tempNick}
              onChange={onChange(setTempNick)}
              onKeyPress={onKeyPress(tempNick, props.setNickname)}
              helperText={errorText}
              error={!!errorText}
              inputProps={{ maxLength: 15 }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
            onClick={onClick(tempNick, props.setNickname)}
            disabled={!isValid}
          >
            {t('set_nickname')}
          </Button>
        </>
      );
      return (
        <AlertLayer>
            <Card className={css.NicknameCard}>
              <Typography style={{ paddingTop: '16px' }} variant="h5" component="h3">
                {t('enter_your_nickname')}
              </Typography>
              <CardContent>{content}</CardContent>
            </Card>
        </AlertLayer>
      );
}