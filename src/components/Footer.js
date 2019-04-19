import React, { Component } from 'react';
import './css/Footer.css'
class Footer extends Component {
    render() { 
        return ( <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
        <small class="f6 db tc">© 2019 <b class="ttu">Tokens.fun LLC</b>., All Rights Reserved</small>
        <div class="tc mt3">
          <a href="/language/" title="Language" class="f6 dib ph2 link mid-gray dim">Contact</a>
          <a href="/language/" title="Language" class="f6 dib ph2 link mid-gray dim">Partner with us</a>
          <a href="/terms/"    title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</a>
          <a href="/privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
        </div>
      </footer> );
    }
}
 
export default Footer;