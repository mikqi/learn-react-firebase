import React from 'react';

export default (props) => (
  <div className="card p-3 mt-2 text-muted" style={{maxWidth: '60%'}}>
    <div className="small">{props.name}</div>
    <span>{props.message}</span>
  </div>
);