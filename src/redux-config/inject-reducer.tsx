import hoistNonReactStatics from 'hoist-non-react-statics';
import React from 'react';
import {
ReactReduxContext
} from 'react-redux';
import getInjectors from './reducer-injectors';

const injectReducerWrapper = ({key, reducer}) => WrappedComponent => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;

    static contextType = ReactReduxContext;

    static displayName = `withReducer(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    constructor(props, context) {
      super(props, context);

      getInjectors(context.store).injectReducer(key, reducer);
    }

    render() {
      return (<WrappedComponent {...this.props} />);
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};

const useInjectReducer = ({key, reducer}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const context: any = React.useContext(ReactReduxContext);

  React.useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer);
  }, []);

};

export {useInjectReducer};
export default injectReducerWrapper;
