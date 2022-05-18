import React from 'react';
import './Header.scss';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="container -header">
        <Nav />
      </div>
    </header>
  );
}
