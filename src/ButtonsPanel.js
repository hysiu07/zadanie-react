import React from "react";
import './ButtonsPanel.css'


function ButtonsPanel(props){

return(
    <div className="buttons">
        {/* <p>{props.steps}</p> */}
        <button className="btn" onClick={props.buttonMethod}>Add </button>
        <button className="btn" onClick={props.buttonMethod}>Sub </button>
        <button className="btn" onClick={props.buttonMethod}>Reset</button>
    </div>
)

}
export default ButtonsPanel