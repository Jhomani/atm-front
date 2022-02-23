import globalEvents from '@utils/global-events';
import withReduxStore from '@utils/with-redux-store';
import Router from 'next/router';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Main from 'src/containers/Main';
// import 'nprogress/nprogress.css';
import 'styles/index.scss';

// NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', (url) => {
  // NProgress.start();
  console.log(url);
});
Router.events.on('routeChangeComplete', (url) => {
  // NProgress.done();
  console.log(url);
});
Router.events.on('routeChangeError', () => {
  // NProgress.done();
});

function MyApp({Component, pageProps, reduxStore}) {
  console.log('into re-render app');

  useEffect(() => {
    globalEvents.init();
  }, []);

  return (
    <Provider store={reduxStore}>
      <Main pageProps={pageProps} Component={Component} />
    </Provider>
  );
}

export default withReduxStore(MyApp);
