import React from "react";
import ClassCalendarPage from "./ClassCalendarPage";
import ClientDisplayPage from "./ClientDisplayPage";
import PointOfSalePage from "./PointOfSalePage";
import Header from "./Header";
import About from "./About";
import ClassDescriptions from "./ClassDescriptions";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: "1",
          name: "Douglas Graves",
          email: "Douglas@mail.com",
          phone: "(123)123-4567"
        },
        {
          id: "2",
          name: "Lauren Musante",
          email: "Lauren@mail.com",
          phone: "(321)123-4567"
        },
        {
          id: "3",
          name: "Gandalf 'Ham' Graves",
          email: "Ham@ham.com",
          phone: "(333)666-6666"
        },
        {
          id: "4",
          name: "Attila Graves",
          email: "Attila@ham.com",
          phone: "(666)666-6666"
        },
        {
          id: "5",
          name: "Nina Anissimov",
          email: "Nina@ham.com",
          phone: "(432)532-5553"
        },
        {
          id: "6",
          name: "Jacqueline Remmel",
          email: "Jacqueline@ham.com",
          phone: "(524)498-8734"
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
