import React, { Component } from 'react';
import StickyNav from './StickyNav';
import axios from 'axios'
import { GoogleMap, Marker } from "react-google-maps"
// import './css/Signup.css'

const apikey = 'AIzaSyCrode7wSxsfPX4IlbaVh2veVDC8ab0nRc'

class Map extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    console.log('Signup submitted', username, password);

    axios.post('/api/auth/register', { username, password })
      .then((result) => {
        this.props.history.push("/login")
      });
  }
  render() { 
    const { username, password } = this.state;
    return ( 
      <article class="vh-100 dt w-100 bg-dark-blue code">
        <div class="dtc v-mid tc white ph3 ph4-l">
        <h1 className="f1">Find Nearby ATM</h1>
          <article class="pa4 black-80 code center">
            <form action="sign-up_submit" method="get" accept-charset="utf-8" onSubmit={this.onSubmit}>
              <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
                  <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                    <input class="form-control pa2 input-reset ba bg-transparent w-100 measure" name="username"  id="email-address"
                    type="email" placeholder="Email address" value={username} onChange={this.onChange} required />
                  </div>
                  <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="password">Password</label>
                    <input class="form-control b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"
                     placeholder="Password" value={password} onChange={this.onChange} required />
                  </div>
              </fieldset>
                  <div class="mt3">
                    <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" />
                  </div>
            </form>
          </article>
        </div>
      </article>
     );
  }
}
 
export default Map;
