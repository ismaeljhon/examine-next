import Image from 'next/image';
import MainNavigation from './MainNavigation';
import SearchBar from './SearchBar';

export default function Headers() {
  return (
    <header className="flex flex-wrap min-h-0">
      <div className="basis-1/4 p-4 flex">
        <a href="/" className="flex items-center">
          <Image
            className="basis-1/4"
            src="/logo.png"
            alt="Examine Logo"
            width={140}
            height={30}
          />
        </a>
      </div>
      <div className="searchbar basis-2/4 p-4">
        <SearchBar />
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
  );
}
