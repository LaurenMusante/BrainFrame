import React from 'react';
import ClassCalendarPage from './ClassCalendarPage';
import ClientDisplayPage from './ClientDisplayPage';
import PointOfSalePage from './PointOfSalePage';
import Header from './Header';
import About from './About';
import ClassDescriptions from './ClassDescriptions';
import NewClientForm from './NewClientForm';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: '1',
          name: 'Douglas Graves',
          email: 'Douglas@mail.com',
          phone: '(123)123-4567'
        },
        {
          id: '2',
          name: 'Lauren Musante',
          email: 'Lauren@mail.com',
          phone: '(321)513-4567'
        },
        {
          id: '3',
          name: 'Gandalf Ham Graves',
          email: 'Ham@ham.com',
          phone: '(243)413-2141'
        },
        {
          id: '4',
          name: 'Attila Graves',
          email: 'Attila@mail.com',
          phone: '(643)666-0973'
        },
        {
          id: '5',
          name: 'Nina Anissimov',
          email: 'Nina@mail.com',
          phone: '(432)532-5553'
        },
        {
          id: '6',
          name: 'Jacqueline Remmel',
          email: 'Jacqueline@ham.com',
          phone: '(524)498-8734'
        },
        {
          id: '7',
          name: 'Chris Burge',
          email: 'Chris@mail.com',
          phone: '(432)974-3089'
        },
        {
          id: '8',
          name: 'Sofia Giordano',
          email: 'Sofia@mail.com',
          phone: '(309)314-2060'
        },
        {
          id: '9',
          name: 'Beanie Murphy',
          email: 'Beanie@mail.com',
          phone: '(255)631-5553'
        },
        {
          id: '10',
          name: 'Kitten Murphy',
          email: 'Kitten@mail.com',
          phone: '(432)532-5553'
        },
        {
          id: '11',
          name: 'Susan Suserson',
          email: 'Suserson@mail.com',
          phone: '(315)124-1578'
        },
        {
          id: '12',
          name: 'Fred Fredson',
          email: 'Freddieie@mail.com',
          phone: '(536)631-7890'
        },
        {
          id: '13',
          name: 'Steph Curry',
          email: 'Steph@mail.com',
          phone: '(510)874-4216'
        },
        {
          id: '14',
          name: 'Kevin Durant',
          email: 'KD@mail.com',
          phone: '(539)532-9999'
        },
        {
          id: '15',
          name: 'Marshawn Lynch',
          email: 'Marshawn@mail.com',
          phone: '(798)780-4315'
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={ClassCalendarPage} />
          <Route path="/about" component={About} />
          <Route path="/descriptions" component={ClassDescriptions} />
          <Route
            path="/newclient"
            render={props => (
              <NewClientForm
                {...props}
                onNewClientSubmission={client =>
                  this.state.clients.push(client)
                }
              />
            )}
          />
          <Route
            path="/clientdisplay"
            render={props => (
              <ClientDisplayPage {...props} clients={this.state.clients} />
            )}
          />
          <Route
            path="/pos/:clientId"
            render={props => (
              <PointOfSalePage {...props} clients={this.state.clients} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
