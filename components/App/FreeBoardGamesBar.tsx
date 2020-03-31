import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FbgLogoWhite from './media/fbg_logo_white_48.png';
import FbgLogoBlack from './media/fbg_logo_black.png';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useRouter } from 'next/router';

const drawerWidth = 240;

interface FBGBarProps {
  FEATURE_FLAG_readyForDesktopView?: boolean;
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'white',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    link: {
      textDecoration: 'none',
      display: 'inherit',
      color: 'inherit',
    },
  }),
);

const FreeBoardGamesBar = (props: FBGBarProps) => {
  const isProdChannel = process.env.NODE_ENV === 'production';
  let versionInfo: JSX.Element;
  const router = useRouter();

  const isCurPage = (path: string) => {
    return router.asPath === path;
  };

  if (!isProdChannel) {
    versionInfo = (
      <Typography data-test-id="gitrev" variant="h6" style={{ color: 'white', marginLeft: 'auto' }}>
        {process.env.VERSION}
      </Typography>
    );
  }

  const classes = useStyles();

  const ListItemLink = React.forwardRef((props: any, ref: any) => {
    return (
      <Link href={props.href} passHref>
        <li {...props}>
          <a ref={ref} className={classes.link}>
            {props.children}
          </a>
        </li>
      </Link>
    );
  });

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const maxWidth = props.FEATURE_FLAG_readyForDesktopView ? '1200px' : '500px';

  return (
    <React.Fragment>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <a style={{ textDecoration: 'none', display: 'inherit' }}>
                <img style={{ marginRight: '8px', height: '48px' }} src={FbgLogoWhite} alt="FbG" />
                {!open && (
                  <Typography
                    component="h1"
                    variant="h6"
                    style={{ marginTop: '10px', marginLeft: '5px', color: 'white' }}
                  >
                    FreeBoardGames.org
                  </Typography>
                )}
              </a>
            </Link>
            {versionInfo}
          </Toolbar>
        </AppBar>
        <ClickAwayListener mouseEvent={'onMouseDown'} onClickAway={handleDrawerClose}>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <img style={{ marginLeft: '9px', height: '48px' }} src={FbgLogoBlack} alt="FbG" />
              <IconButton style={{ marginLeft: '55%', marginRight: 'auto' }} onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem
                button
                component={ListItemLink as any}
                href="/"
                selected={isCurPage('/')}
                disabled={isCurPage('/')}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                button
                component={ListItemLink as any}
                href="/about"
                selected={isCurPage('/about')}
                disabled={isCurPage('/about')}
              >
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </Drawer>
        </ClickAwayListener>
      </div>
      <div
        style={{
          maxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default FreeBoardGamesBar;
