import React from 'react';
import ProptTypes from 'prop-types';

function NewClientForm(props) {
  let _name = null;
  let _email = null;
	let _phone = null;
	let _classPackage = null; //??

function handleNewClientSubmission(event) {
	event.preventDefault();

}
	return(
		<div>
			<form onSubmit={handleNewClientSubmission}>
				<input type='text' id='' placeholder='name'></input>
        <input type='text' id='' placeholder='email'></input>
        <input type='number' id='' placeholder='phone number'></input>
				<button type='submit'>Add Client</button>
			</form>
		</div>
	);
}

NewClientForm.propTypes = {
	onNewClientSubmission: PropTypes.func
};

export default NewClientForm;