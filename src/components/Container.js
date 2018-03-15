import React, { Component } from 'react';
import firebase from 'firebase'
import ListUsers from './ListUsers'
import SendContainer from './SendContainer'
import MessagesContainer from './MessagesContainer'

const styles = {
  centerCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    width: '100%',
    background: '#f5f5f5'
  }
}

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

const dummyUsers = [
  {
    name: 'Si Unyil',
  }, {
    name: 'Si Usro'
  }, {
    name: 'Si Ucrit',
  }, {
    name: 'Pak Ogah'
  }, {
    name: 'Pak Raden'
  }, {
    name: 'Si Memey'
  }
]

export default class Container extends Component {
  state = {
    name: '',
    message: '',
    users: dummyUsers,
    chats: dummyChat,
    isEditUsername: false,
  }

  constructor(props) {
    super(props)
    const config = {
      apiKey: "AIzaSyCI_YMZ4bTlyULMzv9mfExaxRjPx3LYoHU",
      authDomain: "fir-realtime-webapps.firebaseapp.com",
      databaseURL: "https://fir-realtime-webapps.firebaseio.com",
      projectId: "fir-realtime-webapps",
      storageBucket: "fir-realtime-webapps.appspot.com",
      messagingSenderId: "983536714376"
    };
    firebase.initializeApp(config)

    this.onMessageChange = this.onMessageChange.bind(this)
    this.onSendMessage = this.onSendMessage.bind(this)
    this.handleUsername = this.handleUsername.bind(this)

    const app = firebase.database().ref('/messages');
    app.on('value', snapshot => {
      this.getDataMessages(snapshot.val())
    })
  }

  getDataMessages(val) {
    const messages = val
    const messageData = Object.keys(messages).map(key => messages[key])

    this.setState({
      chats: messageData
    })
  }

  onMessageChange(el) {
    const message = el.target.value
    this.setState({ message })
    console.log(this.state)
  }

  onSendMessage() {
    const payload = {
      name: this.state.name,
      message: this.state.message
    }
    const newChat = [...this.state.chats, payload]

    const conn = firebase.database().ref('/messages')
    conn.push(payload)

    this.setState({
      message: '',
      chats: newChat
    })
  }

  handleUsername() {
    this.setState({ isEditUsername : !this.state.isEditUsername})
  }

  render() {
    console.log(firebase)
    const state = this.state
    return (
      <div style={styles.centerCenter}>
        <div className="container card" style={{ height: 600, boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 10px 0px', borderRadius: 5 }}>
          <div className="row" style={{ height: '100%' }}>
            <div className="col col-md-4" style={{
              background: '#fafafa',
              overflowY: 'scroll',
            }}>
              <div className="mb-4 mt-4 pl-3 pr-3 row">
                <div className="col-md-8 pr-0">
                  {state.isEditUsername ? 
                    <input
                      type="text"
                      placeholder="Atur Username"
                      value={state.name}
                      className="form-control"/>
                    : <span className="h5">{state.name !== '' ? state.name : 'Atur Username'}</span>
                  }
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary" onClick={this.handleUsername}>
                    {state.isEditUsername ? 'Simpan' : 'Ubah'}
                  </button>
                </div>
              </div>
              <h4 className="pl-3 mt-4">Active User</h4>
              <ListUsers users={dummyUsers} db={firebase} />
            </div>
            <div className="col col-md-8 p-0" style={{
              background: '#dee3e9'
            }}>
              <MessagesContainer listMessages={this.state.chats} db={firebase} />
              <SendContainer
                db={firebase}
                onMessageChange={this.onMessageChange}
                onSendMessage={this.onSendMessage}
                message={this.state.message}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}