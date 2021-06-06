import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetProducts } from '../../data/ProductData';
import Product from '../../Models/Product';
import ProductGrid from '../ui/ProductGrid/ProductGrid';
import styles from './BoardPage.module.scss';

interface Props {
  products?: Product[];
  match?: any;
  location?: any;
}
interface State {
  products?: Product[];
  productGridView?: any;
}

class BoardPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: [],
  productGridView:''
    };
  }
  componentDidMount() {
    GetProducts((products: Product[]) => {
      this.setState({
        products: products,
        productGridView: (
          <ProductGrid
            products={products}
            match={this.props.match}
            location={this.props.location}
          />
        ),
      });
    });
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ) {    
      return true;
  }
  render() {
    return (
      <div className={styles.BoardPage}>
        <div
          className={styles.collectionItem + " " + styles.HeadCollection}
          style={{
            backgroundImage: `url("http://localhost/images/img (5).jpg")`,
          }}
        >
          <div className={styles.textHolder}>
            <div className={styles.main}>Wedge Hills Board</div>
          </div>
        </div>
        <div className={styles.tags}>
          <Link to={"/"}>
            <div className={styles.tag}>All</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>Blvck Squad</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>Product</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>20th October 2018</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>Product</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>20th October 2018</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>20th October 2018</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>Product</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>20th October 2018</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>Product</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>20th October 2018</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>Product</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>20th October 2018</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>Product</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>20th October 2018</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>Product</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>20th October 2018</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>Product</div>
          </Link>
          <Link to={"/"}>
            <div className={styles.tag}>20th October 2018</div>
          </Link>
        </div>

        <div className={styles.ItemsHolder}>{this.state.productGridView}</div>
      </div>
    );
  }
}

export default BoardPage;
