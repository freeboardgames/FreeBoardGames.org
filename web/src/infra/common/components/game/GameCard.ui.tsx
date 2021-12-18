/* eslint-disable react/prop-types */
import { ButtonBase, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import WarningIcon from '@material-ui/icons/Warning';
import React, { HTMLAttributes } from 'react';

const useHeadingStyles = makeStyles({
  Floating: {
    '&&': {
      display: 'flex',
      flexWrap: 'wrap',
      gridGap: '8px',
      top: '12px',
      left: '8px',
    },
  },
});
export const Heading = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const styles = useHeadingStyles();
  return (
    <Floating {...props} className={styles.Floating}>
      {children}
    </Floating>
  );
};

const useTitleStyles = makeStyles({
  Panel: {
    '&&': {
      display: 'flex',
      flexWrap: 'wrap',
      gridGap: '8px',
      top: '12px',
      left: '8px',
      padding: '0px 8px',
      paddingTop: '4px',
    },
  },
});
export const Title = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const styles = useTitleStyles();
  return (
    <Panel {...props} className={styles.Panel}>
      <Typography gutterBottom={false} variant="h4" component="h2" style={{ fontWeight: 300 }}>
        {children}
      </Typography>
    </Panel>
  );
};

const useWarningStyles = makeStyles((theme) => ({
  Icon: {
    '&&': {
      width: '32px',
      height: '100%',
      padding: '0 4px',
      color: theme.palette.warning.main,
    },
  },
  Panel: {
    '&&': {
      flexShrink: '0',
      height: '100%',
      minHeight: '45px',
      minWidth: '45px',
    },
  },
  ButtonBase: {
    '&&': {
      alignItems: 'center',
      height: '100%',
      borderRadius: '8px',
      minHeight: '42px',
    },
  },
}));
export const Warning = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const styles = useWarningStyles();
  return (
    <ButtonBase className={styles.ButtonBase}>
      <Panel {...props} ref={ref} className={styles.Panel}>
        <WarningIcon className={styles.Icon} />
      </Panel>
    </ButtonBase>
  );
});

const useDescriptionStyles = makeStyles({
  Floating: {
    '&&': {
      bottom: '12px',
      left: '8px',
    },
  },
  Panel: {
    '&&': {
      padding: '0px 8px',
    },
  },
});
export const Description = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const styles = useDescriptionStyles();
  return (
    <Floating {...props} className={styles.Floating}>
      <Panel className={styles.Panel}>
        <Typography gutterBottom={false} variant="overline" component="h5">
          {children}
        </Typography>
      </Panel>
    </Floating>
  );
};

const useNavigateButtonStyles = makeStyles({
  Floating: {
    '&&': {
      bottom: '12px',
      right: '8px',
      padding: '0',
    },
  },
  Panel: {
    '&&': {
      borderRadius: '32px',
    },
  },
});
export const NavigateButton = (props: HTMLAttributes<HTMLDivElement>) => {
  const styles = useNavigateButtonStyles();
  return (
    <Floating {...props} className={styles.Floating}>
      <Panel className={styles.Panel}>
        <IconButton aria-label="Next">
          <NavigateNextIcon />
        </IconButton>
      </Panel>
    </Floating>
  );
};

const usePanelStyles = makeStyles({
  Panel: {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    borderRadius: '8px',
    backgroundColor: 'white',
  },
});
export const Panel = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const styles = usePanelStyles();
    return <div {...props} ref={ref} className={`${styles.Panel} ${className}`} />;
  },
);

const useFloatingStyles = makeStyles({
  Floating: {
    position: 'absolute',
  },
});
export const Floating = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const styles = useFloatingStyles();
  return <div {...props} className={`${styles.Floating} ${className}`} />;
};
