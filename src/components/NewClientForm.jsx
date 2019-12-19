import React from 'react';
import { v4 } from 'uuid';
import './NewClientForm.css';

class NewClientForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewClientSubmission = this.handleNewClientSubmission.bind(this);
  }

  handleNewClientSubmission(event) {
    event.preventDefault();
    this.props.onNewClientSubmission({
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      id: v4()
    });
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.phone.value = '';
    this.props.history.push('/clientdisplay');
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleNewClientSubmission}>
          <div className="field">
            <label>Name</label>
            <input type="text" id="" ref="name" placeholder="name"></input>
          </div>
          <div className="field">
            <label>Email Address</label>
            <input type="text" id="" ref="email" placeholder="email"></input>
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              id=""
              ref="phone"
              placeholder="phone number"
            ></input>
          </div>
          <button type="submit" className="addClientButton">Add Client</button>
        </form>
      </div>
    );
  }
}

export default NewClientForm;
