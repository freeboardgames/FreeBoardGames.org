/* eslint-disable react/prop-types */
import { ButtonBase } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import WarningIcon from '@material-ui/icons/Warning';
import React from 'react';
import styles from './GameCard.module.css';

export function Heading({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Floating {...props} className={styles['Heading__Floating']}>
      {children}
    </Floating>
  );
}

export function Title({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Panel {...props} className={styles['Title__Panel']}>
      <Typography gutterBottom={false} variant="h4" component="h2" style={{ fontWeight: 300 }}>
        {children}
      </Typography>
    </Panel>
  );
}

export const Warning = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <ButtonBase className={styles['Warning__ButtonBase']}>
      <Panel {...props} ref={ref} className={styles['Warning__Panel']}>
        <WarningIcon className={styles['Warning__Icon']} />
      </Panel>
    </ButtonBase>
  );
});

export function Description({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Floating {...props} className={styles['Description__Floating']}>
      <Panel className={styles['Description__Panel']}>
        <Typography gutterBottom={false} variant="overline" component="h5">
          {children}
        </Typography>
      </Panel>
    </Floating>
  );
}

export function NavigateButton(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Floating {...props} className={styles['NavigateButton__Floating']}>
      <Panel className={styles['NavigateButton__Panel']}>
        <IconButton aria-label="Next">
          <NavigateNextIcon />
        </IconButton>
      </Panel>
    </Floating>
  );
}

export const Panel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div {...props} ref={ref} className={`${styles['Panel']} ${className}`} />;
  },
);

export function Floating({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`${styles['Floating']} ${className}`} />;
}
