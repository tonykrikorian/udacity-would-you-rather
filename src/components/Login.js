import React, { Component } from "react";
import { Card, Dropdown, Image, Container, Grid } from "semantic-ui-react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { setAuthedUser } from "../actions/authedUsers";

class Login extends Component {
  state = {};
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Container textAlign="center">
          <Grid textAlign="center" style={{ marginTop: "5rem" }}>
            <Card>
              <Card.Content>
                <Image size="medium" src={logo} />
                <Card.Header textAlign="center">Login</Card.Header>
                <Dropdown
                  placeholder="Select a user"
                  selection
                  fluid
                  options={this.props.users}
                  onChange={(e, data) => dispatch(setAuthedUser(data.value))}
                ></Dropdown>
              </Card.Content>
            </Card>
          </Grid>
        </Container>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const users = Object.keys(state.users)
    .map(x => {
      return state.users[x];
    })
    .map(x => {
      return { key: x.id, text: x.name, value: x.id };
    });
  return { users };
}
export default connect(mapStateToProps)(Login);
