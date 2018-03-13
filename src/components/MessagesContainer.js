import React, {Component} from 'react';
import CardMessage from './CardMessage'

const dummyChat = [
  {
    name: 'Unyil',
    message: 'Hello guys apa kabar?'
  }, {
    name: 'Usro',
    message: 'Heyy unyil apa kabar?'
  }, {
    name: 'Unyil',
    message: 'Ehh. usro. Baik sro.'
  }, {
    name: 'Pak Ogah',
    message: 'Ehh. Bagi cepe dong den.'
  }
]

export default class MessagesContainer extends Component {
  render() {
    return (
      <div className="p-3">
        {dummyChat.map(chat => <CardMessage message={chat.message} name={chat.name} />)}
      </div>
    );
  }
}