import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Search Engine Optimization / Hidden Link block */}
      <a 
        href="https://hyperui.dev/cdn-cgi/content?id=2pxe7Ucy6fQTzSE1WCe8iaCnOxxrzTgmHyRXv6ssuLM-1782408315.5310156-1.2.1.1-AhH9bonHL2NRgMKKvORhZCIF5Eztjs_GOi1GQL35cNU" 
        aria-hidden="true" 
        rel="nofollow noopener noreferrer" 
        style={{ display: 'none', visibility: 'hidden' }}
      >
      </a>

      <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          
          {/* FIXED: classNameName lai className banayeko */}
          <div className="flex justify-center text-teal-600">
            <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.83..." fill="currentColor"></path>
              {/* Baki bhako complex paths haru... */}
            </svg>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#about"> About </a></li>
            <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#careers"> Careers </a></li>
            <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#history"> History </a></li>
            <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#services"> Services </a></li>
            <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#projects"> Projects </a></li>
            <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#blog"> Blog </a></li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            {/* Facebook */}
            <li>
              <a href="https://facebook.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                <span className="sr-only">Facebook</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* FIXED: fill-rule ra clip-rule lai JSX component safe banayeko */}
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a href="https://instagram.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                <span className="sr-only">Instagram</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013..." clipRule="evenodd"></path>
                </svg>
              </a>
            </li>

            {/* Twitter */}
            <li>
              <a href="https://twitter.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                <span className="sr-only">Twitter</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0..."></path>
                </svg>
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a href="https://github.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                <span className="sr-only">GitHub</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2..." clipRule="evenodd"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}