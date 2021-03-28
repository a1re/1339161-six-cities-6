import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';

const PrivateRoute = ({children, ...rest}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);

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
  ]).isRequired
};

export default PrivateRoute;
