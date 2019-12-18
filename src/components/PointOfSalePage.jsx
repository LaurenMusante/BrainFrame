import React from 'react';
import { Link } from 'react-router-dom';
import './PointOfSalePage.css';

const classPackages = [
  {
    id: 1,
    name: '1 class',
    count: 1,
    price: 20
  },
  {
    id: 2,
    name: '5 classes',
    count: 5,
    price: 90
  },
  {
    id: 3,
    name: '10 classes',
    count: 10,
    price: 180
  }
];

class PointOfSalePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      selectedClassPackage: {},
      subtotal: 0, //selectedClassPackage price * quantity
      total: 0, //adding tax or discoumt to subtotal
      client: {}
    };
  }

  updateClient() {
    const currentClient = this.props.clients.find(
      client => client.id === this.props.match.params.clientId
    );
    if (currentClient) {
      this.setState({ client: currentClient });
    }
  }

  componentDidMount() {
    this.updateClient();
  }

  //think of "match" as the word "route"
  componentDidUpdate(prevProps) {
    if (this.props.match.params.clientId !== prevProps.match.params.clientId) {
      this.updateClient();
    }
  }

  handleSubmit() {
    let price = this.state.selectedClassPackage.price;
    let quantity = this.state.quantity;
    let total = price * quantity;
    console.log(total);
    console.log('submit package details');
  }

  handleSelectChange() {
    console.log('select changed');
  }

  handleOnChange() {
    console.log('handle input change');
  }

  render() {
    return (
      <div className="ui container">
        <div className="point-of-sale-page">
          <div className="client-details">
            <h1>{this.state.client.name}</h1>
          </div>

          <form onSubmit={this.handleSubmit}>
            {' '}
            <div className="ui compact menu">
              <div className="ui simple dropdown item">
                Package Options
                <i className="dropdown icon"></i>
                <div className="menu">
                  {classPackages.map(({ id, name }) => (
                    <div className="item" key={id} data-value={id}>
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {this.selectedClassPackage === {} ? null : (
              <div>
                <div className="pricingDetails">
                  <div>
                    <label>
                      Price
                      <input
                        type="text"
                        value={this.state.selectedClassPackage.price}
                        name="price"
                        onChange={this.handleOnChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Quantity
                      <input
                        type="number"
                        value={this.state.quantity}
                        name="quantity"
                        onChange={this.handleOnChange}
                      />
                    </label>
                  </div>
                </div>
                <h2>
                  Total <span>${this.state.total}</span>
                </h2>
              </div>
            )}
            <button type="submit">Add Package</button>
          </form>
          <br />
          <Link to="/clientdisplay">BACK</Link>
          <br />
          <Link to="/">Class Calendar</Link>
        </div>
      </div>
    );
  }
}

export default PointOfSalePage;

/*
// conditional statement
if (selectedClassPackage === {}) {
    // don't render anything
} else {
    // render something
}
// ternary operator
(selectedClassPackage === {}) ? 'do not render' : 'render'
*/
