import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../duxx/reducer";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  unversalCURTHandler = (prop, value) => {
    this.setState({
      [prop]: value
    });
  };

  componentDidMount() {
    axios.get("/api/user").then(res => {
      this.props.setUser(res.data);
    });
  }

  register = () => {
      const {username, email, password} = this.state
      axios.post('/api/register', {username, password, email})
  };

  render() {
    const { username, email, password } = this.state;
    {!user ? (

        return (
            <header className="main-header">
        <div>
          <div>
            Username:{" "}
            <input
              onChange={e =>
                this.unversalCURTHandler(e.target.name, e.target.value)
            }
            value={username}
            name="username"
            />
          </div>
          <div>
            Email:{" "}
            <input
              onChange={e =>
                this.unversalCURTHandler(e.target.name, e.target.value)
            }
            value={email}
              name="email"
            />
          </div>
          <div>
            Password:{" "}
            <input
              onChange={e =>
                this.unversalCURTHandler(e.target.name, e.target.value)
              }
              type="password"
              value={password}
              name="password"
            />
          </div>
          <div>
            <button onClick={this.register} >register</button>
            <button>login</button>
          </div>
        </div>
        ): (
            <div>{JSON.stringify(user)}</div>
        )}
      </header>
    );
  }
}
const mapStateToProps = reduxState => {
    return reduxState;
};
const mapDispatchToProps = {
  setUser
};

const invokedConnect = connect();

export default Header;
