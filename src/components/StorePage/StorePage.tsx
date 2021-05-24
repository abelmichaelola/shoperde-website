import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import StoreHome from "./StoreHome/StoreHome";
import styles from "./StorePage.module.scss";

interface Props {
  match?: any;
}

interface State {
  activePage?: number;
}
class StorePage extends Component<Props, State> {
  storeId: string;
  constructor(props: Props) {
    super(props);
    this.storeId = this.props.match.params.storeId;
    this.setActivePage = this.setActivePage.bind(this);
    console.log("====================================");
    console.log(this.storeId);
    console.log("====================================");
    this.state = {
      activePage: 0,
    };
  }
  setActivePage = (id?:number) => {
     this.setState({
         activePage: id,
     });
  }

  render() {
    return (
      <div className={styles.StorePage}>
        <div className={styles.navBar}>
          <Link to={"/store/" + this.storeId}>
            <NavBarItem
              id={0}
              title={"Home"}
              isActive={this.state.activePage === 0 ? true : false}
              handleClick={this.setActivePage}
            />
          </Link>
          <Link to={"/store/home/" + this.storeId}>
            <NavBarItem
              id={1}
              title={"Collections"}
              isActive={this.state.activePage === 1 ? true : false}
              handleClick={this.setActivePage}
            />
          </Link>
          <NavBarItem
            id={2}
            title={"Events"}
            isActive={this.state.activePage === 2 ? true : false}
            handleClick={this.setActivePage}
          />
          <NavBarItem
            id={3}
            title={"About"}
            isActive={this.state.activePage === 3 ? true : false}
            handleClick={this.setActivePage}
          />
        </div>
        <div className={styles.mainView}>
          <Switch>
            <Route path="/store/home/:storeId" component={StoreHome} />
            <Route path="/:storeId" component={StoreHome} />
          </Switch>
        </div>
      </div>
    );  
  }
}

const NavBarItem = (props: any) => {
  return (
          <div 
          className={ props.isActive ? styles.navBarItem + " " + styles.active : styles.navBarItem } 
          onClick={() => props.handleClick(props.id)}>
            {props.title}
            </div>
  );
};

export default StorePage;
