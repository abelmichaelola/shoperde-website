import React, { Component } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className={styles.App}>
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
