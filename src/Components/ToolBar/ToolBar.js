import React from 'react';
import classes from './ToolBar.module.css';

import Logo from './Logo/Logo';
import PrimaryNavigation from './PrimaryNavigation/PrimaryNavigation'
// import SearchBar from './SearchBar/SearchBar';

class ToolBar extends React.Component {
  render() {
    return (
      <header className={classes.ToolBar}>
        <Logo />
        <PrimaryNavigation />
      </header>
    );
  }
}
export default ToolBar;
