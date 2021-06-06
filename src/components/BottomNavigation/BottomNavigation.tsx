import styles from "./BottomNavigation.module.scss";
import React, { Component } from "react";
import {
  BsHouseDoorFill,
  BsCompass,
  BsSearch,
  BsClipboard,
  BsFillPersonFill,
} from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {}
interface State {
  activeBtn: string;
}
function setStylesMain(isActive: boolean = false) {
  if (isActive) {
    return styles.active;
  }
}
class BottomNavigation extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeBtn: "none",
    };
    this.setStyles = this.setStyles.bind(this);
    this.setHome = this.setHome.bind(this);
    this.setExplore = this.setExplore.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setBoard = this.setBoard.bind(this);
    this.setCart = this.setCart.bind(this);
    this.setAccount = this.setAccount.bind(this);
  }

  setHome() {
    this.setState((state) => {
      return {
        activeBtn: "Home",
      };
    });
  }
  setExplore() {
    this.setState((state) => {
      return {
        activeBtn: "Explore",
      };
    });
  }
  setSearch() {
    this.setState((state) => {
      return {
        activeBtn: "Search",
      };
    });
  }
  setBoard() {
    this.setState((state) => {
      return {
        activeBtn: "Board",
      };
    });
  }
  setCart() {
    this.setState((state) => {
      return {
        activeBtn: "Cart",
      };
    });
  }
  setAccount() {
    this.setState((state) => {
      return {
        activeBtn: "Account",
      };
    });
  }

  setStyles(activeBtnText: string) {
    switch (activeBtnText) {
      case this.state.activeBtn:
        return setStylesMain(true);
      default:
        return setStylesMain(false);
    }
  }

  render() {
    return (
      <div className={styles.BottomNavigation}>
        <Link
          to={"/home"}
          className={styles.BtmNavItem + " " + this.setStyles("Home")}
          onClick={this.setHome}
        >
          <div>
            <BsHouseDoorFill size={"2rem"} />
            <div className={styles.title}>Home</div>
          </div>
        </Link>

        <Link
          to={"/explore"}
          className={styles.BtmNavItem + " " + this.setStyles("Explore")}
          onClick={this.setExplore}
        >
          <div>
            <BsCompass size={"2rem"} />
            <div className={styles.title}>Explore</div>
          </div>
        </Link>
        <Link
          to={"/search"}
          className={
            styles.BtmNavItem +
            " " +
            this.setStyles("Search") +
            " " +
            styles.searchItem
          }
          onClick={this.setSearch}
        >
          <div>
            <BsSearch size={"2rem"} />
            <div className={styles.title}>Search</div>
          </div>
        </Link>
        <Link
          to={"/boards"}
          className={styles.BtmNavItem + " " + this.setStyles("Board")}
          onClick={this.setBoard}
        >
          <div>
            <BsClipboard size={"2rem"} />
            <div className={styles.title}>Board</div>
          </div>
        </Link>
        <Link
          to={"/cart"}
          className={styles.BtmNavItem + " " + this.setStyles("Cart")}
          onClick={this.setCart}
        >
          <div>
            <FaShoppingCart size={"2rem"} />
            <div className={styles.title}>Carts</div>
          </div>
        </Link>
        <Link
          to={"/account"}
          className={styles.BtmNavItem + " " + this.setStyles("Account")}
          style={{display:"none"}}
          onClick={this.setAccount}
        >
          <div>
            <BsFillPersonFill size={"2rem"} />
            <div className={styles.title}>Account</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default BottomNavigation;
