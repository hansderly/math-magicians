import React from 'react';
import { Screen } from '../../components';

import styles from './Home.module.css';
import Side from '../../assets/images/side.png';

function Home() {
  return (
    <Screen>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div>
            <h1>Ever wanted to do your math quicker?</h1>
            <p>Stop searching for that today, your are at the right place! 😊</p>
            <button type="button">Let`s go!</button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.imgSide} src={Side} alt="Person reading" />
        </div>
      </div>
    </Screen>
  );
}

export default Home;
