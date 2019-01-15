import React from 'react';
import classes from './PrimaryNavigation.module.css';

class PrimaryNavigation extends React.Component {
  state = {
    display: 'none',
  };
  mobileLinksHandler = () => {
    if (this.state.display === 'none') {
      this.setState({ display: 'flex' });
    } else {
      this.setState({ display: 'none' });
    }
  };
  render() {
    return (
      <div className={classes.PrimaryNavigation}>
        <div className={classes.DesktopOnly}>
          <a href="/">Home</a>
          <a href="/">Series</a>
          <a href="/">Film</a>
          <a href="/">Recently Added</a>
          <a href="/">My List</a>
        </div>
        <div className={classes.MobileOnly} onClick={this.mobileLinksHandler}>
          <p>Browse</p>
        </div>
        <div
          name="MobileLinks"
          className={classes.MobileLinks}
          style={{ display: this.state.display }}
        >
          <div>Home</div>
          <div>Series</div>
          <div>Film</div>
          <div>Recently Added</div>
          <div>My List</div>
        </div>
      </div>
    );
  }
}

export default PrimaryNavigation;
