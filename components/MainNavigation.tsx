import Link from 'next/link';
import { NavigationLinks } from '../interfaces/theme/header.interface';
import styles from '../styles/Header.module.scss';
const navigationLinks: NavigationLinks[] = [
  { key: 'login', label: 'Login', href: '/login' },
  { key: 'signup', label: 'Sign up', href: '/signup', className: styles.cta },
];
export default function SearchBar() {
  return (
    <nav className={styles.mainNav}>
      {navigationLinks.map((link) => {
        return (
          <Link key={link.key} href={link.href}>
            <a className={link.className ?? ' text-sm'}>{link.label}</a>
          </Link>
        );
      })}
    </nav>
  );
}
