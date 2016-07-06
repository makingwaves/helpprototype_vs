import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Slider from 'react-slick';
import { PersonIconHeaderContainer } from './PersonIconHeader';
import PartnerForm from './PartnerForm/PartnerForm';
import Partner2Form from './PartnerForm/PartnerForm2';

import './OnBoardingCarousel.scss';

//function SliderButton ({ children, onClick }) {
//  return <button className='SlideNavigation' onTouchTap={onClick}>{children}</button>
//}

class OnBoardingCarousel extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  static propTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    const mySlider = ReactDOM.findDOMNode(this.myTestRef);
    this.hiddenNext = mySlider.querySelector('.slick-next');
    this.hiddenPrev = mySlider.querySelector('.slick-prev');
  }

  handleSubmit(data) {
    console.log(data);
  }

  next(e) {
    const that = this.hiddenNext;
    setTimeout(function() {
      that.click();
    },300);

  }
  prev(e) {
    const that = this.hiddenPrev;
    setTimeout(function() {
      that.click();
    },300);
  }

  render() {
    const { router } = this.props;
    var settings = {
      dots: true,
      infinite: false,
      centerMode: false,
      draggable: false,
      lazyLoad: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [ { centerMode: false, infinite: false, breakpoint: 768, settings: { slidesToShow: 1 } } ]
    };
    return (
      <Slider {...settings} ref={(ref) => this.myTestRef = ref}>
        <div>
          <div className='OnBoarding'>
            <div>
              <h2 className='OnBoarding-title'>Velkommen til Samboeravtale</h2>
            </div>
            <div className='OnBoarding-description'>
              <p>For å etablere avtalen trenger vi å vite litt mer om dere</p>
            </div>
            <div>
              <PartnerForm onSubmit={ this.handleSubmit } handleAddPartnerClick={ () => this.next(event) } />
            </div>
          </div>
        </div>
        <div>
          <div className='OnBoarding'>
            <div>
              <PersonIconHeaderContainer />
            </div>
            <div className='OnBoarding-description'>
              <p>
                For å fylle inn avtalen trenger
                vi å vite litt om samboeren din</p>
            </div>
            <div>
              <Partner2Form onSubmit={ this.handleSubmit } />
              <button className='StepButton' onClick={() => this.next(event) }>Neste</button>
            </div>
          </div>
        </div>
        <div>
          <div className='OnBoarding'>
            <div>
              <h2 className='OnBoarding-title'>For en god avtale trenger vi
                informasjon om:</h2>
            </div>
            <div className='OnBoarding-description'>
              <ul className='Checklist'>
                <li><span>Eiendom</span></li>
                <li><span>Kjøretøy</span></li>
                <li><span>Lån og gjeld</span></li>
                <li><span>Andre verdisaker</span></li>
              </ul>
            </div>
            <div>
              <button className='StepButton' onClick={() => this.next(event) }>Neste</button>
            </div>
          </div>
        </div>
        <div>
          <div className='OnBoarding'>
            <div>
              <h2 className='OnBoarding-title'>Tilgang til hjelp underveis</h2>
            </div>
            <div className='OnBoarding-description'>
              <p>
                Du får hjelp av våre advokater ved å
                trykke på dette symbolet
              </p>
              <div className='HelpBubble HelpBubble--middle u-marginTop--double'>
                <span className='HelpBubble-label HelpBubble-label--name'>Janne</span>
              </div>
            </div>
            <div>
              <button className='StepButton' onClick={() => this.next(event) }>Neste</button>
            </div>
          </div>
        </div>
        <div>
          <div className='OnBoarding'>
            <div>
              <h2 className='OnBoarding-title'>Alltid lagret underveis</h2>
            </div>
            <div className='OnBoarding-description'>
              <p>Avtalen blir automatisk lagret underveis under prossessen</p>
              <div className='HelpBubble HelpBubble--middle HelpBubble--overflow u-marginTop--double'>
                <span className='HelpBubble-label HelpBubble-label--save'>Lagret</span>
                <div className='HelpBubble-paper'></div>
              </div>
            </div>
            <div>
              <button className='StepButton' onClick={() => router.push('main')}>Start avtalen</button>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default OnBoardingCarousel;
