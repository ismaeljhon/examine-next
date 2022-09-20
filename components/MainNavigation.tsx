import Link from 'next/link';
import { NavigationLinks } from '../interfaces/theme/header.interface';
const navigationLinks: NavigationLinks[] = [
  { key: 'login', label: 'Login', href: '/login' },
  { key: 'signup', label: 'Sign up', href: '/signup', className: 'cta' },
];
export default function SearchBar() {
  return (
    <nav className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4 md:mr-5">
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
