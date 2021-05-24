import styles from './BottomNavigation.module.scss';
import React, { Component } from 'react'

interface Props {
  
}
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
    this.setAccount = this.setAccount.bind(this);
  }

setHome() {
      this.setState((state) => {
        return {
          activeBtn: "Home",
        };
      });
  };
  setExplore() {
      this.setState((state) => {
        return {
          activeBtn: "Explore",
        };
      });
  };
  setSearch() {
      this.setState((state) => {
        return {
          activeBtn: "Search",
        };
      });
  };
  setBoard() {
      this.setState((state) => {
        return {
          activeBtn: "Board",
        };
      });
  };
  setAccount() {
      this.setState((state) => {
        return {
          activeBtn: "Account",
        };
      });
  };

setStyles(activeBtnText: string) {
  switch (activeBtnText) {
    case this.state.activeBtn:
      return setStylesMain(true);
    default:
      return setStylesMain(false);
  }
};

  render() {
    return (
      <div className={styles.BottomNavigation}>
        <div className={styles.BtmNavItem + " " + this.setStyles("Home")} onClick={this.setHome}>
          <i className="fa fal fa-home" />
          <div className={styles.title}>Home</div>
        </div>
        <div className={styles.BtmNavItem + " " + this.setStyles("Explore")} onClick={this.setExplore}>
          <i className="fa fal fa-compass fa-1x fa-fw" />
          <div className={styles.title}>Explore</div>
        </div>
        <div className={styles.BtmNavItem + " " + this.setStyles("Search") + " " + styles.searchItem} onClick={this.setSearch}>
          <i className="fa fal fa-search fa-1x fa-fw" />
          <div className={styles.title}>Search</div>
        </div>
        <div className={styles.BtmNavItem + " " + this.setStyles("Board")} onClick={this.setBoard}>
          <i className="fa fal fa-clipboard fa-1x fa-fw" />
          <div className={styles.title}>Board</div>
        </div>
        <div className={styles.BtmNavItem + " " + this.setStyles("Account")} onClick={this.setAccount}>
          <i className="fa fal fa-user fa-1x fa-fw" />
          <div className={styles.title}>Account</div>
        </div>
      </div>
    );
  }
}

export default BottomNavigation

