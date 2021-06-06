import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./CartSidePage.module.scss";

class CartSidePage extends Component {
  render() {
    return (
      <div className={styles.CartSidePage}>
        <div
          className={styles.topView}
          style={{
            backgroundImage: `url("http://localhost/images/img (5).jpg")`,
          }}
        >
          <div className={styles.Title}>Carts</div>
        </div>

        <div className={styles.ListHolder}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    );
  }
}

const CartItem = (props: any) => {
  return (
    <Link to={"/cart/2"}>
      <div className={styles.item}>
        <div className={styles.cartTitle}>Cart 1</div>

        <div className={styles.ItemsHolder}>
          <BoardTagItem title={"Tractors"} />
          <BoardTagItem title={"private"} />
          <BoardTagItem title={"200 Items"} />
          <BoardTagItem title={"Products"} />
          <BoardTagItem title={"Tractors"} />
          <BoardTagItem title={"private"} />
          <BoardTagItem title={"200 Items"} />
          <BoardTagItem title={"Products"} />
        </div>
        <hr />
      </div>
    </Link>
  );
};
const BoardTagItem = (props: any) => {
  return <div className={styles.tag}>{props.title}</div>;
};
export default CartSidePage;
