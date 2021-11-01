import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Hamburger from '../../Static/RawImages/hamburger.png'
import Logo from '../../Static/RawImages/logo.png'



function AdminSidebar({ setIsSideBarOpen, IsSideBarOpen }) {
    let match = useRouteMatch('/').isExact

    return (
        <>
            <div className="logo">
                <a href="/"><img src={Logo} alt="logo" /></a>
            </div>
            <div className="admin-tag">Admin</div>
            <div className="menu-toggle"
                onClick={() => setIsSideBarOpen(!IsSideBarOpen)}
            >
                <img src={Hamburger} alt="Hamburger" />
            </div>
            <div className="menu">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <div className="accordion" id="accordionAdmin">
                            <div className="accordion-item no-submenu">
                                <h2 className="accordion-header" id="headingOneAdmin">
                                    <div className="accordion-button nav-link" data-bs-toggle="collapse" data-bs-target="#collapseOneAdmin" aria-expanded="true" aria-controls="collapseOneAdmin">
                                        <Link to='/admin/dispositions' className="nav-link">
                                            <div className="m-icon">
                                                <svg width="15" height="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.32 4.8V.88h1.76V0H0v.88h1.76V4.8c0 1.55.74 3.005 1.993 3.916l2.539 1.844-2.539 1.848A4.84 4.84 0 0 0 1.76 16.32v3.92H0v.88h14.08v-.88h-1.76v-3.92a4.84 4.84 0 0 0-1.993-3.916L7.788 10.56l2.539-1.848A4.84 4.84 0 0 0 12.32 4.8zM2.64 20.24v-2.275l4.4-.805 4.4.8v2.28h-8.8zm7.168-7.124a3.96 3.96 0 0 1 1.632 3.204v.752l-4.4-.792-4.4.792v-.752a3.96 3.96 0 0 1 1.632-3.204l2.768-2.01 2.768 2.01zm0-5.117L7.04 10.014 4.272 8A3.96 3.96 0 0 1 2.64 4.8V.88h8.8V4.8a3.96 3.96 0 0 1-1.632 3.204v-.005z" fill="#505050" fill-rule="nonzero" />
                                                </svg>
                                            </div>
                                            <span className="menu-text" style={match ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>
                                                Dispositions
                                            </span>
                                        </Link>
                                    </div>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwoAdmin">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwoAdmin" aria-expanded="false" aria-controls="collapseTwoAdmin">
                                        <Link className="nav-link"
                                            style={useRouteMatch('/collection') ? { fontWeight: 'bold', color: '#000000' } : { fontWeight: 'normal', color: '#505050' }}
                                        >
                                            <div className="m-icon">
                                                <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#505050" fillRule="nonzero">
                                                        <path d="M11.2 0C5.014 0 0 5.014 0 11.2c0 6.186 5.014 11.2 11.2 11.2 6.186 0 11.2-5.014 11.2-11.2A11.2 11.2 0 0 0 11.2 0zm0 21.467C5.53 21.467.933 16.87.933 11.2.933 5.53 5.53.933 11.2.933c5.67 0 10.267 4.597 10.267 10.267A10.267 10.267 0 0 1 11.2 21.467z" />
                                                        <path d="m11.727 10.7.57-4.993c.6.155 1.175.399 1.703.724l.467-.808a6.949 6.949 0 0 0-2.068-.854l.201-1.684-.933-.108-.192 1.69h-.042c-1.782 0-3.462 1.498-3.462 3.084 0 1.442.905 2.595 2.753 3.514l-.625 5.46a5.175 5.175 0 0 1-1.834-.756l-.094-.056-.466.803.093.056c.67.439 1.42.738 2.207.882L9.8 19.315l.933.108.192-1.69h.042c1.95 0 3.966-1.241 3.966-3.322 0-1.694-.844-2.674-3.206-3.71zM8.904 7.752c0-1.045 1.237-2.109 2.469-2.146l-.537 4.662c-1.293-.714-1.932-1.54-1.932-2.516zm2.128 9.049.583-5.133C13.617 12.6 14 13.337 14 14.41c0 1.619-1.717 2.361-2.968 2.389z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="menu-text">Campaign</span>
                                        </Link>
                                    </div>
                                </h2>
                                <div id="collapseTwoAdmin" className="accordion-collapse collapse" aria-labelledby="headingTwoAdmin" data-bs-parent="#accordionAdmin">
                                    <div className="accordion-body">
                                        <div className="sidebar_submenu ">
                                            <ul className="nav flex-column">
                                                <li className={`nav-item ${useRouteMatch('/collection/dailyreport') && 'active'}`}>
                                                    <Link className="nav-link" to='/collection/dailyreport'>
                                                        <div className="m-icon">
                                                            <svg width="23" height="22" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M20.452 20.216v-7.781h-4.87v7.781h-1.947V.763h-4.87v19.453H6.817V8.544h-4.87v11.672H0v.973h22.4v-.973h-1.948zm-3.895-6.808h2.921v6.808h-2.921v-6.808zM9.739 1.735h2.922v18.481H9.739V1.736zM2.922 9.517h2.921v10.7H2.922v-10.7z" fill="#000" fillRule="nonzero" />
                                                            </svg>
                                                        </div>
                                                        <span className="menu-text">
                                                            Campaign 1
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className={`nav-item ${useRouteMatch('/collection/dailyreport') && 'active'}`}>
                                                    <Link className="nav-link" to='/collection/dailyreport'>
                                                        <div className="m-icon">
                                                            <svg width="23" height="22" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M20.452 20.216v-7.781h-4.87v7.781h-1.947V.763h-4.87v19.453H6.817V8.544h-4.87v11.672H0v.973h22.4v-.973h-1.948zm-3.895-6.808h2.921v6.808h-2.921v-6.808zM9.739 1.735h2.922v18.481H9.739V1.736zM2.922 9.517h2.921v10.7H2.922v-10.7z" fill="#000" fillRule="nonzero" />
                                                            </svg>
                                                        </div>
                                                        <span className="menu-text">
                                                            Campaign 2
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item no-submenu">
                                <h2 className="accordion-header" id="headingThreeAdmin">
                                    <div className="accordion-button nav-link" data-bs-toggle="collapse" data-bs-target="#collapseThreeAdmin" aria-expanded="true" aria-controls="collapseThreeAdmin">
                                        <Link to='/' className="nav-link">
                                            <div className="m-icon">
                                                <svg width="15" height="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.32 4.8V.88h1.76V0H0v.88h1.76V4.8c0 1.55.74 3.005 1.993 3.916l2.539 1.844-2.539 1.848A4.84 4.84 0 0 0 1.76 16.32v3.92H0v.88h14.08v-.88h-1.76v-3.92a4.84 4.84 0 0 0-1.993-3.916L7.788 10.56l2.539-1.848A4.84 4.84 0 0 0 12.32 4.8zM2.64 20.24v-2.275l4.4-.805 4.4.8v2.28h-8.8zm7.168-7.124a3.96 3.96 0 0 1 1.632 3.204v.752l-4.4-.792-4.4.792v-.752a3.96 3.96 0 0 1 1.632-3.204l2.768-2.01 2.768 2.01zm0-5.117L7.04 10.014 4.272 8A3.96 3.96 0 0 1 2.64 4.8V.88h8.8V4.8a3.96 3.96 0 0 1-1.632 3.204v-.005z" fill="#505050" fill-rule="nonzero" />
                                                </svg>
                                            </div>
                                            <span className="menu-text" style={match ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>
                                                Clients
                                            </span>
                                        </Link>
                                    </div>
                                </h2>
                            </div>

                            <div className="accordion-item no-submenu">
                                <h2 className="accordion-header" id="headingFourAdmin">
                                    <div className="accordion-button nav-link" data-bs-toggle="collapse" data-bs-target="#collapseFourAdmin" aria-expanded="true" aria-controls="collapseFourAdmin">
                                        <Link to='/' className="nav-link">
                                            <div className="m-icon">
                                                <svg width="15" height="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.32 4.8V.88h1.76V0H0v.88h1.76V4.8c0 1.55.74 3.005 1.993 3.916l2.539 1.844-2.539 1.848A4.84 4.84 0 0 0 1.76 16.32v3.92H0v.88h14.08v-.88h-1.76v-3.92a4.84 4.84 0 0 0-1.993-3.916L7.788 10.56l2.539-1.848A4.84 4.84 0 0 0 12.32 4.8zM2.64 20.24v-2.275l4.4-.805 4.4.8v2.28h-8.8zm7.168-7.124a3.96 3.96 0 0 1 1.632 3.204v.752l-4.4-.792-4.4.792v-.752a3.96 3.96 0 0 1 1.632-3.204l2.768-2.01 2.768 2.01zm0-5.117L7.04 10.014 4.272 8A3.96 3.96 0 0 1 2.64 4.8V.88h8.8V4.8a3.96 3.96 0 0 1-1.632 3.204v-.005z" fill="#505050" fill-rule="nonzero" />
                                                </svg>
                                            </div>
                                            <span className="menu-text" style={match ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>
                                                Agents
                                            </span>
                                        </Link>
                                    </div>
                                </h2>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFiveAdmin">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFiveAdmin" aria-expanded="false" aria-controls="collapseFiveAdmin">
                                        <Link className="nav-link"
                                            style={useRouteMatch('/litigation') ? { fontWeight: 'bold', color: '#000000' } : { fontWeight: 'normal', color: '#505050' }}
                                        >
                                            <div className="m-icon">
                                                <svg width="18" height="23" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#505050" fillRule="nonzero">
                                                        <path d="M14.933 3.447V.86H0v18.108h2.8v2.587h8.867c3.35 0 6.066-2.51 6.066-5.605V3.447h-2.8zm-14 14.658V1.722H14v1.725H2.8v14.658H.933zM16.8 15.95c0 2.619-2.298 4.742-5.133 4.742H3.733V4.31H16.8v11.64z" />
                                                        <path d="M7 8.62h6.533v1H7zM7 12.07h6.533v1H7zM7 15.519h4.667v1H7z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="menu-text">Templates</span>
                                        </Link>
                                    </div>
                                </h2>
                                <div id="collapseFiveAdmin" className="accordion-collapse collapse" aria-labelledby="headingFiveAdmin" data-bs-parent="#accordionAdmin">
                                    <div className="accordion-body">
                                        <div className="sidebar_submenu ">
                                            <ul className="nav flex-column">
                                                <li className={`nav-item ${useRouteMatch('/litigation/batch') && 'active'}`}>
                                                    <Link className="nav-link" to='/'>
                                                        <div className="m-icon">
                                                            <svg width="23" height="19" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.933.876A2.333 2.333 0 0 0 5.6 3.21v.466h-.467A2.333 2.333 0 0 0 2.8 6.01v.466h-.275A2.53 2.53 0 0 0 0 9.001v9.609h14.275a2.53 2.53 0 0 0 2.525-2.525v-.275h.467a2.333 2.333 0 0 0 2.333-2.334v-.466h.467a2.333 2.333 0 0 0 2.333-2.334v-9.8H7.933zm7.934 15.209c0 .879-.713 1.591-1.592 1.591H.933V9.001c0-.879.713-1.591 1.592-1.591h13.342v8.675zm2.8-2.609a1.4 1.4 0 0 1-1.4 1.4H16.8v-8.4H3.733V6.01a1.4 1.4 0 0 1 1.4-1.4h13.534v8.866zm2.8-2.8a1.4 1.4 0 0 1-1.4 1.4H19.6v-8.4H6.533V3.21a1.4 1.4 0 0 1 1.4-1.4h13.534v8.866z" fill="#505050" fillRule="nonzero" />
                                                            </svg>
                                                        </div>
                                                        <span className="menu-text">
                                                            Batch
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className={`nav-item ${useRouteMatch('/litigation/case') && 'active'}`}>
                                                    <Link className="nav-link" to='/'>
                                                        <div className="m-icon">
                                                            <svg width="15" height="18" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 0v14.452a3.33 3.33 0 0 0 3.308 3.308h8.184a3.33 3.33 0 0 0 3.308-3.308V0H0zm8.828 3.7a1.48 1.48 0 0 0-2.856 0h-2.25a1.85 1.85 0 0 1-1.717-1.162L1.288.74h12.21l-.703 1.798A1.85 1.85 0 0 1 11.078 3.7h-2.25zm-.688.37a.74.74 0 1 1-1.48 0 .74.74 0 0 1 1.48 0zm3.352 12.95H3.308A2.59 2.59 0 0 1 .74 14.452V1.365l.577 1.447A2.59 2.59 0 0 0 3.722 4.44h2.25a1.48 1.48 0 0 0 2.856 0h2.25a2.59 2.59 0 0 0 2.405-1.628l.577-1.447v13.087a2.59 2.59 0 0 1-2.568 2.568z" fill="#505050" fill-rule="nonzero" />
                                                            </svg>
                                                        </div>
                                                        <span className="menu-text">
                                                            Cases
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className={`nav-item ${useRouteMatch('/litigation/calendar') && 'active'}`}>
                                                    <Link className="nav-link" to='/'>
                                                        <div className="m-icon">
                                                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                                <g fill="#000" fill-rule="nonzero">
                                                                    <path d="M0 0v11.84a3.52 3.52 0 0 0 3.52 3.52h8.32a3.52 3.52 0 0 0 3.52-3.52V0H0zm14.72 11.84a2.88 2.88 0 0 1-2.88 2.88H3.52a2.88 2.88 0 0 1-2.88-2.88V.64h14.08v11.2z" />
                                                                    <path d="M3.2 2.56h8.96v1H3.2zM6.154 7.469l1.526-.845v5.856h.64V5.536L5.846 6.909z" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <span className="menu-text">
                                                            Calendar
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AdminSidebar
