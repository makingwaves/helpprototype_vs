// We only need to import the modules necessary for initial render
import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
import OnBoardingLayout from '../layouts/OnBoardingLayout/OnBoardingLayout';
import Home from './Home';
import HomeView from './Home/components/HomeView';
import OnBoardingView from './OnBoarding/components/OnBoardingView';
import Forms from './Forms';

//export const createRoutes = (store) => ({
//  path: '/',
//  component: CoreLayout,
//  indexRoute: Home,
//  childRoutes: [
//    {
//      component: HomeView,
//      childRoutes: [
//        Forms
//      ]
//    }
//  ]
//});

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: { component: OnBoardingView },
  childRoutes: [
    {
      component: OnBoardingLayout,
      childRoutes: [
        {
          component: OnBoardingView
        }
      ]
    },
    {
      path: 'main',
      component: MainLayout,
      indexRoute: Home,
      childRoutes: [
        {
          component: HomeView,
          childRoutes: [
            Forms
          ]
        }
      ]
    }
  ]
});

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
