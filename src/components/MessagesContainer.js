import React, {Component} from 'react';
import CardMessage from './CardMessage'

export default class MessagesContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="p-3">
        {this.props.listMessages.map(chat => <CardMessage message={chat.message} name={chat.name} />)}
      </div>
    );
  }
}