import React, { useState, useEffect } from 'react';
import { useScroll } from '../scroll/useScroll'

import { Header, About, Portfolio, Skills, Sidebar, Footer } from '../'
import { SectionsService } from '../../services';

const sectionsService = new SectionsService();

export default function App() {

  const [ isShowingSidebar, setIsShowingSidebar ] = useState(false);
  const [ mainMenu, setMainMenu ] = useState([]);
  const [ activeMenuItem, setActiveMenuItem ] = useState();
  const [ footerLinks, setFooterLinks ] = useState();
  const [ aboutInfo, setAboutInfo ] = useState();
  const [ activeCategory, setActiveCategory ] = useState('frontend');
  const [ offset, setOffset ] = useState([
    { id: 1, min: null, max: null },
    { id: 2, min: null, max: null },
    { id: 3, min: null, max: null }
  ]);

  const scroll = useScroll();

  const updateOffset = (index, e)=> {
    if(!e) return;

    offset[index].min = e.offsetTop + 20;

    if (offset[index - 1]) offset[index - 1].max = e.offsetTop;
    if (!offset[index + 1]) offset[index].max = e.offsetTop * 2;

    setOffset(offset);
  }

  useEffect(() => {
    const i = offset.find(i=> scroll.y >= i.min && scroll.y <= i.max);
    if (i) setActiveMenuItem(i.id);

  }, [scroll])

  useEffect(() => {
    (async function() {
      const menu = await sectionsService.getSections();

      setMainMenu(menu);
      setActiveMenuItem(menu[0].id);
      setFooterLinks(await sectionsService.getFooterLinks());
      setAboutInfo(await sectionsService.getAboutInfo());
    })();

  }, [])

  const onChangeMenuHandler = (active)=> {
    setIsShowingSidebar(false)
    setActiveMenuItem(active)

    const activeItem = offset.find(item=> item.id === active);
    const top = activeItem.min;
    
    goTo(top);
  }

  const goTo = (top)=> {
    window.scroll({ top, behavior: 'smooth' });
  }

  const onClickSkill = (e, alias)=> {
    e.preventDefault();
    setActiveCategory(alias);
    goTo(offset[2].min);
  }

  return (
    <>
      <Header
        onChangeMenuTrigger={isMenuOpen=> setIsShowingSidebar(isMenuOpen) }
        itemActive={mainMenu.find(item=> item.id === activeMenuItem)}
        isMenuOpen={isShowingSidebar}
      />
      <About 
        aboutInfo={aboutInfo}
        onGetScroll={e=> updateOffset(0, e)} 
        onClickSkill={(e,alias)=> onClickSkill(e, alias)} 
        loading={!aboutInfo}
      />
      <Portfolio onGetScroll={e=> updateOffset(1, e)} />
      <Skills 
        onGetScroll={e=> updateOffset(2, e)} 
        activeCategory={activeCategory}
        onChangeCategory={(e, active)=> setActiveCategory(active)}
      />
      <Sidebar 
          menu={mainMenu} 
          showSidebar={isShowingSidebar}
          itemActive={activeMenuItem}
          onChangeMenu={active=> onChangeMenuHandler(active)}
          loading={!mainMenu.length}
      />      
      <Footer 
        footerLinks={footerLinks} 
        loading={!footerLinks} 
      />
    </>
  );
}