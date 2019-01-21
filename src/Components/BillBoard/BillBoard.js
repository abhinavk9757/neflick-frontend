import React from 'react';
import classes from './BillBoard.module.css';

import { connect } from 'react-redux';

class BillBoard extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleBotMargin);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleBotMargin);
  }

  handleBotMargin = () => {
    this.props.dispatch({
      type: 'HANDLE_BOT_MARGIN',
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
        style={{ marginBottom: `${this.props.marginBot}px` }}
        onLoad={this.handleBotMargin}
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

const mapStateToProps = state => {
  return {
    marginBot: state.BillBoard.marginBot,
  };
};

export default connect(mapStateToProps)(BillBoard);
