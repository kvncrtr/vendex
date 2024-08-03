import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ icon: Icon, label, isActive, onClick, to, size }) => (
  <li className={`menu--item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <Icon size={size} />
    <Link className="menu--link" to={to}>
      <span className="menu--link-text">{label}</span>
    </Link>
  </li>
);

export default MenuItem;