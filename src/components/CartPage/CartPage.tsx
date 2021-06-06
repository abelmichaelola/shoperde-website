import React, { Component } from 'react';
import styles from "./CartPage.module.scss";

class CartPage extends Component {
  render() {
    return (
      <div className={styles.CartPage}>
        <div
          className={styles.topView}
          style={{
            backgroundImage: `url("http://localhost/images/img (2).jpg")`,
          }}
        >
          <div className={styles.Title}>Cart 1</div>
        </div>
        CartPage Component comp
      </div>
    );
  }
}

export default CartPage;
