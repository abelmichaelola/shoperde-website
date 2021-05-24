import { Component } from "react";
import styles from "./CategoryList.module.scss";

class CategoryList extends Component {
state:any;
  constructor(props: any) {
    super(props);
    this.setActiveCategory = this.setActiveCategory.bind(this);
    this.state = {
      activeBookmark: 0,
    };
  }
  setActiveCategory = (id?:number) => {
     this.setState({
         activeBookmark: id,
     });
  };

  render() {
    return (
      <div className={styles.ItemsGroup + " " + styles.CategoryLists}>
        <div className={styles.TitleHolder}>
          <div className={styles.Title}>Apparel</div>

          <div className={styles.MoreButton}>More</div>
        </div>

        <Item
          id={1}
          isActive={this.state.activeBookmark === 1 ? true : false}
          title={"Shoes"}
          handleClick={this.setActiveCategory}
        />
        <Item
          id={2}
          isActive={this.state.activeBookmark === 2 ? true : false}
          title={"Shirts"}
          handleClick={(id: number) => this.setActiveCategory(id)}
        />
        <Item
          id={3}
          isActive={this.state.activeBookmark === 3 ? true : false}
          title={"Boots"}
          handleClick={this.setActiveCategory}
        />
        <Item
          id={4}
          isActive={this.state.activeBookmark === 4 ? true : false}
          title={"Hats"}
          handleClick={this.setActiveCategory}
        />
        <Item
          id={5}
          isActive={this.state.activeBookmark === 5 ? true : false}
          title={"Glasses"}
          handleClick={this.setActiveCategory}
        />
        <Item
          id={6}
          isActive={this.state.activeBookmark === 6 ? true : false}
          title={"Watches"}
          handleClick={this.setActiveCategory}
        />
        <Item
          id={7}
          isActive={this.state.activeBookmark === 7 ? true : false}
          title={"Accessories"}
          handleClick={this.setActiveCategory}
        />
      </div>
    );
  }
}

const Item = (props: any) => {
  
  return (
    <div
      className={props.isActive ? styles.Item + " " + styles.active : styles.Item}
      onClick={() => props.handleClick(props.id)}
    >
      {props.title}
    </div>
  );
};

export default CategoryList;
