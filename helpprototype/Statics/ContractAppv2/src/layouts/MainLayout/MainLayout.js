import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './MainLayout.scss';
import '../../styles/core.scss';

export const MainLayout = ({ children }) => (
  <div style={{ height: '100%' }}>
    <div className='MainHeader Grid Grid--alignMiddle'>
      <div className='Grid-cell u-size3of5'>Min side</div>
      <div className='Grid-cell Grid--alignRight u-size1of5'>test</div>
      <div className='Grid-cell Grid--alignRight u-size1of5'>test</div>
    </div>
    <div className='Container-inner'>
      { children }
    </div>
  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default MainLayout;
