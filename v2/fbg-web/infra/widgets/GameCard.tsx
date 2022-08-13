import { GameSummary } from 'fbg-web/infra/games/GameSummaryParser';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WarningIcon from '@mui/icons-material/Warning';
import React, { HTMLAttributes } from 'react';
import ButtonBase from '@mui/material/ButtonBase';

const PANEL_STYLES = {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    borderRadius: '8px',
    backgroundColor: 'white',
};

interface IGameCardProps {
  gameSummary: GameSummary,
  isLink?: boolean;
}
export function GameCard({ 
  gameSummary,
  isLink,
}: IGameCardProps) {
  const thumbnail = require(`fbg-games/${gameSummary.id}/thumbnail.jpg`).default.src; 
  return (
    <div
      style={{
            backgroundImage: `url(${thumbnail})`,
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
      data-testid={`gamecard-${gameSummary.id}`}
    >
      <Heading>
        <Title>{gameSummary.name}</Title>
      </Heading>

      <Description>
        <>{gameSummary.callout}</>
      </Description>

      {isLink && <NavigateButton />}
    </div>
  );
}

export const Heading = ({ children }: HTMLAttributes<HTMLDivElement>) => { 
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        gridGap: '8px',
        top: '12px',
        left: '8px',
      }}>
      {children}
    </div>
  );
};

export const Title = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={{
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
    </div>
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
      <div
        style={{
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
      </div>
    </ButtonBase>
  );
});

export const Description = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => { 
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '12px',
        left: '8px',
      }} {...props}>
      <div 
      style={{
          ...PANEL_STYLES,
          padding: '0px 8px',
      }}>
        <Typography gutterBottom={false} variant="overline" component="h5">
          {children}
        </Typography>
      </div>
    </div>
  );
};

export const NavigateButton = (props: HTMLAttributes<HTMLDivElement>) => { 
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '12px',
        right: '8px',
        padding: '0',
      }}
      {...props}>
    <div 
      style={{
        ...PANEL_STYLES,
        borderRadius: '32px',
      }}>
        <IconButton aria-label="Next">
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
};