import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetBoards } from '../../data/BoardData';
import Board, { BoardTypeToString } from '../../Models/Board';
import styles from './BoardsPage.module.scss';

interface Props {
  match?: any;
  location?: any;
}
interface State {
  boardsViews?: any[];
}

class BoardsPage extends Component<Props, State> {
  boards: Board[];
  constructor(props: Props) {
    super(props);
    this.boards = [];
    this.state = {
      boardsViews: [],
    };
  }

  componentDidMount() {
      GetBoards((boards: Board[]) => {
        this.boards = boards;
        this.setState({
          boardsViews: boards?.map(
          (value: Board, index: number) => {
            return <BoardItem key={index} board={value} />;
          }
        ),
        });
      });

  }
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>) {
    return true;
  };
  render() {
    return (
      <div className={styles.BoardsPage}>
        <div
          className={styles.collectionItem + " " + styles.HeadCollection}
          style={{
            backgroundImage: `url("http://localhost/images/FrederickSound_ROW5437500422_1920x1080.jpg")`,
          }}
        >
          <div className={styles.textHolder}>
            <div className={styles.main}>Boards</div>
          </div>
        </div>

        <div className={styles.BoardItemsHolder}>
          {this.state.boardsViews}
        </div>
      </div>
    );
  }
}


const BoardItem = (props: any) => {
  let board:Board = props.board;
  return (
    <Link to={"/board/" + board.id}>
      <div className={styles.item}>
        <img
          className={styles.image}
          src={board.coverImage}
          alt={"board"}
        />
        <div className={styles.body}>
          <div className={styles.title}>{board.name}</div>
          <div className={styles.ItemsHolder}>
            <BoardTagItem title={board.isPrivate ? "private" : "public"} />
            <BoardTagItem title={board.items? board.items?.length + " items" : "empty"} />
            <BoardTagItem title={BoardTypeToString(board.type)} />
            <BoardTagItem title={board.dateCreated} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const BoardTagItem = (props: any) => {
  return (
      <div className={styles.tag}>{props.title}</div>
  );
};
export default BoardsPage;
