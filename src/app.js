import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
  <div>404!</div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
