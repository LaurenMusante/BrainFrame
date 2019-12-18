import React from 'react';
import './PointOfSalePage.css';

class PointOfSalePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  // handlePurchase(){
  //   this.props.selectedClassPackage
  // }

  render() {
    return (
      <div>
        <div className="client-details">
          <h4>Purchase class for:</h4>
          <h1>{this.state.client.name}</h1>
        </div>
        <div className="dropdownForm">
          <form className="form" action="">
            <select
              className="ui dropdown"
              style={{
                display: 'block',
                width: '30%',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <option value="title">Class Packages</option>
              <option value="1" ref="1Class">
                1 Class
              </option>
              <option value="2">5 Classes</option>
              <option value="3">10 Classes</option>
              <option value="4">One Month</option>
            </select>
            <br />
            <hr />
            <button className="button">Purchase</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PointOfSalePage;
