import React from "react";

import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const classPackages = [
  {
    id: 1,
    name: "1 class",
    count: 1,
    price: 20
  },
  {
    id: 2,
    name: "5 classes",
    count: 5,
    price: 90
  },
  {
    id: 3,
    name: "10 classes",
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
      total: 0 //adding tax or discoumt to subtotal
    };
  }

  handleSubmit() {
    console.log("peeps");
  }

  handleSelectChange() {
    console.log("select changed");
  }

  handleOnChange() {
    console.log("handle input change");
  }

  render() {
    return (
      <div className="point-of-sale-page">
        <div className="client-details">
          <h1>Lauren Musante</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>Class Packages</label>
          <select
            name="package-name"
            onChange={this.handleSelectChange}
            value={this.state.selectedClassPackage}
          >
            <option>---</option>
            {classPackages.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>

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
                  <div>
                    Class Count
                    {this.state.selectedClassPackage.count}
                  </div>
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
                <h3>
                  Subtotal <span>{this.state.subtotal}</span>
                </h3>
              </div>
              <h2>
                Total <span>{this.state.total}</span>
              </h2>
            </div>
          )}
          <button type="submit">Add Package</button>
        </form>
        <Link to="/clientdisplay">BACK</Link>
        <Link to="/">Class Calendar</Link>
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
