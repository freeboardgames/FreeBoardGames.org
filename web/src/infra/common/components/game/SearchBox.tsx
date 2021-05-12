import React, { HTMLAttributes, useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { useTranslation } from 'infra/i18n';

interface Props {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
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
}));

function SearchBox({ onInputChange, ...props }: Props & HTMLAttributes<HTMLDivElement>) {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const { t } = useTranslation('SearchBox');

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onInputChange(e);
  };

  const clearSearchQuery = () => {
    const event: any = { target: { value: '' } };
    handleSearchOnChange(event);
  };

  let endAdornment: JSX.Element;

  if (query.length > 0) {
    endAdornment = (
      <div className={classes.clearIcon}>
        <InputAdornment position="end">
          <IconButton aria-label="clear search field" onClick={clearSearchQuery} data-testid={'clearSearchField'}>
            <ClearIcon />
          </IconButton>
        </InputAdornment>
      </div>
    );
  }

  return (
    <div {...props} className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon data-testid={'SearchIcon'} />
      </div>

      <OutlinedInput
        fullWidth
        placeholder={t('search')}
        autoComplete="off"
        value={query}
        data-testid={'searchInput'}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={handleSearchOnChange}
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={endAdornment}
      />
    </div>
  );
}

export default SearchBox;
