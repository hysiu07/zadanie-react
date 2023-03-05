import React from 'react';
import './InputValue.css';

 function InputValue (props){
	
	return (
		<div>
			<span>Kroki: </span>
			<input type='number' onChange={props.stepsQuantity} />
		</div>
	);
	
}

export default InputValue;
