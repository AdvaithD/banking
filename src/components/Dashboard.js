import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from './Nav';
import Action from './Action';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            
            action: 'DEPOSIT',
            from: null,
            to: null,
            amount: null,
            savingsBal: null,
            checkingBal: null,
            transactions: []
          };
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('http://localhost:5000/api/book')
          .then(res => {
            this.setState({ books: res.data });
            console.log(this.state.books);
          })
          .catch((error) => {
            if(error.response && error.response.status === 401) {
              this.props.history.push("/login");
            }
          });
      }
    
    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
      }

      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    withdraw = () => {
      this.setState({ action: 'WITHDRAW' });
    }
    deposit = () => {
      this.setState({ action: 'DEPOSIT' });
    }
    transfer = () => {
      this.setState({ action: 'TRANSFER' });
    }
    // depositMoney = (e) => {
    //   e.preventDefault()
    //   const { from, to, amount } = this.state;
    //   console.log('New transfer')
    //   axios.post('/api/txn/', { from, to, amount })
    //   .then((result) => {
    //     console.log('result')
    //   });

    // }
    withdrawMoney = (e) => {
      e.preventDefault()
      // this.setState({ action: 'WITHDRAW' });
      const {amount} = this.state
      const {username} = this.props.user
      axios.post('/api/withdraw', {amount, username})
      .then((result) => {
        console.log('WITHDRAW COMPLETED', result)
        
      })
    }
    depositMoney = (e) => {
      e.preventDefault()
      // this.setState({ action: 'WITHDRAW' });
      const {amount} = this.state
      const {username} = this.props.user
      axios.post('/api/deposit', {amount, username})
      .then((result) => {
        console.log('DEPOSIT COMPLETED', result)
        
      })
    }
    
    render() { 
      console.log(this.props.user)
      const { from, to, amount } = this.state;
      let signedIn = localStorage.getItem('jwtToken')
        return ( <div className="dashboard code">

        <Nav logout={this.logout} uid={this.props.user}/>
        

        {/* Spartan Banking */}
              {/* {localStorage.getItem('jwtToken') &&
              <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0" onClick={this.logout}>Logout</a>
              } */}
              {/* <table class="table table-stripe"> */}
              {/* <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                )}
              </tbody>
            </table> */}
<div className="info">
<div class="mw9 center ph3-ns">
  <div class="cf ph2-ns">
    <div class="fl w-100 w-50-ns pa2">
      <div class="bg-white pv4">
      <article class="mw5 mw6-ns hidden ba mv4">
  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Account Info</h1>
  <div class="pa3 bt">
    <p class="f6 f5-ns lh-copy measure mv0">
       Checking Balance : {this.props.user.checkingBalance} <br/>
       Savings Balance : {this.props.user.savingsBalance} <br/>
       <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0" onClick={this.withdraw}>Withdraw</a> <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Find ATM</a> <br/>
       <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0" onClick={this.deposit}>Deposit</a> <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Support</a>  <br/>
       <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0" onClick={this.transfer}>Transfer</a> <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Support</a>  <br/>

    </p>
  </div>
</article>
      </div>
    </div>
    <div class="fl w-100 w-50-ns pa2">
      <div class="bg-white pv4">
      <Action action={this.state.action} user={this.props.user.username} withdraw={this.withdrawMoney} deposit={this.depositMoney}/>
      </div>
    </div>
  </div>
</div>


<div class="flex justify-around">
  {/* <div class="outline w-25 pa3 mr2"> */}
  <article class="mw5 mw6-ns hidden ba mv4">
  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Actions</h1>
  <div class="pa3 bt">
    <p class="f6 f5-ns lh-copy measure mv0">
       {/* Balance : $10,000 <br/> */}
       <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0" >Withdraw</a> 
       <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Find ATM</a> <br/>
       <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Deposit</a> 
       <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Support</a>  <br/>
       <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Transfer</a> 
       <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Support</a>  <br/>

    </p>
  </div>
</article>
  {/* </div> */}
  <div>
          <form accept-charset="utf-8" onSubmit={this.deposit}>
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="ph0 mh0 fw6 clip">Transfer</legend>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">Transfer Amount</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="amount" id="email-address" value={amount} onChange={this.onChange}/>
              </div>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">From</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="from" id="email-address" value={from} onChange={this.onChange} required/>
              </div>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">To</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="to" id="email-address" value={to} onChange={this.onChange} required/>
              </div>
              
            </fieldset>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" onClick={this.depositMoney}>Transfer</a>

            {/* <button onClick={this.depositMoney}></button> */}
          </form>
        </div>
  <div class="outline w-25 pa3 mr2">
    <code>3</code>
  </div>
</div>


</div>
            <footer class="pa4 pa5-l black-70 bt b--black-10">
  <div class="mb4-l cf">
    <h1 class="fl w-100 pv0 f6 fw6 ttu tracked mb4">CONTACT US</h1>
    <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
      <h4 class="f5 f4-l fw6">SF</h4>
      <span class="f7 f6-l db black-70">837 Larkin St.</span>
      <span class="f7 f6-l black-70">San Francisco, CA 94109 </span>
      <a class="f6 db fw6 pv3 black-70 link dim" title="Call SF" href="tel:+12075555555">
        +1 207-555-5555
      </a>
    </article>
    <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl0-ns">
      <h4 class="f5 f4-l fw6">LA</h4>
      <span class="f7 f6-l db black-70">
        1111 Manor Way
      </span>
      <span class="f7 f6-l di black-70">
        Los Angeles, CA 90048
      </span>
      <a href="tel:+13235555555" class="f6 db fw6 pv3 link dim black-70" title="Call the LA office.">
        +1 323-555-5555
      </a>
    </article>
    <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
      <h4 class="f5 f4-l fw6">London</h4>
      <span class="f7 f6-l db black-70">11 Downey St.</span>
      <span class="f7 f6-l black-70">London, UK</span>
      <a href="tel:+5555555555" class="link dim f6 db fw6 pv3 black-70" title="Call the London office">+44 0 5555-5555</a>
    </article>
    <article class="fl w-50 dib-ns w-auto-ns mb4 pl2 pl0-ns">
      <h4 class="f5 f4-l fw6">Tokyo</h4>
      <span class="f7 f6-l db black-70">1982 Flangan Rd.</span>
      <span class="f7 f6-l">Shinjuku, Tokyo</span>
      <a href="tel:+444444444444" class="f6 db dim fw6 pv3 link black-70" title="Call Tokyo Office">
        +99 5555-5555
      </a>
    </article>
  </div>
  <section class="cf mb5">
    <div class="mb4 mb0-ns w-100 w-50-l fr">
      <a class="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:hello@impossible.com" >
        hello@yourcompany.com
      </a>
    </div>
    <div class="mb4 mb0-ns fl w-100 w-50-l" >
      <p class="f4 fw6 mb2 f6 mt0">
        Sign up for our newsletter.
      </p>
      <input placeholder="Email Address" class="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"/>
      <input type="submit" class="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"/>
    </div>
  </section>
  <div class="dt dt--fixed w-100" >
    <div class="dn dtc-ns v-mid">
      <p class="f7 black-70 dib pr3 mb3">
        Copyright © Your Company 2048
      </p>
    </div>
    <div class="db dtc-ns black-70 tc tr-ns v-mid">
      <a href="https://www.facebook.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Facebook">
        <svg class="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
          <title >facebook icon</title>
          <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
          ></path>
        </svg>
      </a>
      <a href="https://twitter.com/" class="link dim dib mr3 black-70">
        <svg class="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
          fill="currentColor" >
          <title >twitter icon</title>
          <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
          ></path>
        </svg>
      </a>
      <a href="https://medium.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Medium">
        <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 290 248.6"
          fill="currentColor" >
          <g >
            <path fill="currentColor" class="st0" d="M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z"
            ></path>
            <polygon fill="currentColor" points="105.2,61.2 105.2,160.3 193.3,204.4 	"
            ></polygon>
            <path fill="currentColor" d="M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z"
            ></path>
            <path fill="currentColor" d="M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z"
            ></path>
          </g>
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/" class="link dim dib black-70">
        <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
          <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
            y1="0" x2="23.9995" y2="48.0005" >
            <stop offset="0" ></stop>
            <stop offset="1" ></stop>
          </linearGradient>
          <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
          ></path>
          <g >
            <g >
              <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
              ></path>
            </g>
          </g>
        </svg>
      </a>
    </div>
  </div>
  <div class="db dn-ns">
    <p class="f7 black-70 mt4 tc">
      Copyright © Spartan Banking 2038
    </p>
  </div>
</footer>


        </div>);
    }
}
 
export default Dashboard;