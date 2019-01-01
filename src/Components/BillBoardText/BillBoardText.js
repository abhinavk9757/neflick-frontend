import React from 'react';
import classes from './BillBoardText.module.css';

import playButton from '../../Assets/music-player-play.svg';
import plusButton from '../../Assets/plus.svg';

const billBoardText = props => {
  return (
    <div className={classes.BillBoardText} style={{ bottom: `${props.bot}px` }}>
      <div name="ImageDiv" className={classes.ImageDiv}>
        <img
          src="https://occ-0-1007-1009.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABd59PXA4QSCdtL_60q31SLbbxtZ3JWOgaYaQLeLEutjvfAoDFcDSngkQZ08gH-MYEwHJmztKp-b-L70t90q09mP3EGRo629InqzwJIXOs6wEyzemyT5rr156VQqM322YTeDv1GRuPVJMw9q6PZfpKubJoKOs0ybKZDwuumdpLVQfT7od_yxmhie2t-WTOONVdDsU9iFzQ3n53fNsI5jP5x970mZZvuTKnDYuPA25uypcu34TKcSqiIY8aTLOUjggeMcH.png"
          alt="MovieInfoImage"
        />
      </div>
      <div name="Buttons" className={classes.Buttons}>
        <span className={classes.PlayButton}>
          <img src={playButton} alt="Play" />
          <p>Play</p>
        </span>
        <span>
          <img src={plusButton} alt="AddToList" />
          <p>My List</p>
        </span>
      </div>
      <div name="Information" className={classes.Information} >
      The iconic Taylor Swift reputation Stadium Tour was a record-breaking and award-winning phenomenon. Are you ready for it?
      </div>
    </div>
  );
};

export default billBoardText;
