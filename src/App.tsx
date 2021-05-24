import React, { Component } from "react";
import styles from "./App.module.scss";
import { BUTTON_TYPES, Button } from "./components/ui/Button/Button";
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
        <Button type={BUTTON_TYPES.TYPE_1} text="View More" visibility="gone" />
      </div>
    );
  }
}

export default App;
