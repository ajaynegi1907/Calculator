import React from "react";

export interface KeyboardProps{
    onTokenButtonClick: (token: string) => void;
    clearAll: () => void;
    removePreviousToken: () => void;
    calculateResultClick: () => void;
}

const Keyboard = (props:KeyboardProps) => {
    const onButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>{
        const target = event.target as HTMLElement;

        const value = target.innerHTML;
        switch(value){
            case "AC":{
                props.clearAll();
                return;
            }
            case "CE":{
                props.removePreviousToken();
                return;
            }
               
            case "=":{
                props.calculateResultClick();
                return;
            }
            default:{
                props.onTokenButtonClick(value);
            }
        }

    }
    return (
        <div className="keyboard" >
            <button className = "btn btn-action"  onClick={onButtonClick}>AC</button>
            <button className = "btn btn-action"  onClick={onButtonClick}>CE</button>
            <button className = "btn btn-operator"onClick={onButtonClick} >%</button>
            <button className = "btn btn-operator"onClick={onButtonClick} >/</button>
            <button className = "btn btn-numeric" onClick={onButtonClick}>7</button>
            <button className = "btn btn-numeric" onClick={onButtonClick}>8</button>
            <button className = "btn btn-numeric" onClick={onButtonClick}>9</button>
            <button className = "btn btn-operator"onClick={onButtonClick} >*</button>
            <button className = "btn btn-numeric" onClick={onButtonClick}>4</button>
            <button className = "btn btn-numeric" onClick={onButtonClick}>5</button>
            <button className = "btn btn-numeric" onClick={onButtonClick}>6</button>
            <button className = "btn btn-operator"onClick={onButtonClick} >-</button>
            <button className = "btn btn-numeric" onClick={onButtonClick} >1</button>
            <button className = "btn btn-numeric" onClick={onButtonClick}>2</button>
            <button className = "btn btn-numeric" onClick={onButtonClick}>3</button>
            <button className = "btn btn-operator" onClick={onButtonClick}>+</button>
            <button className = "btn btn-numeric zero" onClick={onButtonClick}>0</button>
            <button className = "btn btn-numeric" onClick={onButtonClick}>.</button>
            <button className = "btn btn-calculate" onClick={onButtonClick}>=</button>
        </div>
    );
}
export default Keyboard;