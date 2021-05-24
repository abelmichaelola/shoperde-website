import React, { Component } from 'react';
import styles from './StoreHome.module.scss';

interface Props {
  match?: any;
}
interface State {
}
class StoreHome extends Component<Props, State> {
  storeId: string;
  constructor(props: Props) {
    super(props);
    this.storeId = this.props.match;
    console.log("====================================");
    console.log(this.storeId);
    console.log("====================================dab");
  }
  render() {
    return <div className={styles.StoreHome}>StoreHome Component</div>;
  }
}

export default StoreHome;
