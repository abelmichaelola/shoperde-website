import React, { Component } from "react";
import CollectionGrid from "../../ui/CollectionGrid/CollectionGrid";
import styles from "./StoreCollections.module.scss";

export class StoreCollections extends Component {
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

        <CollectionGrid />
      </div>
    );
  }
}

export default StoreCollections;
