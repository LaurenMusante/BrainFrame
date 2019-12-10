import React from 'react';
// import Client from './Client' <--in order to map through?
import ClientSearchBar from './ClientSearchBar'

const clientList = [{
  id: 1,
  name: 'Lauren Musante',
  email: 'Lauren@gmail.com',
  phone: 1111111111
}, {
  id:2,
  name: 'Douglas Graves',
  email: 'Douglas@gmail.com',
  phone: 2222222222
}, {
  id: 3,
  name: 'Nina Anissimov',
  email: 'Nina@gmail.com',
  phone: 3333333333
}]

class ClientDisplayPage extends React.Component {
  constructor(props) {
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <ClientSearchBar /> 
        {/* {clientList.map(({id, name, email, phone}) => 
          <Client name={name}
          email={email}
          phone={phone}
          key={id}
          )} */}
        <table>
          <tr>
            <th>Client Name</th>
            <th>E-mail</th>
            <th>Phone #</th>
            {/* <th>Payment Type</th>
            <th>Exp. Date</th>
            <th>Remaining</th>
            <th>Signed In</th> */}
          </tr>
          <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            {/* <td>{props.paymentType}</td>
            <td>{props.expDate}</td>
            <td>{props.remainingClasses}</td>
            <td>{props.signedIn}</td> */}
          </tr>
        </table>
      </div>
    )
  }
}
 export default ClientDisplayPage;



// Spreadsheet-style
// Show all clients as they are checked in
// Show who has already been checked in using <IndividualClientDetails/> props