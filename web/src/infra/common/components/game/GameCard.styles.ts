import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  Main: {
    position: 'relative',
    height: '250px',
    width: '100%',
    backgroundPosition: 'left center',
    backgroundSize: 'cover',
    color: 'black',
  },

  'Main--link': {
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    borderRadius: '8px',
  },

  Heading__Floating: {
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '8px',
    top: '12px',
    left: '8px',
  },

  Title__Panel: {
    padding: '0px 8px',
    paddingTop: '4px',
  },

  Warning__Icon: {
    width: '32px',
    height: '100%',
    padding: '0 4px',
    color: theme.palette.warning.main,
  },

  'Warning__Panel,Warning__ButtonBase': {
    height: '100%',
    borderRadius: '8px',
  },

  Description__Floating: {
    bottom: '12px',
    left: '8px',
  },

  Description__Panel: {
    padding: '0px 8px',
  },

  NavigateButton__Floating: {
    bottom: '12px',
    right: '8px',
    padding: '0',
  },

  NavigateButton__Panel: {
    borderRadius: '32px',
  },

  Panel: {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    borderRadius: '8px',
    backgroundColor: 'white',
  },

  Floating: {
    position: 'absolute',
  },
});
