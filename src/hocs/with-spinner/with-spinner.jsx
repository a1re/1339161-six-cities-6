import React, {PureComponent} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import {SPINNER_COLOR} from '../../const';

const withSpinner = (Component) => {
  class WithSpinner extends PureComponent {
    render() {
      return <Component
        {...this.props}
        renderSpinner={() => <ClipLoader color={SPINNER_COLOR} />}
      />;
    }
  }

  WithSpinner.propTypes = {};

  return WithSpinner;
};

export default withSpinner;
