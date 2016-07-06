import React from 'react';

export const OnBoardingLayout = ({ children }) => (
  <div>
    { children }
  </div>
);

OnBoardingLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default OnBoardingLayout;
