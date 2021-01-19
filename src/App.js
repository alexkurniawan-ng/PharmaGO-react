import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeTemp from './pages/HomeTemp';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route path='/' component={HomeTemp} exact />
        <Route path='/products' component={ProductPage} />
        <Route path='/product-detail' component={ProductDetail} />
      </Switch>
    </div>
  )
}

export default App;