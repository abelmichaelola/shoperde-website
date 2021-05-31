import React, { Component } from "react";
import styles from "./Header.module.scss";
import logo from "./../../assets/logo512.png";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import { BsSearch } from "react-icons/bs";
interface Props {}
interface State {}

class Header extends Component<Props, State> {
  state = {};
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.HeaderItems + " " + styles.leftSide}>
          <div className={styles.appIconHolder}>
            <img src={logo} className={styles.appLogo} alt="logo" />
            {/* <img src="{Logo}" alt="Logo" /> */}
            <h1>Shoperde</h1>
          </div>

          <div className={styles.searchHolder}>
            <input className={styles.searchInputField} placeholder={"SEARCH"} />
            <div className={styles.searchBtn}>
              <BsSearch size={"1.3rem"} className={styles.searchIcon} />
            </div>
          </div>
        </div>
        <div className={styles.HeaderItems + " " + styles.center}>
          <BottomNavigation />
        </div>
        <div className={styles.HeaderItems}>right</div>
      </div>
    );
  }
}

export default Header;
