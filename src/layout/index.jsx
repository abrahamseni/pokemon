import React from 'react';
import { Link } from 'react-router-dom';
import { tw } from 'twind';

export default function Layout({ children }) {
  return (
    <div className={tw`flex flex-col justify-start w-full`}>
      <header className={tw`bg-blue-800 px-8 py-4 flex justify-between`}>
        <h1 className={tw`text-2xl text-yellow-400`}>
          <Link to="/">Pokemon App</Link>
        </h1>
        <nav>
          <ul className={tw`flex gap-2 text-white`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={tw`bg-gray-800 text-white min-h-screen`}>
        {children}
      </main>
    </div>
  );
}
