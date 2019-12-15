import React from "react";
import { Switch, Route } from "react-router-dom";
import ClassCalendarPage from "./ClassCalendarPage";
import ClientDisplayPage from "./ClientDisplayPage";
import PointOfSalePage from "./PointOfSalePage";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: "1",
          name: "Douglas",
          email: "Douglas@mail.com",
          phone: "(123)123-4567"
        },
        {
          id: "2",
          name: "Lauren",
          email: "Lauren@mail.com",
          phone: "(321)123-4567"
        },
        {
          id: "3",
          name: "Ham",
          email: "Ham@ham.com",
          phone: "(333)666-6666"
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
