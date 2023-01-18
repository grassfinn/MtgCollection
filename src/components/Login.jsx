import React from 'react';

// https://www.youtube.com/watch?v=91qEdc6dSUs&ab_channel=TylerPotts
export default function Login(props) {
  const [registeredUsers, setRegisteredUsers] = React.useState({
    users: [{ username: 'hobojohn6', password: 'andrew' }],
  });

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
    if (!user.username.match(registeredUsers.users[0].username) && !user.password.match(registeredUsers.users[0].password)){
        props.setLogin(false)
        return;
    }
    console.log('Login Sucessful!')
    props.setLogin(true)
}

  return (
    <div className="login">
      <form action="" className="login-form">
        <label htmlFor="user">
          <span>Username</span>
          <input
            type="text"
            id="user"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="pass">
          <span>Password</span>
          <input
            type="password"
            id="pass"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}
