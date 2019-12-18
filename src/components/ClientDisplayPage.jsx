import React from 'react';
import ClientSearchBar from './ClientSearchBar';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './ClientDisplayPage.css';

class ClientDisplayPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: '',
      searchResults: []
    };
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
  }

  handleUpdateSearch(search) {
    let names = [];
    this.props.clients.forEach(client => {
      if (client.name.match(new RegExp(search, 'i'))) {
        names.push(client);
      }
    });
    this.setState({
      currentSearch: search,
      searchResults: names
    });
  }

  renderClients() {
    const clients = this.state.searchResults.length
      ? this.state.searchResults
      : this.props.clients;

    if (this.state.currentSearch && !this.state.searchResults.length) {
      return <Link to="/newclient">Add new client</Link>;
    }

    return clients.map(({ id, name, email, phone }) => (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          {' '}
          <form action="#">
            <p>
              <label>
                <input type="checkbox" />
                <span>Yes</span>
              </label>
            </p>
          </form>
        </td>
        <td>
          <Link to={`/pos/${id}`}>BUY CLASS</Link>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="clientDisplay">
        <div className="ui container" style={{ margin: '24px' }}>
          <ClientSearchBar onUpdateSearch={this.handleUpdateSearch} />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Signed In</th>
              <th>Purchase</th>
            </tr>
          </thead>

          <tbody> {this.renderClients()}</tbody>
        </table>
      </div> //clientDisplay
    );
  }
}

export default ClientDisplayPage;
