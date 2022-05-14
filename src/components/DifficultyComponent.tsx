import React from 'react';
import '../styles/DifficultyComponent.css';

type difficultyState = {
    buttonSelected: string
}

class DifficultyComponent extends React.Component<any,difficultyState> {
    state: difficultyState = {
        buttonSelected: "",
    }

    render() {
        return(
            <div>
                <p className="difficulty-text">Game Difficulty:</p>
                <div className="difficulty-selector">
                    <button 
                        className="difficulty-button"
                        style={{backgroundColor: (this.state.buttonSelected === "easy") ? "grey" : ""}}
                        onClick={() => this.setState({buttonSelected: "easy"})}
                    >Easy
                    </button>
                    <button
                        className="difficulty-button"
                        style={{backgroundColor: (this.state.buttonSelected === "normal") ? "grey" : ""}}
                        onClick={() => this.setState({buttonSelected: "normal"})}
                        >Normal
                    </button>
                    <button
                        className="difficulty-button"
                        style={{backgroundColor: (this.state.buttonSelected === "hard") ? "grey" : ""}}
                        onClick={() => this.setState({buttonSelected: "hard"})}
                        >Hard
                    </button>
                </div>
            </div>
        );
    }
}

export default DifficultyComponent;