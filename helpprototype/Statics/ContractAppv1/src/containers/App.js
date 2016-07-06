import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sticky from 'react-stickynode';
import { HelpForm } from './../components/HelpForm/HelpForm';
import ContactForm from './../components/HelpForm/HelpFormRedux';
import { HelpFormNavigationContainer } from './../components/HelpFormNavigation/HelpFormNavigation';
import { ProfileImage } from './../components/ProfileImage/ProfileImage';
import { TestContent } from './../components/TestContent';
import { changePageHeader } from './../redux/modules/pageHeader';

import 'waypoints/lib/jquery.waypoints';

// HELP Material UI Theme
import { helpTheme } from './../constants/helpTheme';
const muiHelpTheme = getMuiTheme(helpTheme);

const image = require('./../static/images/torhild_holth-500x644.jpg');

function getRelatedNavigation(el){
  console.log(el.element.id);
  return $('.FormNavigation a[href=#'+el.element.id+']');
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  static propTypes = {
    pageHeader: PropTypes.object.isRequired
  };

  componentDidMount() {
    const dispatch = this.props.dispatch;

    $('.Chapter').waypoint(function(direction) {
      var waypoint = this;
      var isFirst = this.group.first() == this; // Is this the top waypoint?
      // If we're scrolling up and this waypoint isn't the top one,
      // we want to set the text to the *previous* waypoint's title
      if (direction === 'up' && !isFirst) {
        waypoint = this.previous()
      }
      var title = $(waypoint.element).attr('data-chapter-title');
      var id = $(waypoint.element).attr('data-chapter-id');
      let pageHeaderObject = {
        pageHeaderId: id,
        pageHeaderTitle: title
      };
      $('.FormNavigation a').removeClass('active');
      getRelatedNavigation(waypoint).toggleClass('active');
      dispatch(changePageHeader(pageHeaderObject));
      console.log(pageHeaderObject);
    },
    {
      offset: '50px'
    });
  }

  render() {
    const { pageHeader } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiHelpTheme}>
        <div className="Page">
          <div className="Page-header Grid">
            <div className="Grid-cell u-size1of5">
              <div className="Page-logo Grid Grid--alignCenter">
                <ProfileImage imageUrl={"/Statics/dist/" + image} imageAlt="Advokat" imageSize="lg" />
              </div>
            </div>
            <div className="Grid-cell u-size4of5">
              <div className="Grid Grid--alignBottom FullHeight">
                <h1 className="Grid-cell Page-title">Samboerkontrakt</h1>
              </div>
            </div>
          </div>
          <div className="Grid">
            <div className="LeftNavigation Grid-cell u-size1of5">
              <HelpFormNavigationContainer />
            </div>
            <div id="FormContainer" className="Grid-cell u-size4of5">
              <HelpForm />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export const AppContainer = connect(state => ({
    pageHeader: state.pageHeader
  })
)(App);
