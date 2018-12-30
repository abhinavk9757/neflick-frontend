import React from 'react';
import classes from './SearchResult.module.css';

import MovieInformation from '../../MovieInformation/MovieInformation';

// import sampleImg from '../../../Assets/movieSampleImg/aqua.jpg';

const searchResult = () => {
  return (
    <div className={classes.SearchResult}>
      {
        // <img src={sampleImg} alt="movie" className={classes.Image} />}
      }

      <MovieInformation />
    </div>
  );
};

export default searchResult;
