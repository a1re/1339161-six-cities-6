import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';

const PrivateRoute = ({children, authorizationStatus, ...rest}) => {
  return (
    <Route
      {...rest}
      render={() => (authorizationStatus === AuthorizationStatus.AUTH
        ? children
        : <Redirect to={AppRoute.LOGIN} />)}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
