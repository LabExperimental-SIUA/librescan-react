import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';

export default class PreferencesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {thumbnails: props.thumbnails}
  }

  updateThumbnailsProperty = (property, event) => {
    this.setState({thumbnails: {...modifyThumbnailsState(this.state, property, event.target.value)}});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.updateThumbnailsView(this.state.thumbnails);
    this.props.updateViewVisibility('preferences', false);
  };

  onButtonCloseClick = () => {
    this.props.updateViewVisibility('preferences', false);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="number" onChange={this.updateThumbnailsProperty.bind(this, 'width')} value={this.state.thumbnails.width}/>
        <input type="number" onChange={this.updateThumbnailsProperty.bind(this, 'height')} value={this.state.thumbnails.height}/>
        <button type="submit" className="btn btn-primary"><Translate value="application.save"/></button>
        <button className="btn btn-dark" onClick={this.onButtonCloseClick}><Translate value="application.cancel"/></button>
      </form>
    );
  }
}

const modifyThumbnailsState = (state, property, value) => {
  return {
  ...state.thumbnails,
    [property]: value
  };
};