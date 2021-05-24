import React, { Component } from 'react';
import styles from './CollectionGrid.module.scss';

class CollectionGrid extends Component {
  render() {
    return (
      <div className={styles.CollectionGrid}>
        <Item
          image={"http://localhost/images/img (1).jpg"}
          title={"Sandals"}
          text={"slide into summer"}
        />
        <Item
          image={"http://localhost/images/img (2).jpg"}
          title={"Short Stuffs"}
          text={"Hot Weather Heroes"}
        />
        <Item
          image={"http://localhost/images/img (3).jpg"}
          title={"Sunglasses"}
          text={"you have been framed"}
        />
        <Item
          image={"http://localhost/images/img (4).jpg"}
          title={"The Logo Edits"}
          text={"Back ot back icon"}
        />
        <Item
          image={"http://localhost/images/img (5).jpg"}
          title={"Co-ords"}
          text={"Double the steeze"}
        />
        <Item
          image={"http://localhost/images/img (6).jpg"}
          title={"Adidas"}
          text={"Stripe Beasts"}
        />
        <Item
          image={"http://localhost/images/img (4).jpg"}
          title={"Sandals"}
          text={"slide into summer"}
        />
        <Item
          image={"http://localhost/images/img (2).jpg"}
          title={"Sandals"}
          text={"slide into summer"}
        />
        <Item
          image={"http://localhost/images/img (4).jpg"}
          title={"Sandals"}
          text={"slide into summer"}
        />
        <Item
          image={"http://localhost/images/img (1).jpg"}
          title={"Sandals"}
          text={"slide into summer"}
        />
        <Item
          image={"http://localhost/images/img (6).jpg"}
          title={"Sandals"}
          text={"slide into summer"}
        />
        <Item
          image={"http://localhost/images/img (3).jpg"}
          title={"Sandals"}
          text={"slide into summer"}
        />
      </div>
    );
  }
}
const Item = (props: any) => {
  return (
          <div className={styles.item}>
          <div className={styles.image} style={{ backgroundImage: `url("` + props.image + `")`, }}/>
          <div className={styles.body}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.text}>{props.text}</div>
          </div>
          </div>
  );
};


export default CollectionGrid;
