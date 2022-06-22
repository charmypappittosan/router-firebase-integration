import React from 'react';
import useFireBase from '../../Hooks/useFireBase';
import './Login.css';

const Login = () => {
    const {signInWithGoogle}=useFireBase();
    return (
      <div>
        <h2>please login</h2>
        <div style={{margin: '20px'}}>
           <button onClick={signInWithGoogle}>Google Sign In</button>
        </div>
        <form>
          <input type="text" placeholder="Your email"></input>
          <br />
          <input type="password" placeholder="Your password"></input>
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
};

export default Login;