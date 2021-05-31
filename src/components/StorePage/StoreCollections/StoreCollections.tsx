import React, { Component } from "react";
import { GetCollections } from "../../../data/CollectionData";
import { Collection } from "../../../Models/collection";
import CollectionGrid from "../../ui/CollectionGrid/CollectionGrid";
import styles from "./StoreCollections.module.scss";

interface Props {
  match?: any;
  location?: any;
}
interface State {
  collectionsView?: any;
}
export class StoreCollections extends Component<Props, State> {
  collections: Collection[];
  constructor(props: Props) {
    super(props);
    this.collections = [];
    this.state = {
      collectionsView: undefined,
    };
  }

  componentDidMount() {
    if (this.state.collectionsView === undefined) {
      GetCollections((collections: Collection[]) => {
        this.collections = collections;
        this.setState({
          collectionsView: (
          <CollectionGrid
            match={this.props.match}
            location={this.props.location}
            collections={collections}
          />
        ),
        });
      });
    }
  }

  render() {
    return (
      <div className={styles.StoreCollections}>
        <div
          className={styles.collectionItem + " " + styles.HeadCollection}
          style={{
            backgroundImage: `url("http://localhost/images/img (5).jpg")`,
          }}
        >
          <div className={styles.textHolder}>
            <div className={styles.main}>Latest Release Summer Smart</div>
            <div className={styles.sub}>Shop the Collection</div>
          </div>
        </div>
        {this.state.collectionsView}
      </div>
    );
  }
}

export default StoreCollections;
