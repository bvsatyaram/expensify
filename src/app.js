import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const DashboardPage = () => (
  <div>Dashboard Page</div>
);

const AddExpensePage = () => (
  <div>Add Expense Page</div>
);

const EditExpensePage = () => (
  <div>Edit Expense Page</div>
);

const HelpPage = () => (
  <div>Help Page</div>
);

const NotFoundPage = () => (
  <div>404! - <Link to='/'>Go home</Link></div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink to='/' activeClassName='active' exact>Home</NavLink>
      <NavLink to='/create' activeClassName='active'>Add Expense</NavLink>
      <NavLink to='/edit' activeClassName='active'>Edit Expense</NavLink>
      <NavLink to='/help' activeClassName='active'>Help</NavLink>
    </nav>
  </header>
);

const routes = (
  <BrowserRouter>
    <main>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
