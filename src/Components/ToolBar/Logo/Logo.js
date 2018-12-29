import React from 'react';
import classes from './Logo.module.css';
import logoImg from '../../../Assets/netflix.svg';

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImg} alt="Logo" />
    </div>
  );
};

export default logo;
