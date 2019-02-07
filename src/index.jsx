import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from './routes/Index';
import Events from './routes/Events';
import EventEdit from './routes/Events/Edit';
import EventDetail from './routes/Events/Detail';

import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:id/edit" component={EventEdit} />
        <Route exact path="/events/:id" component={EventDetail} />
      </Switch>
    </Suspense>
  </Router>
);

render(<App />, document.getElementById('root'));
