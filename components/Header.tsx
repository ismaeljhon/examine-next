import Image from 'next/image';
import Link from 'next/link';
import MainNavigation from './MainNavigation';
import HeaderSearchBar from './HeaderSearchBar';

export default function Header() {
  return (
    <>
      {/* Header for Large Screen */}
      <header className="main-header">
        <div className="basis-1/4 p-4 flex">
          <Link href="/" className="flex items-center">
            <a>
              <Image
                className="basis-1/4"
                src="/logo.png"
                alt="Examine Logo"
                width={140}
                height={30}
              />
            </a>
          </Link>
        </div>
        <div className="searchbar basis-2/4 p-4">
          <HeaderSearchBar />
        </div>
        <div className="basis-1/4 flex items-center p-4">
          <MainNavigation />
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </a>
        </div>
      </header>
      {/* Header for smaller screens */}
      <header className="mobile-header flex items-center">
        <div className="basis-3/4 flex items-center">
          <a href="#" className="ml-3 p-2 bg-purple-400 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </a>
          <Link href="/">
            <a className="flex ml-2">
              <Image
                src="/logo-mobile.png"
                alt="Examine Logo"
                width={72}
                height={16}
              />
            </a>
          </Link>
        </div>
        <div className="basis-1/3 justify-items-end">
          <HeaderSearchBar />
        </div>
      </header>
    </>
  );
}
