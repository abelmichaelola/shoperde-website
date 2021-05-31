import React, { Component } from "react";
import Product from "../../../Models/Product";
import { CollectionProduct } from "../../../Models/collection";
import styles from "./ProductGrid.module.scss";
import { Link } from "react-router-dom";

interface Props {
  products?: Product[] | CollectionProduct[];
  match?: any;
  location?: any;
}
interface State {}

class ProductGrid extends Component<Props, State> {
  listItems?: any;
  productId?: number;
  constructor(props: Props) {
    super(props);
    this.productId = this.props.match.params.productId;
    this.listItems = props.products?.map((produc: Product, index: number) => {
    var product: Product = new Product();
    Object.assign(product, produc);
    return <Item key={index} product={product} pathname={this.props.location.pathname} match={this.props.match}  />;
  });
  }

  render() {
    return <div className={styles.ProductGrid}>{this.listItems}</div>;
  }
}
const Item = (props: { key: any; product: Product; pathname:any; match:any}) => {
  return (
    <div className={styles.item}>
      <Link to={props.match.url + "/product/" + props.product.id}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url("` + props.product.imageLink + `")` }}
        />
        <div className={styles.body}>
          <div className={styles.title}>
            {"₦" + props.product.price?.price}{" "}
            <small>{"₦" + props.product.price?.defaultPrice}</small>
          </div>
          <div className={styles.text}>{props.product.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductGrid;
