import React from 'react';

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
			//components here
		</div>
		);
	}
}

export default App;