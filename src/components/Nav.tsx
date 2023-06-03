import { useState } from 'react';
import { FaCode } from 'react-icons/fa';

function Nav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto relative">
        <a
          rel="noopener noreferrer"
          href="#1"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <FaCode className="w-8 h-8 dark:text-violet-400" />
        </a>
        <ul
          className={` space-x-3 flex ${
            isMobileOpen
              ? 'max-md:absolute bg-gray-800 max-md:top-20 max-md:-right-4 max-md:flex-col max-md:items-center max-md:w-40 gap-3 max-md:pt-3 max-md:pb-7'
              : 'max-md:hidden'
          }`}
        >
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#js"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              JS
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#php"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              PHP
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#cpp"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              CPP
            </a>
          </li>
        </ul>
        <button
          className="flex justify-end p-4 md:hidden"
          type="button"
          onClick={() => {
            setIsMobileOpen((p) => !p);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Nav;
