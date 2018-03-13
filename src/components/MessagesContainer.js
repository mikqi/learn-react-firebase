import React, {Component} from 'react';
import CardMessage from './CardMessage'

export default class MessagesContainer extends Component {
  render() {
    return (
      <div className="p-3">
        <CardMessage />
        <CardMessage />
        <CardMessage />
      </div>
    );
  }
}