import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collection } from "../../../Models/collection";
import styles from "./CollectionGrid.module.scss";

interface Props {
  match?: any;
  location?: any;
  collections?: Collection[];
  horizontalScroll?: boolean;
}
interface State {}
class CollectionGrid extends Component<Props, State> {
  collectionItemViews: any;
  constructor(props: Props) {
    super(props);
    this.collectionItemViews = props.collections?.map(
      (value: Collection, index: number) => {
        return <Item collection={value} key={index} match={this.props.match} />;
      }
    );
  }
  render() {
    return (
      <div
        className={
          this.props.horizontalScroll
            ? styles.CollectionGrid + " " + styles.scroll
            : styles.CollectionGrid
        }
      >
        {this.collectionItemViews}
      </div>
    );
  }
}
const Item = (props: { collection: Collection; match: any }) => {
  return (
    <div className={styles.item}>
      <Link
        to={
          props.match.params.storeId
            ? props.match.url + "/collection/" + props.collection.id
            : "/collection/" + props.collection.id
        }
      >
        <img
          className={styles.image}
          src={props.collection.coverImage}
          alt={"collection cover"}
        />
        <div className={styles.body}>
          <div className={styles.title}>{props.collection.name}</div>
          <div className={styles.text}>{props.collection.about}</div>
        </div>
      </Link>
    </div>
  );
};

export default CollectionGrid;
