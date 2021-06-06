import React, { Component } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = {};
  
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
