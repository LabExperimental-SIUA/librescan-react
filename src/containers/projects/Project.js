import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="container-fluid"/>
    );
  }

}

export default connect()(Project);

