import React from 'react';
import BoardComponent from './BoardComponent';
import DifficultyComponent from './DifficultyComponent';
import '../styles/GameComponent.css';

type gameProps = {

}

type gameState = {
    gameDifficulty: string,
    errorText: string,
    boardSize: number,
    boardData: Array<number>
}

class GameComponent extends React.Component<gameProps, gameState> {
    state: gameState = {
        gameDifficulty : "",
        errorText: "",
        boardSize: 0,
        boardData: [],
    }

    public handleDifficultyClick = (difficulty: string) => {
        console.log(`set difficulty to ${difficulty}`);
        this.setState({gameDifficulty: difficulty});
    }

    render() {
        return(
            <div>
                <h3><u>React Minesweeper</u></h3>
                <p>Options:</p>
                <DifficultyComponent handleClick={this.handleDifficultyClick}></DifficultyComponent>

                <button className="game-button">New Game</button>
                <button className="game-button">Reset Game</button>

                <p 
                    hidden={this.state.errorText === "" ? true : false}
                    style={{color: "red"}}
                    >{this.state.errorText}
                </p>

                <BoardComponent/>
            </div>
        );
    }
}

export default GameComponent;