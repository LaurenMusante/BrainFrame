import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ClassCalendarPage from './ClassCalendarPage';
import ClientDisplayPage from './ClientDisplayPage';
import PointOfSalePage from './PointOfSalePage'
import ClientSearchBar from './ClientSearchBar';

class App extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				clients: [
					{
						id: 1,
						name: 'Lauren',
						phone: 1234567,
						classpackage: false
					},
					{
						id: 2,
						name: 'Douglas',
						phone: 2345678,
						classpackage: true
					}
				]
			};
			// function binding here
	}

//functions here

render(){
	const foods = 
	[
		"Pickle",
		"Burrito",
		"Pho",
		"Eggs",
	]
	return(
		<div>
      <Switch>
				<ClientSearchBar content={foods} />
        <Route exact path='/' component={ClassCalendarPage} />
        <Route path='/clientdisplay' component={ClientDisplayPage} />
				<Route path='/pos' component={PointOfSalePage} />
      </Switch>
		</div>
		);
	}
}

export default App;