import React from 'react';
import BoardComponent from './BoardComponent';
import DifficultyComponent from './DifficultyComponent';
import '../styles/GameComponent.css';

type gameProps = {

}

type gameState = {
    buttonName: string,
}

class GameComponent extends React.Component<gameProps, gameState> {
    state: gameState = {
        buttonName: "No button",
    }

    render() {
        return(
            <div>
                <h3><u>React Minesweeper</u></h3>
                <p>Options:</p>
                <DifficultyComponent></DifficultyComponent>

                <button className="game-button" onClick={() => this.setState({buttonName: "New Game"})}>New Game</button>
                <button className="game-button" onClick={() => this.setState({buttonName: "Reset Game"})}>Reset Game</button>
                <BoardComponent/>
            </div>
        );
    }
}

export default GameComponent;