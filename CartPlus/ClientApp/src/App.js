import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Products from './components/Products';
import Cart from './components/Cart';

export default () => (
  <Layout>
    <Route exact path='/' component={Products} />
    <Route path='/cart' component={Cart} />
  </Layout>
);
