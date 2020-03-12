import React, { useState } from 'react'
import { Header, Sidebar, Footer } from 'components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home'
import NotFoundBlog from './error/error-404'

import './Blog.scss'

export default function Blog() {

    const [ isShowingSidebar, setIsShowingSidebar ] = useState(false);
    const [ mainMenu, setMainMenu ] = useState([]);
    const [ activeMenuItem, setActiveMenuItem ] = useState();
    const [ footerLinks, setFooterLinks ] = useState();  

    return (
        <>
        <Header
          onChangeMenuTrigger={isMenuOpen=> setIsShowingSidebar(isMenuOpen) }
          itemActive={mainMenu.find(item=> item.id === activeMenuItem)}
          isMenuOpen={isShowingSidebar}
        />
        <BrowserRouter>
          <Switch>
            <Route path="/blog" exact render={()=> <Home /> }/>
            <Route path="/" component={NotFoundBlog} />
          </Switch>
        </BrowserRouter>
      </>
    )
}
