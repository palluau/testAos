import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: '',
    };
    this.logIn = this.logIn.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(event, field) {
    this.setState({
      [field]: event.target.value
    });
  }

  async logIn() {
    const response = await fetch('http://localhost:4000/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    }).then((response) => response.json());
    if (response.success) {
      this.setState({
        error: ''
      });
      this.props.history.push("/success");
    } else {
      this.setState({
        error: response.message
      });
    }
  }

  render() {
    const { email, password, error } = this.state
    return (
      <Grid container className="root" justify="center" alignContent="center">
        <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
          <Paper className="login-container">
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12}>
                <h3 className="title">Welcome</h3>
              </Grid>
              <Grid item xs={7}>
                <TextField required fullWidth id="email" value={email} label="Email" type="email" onChange={(event) => this.handleFieldChange(event, 'email')}/>
              </Grid>
              <Grid item xs={7}>
                <TextField required fullWidth id="password" value={password} label="Password" type="password" onChange={(event) => this.handleFieldChange(event, 'password')}/>
              </Grid>
              <Grid item xs={7}>
                <Button className="login-btn" id="login-btn" variant="contained" color="primary" onClick={this.logIn}>
                  Log In
                </Button>
              </Grid>
              {error !== '' && 
                <Grid item xs={12}>
                  <div id="error" className="error-text">{error}</div>
                </Grid>}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(App);
