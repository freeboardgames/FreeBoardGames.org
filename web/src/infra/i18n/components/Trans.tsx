/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core';
import React, { ComponentProps } from 'react';
import { nextI18Next } from '../config';

const { Trans: Translation } = nextI18Next;

const useStyleClasses = makeStyles({
  text: {
    whiteSpace: 'pre-line',
  },
});

export const Trans = (props: ComponentProps<typeof Translation>) => {
  const classes = useStyleClasses();
  return (
    <span className={classes.text}>
      <Translation {...props} />
    </span>
  );
};
