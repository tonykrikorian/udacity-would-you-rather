import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";

class Login extends Component {
  state = {};
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header textAlign="center">Login</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default Login;
