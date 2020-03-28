import React, { Component } from "react";
import { Card, Dropdown, Image, Container, Grid } from "semantic-ui-react";
import logo from "../logo.svg";

class Login extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container textAlign="center">
          <Grid textAlign="center">
            <Card>
              <Card.Content>
                <Image size="medium" src={logo} />
                <Card.Header textAlign="center">Login</Card.Header>
                <Dropdown
                  placeholder="Select a user"
                  selection
                  fluid
                  options={[
                    {
                      key: "Jenny Hess",
                      text: "Jenny Hess",
                      value: "Jenny Hess"
                    }
                  ]}
                ></Dropdown>
              </Card.Content>
            </Card>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Login;
