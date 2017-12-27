import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink to='/' activeClassName='active' exact>Home</NavLink>
      <NavLink to='/create' activeClassName='active'>Add Expense</NavLink>
      <NavLink to='/help' activeClassName='active'>Help</NavLink>
    </nav>
  </header>
);

export default Header;