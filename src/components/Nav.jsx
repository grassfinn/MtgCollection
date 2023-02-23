import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const registeredUsers = props.registeredUser;

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
    console.log(user);
    const checkUser = user.username === registeredUsers[0].username;
    const checkPassword = user.password === registeredUsers[0].password;
    if (checkUser && checkPassword) {
      console.log('login success');
      props.setLogin({
        user: user.username,
        login: true,
      });
      return true;
    }
    console.log('Login failure!');
    props.setLogin({
      user: user.username,
      login: false,
    });
    return false;
  }

  return (
    <div>
      <nav>
        <Link to="/MtgCollection/">Home</Link>

        <ul className="navbar flex">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/lifeCounter">Life Counter</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
          <li>
            {!props.login.login ? (
              <button
                type="button"
                className="btn btn-primary "
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Login
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => props.setLogin(!props.login)}
              >
                Log Out
              </button>
            )}
          </li>
        </ul>
      </nav>
      {/* Modal */}
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <label htmlFor="user">
                  <input
                    placeholder="Username"
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
                  <input
                    placeholder="Password"
                    autoComplete="false"
                    type="password"
                    id="pass"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </label>
              </form>
            </div>
            <div className="modal-footer">
              <form action="">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
