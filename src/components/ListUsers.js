import React, {Component} from 'react';

export default class ListUsers extends Component {
  render() {
    const users = this.props.users
    return (
      <ul className="list-group list-group-flush">
        {users.map((user, i) => (
          <li key={i} className="list-group-item text-secondary border-0 bg-transparent">{user.name}</li>
        ))}
      </ul>
    );
  }
}