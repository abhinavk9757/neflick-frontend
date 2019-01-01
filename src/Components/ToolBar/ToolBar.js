import React from 'react';
import classes from './ToolBar.module.css';

import Logo from './Logo/Logo';
import PrimaryNavigation from './PrimaryNavigation/PrimaryNavigation';
import SecondaryNavigation from './SecondaryNavigation/SecondaryNavigation';

class ToolBar extends React.Component {
  render() {
    return (
      <header className={classes.ToolBar}>
        <Logo />
        <PrimaryNavigation />
        <SecondaryNavigation />
      </header>
    );
  }
}
export default ToolBar;
