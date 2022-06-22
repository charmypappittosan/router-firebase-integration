import React from 'react';
import './Register.css'

const Register = () => {
    return (
      <div>
        <h2>PLEASE REGISTER NOW</h2>
        <form>
          <input type="text" placeholder="Your name"></input>
          <br />
          <input type="text" placeholder="Your email"></input>
          <br />
          <input type="password" placeholder="Your password"></input>
          <br />
          <input type="submit" value="register" />
        </form>
      </div>
    );
};

export default Register;