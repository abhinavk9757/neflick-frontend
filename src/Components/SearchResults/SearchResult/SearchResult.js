import React from 'react';
import classes from './SearchResult.module.css';

// import sampleImg from '../../../Assets/movieSampleImg/aqua.jpg';

const searchResult = () => {
  return (
    <div className={classes.SearchResult}>
      {
        // <img src={sampleImg} alt="movie" className={classes.Image} />}
      }
     
        <h2>Aquaman</h2>
        <p>Most awesome movie of 2018</p>
        <p>Critics said awesome too!!</p>
      
    </div>
  );
};

export default searchResult;
