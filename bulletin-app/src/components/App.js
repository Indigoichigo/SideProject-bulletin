import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login/Login';
import SurfingBulletin from './surfingBulletin/SurfingBulletin';
import ReplyBulletin from './replyBulletin/ReplyBulletin';
import NotFoundPage from './NotFoundPage';

import '../styles/index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/SurfingBulletin" component={SurfingBulletin} exact />
        <Route path="/ReplyBulletin" component={ReplyBulletin} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
