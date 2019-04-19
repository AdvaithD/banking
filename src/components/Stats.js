import React, { Component } from 'react';
import './css/Stats.css'

class Stats extends Component {
    
    render() { 
        return ( <article class="pa3 pa5-ns tc" data-name="slab-stat">
        {/* <h1 class="tl" style={{paddingLeft: '20px'}}>Today</h1> */}
        <dl class="dib mr5">
          <dd class="f6 f5-ns b ml0">AUM</dd>
          <dd class="f3 f2-ns b ml0">$1 Billion</dd>
        </dl>
        <dl class="dib mr5">
          <dd class="f6 f5-ns b ml0">Users</dd>
          <dd class="f3 f2-ns b ml0">1.5 Million</dd>
        </dl>
        <dl class="dib mr5">
          <dd class="f6 f5-ns b ml0">Avg. Customer Support Response</dd>
          <dd class="f3 f2-ns b ml0">5 min</dd>
        </dl>
        <dl class="dib mr5">
          <dd class="f6 f5-ns b ml0">Daily Transactions</dd>
          <dd class="f3 f2-ns b ml0">500,000</dd>
        </dl>
        
      </article> );
    }
}
 
export default Stats;