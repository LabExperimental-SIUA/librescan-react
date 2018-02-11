import React from 'react';


const Header = (props) => {
  return (
    <div className="header" style={{
      position: 'fixed',
      height: '50px',
      width: '100%',
      top: '0',
      left: '0',
      backgroundColor: 'grey'
    }}>
      <h2>{props.title}</h2>

    </div>
  );
};

export default Header;


/*
import { Link } from 'react-router-dom';

<div>
  <Link to="/projects/new"> New Project </Link>
</div>

*/