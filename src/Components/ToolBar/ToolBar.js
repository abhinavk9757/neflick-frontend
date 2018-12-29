import React from 'react';
import classes from './ToolBar.module.css';

import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

class ToolBar extends React.Component {
  render() {
    return (
      <header className={classes.ToolBar}>
        <Logo />
        <SearchBar />
        <div>User Information</div>
      </header>
    );
  }
}
export default ToolBar;
