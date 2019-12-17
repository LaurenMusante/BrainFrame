import React from "react";

class ClientSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.props.onUpdateSearch(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Client Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              style={{ boxSizing: "border-box" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ClientSearchBar;

// Search through DB of clients?
// Add client to <ClientDisplaySheet/>
// If client's first visit, dropdown from bar to "Addclient", which will take you to <newClientForm/>
//https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

// constructor(props) {
//   super(props);
//     this.state = {
//         search: ''
//     };
//   this.renderClient = this.renderClient.bind(this);
//   this.onChange = this.onChange.bind(this)
// }
// renderClient(client){
//   const {search} = this.state;
//   var name = client.name.toLowerCase(); //clientsList.name?

//   if( search !== "" && client.name.toLowerCase().indexOf( search.toLowerCase() ) === -1){
//     return null
//   } //this is to filter the results, along with const filteredClients and filteredClients.map
// }

// onChange(e){
//   this.setState({ search : e.target.value })
// }

// render(){
//   const {search}= this.state;
//   const filteredClients = clientsList.filter(client => {
//     return client.name.toLowerCase().indexOf(search.toLowerCase() ) !== -1;
//   });

//   return(
//     <div className='searchBar'>
//       <div className='inputField'>
//         <input label='Search Client' icon='search' onChange={this.onChange}/>
//       </div>
//       <div className='searchResults'>
//       {
//         filteredClients.map(client =>{
//           return this.renderClient(client);
//         })
//       }
//       </div>
//     </div>
//     );
//   }

// https://www.youtube.com/watch?v=RM_nXOyHwN0
