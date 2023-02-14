import React from 'react';
import { Link } from 'react-router-dom';

// https://www.youtube.com/watch?v=91qEdc6dSUs&ab_channel=TylerPotts
export default function Login(props) {

  console.log(props)
  
  const [user, setUser] = React.useState({
    username: '',
    password: '',
  });
  
  function handleChange(e) {
    if (e.target.name === 'username') {
      // return everything before the object and assign username to the input value
      setUser({ ...user, username: e.target.value });
    }
    if (e.target.name === 'password') {
      setUser({ ...user, password: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !user.username.match(props.registeredUsers[0].username) &&
      !user.password.match(props.registeredUsers[0].password)
    ) {
      props.setLogin({
        user: user.username,
        login: false
      });
      return;
    }
    console.log('Login Sucessful!');
    props.setLogin({
      user: user.username,
      login: true
    });
  }

 

  return (
    <div className="login">
      <form action="" className="login-form">
        <label htmlFor="user">
          <span>Username</span>
          <input
            placeholder='Username'
            autoComplete="false"
            type="text"
            id="user"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="pass">
          <span>Password</span>
          <input
            placeholder='Password'
            autoComplete="false"
            type="password"
            id="pass"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Login</button>
      </form>
      <Link to="/signup">Click to sign up</Link>
    </div>
  );
}
