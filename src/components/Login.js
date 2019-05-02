import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          message: '',
          toDashboard: false
        };
      }

    onChange = (e) => {
        // e.preventDefault()
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
        console.log('form submitted', username, password)
    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        // After login response clg
        // console.log(result)
        this.props.onLogin(result.data.user)

        this.setState({toDashboard: true})
        // this.props.history.push('/app')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      })
    }
    render() { 
        const { username, password, message } = this.state;
        if (this.state.toDashboard === true) {
          return <Redirect to='/app' />
        }
        return ( 
            <main class="pa4 black-80 code">
                <form class="measure center" onSubmit={this.onSubmit}>
                {message !== '' &&
                    <div class="alert alert-warning alert-dismissible" role="alert">
                    { message }
                     </div>
                }
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="username"  id="email-address" value={username} onChange={this.onChange} required />
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" value={password} onChange={this.onChange} required/>
                        </div>
                    <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                    </fieldset>
      <div class="">
        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
      </div>
      <div class="lh-copy mt3">
       <Link to="/signup"></Link> <a href="#0" class="f6 link dim black db">Sign up</a>
        <a href="#0" class="f6 link dim black db">Forgot your password?</a>
      </div>
    </form>
  </main>
         );
    }
}
 
export default Login;