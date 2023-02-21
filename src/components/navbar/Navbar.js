import React from 'react';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <p>Math Magicians</p>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>Home</li>
          <li>Calculator</li>
          <li>Quote</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
