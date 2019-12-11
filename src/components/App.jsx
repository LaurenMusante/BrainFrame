import React from 'react';
// import { Switch, Route } from 'react-router-dom' - from syllabus;
import ClassCalendarPage from './ClassCalendarPage';
import ClientDisplayPage from './ClientDisplayPage';

class App extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				clients: [
					{
						id: 1,
						name: Lauren,
						phone: 1234567,
						classpackage: false
					}
					{
						id: 2,
						name: Douglas,
						phone: 2345678,
						classpackage: true
					}
				]
			};
			// function binding here
	}

//functions here

render(){
	return(
		<div>
      <Switch>
        <Route exact path='/' component={ClassCalendarPage} />
        <Route path='/clientdisplay' component={ClientDisplayPage} />
      </Switch>
		</div>
		);
	}
}

export default App;