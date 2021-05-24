import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import StoreCollections from "./StoreCollections/StoreCollections";
import StoreHome from "./StoreHome/StoreHome";
import styles from "./StorePage.module.scss";

interface Props {
  match?: any;
  location?: any;
}

interface State {
  activePage?: string;
}

class StorePage extends Component<Props, State> {
  storeId: string;
  currentProp?: Props;
  constructor(props: Props) {
    super(props);
    this.currentProp = this.props;
    this.storeId = this.props.match.params.storeId;
    this.setActivePage = this.setActivePage.bind(this);
    this.state = {
      activePage: "Home",
    };
    this.state = {
      activePage: this.hand(this.props.location.pathname),
    };
  }
  hand(pathname?: string) {
    switch (pathname) {
      case "/store/" + this.storeId + "/collections":
        return "Collections";

      default:
        return "Home";
    }
  }
  componentWillReceiveProps(nextProps: Props) {
    if (this.currentProp !== nextProps) {
      this.currentProp = nextProps;
      this.storeId = nextProps.match.params.storeId;
      this.setActivePage(this.hand(nextProps.location.pathname));
    }
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
              path="/store/:storeId/collections"
              component={StoreCollections}
            />
            <Route path="/store/:storeId/home" component={StoreHome} />
            <Route component={StoreCollections} />
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
