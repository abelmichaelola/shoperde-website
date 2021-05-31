import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetStore } from "../../../data/StoreData";
import Store, { LinkTypeToText } from "../../../Models/Store";
import StoreList from "../../ui/StoreList/StoreList";
import styles from "./AboutStore.module.scss";

interface Props {
  text?: string;
  screenSize?: string;
  match?: any;
  tags?:string[];
}

interface State {
  store: Store;
}
export class AboutStore extends Component<Props, State> {
  static propTypes = {};
  tags = [];
  store = { store: new Store() };
  storeId: string;
  tagViews?: any;
  linkViews?: any;
  constructor(props: Props) {
    super(props);
    this.storeId = this.props.match ? this.props.match.params.storeId : null;
  }
  componentDidMount() {
    new GetStore().get(this.storeId, (store: Store) => {
      // this.listItems = collections?.map(this.mapper);
      this.setState({
        store: store,
      });
    });
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ) {
    this.tagViews = nextState.store.tags?.map(
      (value: string, index: number) => {
        return <Item key={index} title={value} />;
      }
    );
    this.linkViews = nextState.store.links?.map(
      (value: any, index: number) => {
        return <LinkItem key={index} link={value} />;
      }
    );
    return true;
  }

  render() {
    return (
      <div className={styles.AboutStore}>
        <div className={styles.StoreBGImage}>
          <div
            className={styles.BgImage}
            style={{
              backgroundImage: this.state
                ? `url("` + this.state.store?.coverImage + `")`
                : `url("http://localhost/images/storeBg.jpg")`,
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
                backgroundImage: this.state
                  ? `url("` + this.state.store?.logo + `")`
                  : `url("http://localhost/images/storelogo.jpg")`,
              }}
            />
          </div>
          <div className={styles.storeName}>
            {this.state ? this.state.store?.name : "loading"}
          </div>
          <div className={styles.storeDet}>
            est.{" "}
            {this.state
              ? this.state.store?.details?.dateEstablished
              : "loading"}
          </div>
          <div className={styles.storeNote}>
            {this.state ? this.state.store?.note : "water"}
          </div>

          <div className={styles.cView + " " + styles.tagsArea}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>Tags</div>
              <div className={styles.MoreButton}>more</div>
            </div>
            <div className={styles.ItemsHolder}>{this.tagViews}</div>
          </div>

          <div className={styles.cView + " " + styles.linksView}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>Links</div>
              <div className={styles.MoreButton}>more</div>
            </div>
            <div className={styles.ItemsHolder}>{this.linkViews}</div>
          </div>

          <div className={styles.cView + " " + styles.locationView}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>Location</div>
              <div className={styles.MoreButton}>more</div>
            </div>
            <div className={styles.ItemsHolder}>
              <div className={styles.Item}>
                {this.state ? this.state.store?.location?.address : "unknown"}
              </div>
              <div className={styles.Item}>
                {this.state ? this.state.store?.location?.city : "unknown"}
              </div>
              <div className={styles.Item}>
                {this.state ? this.state.store?.location?.state : "unknown"}
              </div>
              <div className={styles.Item}>
                {this.state ? this.state.store?.location?.country : "unknown"}
              </div>
            </div>
          </div>

          <div className={styles.cView}>
            <div className={styles.TitleHolder}>
              <div className={styles.Title}>Stores</div>
              <div className={styles.MoreButton}>more</div>
            </div>
            <div className={styles.ItemsHolder + " " + styles.tagsArea}>
              {this.state ? 
              <StoreList
                stores={this.state.store.otherStores}
              /> 
              : "" }
              
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
      <div
        className={styles.Item}
      >
        {props.title}
      </div>
    </Link>
  );
};

const LinkItem = (props: any) => {
  return (
    <Link to={"https://www.google.com.ng"}>
      <div className={styles.Item}>
        {LinkTypeToText(props.link.type)}
      </div>
    </Link>
  );
};
export default AboutStore;
