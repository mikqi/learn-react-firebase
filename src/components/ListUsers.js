import React, {Component} from 'react';

export default class ListUsers extends Component {
  render() {
    return (
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-secondary border-0 bg-transparent">Cras justo odio</li>
        <li class="list-group-item text-secondary border-0 bg-transparent">Dapibus ac facilisis in</li>
        <li class="list-group-item text-secondary border-0 bg-transparent">Morbi leo risus</li>
        <li class="list-group-item text-secondary border-0 bg-transparent">Porta ac consectetur ac</li>
        <li class="list-group-item text-secondary border-0 bg-transparent">Vestibulum at eros</li>
      </ul>
    );
  }
}