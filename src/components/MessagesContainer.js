import React, {Component} from 'react';
import CardMessage from './CardMessage'

export default class MessagesContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        className="p-3"
        style={{
          overflowY: 'scroll',
          height: '90%'
        }}
      >
        {this.props.listMessages.map((chat, i) => <CardMessage key={i} message={chat.message} name={chat.name} />)}
      </div>
    );
  }
}