import React from 'react';
import { Link } from 'react-router-dom';

function ClassCalendarPage() {
	return(
		<div>
			<table width = '100%'>
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
					<td>name</td>
					<td>email</td>
					<td>phone</td>
					{/* <td>{props.paymentType}</td>
            <td>{props.expDate}</td>
            <td>{props.remainingClasses}</td>
						<td>{props.signedIn}</td> */}
						<td><button> <Link to='/pos'> BUY</Link></button></td>
				</tr>
			</table>
			
		</div>
	);
}

export default ClassCalendarPage;