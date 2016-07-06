import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './ProfileImage.scss';

export class ProfileImage extends Component {

  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imageSize: PropTypes.string
  };

  render() {
    const { imageUrl, imageAlt, imageSize } = this.props;
    const classPrefix = 'ProfileImage--';
    const size = imageSize ? classPrefix + imageSize : classPrefix + 'md';
    const classes = classNames('ProfileImage u-alignMiddle', size );
    var divStyle = {
      backgroundImage: 'url(' + imageUrl + ')'
    };
    return (
      <div className="Grid-cell Grid--alignCenter">
        <div className={ classes } style={divStyle}></div>
        <h4>Isabel Lozano</h4>
        <p>Kontaktperson</p>
      </div>
    )
  }
}
