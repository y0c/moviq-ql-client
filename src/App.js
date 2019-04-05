import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import client from "./apollo";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/details/:movieId" component={Detail} />
            </div>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
