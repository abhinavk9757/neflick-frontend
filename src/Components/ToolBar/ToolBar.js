import React from 'react';
import classes from './ToolBar.module.css';

import Logo from './Logo/Logo';
import PrimaryNavigation from './PrimaryNavigation/PrimaryNavigation';
import SecondaryNavigation from './SecondaryNavigation/SecondaryNavigation';

import { connect } from 'react-redux';

class ToolBar extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (window.scrollY > 0) {
      this.props.dispatch({
        type: 'OPAQUE',
      });
    } else {
      this.props.dispatch({
        type: 'TRANSPARENT',
      });
    }
  };
  render() {
    return (
      <header
        className={classes.ToolBar}
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <Logo />
        <PrimaryNavigation />
        <SecondaryNavigation />
      </header>
    );
  }
}

const mapStateToProps = state => {
  return { backgroundColor: state.ToolBar.backgroundColor };
};
export default connect(mapStateToProps)(ToolBar);
