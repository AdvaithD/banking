import React, { Component } from 'react';

class Features extends Component {
    render() { 
        return ( <div className="features">

<div class="tl bt b--black-10 pa3 pa5-ns bg-lightest-blue navy code" id="principles">
            <div class="mw9 center">
            <h3 className="f1 center tc">Features</h3>
              {/* <h1 class="f5 ttu tracked fw6">Principles</h1> */}
              <section class="lh-copy">
                <div class="cf">
                  <article class="fl pv2 w-100 w-third-l pr4-l">
                    <h2 class="f5 f4-ns fw6 mb0">Telegram Alerts</h2>
                    <p class="f6 f5-ns measure lh-copy mt0">
                      Choose from over 49 indicators, twitter activity coupled with realtime market data to create telegram alerts!
                    </p>
                  </article>
                  <article class="pv2 fl w-100 w-third-l ph3-l">
                    <h2 class="f5 f4-ns fw6 mb0">Portfolio Trakcer</h2>
                    <p class="f6 f5-ns measure lh-copy mt0">
                      Keep a check on your portfolio, track orders and analyse your trading activity.
                    </p>
                  </article>
                  <article class="pv2 fl w-100 w-third-l pl4-l">
                    <h2 class="f5 f4-ns  fw6 mb0">
                      Backtesting Engine
                    </h2>
                    <p class="f6 f5-ns measure lh-copy mt0">
                      Test your trading strategies and assess profitability and returns. We cover Bittrex, Binance, Poloniex, Coinbase and Kraken.
                    </p>
                  </article>
</div>
<div class="cf w-100">
                  <article class="pv2 fl w-100 w-third-l pl0 pr4-l">
                    <h2 class="f5 f4-ns fw6 mb0">Trade Ideas</h2>
                    <p class="f6 f5-ns measure lh-copy mt0">
                     Get alerts based on market movements for potential trade setups.
                    </p>
                  </article>
                  <article class="pv2 fl w-100 w-third-l ph3-l">
                    <h2 class="f5 f4-ns  fw6 mb0">Order Flow</h2>
                    <p class="f6 f5-ns measure lh-copy mt0">
                      Analyse buying and selling pressure, market microstructure and affect on position size
                    </p>
                  </article>
                  <article class="pv2 fl w-100 w-third-l pl4-l">
                    <h2 class="f5 f4-ns fw6 mb0">
                      Reusable
                    </h2>
                    <p class="f6 f5-ns measure lh-copy mt0">
                      Clear documentation helps create a shared understanding of design patterns amongst your team.
                      This helps promote reuse and reduces the amount of redundancy in a codebase.
                    </p>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </div> );
    }
}
 
export default Features;