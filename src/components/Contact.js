import React, { Component } from 'react';
import StickyNav from './StickyNav';
import Nav from './Nav';
import axios from 'axios'
import { GoogleMap, Marker } from "react-google-maps"
// import './css/Signup.css'

const apikey = 'AIzaSyCrode7wSxsfPX4IlbaVh2veVDC8ab0nRc'

class Contact extends Component {
  constructor() {
    super()
    this.state = {'message': '', sent: false}
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { message } = this.state
    console.log('Support ticket is being created');

    axios.post('/api/ticket', {message})
      .then((result) => {
        // this.props.history.push("/login")
        this.setState({ sent: true });
      });
  }
  render() { 
    
    const { message, sent } = this.state;
   
    return ( 
    <div className="code">
    <Nav />
      <article class="vh-100 dt w-100 bg-white code">
        <div class="dtc v-mid tc white ph3 ph4-l">
        <h1 className="f1 black">Contact Us!</h1>
        <form class="pa4 black-80">
  <div>
    <label for="comment" class="f6 b db mb2">Description</label> <br/>
    <small id="comment-desc" class="f6 black-60">Describe your issue so we can help!</small>
      
    <textarea id="comment" name="message" class="db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" onChange={this.onChange} value={message}></textarea>
    
    <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" onClick={this.onSubmit}>Submit</a>
    {sent ?
        (<div class="flex items-center justify-center pa4 bg-lightest-blue navy">
  <svg class="w1" data-icon="info" viewBox="0 0 32 32" style={{"fill":"currentcolor"}}>
    <title>info icon</title>
    <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
  </svg>
  <span class="lh-title ml3">Your message has been sent! We will get in touch soon</span>
</div>) : ''}
  </div>
</form>

    
        </div>
        
      </article>
      </div>
     );
  }
}
 
export default Contact;
