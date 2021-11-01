import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import Hamburger from '../../Static/RawImages/hamburger.png'
import Logo from '../../Static/RawImages/logo.png'

function AgentSidebar(props) {
    let match = useRouteMatch('/').isExact

    return (
        <>
            <div className="logo">
                <a href="/"><img src={Logo} alt="logo" /></a>
            </div>
            <div className="menu-toggle"
                onClick={() => props.setIsSideBarOpen(!props.IsSideBarOpen)}
            >
                <img src={Hamburger} alt="Hamburger" />
            </div>

            {/* Agent Menu start */}
            <div className="menu">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <div className="accordion" id="accordionMenu">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">                                        
                                        <Link className="nav-link"
                                            style={useRouteMatch('/agent/calls') ? { fontWeight: 'bold', color: '#000000' } : { fontWeight: 'normal', color: '#505050' }}
                                        >
                                            <div className="m-icon">
                                                <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.134 13.033a2.67 2.67 0 0 0-1.652.194l-1.853.8a18.223 18.223 0 0 1-3.285-2.606 17.802 17.802 0 0 1-2.58-3.333L7.37 6.42c.215-.506.27-1.066.16-1.604L6.294 0 0 .907l.026.383A20.765 20.765 0 0 0 5.99 14.62a20.472 20.472 0 0 0 13.57 6.02h.41l.67-6.553-4.506-1.054zm3.066 6.708a19.587 19.587 0 0 1-12.6-5.697A19.909 19.909 0 0 1 .908 1.643l4.73-.684 1.024 4.046c.073.372.03.758-.12 1.105l-.736 2.06.107.176a18.92 18.92 0 0 0 2.821 3.694 19.445 19.445 0 0 0 3.625 2.847l.194.124 2.287-.984a1.785 1.785 0 0 1 1.114-.138l3.762.86-.515 4.992z" fill="#505050" fill-rule="nonzero" />
                                                </svg>
                                            </div>
                                            <span className="menu-text">My Calls</span>
                                        </Link>
                                    </div>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionMenu">
                                    <div className="accordion-body">
                                        <div className="sidebar_submenu ">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <Link className="nav-link"
                                                        to='/agent/calls/current'
                                                        style={useRouteMatch('/agent/calls/current') ? { fontWeight: 'bold', color: '#000000' } : { fontWeight: 'normal', color: '#505050' }}
                                                    >
                                                        <div className="m-icon">
                                                            <svg width="12" height="20" xmlns="http://www.w3.org/2000/svg">
                                                                <g fill="#000" fill-rule="nonzero">
                                                                    <path d="M9.2 0H2a2 2 0 0 0-2 2v15.2a2 2 0 0 0 2 2h7.2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 .8h7.2A1.2 1.2 0 0 1 10.4 2v13.2H.8V2A1.2 1.2 0 0 1 2 .8zm7.2 17.6H2a1.2 1.2 0 0 1-1.2-1.2V16h9.6v1.2a1.2 1.2 0 0 1-1.2 1.2z" />
                                                                    <circle cx="5.6" cy="17.2" r="1" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <span className="menu-text">
                                                            Current Calls
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link"
                                                        to='/agent/calls/logs'
                                                        style={useRouteMatch('/agent/calls/logs') ? { fontWeight: 'bold', color: '#000000' } : { fontWeight: 'normal', color: '#505050' }}
                                                    >
                                                        <div className="m-icon">
                                                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                                <g fill="#505050" fill-rule="nonzero">
                                                                    <path d="M9.6 0C4.928 0 2.66 2.688.8 5.324V2H0v5.2h5.2v-.8H1.164C3.044 3.6 5.084.9 9.6.9A8.764 8.764 0 1 1 .8 9.6H0A9.6 9.6 0 1 0 9.6 0z" />
                                                                    <path d="M10.4 3.6h-.8v6.8H5.2v.8h5.2z" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <span className="menu-text">
                                                            Call Logs
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item no-submenu">
                                <h2 className="accordion-header" id="headingOne">
                                    <div className="accordion-button nav-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <Link to='/agent/chat' className="nav-link"
                                            style={useRouteMatch('/agent/chat') ? { fontWeight: 'bold', color: '#000000' } : { fontWeight: 'normal', color: '#505050' }}
                                        >
                                            <div className="m-icon">
                                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#505050" stroke-width=".956" fill="none" fill-rule="evenodd">
                                                        <path d="M16.293 1H1v15.293l4.779-3.823h6.69a3.834 3.834 0 0 0 3.824-3.824V1z"/>
                                                        <path d="M7.69 12.47v2.867a3.834 3.834 0 0 0 3.824 3.823h6.69l4.78 3.823V7.691h-6.691"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="menu-text">
                                                Chat
                                            </span>
                                        </Link>
                                    </div>
                                </h2>                                
                            </div>
                            <div className="accordion-item no-submenu">
                                <h2 className="accordion-header" id="headingOne">
                                    <div className="accordion-button nav-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <Link to='/agent/history' className="nav-link"
                                            style={useRouteMatch('/agent/history') ? { fontWeight: 'bold', color: '#000000' } : { fontWeight: 'normal', color: '#505050' }}
                                        >
                                            <div className="m-icon">
                                                <svg width="15" height="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.32 4.8V.88h1.76V0H0v.88h1.76V4.8c0 1.55.74 3.005 1.993 3.916l2.539 1.844-2.539 1.848A4.84 4.84 0 0 0 1.76 16.32v3.92H0v.88h14.08v-.88h-1.76v-3.92a4.84 4.84 0 0 0-1.993-3.916L7.788 10.56l2.539-1.848A4.84 4.84 0 0 0 12.32 4.8zM2.64 20.24v-2.275l4.4-.805 4.4.8v2.28h-8.8zm7.168-7.124a3.96 3.96 0 0 1 1.632 3.204v.752l-4.4-.792-4.4.792v-.752a3.96 3.96 0 0 1 1.632-3.204l2.768-2.01 2.768 2.01zm0-5.117L7.04 10.014 4.272 8A3.96 3.96 0 0 1 2.64 4.8V.88h8.8V4.8a3.96 3.96 0 0 1-1.632 3.204v-.005z" fill="#505050" fill-rule="nonzero" />
                                                </svg>
                                            </div>
                                            <span className="menu-text">
                                                History
                                            </span>
                                        </Link>
                                    </div>
                                </h2>                                
                            </div>
                            <div className="accordion-item no-submenu">
                                <h2 className="accordion-header" id="headingOne">
                                    <div className="accordion-button nav-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <Link to='/agent/myreport' className="nav-link"
                                            style={useRouteMatch('/agent/myreport') ? { fontWeight: 'bold', color: '#000000' } : { fontWeight: 'normal', color: '#505050' }}
                                        >
                                            <div className="m-icon">
                                                <svg width="23" height="21" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#505050" fill-rule="nonzero">
                                                        <path d="M5.6 0v17.267a2.333 2.333 0 0 1-4.667 0v-7a.933.933 0 1 1 1.867 0v6.066h.933v-6.066a1.867 1.867 0 1 0-3.733 0v7a3.267 3.267 0 0 0 3.267 3.266h15.866a3.267 3.267 0 0 0 3.267-3.266V0H5.6zm15.867 17.267a2.333 2.333 0 0 1-2.334 2.333H5.55a3.267 3.267 0 0 0 .984-2.333V.933h14.934v16.334z" />
                                                        <path d="M18.667 3.733H9.333v6.534h9.334V3.733zm-.934 5.6h-7.466V4.667h7.466v4.666zM9.333 12.133h9.333v1H9.333zM9.333 14.933h7v1h-7z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="menu-text">
                                                My Reports
                                            </span>
                                        </Link>
                                    </div>
                                </h2>                                
                            </div>
                        </div>
                    </li>                    
                </ul>
            </div>
            {/* Agent Menu end */}
        </>
    )
}

export default AgentSidebar
