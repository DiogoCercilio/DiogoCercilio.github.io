import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFoundSite from './pages/site/error/error-404'
import Blog from './pages/blog'
import Site from './pages/site'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Site} />
          <Route path="/blog" component={Blog} />
          <Route path="/" component={NotFoundSite} />
        </Switch>
      </BrowserRouter>
    </>
  );
}