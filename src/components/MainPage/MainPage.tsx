import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import styles from "./MainPage.module.scss";
import logo from "./../../assets/logo.png";
import CategoryList from "../LeftView/CategoryList/CategoryList";
import BookmarksList from "../LeftView/BookmarksList/BookmarksList";
import AboutStore from "../StorePage/AboutStore/AboutStore";
import StorePage from "../StorePage/StorePage";
import HomePage from "../HomePage/HomePage";
import ProductPage from "../ProductPage/ProductPage";
import CollectionPage from "../CollectionPage/CollectionPage";
import SideFeed from "../SideFeed/SideFeed";
import ExplorePage from "../ExplorePage/ExplorePage";
import SearchPage from "../SearchPage/SearchPage";
import CollectionsPage from "../CollectionsPage/CollectionsPage";
import BoardsPage from "../BoardsPage/BoardsPage";
import AccountPage from "../AccountPage/AccountPage";
import BoardPage from "../BoardPage/BoardPage";
import CartPage from "../CartPage/CartPage";
import CollectionPageSideView from "../CollectionPage/CollectionPageSideView/CollectionPageSideView";
import BoardPageSideView from "../BoardPage/BoardPageSideView/BoardPageSideView";
import CartSidePage from "../CartPage/CartSidePage/CartSidePage";
import { FaUser } from "react-icons/fa";

interface Props {
  text?: string;
  screenSize?: string;
}

interface State {
  activeBookmark?: number;
}

class MainPage extends Component<Props, State> {
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
      <div className={styles.MainPage}>
        <div className={styles.MainPageColumn + " " + styles.leftSide}>
          <div className={styles.HolderMain}>
            <Link to={"/account"}>
              <div className={styles.TopView}>
                <div className={styles.Body}>
                  <img src={logo} className={styles.storeLogo} alt="logo" />
                  <span>
                    <FaUser size={20} />
                  </span>
                  <div className={styles.storeName}>Abel Michael</div>
                </div>
              </div>
            </Link>
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

        <div className={styles.MainPageColumn + " " + styles.center}>
          <Switch>
            <Route path="/store/:storeId" component={StorePage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route
              path="/collection/:collectionId"
              component={CollectionPage}
            />
            <Route path="/board/:boardId" component={BoardPage} />

            <Route path="/collections" component={CollectionsPage} />
            <Route path="/carts" component={CartSidePage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/boards" component={BoardsPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/explore" component={ExplorePage} />
            <Route path="/home" component={HomePage} />
            <Route component={HomePage} />
          </Switch>
        </div>

        <div className={styles.MainPageColumn + " " + styles.rightSide}>
          <Switch>
            <Route path="/store/:storeId" component={AboutStore} />
            <Route
              path="/store/:storeId/product/:productId"
              component={AboutStore}
            />
            <Route
              path="/store/:storeId/collection/:collectionId"
              component={AboutStore}
            />
            <Route path="/cart" component={CartSidePage} />
            <Route
              path="/collection/:collectionId"
              component={CollectionPageSideView}
            />
            <Route path="/board/:boardId" component={BoardPageSideView} />
            <Route path="/home" component={SideFeed} />
            {/* <Route path="/product/:productId" component={AboutStore} /> */}
            <Route component={SideFeed} />
          </Switch>
          {/* <AboutStore /> */}
        </div>
      </div>
    );
  }
}

export default MainPage;
