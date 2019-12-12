import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const ClassCalendarPage = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Sign-In</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Class</Table.HeaderCell>
        <Table.HeaderCell>Instructor</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>December  12, 2019</Table.Cell>
        <Table.Cell>Link to ClientDisplayPage</Table.Cell>
        <Table.Cell>9am-10am</Table.Cell>
        <Table.Cell>Deep Flow</Table.Cell>
        <Table.Cell>Emma Stern</Table.Cell>
        <Table.Cell>MOD on 45th</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>December  12, 2019</Table.Cell>
      <Table.Cell>Link to ClientDisplayPage</Table.Cell>
        <Table.Cell>9am-10am</Table.Cell>
        <Table.Cell>Deep Flow</Table.Cell>
        <Table.Cell>Emma Stern</Table.Cell>
        <Table.Cell>MOD on 45th</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>December  12, 2019</Table.Cell>
        <Table.Cell>Link to ClientDisplayPage</Table.Cell>
        <Table.Cell>9am-10am</Table.Cell>
        <Table.Cell>Deep Flow</Table.Cell>
        <Table.Cell>Emma Stern</Table.Cell>
        <Table.Cell>MOD on 45th</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
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
)

export default ClassCalendarPage;


// https://react.semantic-ui.com/collections/table/







