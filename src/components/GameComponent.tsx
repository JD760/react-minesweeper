/* Libraries */
import React from 'react';

/* Components */
import BoardComponent from './BoardComponent';
import DifficultyComponent from './DifficultyComponent';
import populateBoard from './utility/populateBoard';
import {Tile} from './utility/populateBoard';

/* Files */
import '../styles/GameComponent.css';
import gameConfig from '../config.json';

type gameProps = {

}

type gameState = {
    gameDifficulty: string,
    errorText: string,
    boardSize: number,
    boardMineCount: number,
    boardData: Tile[],
}

class GameComponent extends React.Component<gameProps, gameState> {
    state: gameState = {
        gameDifficulty : "",
        errorText: "",
        boardSize: 0,
        boardMineCount: 0,
        boardData: [],
    }

    public handleDifficultyClick = (difficulty: string) => {
        let size : number = 0;
        let mineCount: number = 0;
        this.setState({gameDifficulty: difficulty});

        // transfer config values into component state
        switch (difficulty) {
            case "easy": {
                size = gameConfig.gridSizes.easy;
                mineCount = gameConfig.mineCount.easy;
                break;
            }
            case "normal": {
                size = gameConfig.gridSizes.normal;
                mineCount = gameConfig.mineCount.normal;
                break;
            }
            case "hard": {
                size = gameConfig.gridSizes.hard;
                mineCount = gameConfig.mineCount.hard;
                break;
            }
        }

        this.setState({boardSize : size});
        this.setState({boardMineCount: mineCount});
    }

    public handleNewGameClick = () => {
        let board = populateBoard(this.state.boardSize, this.state.boardMineCount);
        this.setState({boardData: board});
    }

    render() {
        return(
            <div>
                <h3><u>React Minesweeper</u></h3>
                <DifficultyComponent handleClick={this.handleDifficultyClick}></DifficultyComponent>

                <button 
                    className="game-button"
                    disabled={this.state.gameDifficulty === "" ? true : false}
                    onClick={this.handleNewGameClick}
                >New Game
                </button>
                <button
                    className="game-button"
                    disabled={this.state.gameDifficulty === "" ? true : false}
                >Reset Game
                </button>

                <p 
                    hidden={this.state.errorText === "" ? true : false}
                    style={{color: "red"}}
                    >{this.state.errorText}
                </p>

                <BoardComponent board={{
                    size: this.state.boardSize,
                    mineCount: this.state.boardMineCount
                }}/>
            </div>
        );
    }
}

export default GameComponent;