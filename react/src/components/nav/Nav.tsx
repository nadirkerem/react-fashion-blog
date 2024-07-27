import { NavItem } from '../../data/data';

import './nav.css';

interface NavProps {
  items: NavItem[];
  className?: string;
}

export default function Nav({ items, className }: NavProps) {
  return (
    <nav className={className}>
      <ul aria-label='Main Navigation' role='navigation'>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
