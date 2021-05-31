import React, { Component } from 'react';
import { GetProducts } from '../../../data/ProductData';
import Product from '../../../Models/Product';
import ProductGrid from '../../ui/ProductGrid/ProductGrid';
import styles from "./StoreProducts.module.scss";

interface Props {
  products?: Product[];
  match?: any;
  location?: any;
}
interface State {
  products?: Product[];
}
class StoreProducts extends Component<Props, State> {
  productGrid:any;
  state = {};
  componentDidMount() {
     GetProducts((products:Product[]) => {
      this.setState({
        products: products
      });
    });
  }
  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ) {
    if (nextState.products !== undefined) {
       this.productGrid = this.hand(nextState);
    return true;
    } else { return false;}
  }
  hand(state:State):any{
return <ProductGrid products={state.products} match={this.props.match} location={this.props.location} />;
  }

  render() {
    return (
      <div className={styles.StoreProducts}>
        {this.productGrid}
      </div>
    );
  }
}

export default StoreProducts;
