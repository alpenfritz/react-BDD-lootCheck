import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  render() {
    return (
      <div className="balance">
        <h3>Wallet balance: {this.props.balance}</h3>
      </div>
    );
  }
}

export default connect(state => { return { balance: state } })(Wallet);
