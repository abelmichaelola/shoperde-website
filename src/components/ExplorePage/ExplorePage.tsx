import React, { Component } from 'react';
import { Button, BUTTON_TYPES } from '../ui/Button/Button';
import styles from "./ExplorePage.module.scss";

class ExplorePage extends Component {
  render() {
    return (
      <div className={styles.ExplorePage}>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    );
  }
}

const PostItem = (props:any) => {
  return (
    <div className={styles.post}>
      <div className={styles.TopView}>
        <img
          className={styles.image}
          src={"http://localhost/images/logo (2).jpg"}
          alt={"im"}
        />
        <div className={styles.hold}>
          <div className={styles.text}>
            Blvck Squad <small>[HQ]</small>
          </div>
          <div className={styles.subText}>Lagos, Nigeria</div>
        </div>
      </div>

      <div className={styles.mediaHolder}>
        <img
          className={styles.image}
          src={"http://localhost/images/Garajonay_ROW1443896236_1920x1080.jpg"}
          alt={"im"}
        />

        <img
          className={styles.image2}
          src={"http://localhost/images/logo (2).jpg"}
          alt={"im"}
        />
        <div className={styles.textMain}>
          aehar thrt hart ha rth erg aet hgaert gaerg aerg arth arth rt
          gaergaerethrj hryst7jyrjhrhrthsryhstyjstjr6 har6yhar6
          yhyrthertga45ya45taherth 5r5therjgfj aeygfuae rgfuyaergifu aheig aerig
          erghaireghiuer giuae rgiuh aerguih t hshth bfgtstgb s sth st rg sg stg
          dsgs erghareghiaureguireahg iuaer hgiuaer gia herughaerg uaer guia
          ehrugh aeurh kjaer hgaer guaheruigh aeurhguaer uv
        </div>

        <div className={styles.buttonsHolder}>
          <Button type={BUTTON_TYPES.TYPE_4} text="Add To Cart" />
          <Button type={BUTTON_TYPES.TYPE_4} text="Add To Board" />
          <Button type={BUTTON_TYPES.TYPE_4} text="Bookmark" />
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
