import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

function LoginPage({ User, Pass, setShouldLogin }) {
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    function verify_user(event) {

        event.preventDefault();

        if (username === User && Password === Pass && username !== "" && Password !== "") {
            setShouldLogin(true);
            console.log("login sucessful");
        }
        else {
            setShouldLogin(false);
            alert("enter valid credentials");
        }
    }
    return (
        <div>
            <div className='signup-loginPage'>
                <Link to="/signup"> Sign Up</Link>
            </div>


            <form className="inputs_sign">
                <div>
                    <label > Username:</label>
                    <input type="text" onChange={(e) => { setUsername(e.target.value) }} value={username} />
                </div>

                <div>
                    <label >Password:</label>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={Password} />
                </div>

                <button type='submit' onClick={verify_user}>login</button>
            </form>
        </div>
    )
}

export default LoginPage