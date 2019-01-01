import React from 'react';
import classes from './SecondaryNavigation.module.css';

import SearchBar from './SearchBar/SearchBar';

const secondaryNavigation = () => {
    return (
        <div className={classes.SecondaryNavigation}>
            <SearchBar />
        </div>
    );
};

export default secondaryNavigation;