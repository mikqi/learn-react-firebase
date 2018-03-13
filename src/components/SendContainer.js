import React, {Component} from 'react';

export default class SendContainer extends Component {
  render() {
    return (
      <div class="d-flex position-absolute justify-content-around align-items-center" style={{'width': '100%', height: '10%', background: '#f5f1ee', bottom: 0}} >
        <input className="p-2 border-0 rounded-top rounded-bottom" type="text" style={{width: '85%', outline: 'none'}} placeholder="Type a message"/>
        <button type="button" className="btn btn-primary">Send</button>
      </div>
    );
  }
}