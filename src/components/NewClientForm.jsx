import React from 'react';
import ProptTypes from 'prop-types';

function NewClientForm(props) {
	let _name = null;
	let _phoneNumber = null;
	let _classPackage = null;

function handleNewClientSubmission(event) {
	event.preventDefault();

}
	return(
		<div>
			<form onSubmit={handleNewClientSubmission}>
				<input type='text' id='' placeholder='name'>
				</input>
				<button type='submit'>Add Client</button>
			</form>
		</div>
	);
}

NewClientForm.propTypes = {
	onNewClientSubmission: PropTypes.func
};

export default NewClientForm;