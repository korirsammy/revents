import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <h1>Re-vents</h1>
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
