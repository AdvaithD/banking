import React, { Component } from 'react'
import Router from './Router'
class Root extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  onLogin = (user) => {
      this.setState({ user });
  }
  render () {
    return (<Router onLogin={this.onLogin} user={this.state.user}/>)
  }
}

export default Root
