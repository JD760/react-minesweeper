export type Tile = {
    adjacent: number,
    isMine: boolean
}

function populateBoard(boardsize: number, mineCount: number) {
    const tileCount: number = boardsize * boardsize; // number of tiles on the board
    let mineTiles: number = 0; // number of mines revealed by the player

    /* Create the board array and populate with zeroes*/
    let board: Tile[] = [];
    for (let i = 0; i < tileCount; i++) {board.push({adjacent: 0, isMine: false});}

    /* Set random tiles to contain mines */
    let tileNum: number;
    while (mineTiles < mineCount) {
        tileNum = Math.floor(Math.random() * tileCount);
        if (!board[tileNum].isMine && mineTiles < mineCount) {
            board[tileNum].isMine = true;
            mineTiles += 1;
        }
    }

    /* Calculate adjacent mines for each tile */
    let currentTile: Tile;
    for (let i = 0; i < tileCount; i++) {
        currentTile = board[i];
        // left
        if (i !== 0) {
            if (board[i-1].isMine) currentTile.adjacent++;
        }
        // right
        if (i !== tileCount - 1) {
            if (board[i+1].isMine) currentTile.adjacent++;
        }
        // up
        if (i >= boardsize) {
            if (board[i-boardsize].isMine) currentTile.adjacent++;
        }
        // down
        if (i < tileCount - boardsize) {
            if (board[i + boardsize].isMine) currentTile.adjacent++;
        }
    }

    /* Return the populated board array */
    return board;
}

export default populateBoard;