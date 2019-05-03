import React, { Component } from 'react'

class Action extends Component {
  constructor (props) {
    super(props)
    this.state = {
      from: '',
      to: '',
      amount: null }
  }
  render () {
    let { from, to, amount } = this.state
    let { action } = this.props

    if (action == 'WITHDRAW') {
      return (
        <div>
          <form action="sign-up_submit" method="get">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="ph0 mh0 fw6 clip">WITHDRAW</legend>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">Withdraw Amount</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="amount" value={amount} onChange={this.onChange} id="email-address" />
              </div>
            </fieldset>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" onClick={this.props.withdrawMoney}>WITHDRAW</a>
          </form>
        </div>
      )
    } else if (action == 'DEPOSIT') {
      return (
        <div>
          <form action="sign-up_submit" method="get">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="ph0 mh0 fw6 clip">DEPOSIT</legend>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">Deposit Amount</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="amount" value={amount} id="email-address" />
              </div>
            </fieldset>
            <div class="mt3">
              <a class="f6 link dim ba ph3 pv2 mb2 dib black" onClick={this.props.depositMoney}>DEPOSIT</a>

            </div>
          </form>
        </div>
      )
    } else if (action == 'TRANSFER') {
      return (
        <div>
          <form onSubmit={this.deposit}>
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="ph0 mh0 fw6 clip">Transfer</legend>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">Transfer Amount</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="amount" id="email-address" value={amount} onChange={this.onChange}/>
              </div>
              {/* <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">From</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="from" id="email-address" value={from} onChange={this.onChange} required/>
              </div> */}
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">To</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="to" id="email-address" value={to} onChange={this.onChange} required/>
              </div>

            </fieldset>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" onClick={this.transferMoney}>Transfer</a>

            {/* <button onClick={this.depositMoney}></button> */}
          </form>
        </div>
      )
    }
  }
}

export default Action
