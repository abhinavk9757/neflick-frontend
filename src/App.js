import React, { Component } from 'react';

import ToolBar from './Components/ToolBar/ToolBar';
import SearchResults from './Components/SearchResults/SearchResults';
import BillBoard from './Components/BillBoard/BillBoard';

import classes from './App.module.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className={classes.backgroundBlack} />
        <ToolBar />

        <BillBoard />
        <div className={classes.content}>
          <SearchResults />
          <SearchResults />
          <SearchResults />
          <SearchResults />
          <SearchResults />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
