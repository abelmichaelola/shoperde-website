import React, { Component } from 'react';
import styles from './SearchPage.module.scss';
import { FaAdobe, FaDotCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
class SearchPage extends Component {
  render() {
    return (
      <div className={styles.SearchPage}>
        <div
          className={styles.HeadView}
          style={{
            backgroundImage: `url("http://localhost/images/FrederickSound_ROW5437500422_1920x1080.jpg")`,
          }}
        >
          <div className={styles.textHolder}>
            <div className={styles.main}>Search: Demin Jacket</div>
          </div>
        </div>
        <SearchResultProduct />
        <SearchResultCollection />
        <SearchResultStore />
        <SearchResultProduct />
        <SearchResultCollection />
        <SearchResultStore />
        <SearchResultProduct />
        <SearchResultCollection />
        <SearchResultStore />
        <SearchResultProduct />
        <SearchResultCollection />
        <SearchResultStore />
      </div>
    );
  }
}

const SearchResultProduct = () => {
  return (
    <Link to={"/product/12"}>
      <div className={styles.searchItem + " " + styles.productView}>
        <div className={styles.imageHolder}>
          <img src={"http://localhost/images/img%20(5).jpg"} alt={"product"} />
        </div>
        <div className={styles.body}>
          <div className={styles.topType}>
            <div className={styles.Type}>
              Product{" "}
              <span>
                <FaDotCircle />
              </span>{" "}
              Shenis Apparel
            </div>
            <div className={styles.Price}>
              $20,000 <small>$30,000</small>
            </div>
          </div>
          <div className={styles.title}>Denim Jacket</div>
          <div className={styles.text}>
            <FaAdobe />
            Denim Jacket Denim Jacket Denim Jacket Denim Jacket Denim
          </div>

          <div className={styles.ItemsHolder}>
            <TagItem title={"Tractors"} />
            <TagItem title={"private"} />
            <TagItem title={"200 Items"} />
            <TagItem title={"Products"} />
            <TagItem title={"Tractors"} />
            <TagItem title={"private"} />
            <TagItem title={"200 Items"} />
            <TagItem title={"Products"} />
          </div>
        </div>
      </div>
    </Link>
  );
}
const SearchResultCollection = () => {
  return (
    <Link to={"/collection/12"}>
      <div className={styles.searchItem + " " + styles.CollectionView}>
        <div className={styles.imageHolder}>
          <img
            src={
              "http://localhost/images/Garajonay_ROW1443896236_1920x1080.jpg"
            }
            alt={"Collection"}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.topType}>
            <div className={styles.Type}>
              Collection{" "}
              <span>
                <FaDotCircle />
              </span>{" "}
              Blvck Squad
            </div>
            <div className={styles.Price}></div>
          </div>
          <div className={styles.title}>Denim Jacket</div>
          <div className={styles.text}>
            <FaAdobe />
            Denim Jacket Denim Jacket Denim Jacket Denim Jacket Denim
          </div>

          <div className={styles.ItemsHolder}>
            <TagItem title={"Tractors"} />
            <TagItem title={"private"} />
            <TagItem title={"200 Items"} />
            <TagItem title={"Products"} />
            <TagItem title={"Tractors"} />
            <TagItem title={"private"} />
            <TagItem title={"200 Items"} />
            <TagItem title={"Products"} />
          </div>
        </div>
      </div>
    </Link>
  );
};
const SearchResultStore = () => {
  return (
    <Link to={"/store/12"}>
      <div className={styles.searchItem + " " + styles.StoreView}>
        <div className={styles.imageHolder}>
          <img
            src={"http://localhost/images/storelogo.jpg"}
            alt={"Collection"}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.topType}>
            <div className={styles.Type}>
              Store{" "}
              <span>
                <FaDotCircle />
              </span>{" "}
              Lagos, Nigeria
            </div>
          </div>
          <div className={styles.title}>Shenis Apparel</div>

          <div className={styles.ItemsHolder}>
            <TagItem title={"Tractors"} />
            <TagItem title={"private"} />
            <TagItem title={"200 Items"} />
            <TagItem title={"Products"} />
            <TagItem title={"Tractors"} />
            <TagItem title={"private"} />
            <TagItem title={"200 Items"} />
            <TagItem title={"Products"} />
          </div>

          <div className={styles.topType}>
            <div className={styles.Type}>Lagos, Nigeria</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
const TagItem = (props: any) => {
  return <div className={styles.tag}>{props.title}</div>;
};

export default SearchPage;
