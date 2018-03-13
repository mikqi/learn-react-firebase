import React, {Component} from 'react';
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

export default class Container extends Component {
  render() {
    return (
      <div style={styles.centerCenter}>
        <div className="container card" style={{height: 600, boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 10px 0px', borderRadius: 5}}>
          <div className="row" style={{height: '100%'}}>
            <div className="col col-md-4" style={{background: '#fafafa'}}>
              <ListUsers />
            </div>
            <div className="col col-md-8 p-0" style={{
              background: '#dee3e9'
            }}>
              <MessagesContainer />
              <SendContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}