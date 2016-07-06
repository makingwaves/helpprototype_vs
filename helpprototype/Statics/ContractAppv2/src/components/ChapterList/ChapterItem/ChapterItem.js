import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ChapterSubItem from './../ChapterSubItem/ChapterSubItem';
import classNames from 'classnames';

import './ChapterItem.scss';

class ChapterItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.renderChapterSubItems = this.renderChapterSubItems.bind(this);
  }

  static propTypes = {
    title: PropTypes.string,
    stepId: PropTypes.string.isRequired,
    bgClass: PropTypes.string,
    form: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  handleClick(id) {
    if(id === 'realestates'){
      this.props.router.push('/step/' + id);
    }
  }

  handleTouchTap(id) {
    if(id === 'realestates'){
      this.props.router.push('/step/' + id);
    }
  }

  renderChapterSubItems(realestates) {
    return realestates.map((realEstate, index) => {
      if((realEstate.name && realEstate.name.value)) {
        return <ChapterSubItem key={'realestate_subItem_' + index } title={ realEstate.name.value } description={ realEstate.description.value } />
      }
    })
  }

  render() {
    const { title, stepId, bgClass, form } = this.props;
    let chapterItems;
    if(form && form.stepData && form.stepData.realestates && form.stepData.realestates.realestate && stepId === 'realestates') {
      chapterItems = this.renderChapterSubItems(form.stepData.realestates.realestate);
    }
    const topClasses = classNames('ChapterItem-top', { [`ChapterItem-top-${bgClass}`]: bgClass });
    return (
      <div className='ChapterItem'>
        <div className={ topClasses }>
          <div className='Grid Grid--alignMiddle'>
            <h2 className='ChapterItem-heading Grid-cell u-sizeFill'>{ title }</h2>
            <a onClick={ () => this.handleClick(stepId) } className='AddButton Grid-cell u-sizeFit'>
              <div className='Icon Icon-slot Icon-slot--sm u-sizeFit'><span className='u-inlineBlock'>+</span></div>
            </a>
          </div>
        </div>
        <div className='ChapterSubItem'>
          <ul>
            { chapterItems }
          </ul>
        </div>
      </div>
    )
  }
}

export const ChapterItemContainer = connect((state) => ({
  form: state.form
}))(ChapterItem);
