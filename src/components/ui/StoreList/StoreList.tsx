import React, { Component } from "react";
import { Link } from "react-router-dom";
import Store from "../../../Models/Store";
import styles from "./StoreList.module.scss";
interface Props {
  stores?: Store[];
}

interface State {
  stores?: Store[];
}
class StoreList extends Component<Props, State> {
  storesViews?: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      stores: props.stores,
    };
    if (this.state.stores !== undefined) {
      this.storesViews = this.state.stores.map((value: Store, index: number) => {        
        return <StoreItem value={value} key={index} index={index} />;
      });
    }
    
    
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ) {
    return true;
  }
  render() {
    return <div className={styles.StoreList}>{this.storesViews}</div>;
  }
}
export var StoreItem = (props:any) => {
  var value:Store = props.value;
  var index:number = props.index;
        var l = value.id;
  return (
          <Link to={"" + l} key={index}>
            <div className={styles.item}>
              <img
                className={styles.image}
                alt={"store logo"}
                src={
                  value.logo
                    ? value.logo
                    : "http://localhost/images/storelogo.jpg"
                }
              />
              <div className={styles.body}>
                <div className={styles.name}>{value.name}</div>
                {value.location ? (
                  <div className={styles.location}>
                    {value.location?.address
                      ? value.location?.address + ", "
                      : null}
                    {value.location?.city ? value.location?.city + ", " : null}
                    {value.location?.state
                      ? value.location?.state + ", "
                      : null}
                    {value.location?.country ? value.location?.country : null}
                  </div>
                ) : null}
              </div>
              {value.isHQ ? <div className={styles.isHQ}>HQ</div> : null}
            </div>
          </Link>
  )
}

export default StoreList;
