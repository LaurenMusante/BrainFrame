import React from 'react';
import ClientSearchBar from './ClientSearchBar'
import Checkbox from './Checkbox';
import { Icon, Menu, Table } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class ClientDisplayPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div className="clientDisplay"> 
        <div className='clientSearch'>
          <ClientSearchBar /> 
        </div> 
        <div className='clientTable'>
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
              <Table.Row>
                <Table.Cell>Lauren Musante</Table.Cell>
                <Table.Cell>Lauren@mail.com</Table.Cell>
                <Table.Cell>1234567890</Table.Cell>
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
                <Table.Cell><Link to ='/pos'>BUY CLASS</Link></Table.Cell>
              </Table.Row>
              <Table.Row>
              <Table.Cell>Lauren Musante</Table.Cell>
                <Table.Cell>Lauren@mail.com</Table.Cell>
                <Table.Cell>1234567890</Table.Cell>
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
                <Table.Cell><Link to ='/pos'>BUY CLASS</Link></Table.Cell>
              </Table.Row>
              <Table.Row>
              <Table.Cell>Lauren Musante</Table.Cell>
                <Table.Cell>Lauren@mail.com</Table.Cell>
                <Table.Cell>1234567890</Table.Cell>
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
                <Table.Cell><Link to ='/pos'>BUY CLASS</Link></Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='12'>
                  <Menu pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div> 
      </div> //clientDisplay
    )
  }
} 

export default ClientDisplayPage;

// https://materializecss.com/checkboxes.html for checkboxes
// Use checkboxes when looking for yes or no answers. The for attribute is necessary to bind our custom checkbox with the input. Add the input's id as the value of the for attribute of the label.