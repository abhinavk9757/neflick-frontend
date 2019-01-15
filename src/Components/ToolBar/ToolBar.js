import React from 'react';
import classes from './ToolBar.module.css';

import Logo from './Logo/Logo';
import PrimaryNavigation from './PrimaryNavigation/PrimaryNavigation';
import SecondaryNavigation from './SecondaryNavigation/SecondaryNavigation';

class ToolBar extends React.Component {
  state = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        backgroundColor: 'rgba(0, 0, 0, 1)',
      });
    } else {
      this.setState({
        backgroundColor: 'rgba(0, 0, 0, 0)',
      });
    }
  };
  render() {
    return (
      <header
        className={classes.ToolBar}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <Logo />
        <PrimaryNavigation />
        <SecondaryNavigation />
      </header>
    );
  }
}
export default ToolBar;
