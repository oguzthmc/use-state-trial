import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateSample = () => {
  const [name, setName] = useState('Jonathan');
  const [address, setAddress] = useState('Birmingham');

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Thomas')}>Set Name to Thomas</button>
      <button onClick={() => setAddress('London')}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Jonathan',
      address: 'London'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Thomas' })}>
          Set Name to Thomas
        </button>
        <button onClick={this.setState({ address: 'Birmingham' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateSample;