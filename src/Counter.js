import React, { Component } from 'react';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import InputValue from './InputValue';
import './Counter.css';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stepValue: 0,
			allSteps: 0,
		};
	}

	stepsQuantity = (e) => {
		let valueImput = e.target.value;

		this.setState({
			stepValue: valueImput,
		});
	};

	calSteps = (e) => {
		let target = e.target.innerText;
		let allSteps = this.state.allSteps * 1;
		let currentSteps = this.state.stepValue * 1;

		if (target === 'Add') {
			this.setState({
				allSteps: currentSteps + allSteps,
			});
		} else if (target === 'Sub') {
			this.setState({
				allSteps: allSteps - currentSteps
			});
		}else{
            this.setState({
                allSteps:0
            })
        }

       
	};

	render() {
		return (
			<div className='container'>
			
				<Display sumSteps={this.state.allSteps} />
				<ButtonsPanel buttonMethod={this.calSteps} />
				<InputValue stepsQuantity={this.stepsQuantity} />
			</div>
		);
	}
}

export default Counter;
