import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { GetStore } from "../../data/StoreData";
import Store from "../../Models/Store";
import CollectionPage from "../CollectionPage/CollectionPage";
import ProductPage from "../ProductPage/ProductPage";
import StoreCollections from "./StoreCollections/StoreCollections";
import StoreHome from "./StoreHome/StoreHome";
import styles from "./StorePage.module.scss";
import StoreProducts from "./StoreProducts/StoreProducts";

interface Props {
  match?: any;
  location?: any;
}

interface State {
  activePage?: string;
  store?: Store;
}

class StorePage extends Component<Props, State> {
  storeId: string;
  currentProp?: Props;
  state = {
      activePage: "Home",
    };
  constructor(props: Props) {
    super(props);
    this.currentProp = this.props;
    this.storeId = this.props.match.params.storeId;
    this.setActivePage = this.setActivePage.bind(this);
    
    this.state = {
      activePage: this.handleNav(this.props.location.pathname),
    };

  }
  componentDidMount(){
    new GetStore().get(this.storeId, (store: Store) => {
      // this.listItems = collections?.map(this.mapper);
      this.setState({
        store: store,
      });
    });
  }
  handleNav(pathname?: string) {
    switch (pathname) {
      case "/store/" + this.storeId + "/products":
        return "Products";
      case "/store/" + this.storeId + "/collections":
        return "Collections";
      case "/store/" + this.storeId + "/events":
        return "Events";

      default:{
        return "Home";
      }
    }
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ) {
    if (this.currentProp !== nextProps) {
      this.currentProp = nextProps;
      this.storeId = nextProps.match.params.storeId;
    }
    if(nextState.activePage !== this.state.activePage){
      this.setActivePage(this.handleNav(nextProps.location.pathname));
    }
    return true;
  }

  setActivePage = (id?: string) => {
    this.setState({
      activePage: id,
    });
  };

  render() {
    return (
      <div className={styles.StorePage}>
        <div className={styles.navBar}>
          <Link to={this.currentProp?.match.url + "/home"}>
            <NavBarItem
              id={0}
              title={"Home"}
              isActive={this.state.activePage === "Home" ? true : false}
              handleClick={this.setActivePage}
            />
          </Link>
          <Link to={this.currentProp?.match.url + "/products"}>
            <NavBarItem
              id={1}
              title={"Products"}
              isActive={this.state.activePage === "Products" ? true : false}
              handleClick={this.setActivePage}
            />
          </Link>
          <Link to={this.currentProp?.match.url + "/collections"}>
            <NavBarItem
              id={1}
              title={"Collections"}
              isActive={this.state.activePage === "Collections" ? true : false}
              handleClick={this.setActivePage}
            />
          </Link>
          <NavBarItem
            id={2}
            title={"Events"}
            isActive={this.state.activePage === "Events" ? true : false}
            handleClick={this.setActivePage}
          />
          <NavBarItem
            id={3}
            title={"About"}
            isActive={this.state.activePage === "About" ? true : false}
            handleClick={this.setActivePage}
          />
          <NavBarItem
            id={4}
            title={"Contact Us"}
            isActive={this.state.activePage === "Contact Us" ? true : false}
            handleClick={this.setActivePage}
          />
        </div>
        <div className={styles.mainView}>
          <Switch>
            <Route
              path="/store/:storeId/*/product/:productId"
              component={ProductPage}
            />
            <Route
              path="/store/:storeId/product/:productId"
              component={ProductPage}
            />

            <Route
              path="/store/:storeId/*/collection/:collectionId"
              component={CollectionPage}
            />
            <Route
              path="/store/:storeId/collection/:collectionId"
              component={CollectionPage}
            />

            <Route path="/store/:storeId/products" component={StoreProducts} />
            <Route
              path="/store/:storeId/collections"
              component={StoreCollections}
            />
            <Route path="/store/:storeId/home" component={StoreHome} />
            <Route path="/store/:storeId" component={StoreHome} />
            <Route component={StoreHome} />
          </Switch>
        </div>
      </div>
    );
  }
}

const NavBarItem = (props: any) => {
  return (
    <div
      className={
        props.isActive
          ? styles.navBarItem + " " + styles.active
          : styles.navBarItem
      }
      onClick={() => props.handleClick(props.title)}
    >
      {props.title}
    </div>
  );
};

export default StorePage;
