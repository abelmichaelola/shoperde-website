import React, { Component } from "react";
import { ModelType } from "../../../Controllers/ModelType";
import { GetCollections } from "../../../data/CollectionData";
import { Collection } from "../../../Models/collection";
import GroupedView from "../../ui/GroupedView/GroupedView";
import styles from "./StoreHome.module.scss";

interface Props {
  match?: any;
  location?: any;
}
interface State {
  collectionData?: Collection;
}

class StoreHome extends Component<Props, State> {
  storeId: string;
  listItems?: any;
  collections?: Collection[];
  constructor(props: Props) {
    super(props);
    this.storeId = this.props.match.params.storeId;
    this.state = {};
  }

componentDidMount(){
    GetCollections((collections: Collection[]) => {
      this.listItems = collections?.map(this.mapper);
      this.setState({
        collectionData: this.listItems,
      });
    });
}

  mapper = (data: Collection, index: number) => {
    return (
      <GroupedView
        key={index}
        data={data}
        dataType={ModelType.Collection}
        match={this.props.match}
        location={this.props.location}
      />
    );
  };
  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ) {
    this.storeId = nextProps.match.params.storeId;
    return true;
  }

  render() {
    return (
      <div className={styles.StoreHome}>
        <div
          className={styles.collectionItem + " " + styles.HeadCollection}
          style={{
            backgroundImage: `url("http://localhost/images/img (5).jpg")`,
          }}
        >
          <div className={styles.textHolder}>
            <div className={styles.main}>Latest Release Summer Smart</div>
            {/* <div className={styles.sub}>Shop the Collection</div> */}
          </div>
        </div>
        {this.listItems}
      </div>
    );
  }
}

export default StoreHome;
