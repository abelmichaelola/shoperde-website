import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetProduct } from "../../data/ProductData";
import Product, { Feature } from "../../Models/Product";
import Store from "../../Models/Store";
import { Button, BUTTON_TYPES } from "../ui/Button/Button";
import FeatureView from "./FeatureView/FeatureView";
import styles from "./ProductPage.module.scss";

interface Props {
  match?: any;
  location?: any;
}

interface State {
  product:Product;
}
class ProductPage extends Component<Props, State> {
  store = new Store();
  productId: string;
  featureViews:any;
  constructor(props: Props) {
    super(props);
    this.state = {product: new Product()}
    this.productId = props.match.params.productId;
    this.store.name = "Blvck Squad";
    this.store.coverImage = "http://localhost/images/img (1).jpg";
    this.store.isHQ = true;
  }
  componentDidMount() {
    GetProduct(this.productId, (product: Product) => {

    this.featureViews = product.features?.map(
      (value: Feature, index: number) => {
        return <FeatureView key={index} feature={value} />;
      }
    );
      this.setState({
        product: product,
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
      <div className={styles.ProductPage}>
        <div className={styles.box + " " + styles.box1}>
          <img src={"http://localhost/images/img (5).jpg"} alt={"product"} />
        </div>
        <div className={styles.box + " " + styles.details}>
          <div className={styles.productPrice}>
            ${this.state.product.price?.price}
            <small>${this.state.product.price?.defaultPrice}</small>
          </div>

          <div className={styles.productName}>{this.state.product.name}</div>

          <div className={styles.productAbout}>{this.state.product.about}</div>
          <hr />

          <Link to={"" + this.store.id}>
            <div className={styles.item}>
              <img
                className={styles.image}
                alt={"store logo"}
                src={
                  this.store.logo
                    ? this.store.logo
                    : "http://localhost/images/storelogo.jpg"
                }
              />
              <div className={styles.body}>
                <div className={styles.name}>{this.store.name}</div>
                {this.store.location ? (
                  <div className={styles.location}>
                    {this.store.location?.address
                      ? this.store.location?.address + ", "
                      : null}
                    {this.store.location?.city
                      ? this.store.location?.city + ", "
                      : null}
                    {this.store.location?.state
                      ? this.store.location?.state + ", "
                      : null}
                    {this.store.location?.country
                      ? this.store.location?.country
                      : null}
                  </div>
                ) : null}
              </div>
              {this.store.isHQ ? <div className={styles.isHQ}>HQ</div> : null}
            </div>
          </Link>

          <hr />

          <div className={styles.buttonsHolder}>
            <Button type={BUTTON_TYPES.TYPE_1} text="Add To Cart" />
            <Button type={BUTTON_TYPES.TYPE_1} text="Add To Board" />
          </div>

          <hr />

          <div className={styles.Group}>
            <div className={styles.Body}>
              <form>
                {this.featureViews}
              </form>
            </div>
          </div>
        </div>

        <div className={styles.boxMain}>
          <hr />
          <div className={styles.Group}>
            <div className={styles.Title}>Ratings</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
