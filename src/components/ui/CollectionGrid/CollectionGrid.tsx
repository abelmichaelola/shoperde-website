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
            key={index}
            image={"http://localhost/images/img (1).jpg"}
            title={"Sandals"}
            text={"slide into summer"}
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

const Item = (props: any) => {
  return (
    <div className={styles.item}>
      <Link to={props.url + "/collection/200"}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url("` + props.image + `")` }}
        />
        <div className={styles.body}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.text}>{props.text}</div>
        </div>
      </Link>
    </div>
  );
};

export default CollectionGrid;
