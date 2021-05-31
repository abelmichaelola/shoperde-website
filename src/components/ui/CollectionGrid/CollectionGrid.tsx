import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collection } from '../../../Models/collection';
import styles from './CollectionGrid.module.scss';

interface Props {
  match?: any;
  location?: any;
  collections?: Collection[];
}
interface State {}
class CollectionGrid extends Component<Props, State> {
  collectionItemViews: any;
  constructor(props: Props) {
    super(props);
    this.collectionItemViews = props.collections?.map(
      (value: Collection, index: number) => {
        return (
          <Item
          collection={value}
            key={index}
            url={this.props.match.url}
          />
        );
      }
    );
  }
  render() {
    return (
      <div className={styles.CollectionGrid}>{this.collectionItemViews}</div>
    );
  }
}
const Item = (props: {collection:Collection, url:any}) => {
  return (
    <div className={styles.item}>
      <Link to={props.url + "/collection/200"}>
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
