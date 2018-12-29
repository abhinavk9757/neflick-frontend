import React from 'react';
import classes from './SearchBar.module.css';

const searchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <input
        type="text"
        name="movie_name"
        className={classes.InputText}
        placeholder="Search"
      />
      <input type='button' className={classes.Button}/>
    </div>
  );
};

export default searchBar;
