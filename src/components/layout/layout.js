import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class ApplicationComponent extends Component {
    render() {
      return (
        <div>
          <Header title={this.props.title}/>
          <div className="application-component container-fluid" style={{marginTop: '50px'}}>
            <ComposedComponent {...this.props} />
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = ({title}) => {
    return {title};
  };

  return connect(mapStateToProps)(ApplicationComponent);
}