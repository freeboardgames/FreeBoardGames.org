import Typography from '@mui/material/Typography';
import { GameDetails, GamePlayerCount } from 'infra/games/GameDetailsParser';
import { GameMode } from "fbg-games/gamesShared/definitions/mode";
import { useTranslation } from "next-i18next";
import AndroidIcon from '@mui/icons-material/Android';
import GroupIcon from '@mui/icons-material/Group';
import WifiIcon from '@mui/icons-material/Wifi';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import css from './GameModePicker.module.css';
import { GameSummary } from 'infra/games/GameSummaryParser';

export interface GameModePickerProps {
  details: GameDetails;
  summary: GameSummary;
}

export function GameModePicker(props: GameModePickerProps) {
   const { t } = useTranslation('GameModePicker');
   const cards = props.details.modes.map((mode) => (
        <GameModePickerCard   
          mode={mode}
          key={mode}
          {...props}
        />
   )); 
    return (
      <div style={{ marginTop: '8px', maxWidth: '500px' }}>
        <Typography variant="h6" component="h2" style={{ marginBottom: '16px' }}>
          {t('choose_game_mode')}
        </Typography>
        <div>{cards}</div>
      </div>
    );
}

interface GameModePickerCardProps {
  mode: GameMode;
  details: GameDetails;
  summary: GameSummary;
}

function GameModePickerCard(props: GameModePickerCardProps) {
   const { t } = useTranslation('GameModePickerCard');
   let title;
   let description;
   let icon;
   switch (props.mode) {
      case GameMode.AI:
        title = t('computer_ai_title');
        description = t('computer_ai_description');
        icon = <AndroidIcon />;
        break;
      case GameMode.LocalFriend:
        title = t('local_friend_title');
        description = t('local_friend_description');
        icon = <GroupIcon />;
        break;
      case GameMode.OnlineFriend:
        title = t('online_friend_title');
        description = t('online_friend_description');
        icon = <WifiIcon />;
        break;
    }
    return (
      <>
        <Card key={title} style={{ margin: '0 0 16px 0' }}>
          <CardHeader avatar={<Avatar aria-label={title}>{icon}</Avatar>} title={title} />
          <CardContent>
            <Typography component="p">{description}</Typography>
          </CardContent>
          <CardActions>
            <CustomizationActions {...props} />
            <PlayButton {...props} />
          </CardActions>
        </Card>
      </>
    );
}

function CustomizationActions(props: GameModePickerCardProps) {
  let numPlayers = null;
  if (props.mode == GameMode.OnlineFriend) {
    if (props.details.playerCount.min < props.details.playerCount.max) {
      numPlayers = <OccupancySelect
        playerCount={props.details.playerCount}
        className={css.OccupancySelect}
      />;
    }
  }
  // TODO(vdfdev): Add CustomizationBar back #launch-blocker
  return (
    <>
      {numPlayers}
    </>
  );
}

interface OccupancySelectProps {
  playerCount: GamePlayerCount;
  className: string;
}

function OccupancySelect(props: OccupancySelectProps) {
  const { t } = useTranslation('OccupancySelect');
  const options = [];
 for (let i = props.playerCount.min; i <= props.playerCount.max; i++) {
    options.push(
      <MenuItem value={i} key={i}>
        {t('players', { quantity: i })}
      </MenuItem>,
    );
  }
  // TODO(vdfdev): Fix select #launch-blocker
  return (
    <div className={props.className}>
      <PersonIcon style={{ position: 'relative', top: '8px', padding: '0 8px' }} />
      <Select value={0}>
        {options}
      </Select>
    </div>
    );
}

function PlayButton(props: GameModePickerCardProps) {
  const { t } = useTranslation('GameModePickerCard');
  let link: string;
  switch (props.mode) {
    case GameMode.AI:
      link = '/ai';
      break;
    case GameMode.LocalFriend:
      link = '/local';
      break;
    case GameMode.OnlineFriend:
      link = '/online';
      break;
  }
  return (
  <Link href={link}>
    <Button
    data-testid={`playbutton-${props.summary.id}-${props.mode}`}
    component={'a'}
    variant="contained"
    color="primary"
    style={{ marginLeft: 'auto' }}
    >
    {t('play')}
    </Button>
  </Link>
  );
}
