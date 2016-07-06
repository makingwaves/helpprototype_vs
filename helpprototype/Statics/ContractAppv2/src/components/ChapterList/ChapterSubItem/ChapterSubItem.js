import React, { Component, PropTypes } from 'react';

class ChapterSubItem extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  };

  render() {
    const { title, description } = this.props;
    return (
      <li className='Grid Grid--alignMiddle'>
        <div className='Grid-cell u-sizeFill'>
          <h3 className='ChapterSubItem-heading'>{ title }</h3>
        </div>
        <div className='Grid-cell u-sizeFit'>
          &nbsp;
        </div>
      </li>
    )
  }
}

export default ChapterSubItem;
