import Board from "../Models/Board";

export function GetBoard(id: number, callback: Function) {
  let board: Board = new Board();
  fetch("http://localhost/data/board.json", { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      Object.assign(board, data);
      callback(board);
    });

  return board;
  //   this.convertToClass(data);
}

export function GetBoards(callback: Function) {
  fetch("http://localhost/data/boards.json", { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      var boards: Board[] = data?.map((data: Object, index: number) => {
        var board: Board = new Board();
        Object.assign(board, data);
        return board;
      });
      callback(boards);
    });
}
