import React from 'react';
import classes from './BillBoard.module.css';

class BillBoard extends React.Component {
  state = {
    marginBot: 0,
  };

  handleMargin = () => {
    const currentHeight = document.getElementById('billboard').clientHeight;
    this.setState({
      marginBot: currentHeight * -0.18,
    });
  };

  render() {
    const img = {
      src:
        'https://occ-0-2590-2186.1.nflxso.net/art/2eba5/9fcb06877b57592c8b6d9585d97c60907462eba5.jpg',
      alt: 'BillBoard',
    };
    return (
      <div
        className={classes.BillBoard}
        id="billboard"
        style={{ marginBottom: `${this.state.marginBot}px` }}
        onLoad={this.handleMargin}
      >
        <img
          src={img.src}
          alt={img.alt}
          className={classes.BillBoardBackground}
        />
      </div>
    );
  }
}

export default BillBoard;
