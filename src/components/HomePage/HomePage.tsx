import React, { Component } from "react";
import { ModelType } from "../../Controllers/ModelType";
import { GetCollection, GetCollections } from "../../data/CollectionData";
import { Collection, CollectionGroup } from "../../Models/collection";
import Product from "../../Models/Product";
import { Button, BUTTON_TYPES } from "../ui/Button/Button";
import CollectionGrid from "../ui/CollectionGrid/CollectionGrid";
import ProductGrid from "../ui/ProductGrid/ProductGrid";
import styles from "./HomePage.module.scss";

interface Props {
  match?: any;
  location?: any;
}
interface State {
  productsGrid: any;
  collectionsGrid: any;
  collections: Collection[];
  itemsGroupView: any;
  items: Collection[] | Product[];
}

class HomePage extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      productsGrid: [],
      collectionsGrid: [],
      collections: [],
      itemsGroupView: [],
      items: [],
    };
  }
  getC() {
    GetCollection(2, (collection: Collection) => {
      let ade: any[] = this.state.itemsGroupView.map(
        (value: any, index: number) => {
          return value;
        }
      );

      ade.push(
        <Item
          items={collection}
          key={ade.length}
          type={ModelType.COLLECTION}
          match={this.props.match}
          location={this.props.location}
        />
      );
      this.setState({
        itemsGroupView: ade,
      });
    });

     GetCollections((collections: Collection[]) => {
       let ade: any[] = this.state.itemsGroupView.map(
         (value: any, index: number) => {
           return value;
         }
       );

       ade.push(
         <Item
           items={new CollectionGroup(200, "Welcome Back", collections)}
           key={ade.length}
           type={ModelType.COLLECTION_GROUP}
           match={this.props.match}
           location={this.props.location}
         />
       );

       this.setState({
         itemsGroupView: ade,
       });
     });
  }
  componentDidMount() {
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
this.getC();
   
  }
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return true;
  }

  render() {
    return (
      <div className={styles.HomePage}>
        <div className={styles.top}>
          <img
            src={
              "http://localhost/images/HamelinPool_ROW2019832185_1920x1080.jpg"
            }
            alt={"store Cover"}
          />
        </div>
        {this.state.itemsGroupView}
      </div>
    );
  }
}

interface ItemProps {
  items: any;
  type: ModelType;
  match?: any;
  location?: any;
}
interface ItemState {
  items: CollectionGroup | Collection;
  itemsViews: any;
  type: ModelType;
}
class Item extends Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    switch (this.props.type) {
      case ModelType.COLLECTION:
        this.state = {
          itemsViews: (
            <ProductGrid
              products={this.props.items.products}
              horizontalScroll={true}
              match={this.props.match}
              location={this.props.location}
            />
          ),
          items: this.props.items,
          type: this.props.type,
        };
        break;

      case ModelType.COLLECTION_GROUP:
        this.state = {
          itemsViews: (
            <CollectionGrid
              collections={this.props.items.collections}
              match={this.props.match}
              location={this.props.location}
              horizontalScroll={true}
            />
          ),
          items: this.props.items,
          type: this.props.type,
        };
        break;
      default:
        break;
    }

  }
  componentDidMount() {}
  shouldComponentUpdate(nextProps: ItemProps, nextState: ItemState) {
    return true;
  }
  render() {
    switch (this.props.type) {
      case ModelType.COLLECTION:
        let collection: Collection = this.props.items;
        
        return (
          <div className={styles.Item}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>{collection.name}</div>

              <div className={styles.MoreButton}>view More</div>
            </div>
            {this.state.itemsViews}
            <div className={styles.footer}>
              <Button type={BUTTON_TYPES.TYPE_4} text="Explore" link={"/collection/" + collection.id} />
            </div>
          </div>
        );
      case ModelType.COLLECTION_GROUP:
        let collectionGroup: CollectionGroup = this.props.items;

        return (
          <div className={styles.Item}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>{collectionGroup.title}</div>

              <div className={styles.MoreButton}>view More</div>
            </div>
            {this.state.itemsViews}
            <div className={styles.footer}>
              <Button
                type={BUTTON_TYPES.TYPE_4}
                text="Explore"
                link={"/collections/" + collectionGroup.id}
              />
            </div>
          </div>
        );
      default:
        break;
    }
  }
}

export default HomePage;
