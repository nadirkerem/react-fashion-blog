import { siteData } from '../../data/data';

import './header.css';

import Nav from '../nav/Nav';

export default function Header() {
  return (
    <header>
      <h1 className='site-title'>{siteData.siteTitle}</h1>
      <h2 className='site-subtitle'>{siteData.siteSubtitle}</h2>
      <Nav items={siteData.headerNavItems} className='header-nav-list' />
    </header>
  );
}
