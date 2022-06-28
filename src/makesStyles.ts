import { createMakeStyles } from 'tss-react';

const theme = {
  jokesContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  jokeItem: {
    padding: '12px 16px',
    fontFamily: 'Roboto',
    fontSize: '14px',
    lineHeight: '1.25rem',
    width: '240px',
    margin: '16px',
    borderRadius: '8px',
  },
};

function useTheme() {
  return theme;
}

export const { makeStyles, useStyles } = createMakeStyles({ useTheme });
