import React, {Component} from 'react';

export default class ListUsers extends Component {
  render() {
    const users = this.props.users
    if (users.length > 0) {
      return (
        <ul className="list-group list-group-flush">
          {users.map((user, i) => (
            <li key={i} className="list-group-item text-secondary border-0 bg-transparent">{user.name}</li>
          ))}
        </ul>
      );
    }

    return (
      <h6 className="pl-3">No Active User</h6>
    )
  }
}