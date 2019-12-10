import React from 'react';

class ClientDisplayPage extends React.Component {
  constructor(props) {
    this.state = {

    }
  }
  render() {
    return(
      //check W3 Schools to style table
      <div>
        <ClientSearchBar /> 
        <table>
          <tr>
            <th>Client Name</th>
            <th>E-mail</th>
            <th>Phone #</th>
            <th>Payment Type</th>
            <th>Exp. Date</th>
            <th>Remaining</th>
            <th>Signed In</th>
          </tr>
          <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.paymentType}</td>
            <td>{props.expDate}</td>
            <td>{props.remainingClasses}</td>
            <td>{props.signedIn}</td>
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