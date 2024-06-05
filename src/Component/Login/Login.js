import React, { useState } from 'react';
import './Login.css';
import loginsBook from './loginSBook.png';
import fakedata from '../fakedata/idPass.json';


const Login = () => {
    const [idPass, setIdPass] = useState({
        name: "",
        password: "",
    });
    const handelIdPass = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setIdPass((prev) => {
            return { ...prev, [name]: value }
        })
    };
    // console.log(idPass);


    const handelsubmit = (e) => {
        e.preventDefault();
        console.log(idPass);
        let credentialsMatched = false;


        fakedata.map((data) => {
            if (data.idName === idPass.name && data.password.toString() === idPass.password.toString()) {
                credentialsMatched = true;

                window.location.href = '/home'
            }
        })


        if (!credentialsMatched) {
            window.alert("Username and Password Not Valid")
        }
    };


    return (
        <div className='login-container'>
            <div className='welcome-containt'>
                <h1>WELCOME</h1>
                <img src={loginsBook} alt="" />
            </div>
            <div className='login-from'>
                <h1>login</h1><br />
                <form onSubmit={handelsubmit}>
                    <label htmlFor="id"> <b>Name : </b></label>
                    <input type="text" name='name' id='id' onChange={handelIdPass} placeholder='Enter Name' /><br />
                    <label htmlFor="passward"><b>Passward : </b></label>
                    <input type="password" name='password' onChange={handelIdPass} id='passward' placeholder='password' /><br /><br />
                    <button type="submit"> <b>Login</b></button>
                </form>
            </div>
        </div>
    );
};

export default Login;
