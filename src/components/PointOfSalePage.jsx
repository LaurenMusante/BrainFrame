import React from 'react';
import { HashRouter } from 'react-router-dom';

const classPackages = [{
  id: 1,
  name: '1 class',
  count: 1,
  price: 20
}, {
  id: 2,
  name: '5 classes',
  count: 5,
  price: 90
}, {
  id: 3,
  name: '10 classes',
  count: 10,
  price: 180
}]

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
    console.log('peeps');
  }

  render() {
    return (
      <div className='point-of-sale-page'>
        <div className="client-details">
          <h1>Lauren Musante</h1>
        </div>

        <div>
          <form>
            <label for='package-name'>Class Packages</label>
            <select name='package-name'>
              <option>---</option>
              {classPackages.map(({id, name}) => (
                <option key={id} value={id}>{name}</option>
                ))}
            </select>

            {(selectedClassPackage === {})
              ? null
              : (
                <>
                  <div className='pricingDetails'>
                    <div>
                      <label for='price'>Price</label>
                      <input type='text' value={package.price} name='price' />
                    </div>
                    <div>
                      <label for='count'>Class Count</label>
                      <input type='number' value={package.count} name='count' />
                    </div>
                    <div>
                      <label for='quantity'>Quantity</label>
                      <input type='number' value={this.state.quantity} name='quantity' />
                    </div>
                      <h3>Subtotal <span>{this.state.subtotal}</span></h3> 
                    </div>
                    <h2>Total <span>{this.state.total}</span></h2>
                </>
              )
              }
                  <button type='submit' onSubmit={handleSubmit}>Add Package</button>
              </form>
          </div>
      </div>
    )
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