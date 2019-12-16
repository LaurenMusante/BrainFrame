import React from "react";
import ClientSearchBar from "./ClientSearchBar";
import { Icon, Menu, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ClientDisplayPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="clientDisplay">
        <div className="ui container" style={{ margin: "24px" }}>
          <ClientSearchBar />
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

            <Table.Body>
              {this.props.clients.map(({ id, name, email, phone }) => (
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
                    <Link to={`/pos/${id}`}>BUY CLASS</Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

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
