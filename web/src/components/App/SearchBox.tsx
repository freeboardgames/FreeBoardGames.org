import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Theme } from '@material-ui/core/styles';
import { InputAdornment, IconButton, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

interface Props {
  handleSearchOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  classes?: any;
}

interface State {
  query: string;
}

const styles = (theme: Theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    margin: '0px 16px',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  clearIcon: {
    padding: '0px',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: '0%',
    bottom: '0%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: theme.palette.common.black,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
});

class SearchBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { query: '' };
  }

  render() {
    const classes = this.props.classes;
    const query = this.state.query;
    let endAdornment: JSX.Element;

    if (query.length > 0) {
      endAdornment = (
        <div className={classes.clearIcon}>
          <InputAdornment position="end">
            <IconButton
              aria-label="clear search field"
              onClick={this._clearSearchQuery}
              data-testid={'clearSearchField'}
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        </div>
      );
    }
    return (
      <div className={classes.search} style={this.props.style}>
        <div className={classes.searchIcon}>
          <SearchIcon data-testid={'SearchIcon'} />
        </div>
        <OutlinedInput
          fullWidth
          placeholder="Search…"
          autoComplete="off"
          value={query}
          data-testid={'searchInput'}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={this._handleSearchOnChange}
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={endAdornment}
        />
      </div>
    );
  }

  _handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    this.setState({ query });
    this.props.handleSearchOnChange(e);
  };

  _clearSearchQuery = () => {
    const event: any = { target: { value: '' } };
    this._handleSearchOnChange(event);
  };
}

export default withStyles(styles as any)(SearchBox);
