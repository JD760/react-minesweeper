import { useState } from "react";

import '../styles/DifficultyComponent.css';

interface DifficultyComponentProps {
    handleClick(difficulty: string): void
}

function DifficultyComponent (props: DifficultyComponentProps) {
    const [buttonSelected, setButtonSelected] = useState("");

    const checkSelected = (button: string) : string => {
        return (buttonSelected === button) ? "grey" : ""
    }

    return (
        <div>
            <div>
                <p className="difficulty-text">Game Difficulty:</p>
                <div className="difficulty-selector">
                    <button 
                        className="difficulty-button"
                        style={{backgroundColor: checkSelected("easy")}}
                        onClick={() => {
                            setButtonSelected("easy");
                            props.handleClick("easy");
                        }}
                    >Easy
                    </button>
                    <button
                        className="difficulty-button"
                        style={{backgroundColor: checkSelected("normal")}}
                        onClick={() => {
                            setButtonSelected("normal");
                            props.handleClick("normal");
                        }}
                        >Normal
                    </button>
                    <button
                        className="difficulty-button"
                        style={{backgroundColor: checkSelected("hard")}}
                        onClick={() => {
                            setButtonSelected("hard");
                            props.handleClick("hard");
                        }}
                        >Hard
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DifficultyComponent;