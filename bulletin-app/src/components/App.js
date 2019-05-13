import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BulletinHeader from './globalComponents/BulletinHeader';
import Login from './login/Login';
import SurfingBulletin from './surfingBulletin/SurfingBulletin';
// import ReplyArticle from './replyBulletin/ReplyArticle';
import NotFoundPage from './NotFoundPage';

import '../styles/index.css';

const App = () => {
  return (
    <BrowserRouter>
      <BulletinHeader />
      <Switch>
        <Route path="/" component={SurfingBulletin} exact />
        {/* <Route path="/bulletin" component={SurfingBulletin} /> */}
        <Route path="/login" component={Login} exact />
        {/* <Route path="/replyBulletin" component={ReplyArticle} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
