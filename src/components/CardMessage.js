import React from 'react';

const CardMessage = (props) => (
  <div className="card p-3 mt-2 text-muted" style={{maxWidth: '60%'}}>
    <div className="small">{props.name}</div>
    <span>{props.message}</span>
  </div>
);

export default CardMessage;
