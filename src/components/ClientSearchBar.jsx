import React from 'react';

class ClientSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.props.onUpdateSearch(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" id="searchForm">
          <div className="field">
            <label>Client Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              style={{ boxSizing: 'border-box' }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ClientSearchBar;
