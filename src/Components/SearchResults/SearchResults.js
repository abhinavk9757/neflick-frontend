import React from 'react';
import classes from './SearchResults.module.css';
import SearchResult from './SearchResult/SearchResult';

const genResult = () => {
  let output = [];
  for(let i =1; i<=8;i++){
    output.push( <SearchResult />);
  }
  return output;
}

const searchResults = () => {
  return (
    <div className={classes.SearchResults}>
      {genResult()}
    </div>
  );
};

export default searchResults;
