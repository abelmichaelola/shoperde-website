import React, { Component } from 'react';
import styles from './SideFeed.module.scss';

class SideFeed extends Component {
  render() {
    return (
      <div className={styles.SideFeed}>
        <div className={styles.section2}>
          <div className={styles.top}>
            <div className={styles.topItem}>
              <img
                src={"http://localhost/images/north-face.png"}
                alt={"View"}
              />
            </div>
            <div className={styles.topItem}>
              <img src={"http://localhost/images/logo (1).jpg"} alt={"View"} />
            </div>
            <div className={styles.topItem}>
              <img src={"http://localhost/images/logo (2).jpg"} alt={"View"} />
            </div>
            <div className={styles.topItem}>
              <img src={"http://localhost/images/logo (3).jpg"} alt={"View"} />
            </div>
            <div className={styles.topItem}>
              <img src={"http://localhost/images/storelogo.jpg"} alt={"View"} />
            </div>
            <div className={styles.topItem}>
              <img src={"http://localhost/images/storelogo.png"} alt={"View"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideFeed;