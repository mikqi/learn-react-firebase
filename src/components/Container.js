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
    userId: '',
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

    const messagesApp = firebase.database().ref('/messages');
    const onlineUsers = firebase.database().ref('/users');

    messagesApp.on('value', snapshot => {
      this.getDataMessages(snapshot.val(), 'chats')
    })
    
    onlineUsers.on('value', snapshot => {
      this.getDataMessages(snapshot.val(), 'users')
    })
  }

  getDataMessages(val, props) {
    const value = val
    const data = value && Object.keys(value).map(key => value[key])
    // const keys = value && Object.keys(value)
    // const lastId = keys && keys[keys.length - 1]

    // const userId = props === 'users' && this.state.userId === '' ? lastId : ''

    this.setState({
      [props]: data || [],
    }, () => console.log(this.state))
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
    debugger
    if (this.state.userId) {
      const conn = firebase.database().ref(`/users/${this.state.userId}`)
      conn.update({
        name: this.state.name
      })
    } else {
      const conn = firebase.database().ref('/users')
      const key = conn.push({
        name: this.state.name
      }).key

      this.setState({
        userId: key
      })
    }
  }

  handleUsernameChange = (e) => {
    const value = e.target.value;
    this.setState({
      name: value
    })
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
                      onChange={this.handleUsernameChange}
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
              <ListUsers users={state.users} />
            </div>
            <div className="col col-md-8 p-0" style={{
              background: '#dee3e9'
            }}>
              <MessagesContainer listMessages={state.chats} />
              <SendContainer
                onMessageChange={this.onMessageChange}
                onSendMessage={this.onSendMessage}
                message={state.message}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}