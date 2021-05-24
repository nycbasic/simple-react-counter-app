import React from 'react';

const Counter = (props) => {
	const {
		counter1,
		counter2,
		increaseOne,
		decreaseOne,
		increaseTwo,
		decreaseTwo,
		reset,
	} = props;

	return (
		<div className='card'>
			<div className='card-header'>Simple Counter</div>
			<div className='card-body'>
				<div className='row'>
					<div className='col-sm'>
						<h1>Total: {counter1}</h1>
						<a
							className='btn btn-primary'
							id='inc-btn-one'
							onClick={increaseOne}
						>
							Increase
						</a>
						<a
							className='btn btn-primary'
							id='dec-btn-one'
							onClick={decreaseOne}
						>
							Decrease
						</a>
					</div>
					<div className='col-sm'>
						<h1>Total: {counter2}</h1>
						<a
							className='btn btn-primary'
							id='inc-btn-two'
							onClick={increaseTwo}
						>
							Increase
						</a>
						<a
							className='btn btn-primary'
							id='dec-btn-two'
							onClick={decreaseTwo}
						>
							Decrease
						</a>
					</div>
				</div>
			</div>
			<div className='card-footer'>
				<a className='btn btn-primary' onClick={reset}>
					Reset
				</a>
			</div>
		</div>
	);
};

export default Counter;
