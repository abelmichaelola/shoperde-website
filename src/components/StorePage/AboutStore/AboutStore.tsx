import React, { Component } from "react";
import {  } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./AboutStore.module.scss";

interface Props {
  text?: string;
  screenSize?: string;
  match?: any;
}
interface State {
  activeBookmark?: number;
}
export class AboutStore extends Component<Props, State> {
  static propTypes = {};
  storeId:string;
  constructor(props: Props) {
    super(props);
    this.storeId = this.props.match ? this.props.match.params.storeId : null;
  }

  render() {
    return (
      <div className={styles.AboutStore}>
        <div className={styles.StoreBGImage}>
          <div
            className={styles.BgImage}
            style={{
              backgroundImage: `url("https://via.placeholder.com/500")`,
            }}
          >
            <div className={styles.Body}></div>
          </div>
        </div>

        <div className={styles.Body}>
          <div className={styles.storeLogoHolder}>
            <div
              className={styles.storeLogo}
              style={{
                backgroundImage: `url("https://via.placeholder.com/500")`,
              }}
            />
          </div>
          <div className={styles.storeName}>Blvck Squad {this.storeId}</div>
          <div className={styles.storeDet}>est. 2019</div>
          <a className={styles.storeWebLink} href={"http://www.blvcksquad.com"}>
            www.blvcksquad.com
          </a>
        </div>
      </div>
    );
  }
}

export default AboutStore;
