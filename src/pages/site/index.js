import React, { useState, useEffect } from 'react';

import { useScroll, scrollTo } from '../../components/scroll/useScroll'
import { getOffset, initialOffset, findOffset } from '../../components/offset'
import { Header, Sidebar, Footer } from '../../components'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SectionsService } from '../../services';

import Home from './home/index'
import Error from './error/error-500'

import './Site.scss';

const sectionsService = new SectionsService();

export const SiteContext = React.createContext()

export default function Site() {

  const [ isShowingSidebar, setIsShowingSidebar ] = useState(false);
  const [ mainMenu, setMainMenu ] = useState([]);
  const [ activeMenuItem, setActiveMenuItem ] = useState();
  const [ footerLinks, setFooterLinks ] = useState();
  const [ error, setError ] = useState(false);
  const [ offset, setOffset ] = useState(initialOffset);
  const scroll = useScroll();

  useEffect(() => {
    const i = findOffset(offset, scroll);
    if (i) setActiveMenuItem(i.id);

  }, [scroll, offset])

  useEffect(() => {
    (async function() {
      try {
        const menu = await sectionsService.getSections();
        
        setMainMenu(menu);
        setActiveMenuItem(menu[0].id);
        setFooterLinks(await sectionsService.getFooterLinks());
      } catch(error) {
        setError(true);
      }
    })();
  }, [])
  
  const onChangeMenuHandler = (active)=> {
    setIsShowingSidebar(false)
    setActiveMenuItem(active)
    
    if (active <= offset.length) {
      scrollTo(offset.find(item=> item.id === active).min)
    }
  }

  const onUpdateOffset = (i, e)=> {
    setOffset(getOffset(offset, i, e))
  }

  return (
    <>
      {error ? <Error/> :
      <SiteContext.Provider value={{
        offset,
        onUpdateOffset,
        activeMenuItem,
        isShowingSidebar,
        setIsShowingSidebar,
        onChangeMenuHandler
      }}>
        <Header menu={mainMenu} />
        <BrowserRouter>
          <Switch>
            <Route path="/" render={()=> <Home service={sectionsService} />} />
          </Switch>
          <Sidebar menu={mainMenu} />
          <Footer menu={footerLinks} />
        </BrowserRouter>
      </SiteContext.Provider>
      }
    </>
  );
}