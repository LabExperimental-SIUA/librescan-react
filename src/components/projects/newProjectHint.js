import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-12">
      <h1> No projects to show, hit  <div>
        <Link to="/projects/new"> New Project </Link>
      </div>to create a new project</h1>
    </div>
  )
}