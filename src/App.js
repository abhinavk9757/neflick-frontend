import React, { Component } from 'react';

// import ToolBar from './Components/ToolBar/ToolBar';
// import SearchResults from './Components/SearchResults/SearchResults';
// import BillBoard from './Components/BillBoard/BillBoard';
// import BillBoardText from './Components/BillBoardText/BillBoardText'
import Login from './Components/Login/Login';

// import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Login />
      </React.Fragment>
    );
  }
}

export default App;

// Component Code
//   <div className={classes.backgroundBlack} />
//   <ToolBar />

//   <BillBoard />
//   <BillBoardText />

//   <div className={classes.content}>
//     <SearchResults />
//     <SearchResults />
//     <SearchResults />
//   </div>
