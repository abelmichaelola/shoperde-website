import { Component } from "react";
import { Link } from "react-router-dom";
import Store from "../../../Models/Store";
import styles from "./BoardPageSideView.module.scss";

class BoardPageSideView extends Component {
    store: Store = new Store();
  constructor(props:any) {
    super(props);
    this.store.id = 2;
    this.store.isHQ = false;
    this.store.name = "Blvck Squad";
    this.store.logo =
      "http://localhost/images/KallurLighthouse_ROW2079063025_1920x1080.jpg";
  }
  render() {
    return (
      <div className={styles.BoardPageSideView}>
        <div className={styles.StoreBGImage}>
          <div
            className={styles.BgImage}
            style={{
              backgroundImage: this.state
                ? `url("http://localhost/images/storeBg.jpg")`
                : `url("http://localhost/images/storeBg.jpg")`,
            }}
          >
            <div className={styles.Body}></div>
          </div>
        </div>

        <div className={styles.Body}>
          <div className={styles.storeName}>Wedge Hills Board</div>
          <div className={styles.storeDet}>created: 20th June 2020</div>
          <div className={styles.storeNote}>
            Note of shit Note of shit Note of shit Note of shit Note of shit
            Note of shit Note of shit Note of shit Note of shit Note of shit{" "}
            Note of shit Note of shit Note of shit Note of shit Note of shit
            Note of shit Note of shit Note of shit Note of shit Note of shit{" "}
            Note of shit Note of shit Note of shit Note of shit Note of shit
            Note of shit Note of shit Note of shit Note of shit Note of shit{" "}
            Note of shit Note of shit Note of shit Note of shit{" "}
          </div>

          <div className={styles.cView + " " + styles.tagsArea}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>Tags</div>
              <div className={styles.MoreButton}>more</div>
            </div>
            <div className={styles.ItemsHolder}>
              <Item id={1} title={"april"} />
              <Item id={1} title={"april"} />
              <Item id={1} title={"april"} />
              <Item id={1} title={"april"} />
              <Item id={1} title={"april"} />
              <Item id={1} title={"april"} />
              <Item id={1} title={"april"} />
              <Item id={1} title={"april"} />
              <Item id={1} title={"april"} />
            </div>
          </div>

          <div className={styles.cView + " " + styles.linksView}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>Links</div>
              <div className={styles.MoreButton}>more</div>
            </div>
            {/* <div className={styles.ItemsHolder}>{this.linkViews}</div> */}
          </div>

          <div className={styles.cView + " " + styles.locationView}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>Location</div>
              <div className={styles.MoreButton}>more</div>
            </div>
            <div className={styles.ItemsHolder}>
              <div className={styles.Item}>21 Alaka Street Shasha Lagos</div>
            </div>
          </div>

          <div className={styles.cView + " " + styles.StoreList}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>Stores</div>
              <div className={styles.MoreButton}>more</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Item = (props: any) => {
  return (
    <Link to={"/store/" + props.id}>
      <div className={styles.Item}>{props.title}</div>
    </Link>
  );
};

// const LinkItem = (props: any) => {
//   return (
//     <Link to={"https://www.google.com.ng"}>
//       <div className={styles.Item}>{LinkTypeToText(props.link.type)}</div>
//     </Link>
//   );
// };
export default BoardPageSideView;
