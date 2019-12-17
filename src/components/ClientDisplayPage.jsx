import React from "react";
import ClientSearchBar from "./ClientSearchBar";
import { Icon, Menu, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ClientDisplayPage.css";

class ClientDisplayPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: "",
      searchResults: []
    };
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
  }

  handleUpdateSearch(search) {
    let names = [];
    this.props.clients.forEach(client => {
      if (client.name.match(new RegExp(search, "i"))) {
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
      <Table.Row key={id}>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>{phone}</Table.Cell>
        <Table.Cell>
          <form action="#">
            <p>
              <label>
                <input type="checkbox" />
                <span>Yes</span>
              </label>
            </p>
          </form>
        </Table.Cell>
        <Table.Cell>
          <button className="ui purple button">
            <Link to={`/pos/${id}`}>BUY CLASS</Link>
          </button>
        </Table.Cell>
      </Table.Row>
    ));
  }

  render() {
    return (
      <div className="clientDisplay">
        <div className="ui container" style={{ margin: "24px" }}>
          <ClientSearchBar onUpdateSearch={this.handleUpdateSearch} />
        </div>
        <div className="clientTable">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Signed In</Table.HeaderCell>
                <Table.HeaderCell>Purchase</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{this.renderClients()}</Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="12"></Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </div> //clientDisplay
    );
  }
}

export default ClientDisplayPage;
