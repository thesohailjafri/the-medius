import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom"
import { fetchLoginData } from '../API'
import loginImage from '../Static/RawImages/login.png'
import mediusLogo from '../Static/RawImages/medius-logo.png'

import { useGlobalContext } from '../context'
function Login(props) {

    const email = useRef(null)
    const password = useRef(null)
    const [isLogged, setIsLogged] = useState(false)
    const [loginErrLog, setLoginErrLog] = useState([])
    const { setAdminMediusToken } = useGlobalContext()



    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoginErrLog([])
            console.log({ loginErrLog })
            if (email.current.value && password.current.value) {
                const res = await fetchLoginData(email.current.value, password.current.value)
                console.log(res)
                let data = res.data
                let message = res.message
                if (message === 'Incorrect email ID.') {
                    setLoginErrLog(prevLog => [...prevLog, 'Email Is Invalid'])
                }
                if (message === 'Incorrect password.') {
                    setLoginErrLog(prevLog => [...prevLog, 'Password Is Invalid'])
                }
                if (data) {
                    console.log(data)
                    if (data.role === 'admin') {
                        sessionStorage.clear()
                        sessionStorage.setItem('admin_medius_x_token', data.token)
                        sessionStorage.setItem('admin_medius_x_clientEmail', data.email)
                        sessionStorage.setItem('admin_medius_x_clientFullname', data.full_name)
                        sessionStorage.setItem('admin_medius_x_clientRole', data.role)
                        sessionStorage.setItem('admin_medius_x_clientId', data.user_id)

                        let getToken = sessionStorage.getItem('admin_medius_x_token')
                        setAdminMediusToken(getToken)
                        setIsLogged(true)
                    } else {
                        setLoginErrLog(prevLog => [...prevLog, "Not A Admin's Email"])
                    }
                }
            } else {
                if (!email.current.value) {
                    setLoginErrLog(prevLog => [...prevLog, 'Email Is Blank'])
                }
                if (!password.current.value) {
                    setLoginErrLog(prevLog => [...prevLog, 'Password Is Blank'])
                }

            }
        } catch (error) {
            console.error(error)
        }
    }







    return (

        isLogged ? < Redirect to='/' />
            :
            <div style={{ backgroundImage: `url(${loginImage})` }} className='login'>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-sm-6 col-md-5 col-lg-4">


                            <form onSubmit={handelSubmit}>
                                <div className="login-logo">
                                    <img src={mediusLogo} alt="loginlogo" />
                                </div>
                                
                                <div className="mb-3 row">
                                    <label htmlFor='login_email' className="col-sm-12 col-form-label">Email Id</label>
                                    <div className="col-sm-12">
                                        <input ref={email} type="text" name="" id="login_email" className="form-control" />
                                    </div>
                                    {
                                        loginErrLog.length > 0 &&
                                        <div 
                                            style={{ fontSize: 16 }}
                                            role="alert">
                                            {loginErrLog.map(log => {
                                                return (
                                                    <div className="text-danger">
                                                        {log}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor='login_password' className="col-sm-12 col-form-label">Password</label>
                                    <div className="col-sm-12">
                                        <input ref={password} type="password" name="" id="login_password" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-0 row">
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


    )
}

export default Login
