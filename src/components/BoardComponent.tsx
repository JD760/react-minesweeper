import React, { useEffect, useRef, useState } from 'react';
import '../styles/BoardComponent.css';

interface BoardComponentProps {
    board: {
        size: number,
        mineCount: number
    }
}

function BoardComponent (props: BoardComponentProps) {
    const [minesRemaining, setMinesRemaining] = useState(props.board.mineCount);
    // whether the board data has changed and the Tiles array needs to be re-rendered
    const [boardModified, setBoardModified] = useState(true);
    const boardTileCount = props.board.size * props.board.size;
    
    // handle sizing of the board container and tiles
    const boardContainerRef = useRef(null);

    // tile styling
    const createTileStyling = () => {
        // percentage sizes to set the Tile elements to occupy
        let TileSideLength = 10;
        TileSideLength = ((1 / props.board.size) * 100);

        return (
            {
                height : TileSideLength.toString() + "%",
                width: TileSideLength.toString() + "%"
            }
        )
    }

    // create the tile elements on the board
    let tiles: JSX.Element[] = [];
    for (let i = 0; i < boardTileCount; i++) {
        tiles.push(
            <div className="board-tile" style={createTileStyling()}>{i + 1}</div>
        );
    }

    return <div className="board-container">
        {tiles}
    </div>
}

export default BoardComponent;