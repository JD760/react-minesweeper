import React from 'react';
import '../styles/DifficultyComponent.css';

type difficultyProps = {
    handleClick(difficulty: string) : void
};

type difficultyState = {
    buttonSelected: string,
    myState: string
};

class DifficultyComponent extends React.Component<difficultyProps, difficultyState> {
    state: difficultyState = {
        buttonSelected: "",
        myState: "hello!"
    }

    public checkSelected = (button: string) : string => {
        return (this.state.buttonSelected === button) ? "grey" : ""
    }

    render() {
        return(
            <div>
                <p className="difficulty-text">Game Difficulty:</p>
                <div className="difficulty-selector">
                    <button 
                        className="difficulty-button"
                        style={{backgroundColor: this.checkSelected("easy")}}
                        onClick={() => {
                            this.setState({buttonSelected: "easy"});
                            this.props.handleClick("easy");
                        }}
                    >Easy
                    </button>
                    <button
                        className="difficulty-button"
                        style={{backgroundColor: this.checkSelected("normal")}}
                        onClick={() => {
                            this.setState({buttonSelected: "normal"});
                            this.props.handleClick("normal");
                        }}
                        >Normal
                    </button>
                    <button
                        className="difficulty-button"
                        style={{backgroundColor: this.checkSelected("hard")}}
                        onClick={() => {
                            this.setState({buttonSelected: "hard"});
                            this.props.handleClick("hard");
                        }}
                        >Hard
                    </button>
                </div>
            </div>
        );
    }
}

export default DifficultyComponent;