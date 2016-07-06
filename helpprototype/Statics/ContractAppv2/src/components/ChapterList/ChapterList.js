import React, { Component, PropTypes } from 'react';
import { ChapterItemContainer } from './ChapterItem/ChapterItem';

import './ChapterList.scss';

class ChapterList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  static propTypes = {
    router: PropTypes.object.isRequired
  };

  handleClick(id) {
    this.props.router.push('/step/' + id);
  }

  handleTouchTap(id) {
    this.props.router.push('/step/' + id);
  }

  handleCloseClick() {
    this.props.router.push('/');
  }

  render() {
    const { router } = this.props;
    return (
      <div className='ChapterList u-flex u-flexCol'>
        <ChapterItemContainer stepId='realestates' router={ router } title='Eiendom' bgClass='houseBg' />
        <ChapterItemContainer stepId='commonrealestate' router={ router } title='Kjøretøy' bgClass='vehicleBg' />
        <ChapterItemContainer stepId='other' router={ router } title='Annet' bgClass='deptBg' />
      </div>
    )
  }
}

export default ChapterList;
