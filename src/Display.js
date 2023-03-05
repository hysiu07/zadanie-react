import React from "react";
import './Display.css'


function Display(props){
    
    return(
        <div>
            <p className="steps-quantity">Ilość kroków: {props.sumSteps}</p>
        </div>
    )
}

export default Display