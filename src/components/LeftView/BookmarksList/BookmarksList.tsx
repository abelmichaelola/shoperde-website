import React from 'react';
import { Link } from "react-router-dom";
import styles from './BookmarksList.module.scss';
import PropTypes from 'prop-types';
  
class BookmarksList extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };
  state: any;
  setActive = (id?: number) => {
    this.setState({
      active: id,
    });
  };
  constructor(props: any) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  render() {
    return (
      <div className={styles.BookmarksList}>
        <div className={styles.TitleHolder}>
          <div className={styles.Title}>Bookmarks</div>

          <div className={styles.MoreButton}>More</div>
        </div>
        <div className={styles.ItemsHolder}>
          <Item
            id={1}
            isActive={this.state.active === 1 ? true : false}
            title={"Apparel"}
            handleClick={this.setActive}
          />
          <Item
            id={2}
            isActive={this.state.active === 2 ? true : false}
            title={"Acer"}
            handleClick={this.setActive}
          />
          <Item
            id={3}
            isActive={this.state.active === 3 ? true : false}
            title={"Computer"}
            handleClick={this.setActive}
          />
          <Item
            id={4}
            isActive={this.state.active === 4 ? true : false}
            title={"Phones"}
            handleClick={this.setActive}
          />
          <Item
            id={5}
            isActive={this.state.active === 5 ? true : false}
            title={"Tractors"}
            handleClick={this.setActive}
          />
          <Item
            id={6}
            isActive={this.state.active === 6 ? true : false}
            title={"Cars"}
            handleClick={this.setActive}
          />
          <Item
            id={7}
            isActive={this.state.active === 7 ? true : false}
            title={"Shoes"}
            handleClick={this.setActive}
          />
          <Item
            id={8}
            isActive={this.state.active === 8 ? true : false}
            title={"Nike"}
            handleClick={this.setActive}
          />
          <Item
            id={9}
            isActive={this.state.active === 9 ? true : false}
            title={"Apple"}
            handleClick={this.setActive}
          />
          <Item
            id={10}
            isActive={this.state.active === 10 ? true : false}
            title={"Crocs"}
            handleClick={this.setActive}
          />
          <Item
            id={11}
            isActive={this.state.active === 11 ? true : false}
            title={"Denim"}
            handleClick={this.setActive}
          />
          <Item
            id={12}
            isActive={this.state.active === 12 ? true : false}
            title={"Jean"}
            handleClick={this.setActive}
          />
          <Item
            id={13}
            isActive={this.state.active === 13 ? true : false}
            title={"Stores"}
            handleClick={this.setActive}
          />
        </div>
      </div>
    );
  }
}

const Item = (props: any) => {
  return (
    <Link to={"/store/" + props.id}>
      <div
        className={
          props.isActive ? styles.Item + " " + styles.active : styles.Item
        }
        onClick={() => props.handleClick(props.id)}
      >
        {props.title}
      </div>
    </Link>
  );
};

export default BookmarksList;