import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router'
import classNames from 'classnames';
import ChapterList from '../../../components/ChapterList/ChapterList';
import { ContractHeaderContainer } from './../../../components/ContractHeader/ContractHeader';

import './HomeView.scss';

class HomeView extends Component {
  static propTypes = {
    children: PropTypes.element,
    router: PropTypes.object.isRequired
  };

  render() {
    const { children, router } = this.props;
    console.log(router);
    const hasChildren = !!children;
    const fullHeight = {
      height: '100%'
    };
    var classes = classNames('Chapters Grid-cell', { 'u-sm-sizeFull u-md-size2of5 u-lg-size1of3' : hasChildren, 'u-sizeFull' : !hasChildren, 'u-sm-hidden' : hasChildren })
    return (
      <div style={ fullHeight }>
        <ContractHeaderContainer />
        <div className='OffsetGrid Grid' style={ fullHeight }>
          <div className={ classes }>
            <ChapterList router={ router } />
          </div>
          { hasChildren ? (
            <div className='Forms Grid-cell u-sm-sizeFull u-md-size3of5 u-lg-size2of3'>
              { children }
            </div>) : null
          }
        </div>
      </div>
    )
  }
}

//export const HomeView = ({ children }) => (
//
//  <div style={{ height: '100%' }}>
//    <div className='Grid Grid--withGutter'>
//      <div className='Grid-cell u-sm-sizeFull u-md-size1of2'>
//        <ChapterList />
//      </div>
//      <div className='Grid-cell u-sm-sizeFull u-md-size1of2'>
//        { children }
//      </div>
//    </div>
//  </div>
//
//);

//HomeView.propTypes = {
//  children: React.PropTypes.element.isRequired
//};


//
//HomeView.contextTypes = {
//  router: React.PropTypes.object.isRequired
//};

export default withRouter(HomeView);
