import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router'
import Loader from 'react-loader';
import OnBoardingCarousel from '../../../components/OnBoardingCarousel/OnBoardingCarousel';

class OnBoardingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  static propTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    setTimeout(() => this.setState({loaded: true}), 200);
  }
  render() {
    const { router } = this.props;
    var options = {
      lines: 13,
      length: 20,
      width: 10,
      radius: 30,
      corners: 1,
      rotate: 0,
      direction: 1,
      color: '#000',
      speed: 1,
      trail: 60,
      shadow: false,
      hwaccel: true,
      zIndex: 2e9,
      top: '50%',
      left: '50%',
      scale: 1.00
    };
    return (
        <div className='Grid Grid--alignMiddle' style={{ height: '100%' }}>
          <div className='Grid-cell'>
            <Loader loaded={ this.state.loaded } options={ options }>
              <OnBoardingCarousel router={ router } />
            </Loader>
          </div>
        </div>

    )
  }
}

export default withRouter(OnBoardingView);
