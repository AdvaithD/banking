import React, { Component } from 'react';
import './css/SecondCta.css'
class SecondCta extends Component {
    render() { 
        return ( 
        
<article class="mw7 center ph3 ph5-ns tc br2 pv5 bg-lightest-blue black mb5">
  <h1 class="fw6 f3 f2-ns lh-title mt0 mb3">
    Signup now, get a free 30 day trial!
  </h1>
  <h2 class="fw2 f4 lh-copy mt0 mb3">
    In depth analysis of your trades, journal to add
  </h2>
  <p class="fw1 f5 mt0 mb3">
    Sign up for beta access or learn more about x.
  </p>
  <div>
    <a class="f6 br-pill bg-navy no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
      href="#">
      Sign Up
    </a>
    <a class="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
      href="#">
      Learn More
    </a>
  </div>
</article>

         );
        
    }
}
 
export default SecondCta;