import React, { Fragment, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavbarCom } from './components';
import { getProducts } from './actions';

import { Home, SearchResult } from './pages';
import { useDispatch } from 'react-redux';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <NavbarCom />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={SearchResult} />
      </Switch>
    </div>
  );
};

export default App;
