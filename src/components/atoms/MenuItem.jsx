import React from 'react';

const MenuItem = ({ icon: Icon, label, isActive, onClick, size }) => (
  <li className={`menu--item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <Icon size={size} />
    <div>{label}</div>
  </li>
);

export default MenuItem;