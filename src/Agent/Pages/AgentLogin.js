import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom"
import { fetchLoginData } from '../../API'

import agentbg from '../../Static/RawImages/agent-bg.png'
import mediusWhite from '../../Static/RawImages/logo-white.png'

import { useGlobalContext } from '../../context'


function AgentLogin(props) {
    const [isLogged, setIsLogged] = useState(false)
    const [loginErrLog, setLoginErrLog] = useState([])

    const email = useRef(null)
    const password = useRef(null)
    const { setAgentMediusToken } = useGlobalContext()


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
                    if (data.role === 'agent') {
                        sessionStorage.clear()
                        sessionStorage.setItem('agent_medius_x_token', data.token)
                        sessionStorage.setItem('agent_medius_x_clientEmail', data.email)
                        sessionStorage.setItem('agent_medius_x_clientFullname', data.full_name)
                        sessionStorage.setItem('agent_medius_x_clientRole', data.role)
                        sessionStorage.setItem('agent_medius_x_clientId', data.user_id)
                        sessionStorage.setItem('agent_medius_x_contactNumber', data.mobile)
                        
                        let getToken = sessionStorage.getItem('agent_medius_x_token')
                        setAgentMediusToken(getToken)
                        setIsLogged(true)
                    } else {
                        setLoginErrLog(prevLog => [...prevLog, "Not A Agent's Email"])
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
        isLogged ? < Redirect to='/agent/calls/current' />
            :
            <div style={{ backgroundImage: `url(${agentbg})` }} className='agent-login'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 ps-5">
                            <img src={mediusWhite} alt="login" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-sm-6 col-md-5 col-lg-4">
                            <form onSubmit={handelSubmit}>
                                <div className="login-text">
                                    <span>Welcome To</span><br />
                                    Agent Panel
                                </div>
                                {
                                    loginErrLog.length > 0 &&
                                    <div className="alert alert-warning"
                                        style={{ fontSize: 16 }}
                                        role="alert">
                                        {loginErrLog.map(log => {
                                            return (
                                                <div className='mx-3 py-1'>
                                                    <li>{log}</li>
                                                </div>
                                            )
                                        })}
                                    </div>

                                }
                                <div className="mb-3 row">
                                    <label htmlFor='login_email' className="col-sm-12 col-form-label">Email Id</label>
                                    <div className="col-sm-12">
                                        <input ref={email} type="text" name="" id="login_email" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor='login_password' className="col-sm-12 col-form-label">Password</label>
                                    <div className="col-sm-12">
                                        <input ref={password} t type="password" name="" id="login_password" className="form-control" />
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

export default AgentLogin
