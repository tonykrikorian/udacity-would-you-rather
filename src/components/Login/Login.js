import React, { Component } from "react";
import { Card, Dropdown, Image, Container, Grid } from "semantic-ui-react";
import logo from "../../logo.svg";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";

class Login extends Component {
  state = {};
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
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
  const users = state.users.map(x => {
    return { key: x.id, text: x.name, value: x.email };
  });

  return { users };
}
export default connect(mapStateToProps)(Login);
