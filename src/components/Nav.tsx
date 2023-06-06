import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

function Nav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <nav
      className="p-4 dark:bg-gray-800 dark:text-gray-100 sticky top-0 z-20 shadow-md"
      id="nav"
    >
      <div className="container flex justify-between h-16 mx-auto relative">
        <a
          rel="noopener noreferrer"
          href="#top"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <FaCode className="w-8 h-8 dark:text-violet-400" />
        </a>
        <ul
          className={` space-x-3 flex ${
            isMobileOpen
              ? 'max-md:absolute bg-gray-800 max-md:top-20 max-md:-left-4 max-md:-right-4 max-md:flex-col max-md:items-center gap-4 max-md:pt-3 max-md:pb-8 '
              : 'max-md:hidden'
          }`}
        >
          <li className="flex">
            <a
              href="#about"
              className="flex items-center px-4 -mb-1 transition border-b-2 dark:border-transparent dark:hover:text-violet-400 dark:hover:border-violet-400"
            >
              Porównanie
            </a>
          </li>
          <li className="flex">
            <a
              href="#code"
              className="flex items-center px-4 -mb-1 border-b-2 transition dark:border-transparent dark:hover:text-violet-400 dark:hover:border-violet-400"
            >
              Podstawowe konstrukcje
            </a>
          </li>
          <li className="flex">
            <a
              href="#example"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent transition  dark:hover:text-violet-400 dark:hover:border-violet-400"
            >
              Przykład - kalkulator
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
          {isMobileOpen ? (
            <IoMdClose className="w-8 h-8" />
          ) : (
            <IoMdMenu className="w-8 h-8" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
