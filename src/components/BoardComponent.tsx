import React, { useEffect, useRef, useState } from 'react';
import { Tile } from './utility/populateBoard';
import '../styles/BoardComponent.css';

interface BoardComponentProps {
    board: {
        size: number,
        mineCount: number
        data: Tile[],
        isPopulated: boolean
    }
}

function BoardComponent (props: BoardComponentProps) {
    const [minesRemaining, setMinesRemaining] = useState(props.board.mineCount);
    // whether the board data has changed and the Tiles array needs to be re-rendered
    const [boardModified, setBoardModified] = useState(true);
    const boardTileCount = props.board.size * props.board.size;
    
    // handle sizing of the board container and tiles
    const boardContainerRef = useRef<HTMLDivElement>(null);
    const [boardContainerSize, setBoardContainerSize] = useState({width: 0, height: 0});

    useEffect(() => {
        if (boardContainerRef.current) {
            let rect = boardContainerRef.current.getBoundingClientRect();
            setBoardContainerSize({width: rect.width, height: rect.height});
            console.log(`Board Container Size - x:${rect.width} y:${rect.height}`);
        }
    }, [boardContainerRef])

    // tile styling
    const createTileStyling = () => {
        // find the size in pixels for each tile
        let tileSize = {
            width: (((boardContainerSize.width - 2) / props.board.size) - 2).toString() + "px",
            height: (((boardContainerSize.height - 2) / props.board.size) - 2).toString() + "px"
        };
        console.log(`Tilesize - x:${tileSize.width}`);
        return tileSize;
    }

    // create the tile elements on the board
    let tiles: JSX.Element[] = [];
    for (let i = 0; i < boardTileCount; i++) {
        tiles.push(
            <div 
                className="board-tile"
                style={createTileStyling()}
                key={i}
            >{props.board.isPopulated ? (props.board.data[i].isMine ? "M" : props.board.data[i].adjacent) : 0}
            </div>
        );
    }

    return <div className="board-container" ref={boardContainerRef}>
        {tiles}
    </div>
}

export default BoardComponent;