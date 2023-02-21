import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <p>Math Magicians</p>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link className={styles.Link} to="/">Home</Link>
          </li>
          <li>
            <Link className={styles.Link} to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link className={styles.Link} to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
