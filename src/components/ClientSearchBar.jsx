import React from 'react';
import Suggestions from './Suggestions';

class ClientSearchBar extends React.Component {
  constructor(props){
  this.state ={
    query: '',
    results: []
    };
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <div>
          <form>
            <input
            placeholder='Enter client name'
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            />
            <SearchSuggestions results = {this.state.results} />
          </form>
      </div>
      )
    }
  }


export default ClientSearchBar;

// Search through DB of clients?
// Add client to <ClientDisplaySheet/>
// If client's first visit, dropdown from bar to "Addclient", which will take you to <newClientForm/>
//https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20