import React, {useRef, useEffect, useState} from 'react';
import Header from '../header/header';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus, HttpCode, ErrorMessage} from '../../const';

const SigninScreen = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const [errorMessage, setError] = useState(null);

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      history.push(AppRoute.ROOT);
    }
  }, [authorizationStatus]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value
    }))
      .catch((error) => {
        if (error.response
            && (error.response.status === HttpCode.BAD_REQUEST
              || error.response.status === HttpCode.UNAUTHORIZED)
        ) {
          setError(ErrorMessage.SIGN_IN_FAILURE);
        } else {
          setError(ErrorMessage.NO_CONNECTION);
        }
      });
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            {errorMessage && <p style={{color: `red`}}>{errorMessage}</p>}
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  id="email"
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  id="password"
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit" >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SigninScreen;
