/**
 * @module Welcome.tsx
 * @description Welcome Page Component
 */

import * as React from 'react';
import { Link } from 'react-router-dom';

import '../assets/WelcomeForm.css';

const Welcome: any = () => (
  <div className="login-register-form">
    <h1>Welcome to EthiQ</h1>
    <div id='signin-signup-links'>
      <ul>
        <li>
          <Link to='/account/login'>Log In</Link>
        </li>
        <li>
          <Link to='/account/register'>Register</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Welcome;
