import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewClientForm(props) {
  let _name = null;
  let _email = null;
  let _phone = null;

  function handleNewClientSubmission(event) {
    event.preventDefault();
    props.onNewClientSubmission({
      name: _name.value,
      email: _email.value,
      phone: _phone.value,
      id: v4()
    });
    _name.value = "";
    _email.value = "";
    _phone.value = "";
  }

  return (
    <div>
      <form className="ui form" onSubmit={handleNewClientSubmission}>
        <div className="field">
          <label>Name</label>
          <input type="text" id="" placeholder="name"></input>
        </div>
        <div className="field">
          <label>Email Address</label>
          <input type="text" id="" placeholder="email"></input>
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input type="number" id="" placeholder="phone number"></input>
        </div>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
  NewClientForm.propTypes = {
    onNewClientSubmission: PropTypes.func
  };
}

export default NewClientForm;
