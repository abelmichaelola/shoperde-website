import React, { Component } from 'react';
import { GetCollection } from '../../data/CollectionData';
import { Collection } from '../../Models/collection';
import ProductGrid from '../ui/ProductGrid/ProductGrid';
import styles from "./CollectionPage.module.scss";
interface Props {
  match?: any;
  location?: any;
}
interface State {
  productsView:any;
}
class CollectionPage extends Component<Props, State> {
  collection: Collection;
  constructor(props: Props) {
    super(props);
    this.collection = new Collection();
    this.state = {
      productsView: <div></div>,
    };
    // storeId: "2";
  }
  componentDidMount() {

    GetCollection(
      this.props.match.params.collectionId,
      (collection: Collection) => {
        
        this.collection = collection;
        this.setState({
          productsView: (
            <ProductGrid
              products={this.collection?.products}
              match={this.props.match}
              location={this.props.location}
            />
          ),
        });
    console.log(collection);
      }
    );
  }
  render() {
    return (
      <div className={styles.CollectionPage}>
        <div className={styles.topView}>
          <img
            src={
              "http://localhost/images/Almabtrieb_ROW4328676685_1920x1080.jpg"
            }
            alt={"collection cover"}
          />
        </div>
        <div className={styles.titleView}>
          <div className={styles.titleText}>{this.collection.name}</div>
          <div className={styles.subTitleText}>{this.collection.about}</div>
        </div>
        {this.state.productsView}
      </div>
    );
  }
}

export default CollectionPage;