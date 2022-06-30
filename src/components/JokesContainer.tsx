import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { makeStyles } from '../makesStyles';
import TextItem from './TextItem';

const useStyles = makeStyles<unknown>({ name: { JokesContaine } })((theme) => ({
  root: {
    //maxWidth: '1200px',
    //margin: '0 auto',
    ...theme.jokesContainer,
  },
  jokeItem: {
    ...theme.jokeItem,
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  moreButton: {
    ...theme.jokeItem,
    background: '#ACFEED',
    border: 'none',
    textAlign: 'left',
  },
}));

export default function JokesContaine() {
  const { jokes, loading } = useTypedSelector((store) => store.jokes);
  const { fetchJokeRequest } = useActions();

  const { classes } = useStyles({});

  return (
    <div className={classes.root}>
      <button className={classes.moreButton} onClick={() => fetchJokeRequest()}>
        MORE!!!
      </button>
      {jokes.map((joke) => (
        <TextItem className={classes.jokeItem} key={joke.id}>
          {joke.value}
        </TextItem>
      ))}
      {loading && <TextItem className={classes.jokeItem}>Loading...</TextItem>}
    </div>
  );
}
