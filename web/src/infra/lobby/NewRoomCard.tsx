import css from './NewRoomCard.module.css';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';

interface NewRoomCardProps {
  newRoomModal: () => void;
}

export const NewRoomCard = ({ newRoomModal }: NewRoomCardProps) => {
  return (
    <div className={css.CardWrapper} data-testid={`newRoom`} onClick={newRoomModal}>
      <div className={css.InnerWrapper}>
        <AddIcon fontSize="large" />
        <Typography component="div" variant="subtitle1">
          New Room
        </Typography>
      </div>
    </div>
  );
};
