import React from "react";

export default function SignUp(){
    return (
        <form action="">
            <label htmlFor="username" >Username</label>
            <br />
            <input type="text" id="username" name="username" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" name="password" />
            <br />
            <label htmlFor="password-confirm">Re-enter your password</label>
            <br />
            <input type="password" id="password-confirm" />
            <br />
            <button>Confirm</button>
        </form>
    )
}