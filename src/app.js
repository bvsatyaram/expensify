import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
