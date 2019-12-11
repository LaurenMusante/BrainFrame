import React from 'react';

class  ClientSearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    initialItems: [],
    items: []
  }
}

   FilterList(event){
    let items = this.state.initialItems;
    items = items.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: items });
  }

  componentWillMount(){ //to store collection in state. called after initial render.
    this.setState({
      initialItems: this.props.content,
      items: this.props.content
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" onChange={this.filterList} />
        </form>
        <div>
          {
            this.state.items.map(function (item) {
              return <div key={item}>{item}</div>
            })
          }
        </div>
      </div>
    );
  }
};


export default ClientSearchBar;

// Search through DB of clients?
// Add client to <ClientDisplaySheet/>
// If client's first visit, dropdown from bar to "Addclient", which will take you to <newClientForm/>
//https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20