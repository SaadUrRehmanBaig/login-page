import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function SignUp({ setFirst, setLast, setPass, setUser }) {

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [uName, setUname] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()


    function add_user(event) {
        event.preventDefault();
        if (fName === "" || lName === "" || password === "" || uName === "") {
            alert("Enter data")

        }
        else {
            setFirst(fName);
            setLast(lName);
            setPass(password);
            setUser(uName);

            console.log("data logged");
            navigate("/")
        }

    }
    return (
        <div>
            <div className='signup-loginPage'>
                <Link to="/"> Login</Link>

            </div>
            <br />
            <br />
            <form className="input_signup inputs_sign">
                <div>
                    <label > First Name</label>
                    <input type="text" onChange={(e) => { setFname(e.target.value) }} value={fName} />
                </div>

                <div>
                    <label > Last Name</label>
                    <input type="text" onChange={(e) => { setLname(e.target.value) }} value={lName} />
                </div>

                <div>
                    <label > Username</label>
                    <input type="text" required onChange={(e) => { setUname(e.target.value) }} value={uName} />
                </div>

                <div>
                    <label >Password</label>
                    <input type="password" required onChange={(e) => { setPassword(e.target.value) }} value={password} />
                </div>

                <div>
                    <button type='submit' onClick={add_user}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp