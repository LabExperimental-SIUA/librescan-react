import React, { Component } from 'react';
import { translate } from 'react-i18next';

class TranslatedText extends Component {

  constructor(props) {
    super(props);
    this.template = this.template.bind(this);
  }

  template(strings, ...keys) {
    return (function (...values) {
      let dict = values[values.length - 1] || {};
      let result = [strings[0]];
      keys.forEach(function (key, i) {
        let value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
      });
      return result.join('');
    });
  };

  render() {
    const {t} = this.props;

    const closure = eval('this.template`'+t(this.props.id)+'`');

    return (
      <span>{closure(...this.props.values || [])}</span>
    );
  }
}

export default translate('translations')(TranslatedText);

/**
 Usage
 var t1Closure = template`${0}${1}${0}!`;
 t1Closure('Y', 'A');  // "YAY!"
 var t2Closure = template`${0} ${'foo'}!`;
 t2Closure('Hello', {foo: 'World'});  // "Hello World!"
 */