import React, {Component} from 'react';

export default class ListUsers extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-secondary border-0 bg-transparent">Cras justo odio</li>
        <li className="list-group-item text-secondary border-0 bg-transparent">Dapibus ac facilisis in</li>
        <li className="list-group-item text-secondary border-0 bg-transparent">Morbi leo risus</li>
        <li className="list-group-item text-secondary border-0 bg-transparent">Porta ac consectetur ac</li>
        <li className="list-group-item text-secondary border-0 bg-transparent">Vestibulum at eros</li>
      </ul>
    );
  }
}