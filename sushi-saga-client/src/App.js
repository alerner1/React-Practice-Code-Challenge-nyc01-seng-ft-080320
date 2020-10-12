import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    startIndex: 0, 
    eaten: [],
    balance: '100.00'
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(json => this.setState({sushis: json}))
  }

  moreSushi = () => {
    this.setState(prev => ({
      startIndex: prev.startIndex + 4 === prev.sushis.length ? 0 : prev.startIndex + 4
    }))
  }

  wasEaten = sushi => {
    this.setState(prev => ({
      eaten: [...prev.eaten, sushi], 
      balance: parseInt(prev.balance.split('.')[0], 10) - sushi.price + '.' + prev.balance.split('.')[1]
    }))
  }

  appHandleSubmit = deposit => {
    if (!deposit.split('.')[1]) {
      deposit = deposit + '.00';
    }
    let depositCents = deposit.split('.')[1];
    if (!depositCents.charAt(1)) {
      depositCents = depositCents + '0';
    }
    if (depositCents.charAt(0) === '0') {
      depositCents = depositCents.charAt(1);
    }
    let balanceCents = this.state.balance.split('.')[1];
    if (balanceCents.charAt(0) === '0') {
      balanceCents = balanceCents.charAt(1);
    }
    let newBalanceCents = parseInt(balanceCents, 10) + parseInt(depositCents, 10);
    if (newBalanceCents < 10) {
      newBalanceCents = '0' + newBalanceCents;
    }
    this.setState(prev => ({
      balance: parseInt(prev.balance.split('.')[0], 10) + parseInt(deposit.split('.')[0], 10) + '.' + newBalanceCents
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          eaten={this.state.eaten} 
          balance={this.state.balance} 
          wasEaten={this.wasEaten} 
          moreSushi={this.moreSushi} 
          sushis={this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)} />
        <Table 
          appHandleSubmit={this.appHandleSubmit} 
          balance={this.state.balance} 
          eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;