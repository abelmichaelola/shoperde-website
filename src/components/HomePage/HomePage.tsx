import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./HomePage.module.scss";
import logo from "./../../assets/logo.png";
import CategoryList from "../LeftView/CategoryList/CategoryList";
import BookmarksList from "../LeftView/BookmarksList/BookmarksList";
import AboutStore from "../StorePage/AboutStore/AboutStore";
import StorePage from "../StorePage/StorePage";

interface Props {
  text?: string;
  screenSize?: string;
}

interface State {
  activeBookmark?: number;
}

class HomePage extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.stateSetter(props);
  }
  stateSetter(props: any) {
    // window.addEventListener("resize", function () {
    //  console.log(props);
    // });
  }
  render() {
    return (
      <div className={styles.HomePage}>
        <div className={styles.HomepageColumn + " " + styles.leftSide}>
          <div className={styles.HolderMain}>
            <div className={styles.TopView}>
              <div className={styles.Body}>
                <img src={logo} className={styles.storeLogo} alt="logo" />
                <div className={styles.storeName}>Abel Michael</div>
              </div>
            </div>

            <BookmarksList />

            <CategoryList />
            <div className={styles.ItemsGroup + " " + styles.ItemsWrapGroup}>
              <div className={styles.TitleHolder}>
                <div className={styles.Title}>Filter</div>

                <div className={styles.MoreButton}>More</div>
              </div>
              <div
                className={
                  styles.ItemsWrapHolder +
                  " " +
                  styles.FilterItemsWrap +
                  " " +
                  styles.Hidden
                }
              >
                <span className={styles.ItemWrap}>male</span>
                <span className={styles.ItemWrap}>20-40 yrs</span>
                <span className={styles.ItemWrap}>size 40</span>
                <span className={styles.ItemWrap}>500gb SSD</span>
                <span className={styles.ItemWrap}>5g</span>
                <span className={styles.ItemWrap}>Brand: Nike</span>
                <span className={styles.ItemWrap}>color: red</span>
                <span className={styles.ItemWrap}>Shoes</span>
                <span className={styles.ItemWrap}>Nike</span>
                <span className={styles.ItemWrap}>Apple</span>
                <span className={styles.ItemWrap}>Crocs</span>
                <span className={styles.ItemWrap}>Denim</span>
                <span className={styles.ItemWrap}>Jean</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.HomepageColumn + " " + styles.center}>
          <Switch>
            <Route path="/store/:storeId" component={StorePage} />
          </Switch>
        </div>

        <div className={styles.HomepageColumn + " " + styles.rightSide}>
          <Switch>
              <Route path="/store/:storeId" component={AboutStore} exact />
          </Switch>
        </div>
      </div>
    );
  }
}

export default HomePage;
