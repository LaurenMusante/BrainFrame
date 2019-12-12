import React from 'react';
import clientsList from './../Search/clientsList.json';


// const clientList = [{
//   id: 1,
//   name: "Lauren"
// }, {
//   id: 2,
//   name: "Douglas"
// }, {
//   id: 3,
//   name: "Sue"
// }, {
//   id: 4,
//   name: "Grail"
// }]


class  ClientSearchBar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          search: ''
      };
    this.renderClient = this.renderClient.bind(this);
    this.onChange = this.onChange.bind(this)
  }

renderClient(client){
  const {search} = this.state;
  var name = clients.name.toLowerCase(); //clientsList.name?

  if( search !== "" && client.name.toLowerCase().indexOf( search.toLowerCase() ) === -1){
    return null
  } //this is to filter the results, along with const filteredClients and filteredClients.map
}

onChange(e){
  this.setState({ search : e.target.value })
}

render(){
  const {search}= this.state;
  const filteredClients = clientsList.filter(client => {
    return client.name.toLowerCase().indexOf(search.toLowerCase() ) !== -1;
  });

  return(
    <div className='searchBar'>
      <div className='inputField'>
        <input label='Search Client' icon='search' onChange={this.onChange}/>
      </div>
      <div className='searchResults'>
      {
        filteredClients.map(client =>{
          return this.renderClient(client);
        })
      }
      </div>
    </div>
    );
  }
}
export default ClientSearchBar;

// Search through DB of clients?
// Add client to <ClientDisplaySheet/>
// If client's first visit, dropdown from bar to "Addclient", which will take you to <newClientForm/>
//https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

// constructor(props){
//   super(props)
//   this.state = {
//   initialItems: [],
//   items: []
// }
// }

//  FilterList(event){
//   let items = this.state.initialItems;
//   items = items.filter((item) => {
//     return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
//   });
//   this.setState({ items: items });
// }

// componentWillMount(){ //to store collection in state. called after initial render.
//   this.setState({
//     initialItems: this.props.content,
//     items: this.props.content
//   })
// }

// render() {
//   return (
//     <div>
//       <form>
//         <input type="text" placeholder="Search" onChange={this.filterList} />
//       </form>
//       <div>
//         {
//           this.state.items.map(function (item) {
//             return <div key={item}>{item}</div>
//           })
//         }
//       </div>
//     </div>