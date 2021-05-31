import React, { Component } from "react";
import { ModelType } from "../../../Controllers/ModelType";
import { Collection } from "../../../Models/collection";
import { Button, BUTTON_TYPES } from "../Button/Button";
import ProductGrid from "../ProductGrid/ProductGrid";
import styles from "./GroupedView.module.scss";

interface Props {
  data?: Collection;
  dataType?: ModelType;
  match?: any;
  location?: any;
}
interface State {}

class GroupedView extends Component<Props, State> {
  storeId?: number;
  collection?: Collection;
  constructor(props: Props) {
    super(props);
    this.collection = this.props.data;
  }

  render() {
    if (this.props.dataType === ModelType.Collection) {
      return (
        <div className={styles.GroupedView}>
          <div className={styles.Header}>
            <div className={styles.Title}>{this.collection?.name}</div>
          </div>
          <ProductGrid
            products={this.collection?.products}
            match={this.props.match}
            location={this.props.location}
          />
          <div className={styles.moreBtn}>
            <Button type={BUTTON_TYPES.TYPE_4} text="View More" />
          </div>
        </div>
      );
    } else if (this.props.dataType === ModelType.Product) {
      return (
        <div className={styles.GroupedView}>
          <div className={styles.Header}>
            <div className={styles.Title}>{this.collection?.name}</div>
          </div>
          <ProductGrid products={this.collection?.products} />
          <div className={styles.moreBtn}>
            <Button type={BUTTON_TYPES.TYPE_4} text="View More" />
          </div>
        </div>
      );
    } else if (this.props.dataType === ModelType.Store) {
      return (
        <div className={styles.GroupedView}>
          <div className={styles.Header}>
            <div className={styles.Title}>{this.collection?.name}</div>
          </div>
          <ProductGrid products={this.collection?.products} />
          <div className={styles.moreBtn}>
            <Button type={BUTTON_TYPES.TYPE_4} text="View More" />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.GroupedView}>
          <div className={styles.Header}>
            <div className={styles.Title}>{this.collection?.name}</div>
          </div>
          <ProductGrid products={this.collection?.products} />
          <div className={styles.moreBtn}>
            <Button type={BUTTON_TYPES.TYPE_4} text="View More" />
          </div>
        </div>
      );
    }
  }
}

export default GroupedView;
