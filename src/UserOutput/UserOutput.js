import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
	return(
		<div className="UserOutput">
			<p>Hola {props.name} </p>
			<p>Tu edad es {props.age}</p>
		</div>
	);
};

export default UserOutput;