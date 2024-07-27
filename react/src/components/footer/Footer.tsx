import { siteData } from '../../data/data';
import Nav from '../nav/Nav';

import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <Nav items={siteData.footerNavItems} className='footer-nav-list' />
      <p className='copyright'>{siteData.copyright}</p>
    </footer>
  );
};

export default Footer;
