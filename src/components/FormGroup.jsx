import React from 'react';
import '../pages/SignIn.css';
import { useAuth0 } from '@auth0/auth0-react';

const FormGroup = () => {

  const {loginWithRedirect} = useAuth0()
  
  return (
    <div className="formgroup__container">
      <h1 className="">Sign in</h1>
      <p className="sign_to_ur_acc">
        <strong>Sign in to your account</strong>
      </p>

      <div className="signin__with__buttons">
        <button
          className="siginin__google btn__primary"
          onClick={loginWithRedirect}
        >
          Sign in with Google
        </button>
        <button className="siginin__apple btn__primary">
          Sign in with Apple
        </button>
      </div>

      <div className="form__wrapper">
        <form action="#">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="input__bar"
            autoComplete="false"
            placeholder="Email id"
            name="email"
            id="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input__bar"
            autoComplete="false"
            placeholder="Password"
            name="password"
            id="password"
            required
          />

          <a
            href="http://"
            target="_blank"
            className="forgot__pass"
            rel="noopener noreferrer"
          >
            Forgot password?
          </a>

          <button className="signin__btn">Sign In</button>
        </form>
      </div>

      <p className="form__footer">
        Don't have an account?{" "}
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Register here
        </a>
      </p>
    </div>
  );
}

export default FormGroup;