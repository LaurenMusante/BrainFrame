import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import ClassCalendarPage from './ClassCalendarPage';
import ClientDisplayPage from './ClientDisplayPage';
import PointOfSalePage from './PointOfSalePage'
import ClientSearchBar from './ClientSearchBar';


class App extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				
			};
			// function binding here
  }
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/searc/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 9abc50bc967a124cf53457dbede0f945191534787985d243ca5c300bfe7d5d04'
      }
    });
  }

//functions here

render(){
	return(
		<div className='app'>
      <div className='ui container' style={{ marginTop: '10px' }}>
			  <ClientSearchBar onSubmit={this.onSearchSubmit} />
      </div>
      <Switch>
        <Route exact path='/' component={ClassCalendarPage} />
        <Route path='/clientdisplay' component={ClientDisplayPage} />
				<Route path='/pos' component={PointOfSalePage} />
      </Switch>
		</div>
		);
	}
}

export default App;