import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import Hamburger from '../Static/RawImages/hamburger.png'
import Logo from '../Static/RawImages/logo.png'
import Accordion from 'react-bootstrap/Accordion'

function Sidebar(props) {
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



            <div className="menu">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <div className="accordion" id="accordionMenu">
                            <div className="accordion-item no-submenu">
                                <h2 className="accordion-header" id="headingOne">
                                    <div className="accordion-button nav-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <Link to='/' className="nav-link">
                                            <div className="m-icon">
                                                <svg width="23" height="19" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 .95v10.197c0 2.203 1.88 3.99 4.2 3.99h4.07l-.7 2.66H6.066v.886h10.266v-.886h-1.502l-.7-2.66H18.2c2.32 0 4.2-1.787 4.2-3.99V.95H0zm13.87 16.847H8.53l.7-2.66h3.94l.7 2.66zm7.597-6.65c0 1.714-1.463 3.103-3.267 3.103h-14c-1.804 0-3.267-1.39-3.267-3.103v-9.31h20.534v9.31z" fill="#505050" fillRule="nonzero" />
                                                </svg>
                                            </div>
                                            <span className="menu-text" style={match ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>
                                                Dashboard
                                            </span>
                                        </Link>
                                    </div>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
                                            <span className="menu-text">Collection</span>
                                        </Link>
                                    </div>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionMenu">
                                    <div className="accordion-body">
                                        <div className="sidebar_submenu ">
                                            <ul className="nav flex-column">
                                                <li className={`nav-item ${useRouteMatch('/collection/batch') && 'active'}`}>
                                                    <Link className="nav-link" to='/collection/batch'>
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
                                                <li className={`nav-item ${useRouteMatch('/collection/accounts') && 'active'}`}>
                                                    <Link className="nav-link" to='/collection/accounts'>
                                                        <div className="m-icon">
                                                            <svg width="28" height="20" xmlns="http://www.w3.org/2000/svg">
                                                                <g fill="#505050" fillRule="nonzero">
                                                                    <path d="M5.8 6.56c.405 2.143 1.905 3.53 3.82 3.53 1.915 0 3.385-1.35 3.82-3.525.07-.332.405-2.014.425-2.422a3.626 3.626 0 0 0-1.105-2.765A4.502 4.502 0 0 0 9.596.118a4.498 4.498 0 0 0-3.151 1.289 3.559 3.559 0 0 0-1.07 2.745c.025.414.385 2.21.425 2.409zm1.375-4.502a3.474 3.474 0 0 1 2.433-.98c.917 0 1.794.354 2.432.98.563.551.861 1.299.825 2.066 0 .261-.255 1.544-.41 2.285-.265 1.306-1.15 2.73-2.835 2.73S7 7.659 6.78 6.386c-.15-.746-.39-2.028-.41-2.294-.04-.755.251-1.491.805-2.033zM15.73 12.332l-6.11-.78-6.075.766c-1.5.28-3.135 1.273-3.345 2.85L0 19.115h19.385l-.24-3.757c-.105-1.554-1.375-2.684-3.415-3.026zM.925 18.165l.265-2.874c.145-1.107 1.42-1.833 2.5-2.038l5.925-.74 5.955.755c.74.123 2.47.584 2.575 2.147l.18 2.75H.925zM16.965 8.408c.335 1.744 1.575 2.85 3.155 2.85 1.58 0 2.795-1.097 3.155-2.85.055-.266.325-1.596.34-1.928a2.943 2.943 0 0 0-.895-2.242 3.73 3.73 0 0 0-2.612-1.052 3.73 3.73 0 0 0-2.613 1.052 2.89 2.89 0 0 0-.87 2.228c.02.356.285 1.686.34 1.942zm1.26-3.49a2.705 2.705 0 0 1 1.887-.757c.711 0 1.392.272 1.888.756.422.412.646.97.62 1.544 0 .19-.195 1.164-.325 1.79-.1.476-.555 2.095-2.175 2.095-1.305 0-2-1.078-2.17-2.094-.12-.585-.31-1.592-.325-1.796a1.975 1.975 0 0 1 .595-1.539h.005zM22 19.115h6l-.055-3.572c-.105-1.287-1.15-2.228-2.83-2.513l-4.935-.565-.12.95 4.91.56c.565.095 1.885.447 2 1.634l.12 2.556H22v.95z" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <span className="menu-text">
                                                            Accounts
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
                                                            Daily Report
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`accordion-item ${useRouteMatch('/prelitigation') && 'active'}`}>
                                <h2 className="accordion-header" id="headingThree">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <Link className="nav-link"
                                            style={useRouteMatch('/prelitigation') ? { fontWeight: 'bold', color: '#000000' } : { fontWeight: 'normal', color: '#505050' }}
                                        >
                                            <div className="m-icon">
                                                <svg width="17" height="22" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#505050" fillRule="nonzero">
                                                        <path d="M0 .437v20.695h10.733c3.35 0 6.067-2.51 6.067-5.605V.437H0zm15.867 15.09c0 2.62-2.299 4.743-5.134 4.743h-9.8V1.3h14.934v14.227z" />
                                                        <path d="M4.667 6.473h7.467v1H4.667zM4.667 9.922h7.467v1H4.667zM4.667 13.371h5.6v1h-5.6z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <span className="menu-text">Pre-Litigation</span>
                                        </Link>
                                    </div>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionMenu">
                                    <div className="accordion-body">
                                        <Accordion defaultActiveKey="1" className="level-two">
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    <li className={`nav-item ${useRouteMatch('/prelitigation/legal') && 'active'}`}>
                                                        <Link className="nav-link">
                                                            <div className="m-icon">
                                                                <svg width="17" height="22" xmlns="http://www.w3.org/2000/svg">
                                                                    <g fill="#505050" fillRule="nonzero">
                                                                        <path d="M0 .437v20.695h10.733c3.35 0 6.067-2.51 6.067-5.605V.437H0zm15.867 15.09c0 2.62-2.299 4.743-5.134 4.743h-9.8V1.3h14.934v14.227z" />
                                                                        <path d="M4.667 6.473h7.467v1H4.667zM4.667 9.922h7.467v1H4.667zM4.667 13.371h5.6v1h-5.6z" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <span className="menu-text">Legal Notices</span>
                                                        </Link>
                                                    </li>

                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="sidebar_submenu ">
                                                        <li className={`nav-item ${useRouteMatch('/prelitigation/legal/batch') && 'active'}`}>
                                                            <Link className="nav-link" to='/prelitigation/legal/batch'>
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

                                                        <li className={`nav-item ${useRouteMatch('/prelitigation/legal/notices') && 'active'}`}>
                                                            <Link className="nav-link" to='/prelitigation/legal/notices'>
                                                                <div className="m-icon">
                                                                    <svg width="28" height="20" xmlns="http://www.w3.org/2000/svg">
                                                                        <g fill="#505050" fillRule="nonzero">
                                                                            <path d="M5.8 6.56c.405 2.143 1.905 3.53 3.82 3.53 1.915 0 3.385-1.35 3.82-3.525.07-.332.405-2.014.425-2.422a3.626 3.626 0 0 0-1.105-2.765A4.502 4.502 0 0 0 9.596.118a4.498 4.498 0 0 0-3.151 1.289 3.559 3.559 0 0 0-1.07 2.745c.025.414.385 2.21.425 2.409zm1.375-4.502a3.474 3.474 0 0 1 2.433-.98c.917 0 1.794.354 2.432.98.563.551.861 1.299.825 2.066 0 .261-.255 1.544-.41 2.285-.265 1.306-1.15 2.73-2.835 2.73S7 7.659 6.78 6.386c-.15-.746-.39-2.028-.41-2.294-.04-.755.251-1.491.805-2.033zM15.73 12.332l-6.11-.78-6.075.766c-1.5.28-3.135 1.273-3.345 2.85L0 19.115h19.385l-.24-3.757c-.105-1.554-1.375-2.684-3.415-3.026zM.925 18.165l.265-2.874c.145-1.107 1.42-1.833 2.5-2.038l5.925-.74 5.955.755c.74.123 2.47.584 2.575 2.147l.18 2.75H.925zM16.965 8.408c.335 1.744 1.575 2.85 3.155 2.85 1.58 0 2.795-1.097 3.155-2.85.055-.266.325-1.596.34-1.928a2.943 2.943 0 0 0-.895-2.242 3.73 3.73 0 0 0-2.612-1.052 3.73 3.73 0 0 0-2.613 1.052 2.89 2.89 0 0 0-.87 2.228c.02.356.285 1.686.34 1.942zm1.26-3.49a2.705 2.705 0 0 1 1.887-.757c.711 0 1.392.272 1.888.756.422.412.646.97.62 1.544 0 .19-.195 1.164-.325 1.79-.1.476-.555 2.095-2.175 2.095-1.305 0-2-1.078-2.17-2.094-.12-.585-.31-1.592-.325-1.796a1.975 1.975 0 0 1 .595-1.539h.005zM22 19.115h6l-.055-3.572c-.105-1.287-1.15-2.228-2.83-2.513l-4.935-.565-.12.95 4.91.56c.565.095 1.885.447 2 1.634l.12 2.556H22v.95z" />
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <span className="menu-text">
                                                                    Notices
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    <li className={`nav-item ${useRouteMatch('/prelitigation/fir') && 'active'}`}>
                                                        <Link className="nav-link">
                                                            <div className="m-icon">
                                                                <svg width="17" height="22" xmlns="http://www.w3.org/2000/svg">
                                                                    <g fill="#505050" fillRule="nonzero">
                                                                        <path d="M0 .437v20.695h10.733c3.35 0 6.067-2.51 6.067-5.605V.437H0zm15.867 15.09c0 2.62-2.299 4.743-5.134 4.743h-9.8V1.3h14.934v14.227z" />
                                                                        <path d="M4.667 6.473h7.467v1H4.667zM4.667 9.922h7.467v1H4.667zM4.667 13.371h5.6v1h-5.6z" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <span className="menu-text">FIR</span>
                                                        </Link>
                                                    </li>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="sidebar_submenu ">
                                                        <li className={`nav-item ${useRouteMatch('/prelitigation/fir/batch') && 'active'}`}>
                                                            <Link className="nav-link" to='/prelitigation/fir/batch'>
                                                                <div className="m-icon">
                                                                    <svg width="23" height="18" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.933 0A2.333 2.333 0 0 0 5.6 2.333V2.8h-.467A2.333 2.333 0 0 0 2.8 5.133V5.6h-.275A2.53 2.53 0 0 0 0 8.125v9.608h14.275A2.53 2.53 0 0 0 16.8 15.21v-.276h.467A2.333 2.333 0 0 0 19.6 12.6v-.467h.467A2.333 2.333 0 0 0 22.4 9.8V0H7.933zm7.934 15.209c0 .879-.713 1.591-1.592 1.591H.933V8.125c0-.88.713-1.592 1.592-1.592h13.342v8.676zm2.8-2.609a1.4 1.4 0 0 1-1.4 1.4H16.8V5.6H3.733v-.467a1.4 1.4 0 0 1 1.4-1.4h13.534V12.6zm2.8-2.8a1.4 1.4 0 0 1-1.4 1.4H19.6V2.8H6.533v-.467a1.4 1.4 0 0 1 1.4-1.4h13.534V9.8z" fill="#505050" fill-rule="nonzero" />
                                                                    </svg>
                                                                </div>
                                                                <span className="menu-text">
                                                                    Batch
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className={`nav-item ${useRouteMatch('/prelitigation/fir/complaints') && 'active'}`}>
                                                            <Link className="nav-link" to='/prelitigation/fir/complaints'>
                                                                <div className="m-icon">
                                                                    <svg width="18" height="23" xmlns="http://www.w3.org/2000/svg">
                                                                        <g fill-rule="nonzero" fill="none">
                                                                            <path d="M14.933 2.8V0H0v19.6h2.8v2.8h8.867a6.067 6.067 0 0 0 6.066-6.067V2.8h-2.8zm-14 15.867V.933H14V2.8H2.8v15.867H.933zM16.8 16.333a5.133 5.133 0 0 1-5.133 5.134H3.733V3.733H16.8v12.6z" fill="#505050" />
                                                                            <path fill="#505050" d="M7 8.4h6.533v1H7zM7 12.133h6.533v1H7zM7 15.867h4.667v1H7z" />
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <span className="menu-text">
                                                                    Complaints
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
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
                                            <span className="menu-text">Litigation</span>
                                        </Link>
                                    </div>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionMenu">
                                    <div className="accordion-body">
                                        <div className="sidebar_submenu ">
                                            <ul className="nav flex-column">
                                                <li className={`nav-item ${useRouteMatch('/litigation/batch') && 'active'}`}>
                                                    <Link className="nav-link" to='/litigation/batch'>
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
                                                    <Link className="nav-link" to='/litigation/case'>
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
                                                <li className={`nav-item ${useRouteMatch('/litigation/advocates') && 'active'}`}>
                                                    <Link className="nav-link" to='/litigation/advocates'>
                                                        <div className="m-icon">
                                                            <svg width="27" height="25" xmlns="http://www.w3.org/2000/svg">
                                                                <g fill="#505050" fill-rule="nonzero">
                                                                    <path d="m17.466 11.626 7.718 7.718a.938.938 0 0 1-1.325 1.325l-7.718-7.717-.529.529 7.718 7.718c.318.318.742.493 1.192.493.45 0 .873-.175 1.192-.493a1.688 1.688 0 0 0 0-2.384l-7.718-7.718-.53.53z" />
                                                                    <path d="m19.146 9.56-.336-.336-4.602 4.603.335.335c.065.066.126.134.183.205l.886-.886.529-.53 1.325-1.325.53-.529 1.354-1.354a2.52 2.52 0 0 1-.204-.184zM9.664 9.284l4.603-4.603-.335-.335a2.571 2.571 0 0 1-.183-.205L9.125 8.765c.07.057.139.118.204.184l.335.335z" />
                                                                    <path d="M14.208 13.827 9.664 9.284l-.335-.336a2.525 2.525 0 0 0-1.8-.745c-.679 0-1.318.265-1.799.745a2.548 2.548 0 0 0 0 3.6l5.214 5.213c.48.48 1.12.746 1.8.746.68 0 1.319-.265 1.8-.746a2.549 2.549 0 0 0 0-3.599l-.336-.335zm-1.464 3.932c-.48 0-.932-.187-1.271-.527l-5.214-5.214a1.799 1.799 0 0 1 1.27-3.066c.48 0 .931.186 1.27.526l5.215 5.214a1.799 1.799 0 0 1-1.27 3.067zM14.267 4.681l4.543 4.543.336.336a2.525 2.525 0 0 0 1.8.745c.679 0 1.318-.265 1.799-.745.48-.481.745-1.12.745-1.8 0-.68-.265-1.319-.745-1.8L17.53.748A2.528 2.528 0 0 0 15.73 0c-.68 0-1.319.265-1.8.746a2.548 2.548 0 0 0 0 3.599l.336.335zm2.735-3.405 5.214 5.213c.34.34.526.791.526 1.27 0 .48-.187.932-.526 1.271-.34.34-.79.527-1.27.527s-.932-.187-1.271-.527L14.46 3.816A1.799 1.799 0 0 1 15.73.75c.48 0 .931.187 1.27.527zM4.626 21.779c-.18 0-.38-.245-.38-.597s.2-.597.38-.597H14.83c.18 0 .38.245.38.597s-.2.597-.38.597h1.01c.075-.18.118-.383.118-.597 0-.742-.506-1.345-1.128-1.345H4.626c-.623 0-1.13.603-1.13 1.345.001.214.044.417.12.597h1.01zM1.582 24.469h16.293c.87 0 1.578-.604 1.578-1.345 0-.742-.708-1.345-1.578-1.345H1.582c-.87 0-1.579.603-1.579 1.345 0 .741.708 1.345 1.579 1.345zm0-1.942h16.293c.45 0 .83.273.83.597 0 .323-.38.596-.83.596H1.582c-.45 0-.83-.273-.83-.596 0-.324.38-.597.83-.597z" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <span className="menu-text">
                                                            Advocates
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className={`nav-item ${useRouteMatch('/litigation/calendar') && 'active'}`}>
                                                    <Link className="nav-link" to='/litigation/calendar'>
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


                    {/* <li className={`nav-item ${useRouteMatch('/collection') && 'active'}`}>
                        <Link to='#' className="nav-link">   
                            <div className="m-icon">
                                <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.913 3.968a.315.315 0 1 0 0-.63.315.315 0 0 0 0 .63zm-2.52 0a.315.315 0 1 0 0-.63.315.315 0 0 0 0 .63zm1.26 0a.315.315 0 1 0 0-.63.315.315 0 0 0 0 .63zm-.07 3.337h2.855a.427.427 0 0 0 .415-.317.427.427 0 0 0-.196-.485l-.433-.256A3.651 3.651 0 0 0 7.306 3.63 3.672 3.672 0 0 0 3.706 0 3.656 3.656 0 0 0 0 3.653c0 1.945 1.603 3.61 3.584 3.652zM1.532 1.5A3 3 0 0 1 3.697.63a3.039 3.039 0 0 1 2.979 3.003 3.022 3.022 0 0 1-1.037 2.298.461.461 0 0 0 .068.742l.004.002H3.593A3.03 3.03 0 0 1 .63 3.653c0-.816.32-1.58.9-2.153zm19.658 19.374h-.315v-4.691a3.114 3.114 0 0 0-1.854-2.845l-1.66-.711a2.487 2.487 0 0 0 1.066-.67 2.61 2.61 0 0 0 .705-1.771c0-.597-.209-1.16-.603-1.63a3.261 3.261 0 0 1-.766-2.098v-1.51a4.915 4.915 0 0 0-1.45-3.498 4.916 4.916 0 0 0-3.5-1.45 4.954 4.954 0 0 0-4.948 4.949v1.46c0 .793-.312 1.55-.818 2.161a2.525 2.525 0 0 0-.346 2.71c.315.671.883 1.153 1.564 1.357l-1.649.717a3.104 3.104 0 0 0-1.904 2.867v3.708a.315.315 0 1 0 .63 0v-3.708c0-1 .596-1.898 1.522-2.288l2.066-.898v1.896h-.95a.946.946 0 0 0-.939 1.045l.52 4.898H.314a.315.315 0 1 0 0 .63h20.874a.315.315 0 1 0 0-.63zM18.046 8.962c.298.354.455.777.455 1.224 0 .49-.194.979-.534 1.339a1.886 1.886 0 0 1-1.388.59h-.41l-.54-.23a1.437 1.437 0 0 1-.86-1.134 3.1 3.1 0 0 0 1.635-2.73V5.654a4.078 4.078 0 0 0 .728-.015v.82c0 .915.325 1.804.914 2.504zm-5.156 4.973a11.67 11.67 0 0 1-3.33-.424v-.75l.09-.04h.002l.562-.245a2.069 2.069 0 0 0 1.202-1.48c.274.08.564.124.864.124h1.026c.3 0 .591-.044.867-.125.138.648.582 1.2 1.208 1.469l.6.257.045.02v.708c-1.02.304-2.073.467-3.136.486zm3.136.17v.826H9.559v-.768a12.312 12.312 0 0 0 6.467-.058zm1.106-9.103c-.867.118-1.846-.115-2.52-.637a.315.315 0 0 0-.385.498c.44.341.972.582 1.547.703v1.715c-.151.345-.32.632-.7.945-.16.132-.335.242-.522.329a.924.924 0 0 0-.822-.504h-.739a.924.924 0 0 0 0 1.847h.739c.428 0 .79-.294.893-.69.421-.16 1.108-.734 1.109-.734a2.472 2.472 0 0 1-2.426 2.015H12.28a2.47 2.47 0 0 1-2.468-2.468V5.587a8.447 8.447 0 0 0 3.007-1.078 8.557 8.557 0 0 0 2.863-2.788 4.316 4.316 0 0 1 1.45 3.281zm-3.11 3.973a.294.294 0 0 1-.292.293h-.739a.294.294 0 0 1 0-.587h.739c.161 0 .292.131.293.292v.002zM8.495 4.95a4.324 4.324 0 0 1 6.687-3.613 7.931 7.931 0 0 1-2.683 2.63 7.832 7.832 0 0 1-2.981 1.027H8.494v-.044zM7.27 11.013a1.9 1.9 0 0 1 .26-2.04c.602-.725.965-1.62.964-2.564v-.786h.688v2.399a3.1 3.1 0 0 0 1.635 2.73c-.06.502-.382.941-.854 1.146l-.5.218h-.457a1.901 1.901 0 0 1-1.736-1.103zm10.966 4.896-.526 4.965H8.193l-.526-4.965a.311.311 0 0 1 .079-.244.311.311 0 0 1 .234-.104h9.943c.09 0 .173.037.234.104.06.068.089.154.08.244zm2.008 4.965h-1.9l.519-4.898a.946.946 0 0 0-.94-1.045h-1.267v-1.92l2.113.905a2.482 2.482 0 0 1 1.475 2.267v4.691zm-7.293-3.854a1.198 1.198 0 0 0 0 2.394c.66 0 1.197-.536 1.197-1.197 0-.66-.537-1.197-1.197-1.197zm0 1.765a.568.568 0 1 1 .002-1.136.568.568 0 0 1-.002 1.136z" fill="#505050" fillRule="nonzero" />
                                </svg>
                            </div>
                            <span className="menu-text">
                                Communication
                            </span>
                        </Link>
                    </li>
                    <li className={`nav-item ${useRouteMatch('/collection') && 'active'}`}>
                        <div className="nav-sap"><hr /></div>
                    </li>

                    <li className={`nav-item ${useRouteMatch('/collection') && 'active'}`}>
                        <Link to='#' className="nav-link">   
                            <div className="m-icon">
                                <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#505050" fillRule="nonzero">
                                        <path d="M11.04 0C4.943 0 0 4.943 0 11.04c0 6.097 4.943 11.04 11.04 11.04 6.097 0 11.04-4.943 11.04-11.04A11.04 11.04 0 0 0 11.04 0zm0 .92a10.12 10.12 0 0 1 8.156 16.1c-.336-1.104-1.256-1.992-2.636-2.429l-5.52-1.03-5.451 1.026a3.57 3.57 0 0 0-2.705 2.433A10.12 10.12 0 0 1 11.04.92zm0 20.24a10.092 10.092 0 0 1-7.36-3.183v-.115c0-1.38 1.1-2.12 2.107-2.374l5.253-.989 5.249.98c.653.207 2.111.846 2.111 2.378v.12a10.092 10.092 0 0 1-7.36 3.183z" />
                                        <path d="M7.728 8.699c.354 1.982 1.656 3.261 3.312 3.261s2.935-1.247 3.312-3.252c.06-.304.35-1.84.363-2.227a3.473 3.473 0 0 0-.97-2.571 3.763 3.763 0 0 0-5.433.023 3.413 3.413 0 0 0-.952 2.553c.028.382.336 2.033.368 2.213zm1.251-4.14a2.843 2.843 0 0 1 4.099 0c.488.501.749 1.181.722 1.881 0 .24-.22 1.412-.35 2.093-.23 1.214-.984 2.507-2.41 2.507-1.426 0-2.199-1.348-2.406-2.502-.129-.686-.354-1.859-.354-2.098a2.498 2.498 0 0 1 .7-1.877V4.56z" />
                                    </g>
                                </svg>
                            </div>
                            <span className="menu-text">Super-Admin</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${useRouteMatch('/collection') && 'active'}`}>
                        <Link to='#' className="nav-link">   
                            <div className="m-icon">
                                <svg width="28" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#505050" fillRule="nonzero">
                                        <path d="M5.8 6.56c.405 2.143 1.905 3.53 3.82 3.53 1.915 0 3.385-1.35 3.82-3.525.07-.332.405-2.014.425-2.422a3.626 3.626 0 0 0-1.105-2.765A4.502 4.502 0 0 0 9.596.118a4.498 4.498 0 0 0-3.151 1.289 3.559 3.559 0 0 0-1.07 2.745c.025.414.385 2.21.425 2.409zm1.375-4.502a3.474 3.474 0 0 1 2.433-.98c.917 0 1.794.354 2.432.98.563.551.861 1.299.825 2.066 0 .261-.255 1.544-.41 2.285-.265 1.306-1.15 2.73-2.835 2.73S7 7.659 6.78 6.386c-.15-.746-.39-2.028-.41-2.294-.04-.755.251-1.491.805-2.033zM15.73 12.332l-6.11-.78-6.075.766c-1.5.28-3.135 1.273-3.345 2.85L0 19.115h19.385l-.24-3.757c-.105-1.554-1.375-2.684-3.415-3.026zM.925 18.165l.265-2.874c.145-1.107 1.42-1.833 2.5-2.038l5.925-.74 5.955.755c.74.123 2.47.584 2.575 2.147l.18 2.75H.925zM16.965 8.408c.335 1.744 1.575 2.85 3.155 2.85 1.58 0 2.795-1.097 3.155-2.85.055-.266.325-1.596.34-1.928a2.943 2.943 0 0 0-.895-2.242 3.73 3.73 0 0 0-2.612-1.052 3.73 3.73 0 0 0-2.613 1.052 2.89 2.89 0 0 0-.87 2.228c.02.356.285 1.686.34 1.942zm1.26-3.49a2.705 2.705 0 0 1 1.887-.757c.711 0 1.392.272 1.888.756.422.412.646.97.62 1.544 0 .19-.195 1.164-.325 1.79-.1.476-.555 2.095-2.175 2.095-1.305 0-2-1.078-2.17-2.094-.12-.585-.31-1.592-.325-1.796a1.975 1.975 0 0 1 .595-1.539h.005zM22 19.115h6l-.055-3.572c-.105-1.287-1.15-2.228-2.83-2.513l-4.935-.565-.12.95 4.91.56c.565.095 1.885.447 2 1.634l.12 2.556H22v.95z" />
                                    </g>
                                </svg>
                            </div>
                            <span className="menu-text">Users & Roles</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${useRouteMatch('/collection') && 'active'}`}>
                        <Link to='#' className="nav-link">   
                            <div className="m-icon">
                                <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2 0C5.014 0 0 5.014 0 11.2c0 6.186 5.014 11.2 11.2 11.2 6.186 0 11.2-5.014 11.2-11.2A11.2 11.2 0 0 0 11.2 0zm.467.933c1.207.053 2.395.32 3.509.789l-3.51 3.514V.933zm0 5.6 4.4-4.391c.742.401 1.431.892 2.054 1.46l-6.454 6.469V6.533zm7.112-2.249a10.313 10.313 0 0 1 1.516 2.165l-4.293 4.284h-3.677l6.454-6.449zm1.936 3.066c.442 1.077.696 2.22.752 3.383h-4.144l3.392-3.383zM10.733.933v10.071l-7.116 7.107A10.267 10.267 0 0 1 10.733.933zm.467 20.534a10.225 10.225 0 0 1-6.92-2.693l7.107-7.107h10.08c0 .155-.011.31-.033.466A10.267 10.267 0 0 1 11.2 21.467z" fill="#505050" fillRule="nonzero" />
                                </svg>
                            </div>
                            <span className="menu-text">Account</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${useRouteMatch('/collection') && 'active'}`}>
                        <Link to='#' className="nav-link">   
                            <div className="m-icon">
                                <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#505050" fillRule="nonzero">
                                        <path d="M5.6.155v15.953c0 1.19-1.045 2.155-2.333 2.155-1.289 0-2.334-.965-2.334-2.155V9.64c0-.476.418-.862.934-.862.515 0 .933.386.933.862v5.605h.933V9.64c0-.952-.835-1.724-1.866-1.724C.836 7.916 0 8.688 0 9.64v6.468c0 1.666 1.463 3.018 3.267 3.018h15.866c1.804 0 3.267-1.352 3.267-3.018V.155H5.6zm15.867 15.953c0 1.19-1.045 2.155-2.334 2.155H5.55a2.91 2.91 0 0 0 .984-2.155V1.018h14.934v15.09z" />
                                        <path d="M18.667 3.604H9.333V9.64h9.334V3.604zm-.934 5.174h-7.466V4.467h7.466v4.311zM9.333 11.365h9.333v1H9.333zM9.333 13.952h7v1h-7z" />
                                    </g>
                                </svg>
                            </div>
                            <span className="menu-text">Invoice</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${useRouteMatch('/collection') && 'active'}`}>
                        <Link to='#' className="nav-link">   
                            <div className="m-icon">
                                <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#505050" fillRule="nonzero">
                                        <path d="M10.971 7.487c-2.02 0-3.657 1.513-3.657 3.38 0 1.865 1.638 3.378 3.657 3.378 2.02 0 3.658-1.513 3.658-3.379 0-.896-.386-1.755-1.072-2.389a3.816 3.816 0 0 0-2.586-.99zm0 5.913c-1.514 0-2.742-1.134-2.742-2.534s1.228-2.534 2.742-2.534c1.515 0 2.743 1.135 2.743 2.534a2.44 2.44 0 0 1-.803 1.792 2.862 2.862 0 0 1-1.94.742z" />
                                        <path d="m19.694 12.805 2.249-.152V8.974l-2.25-.152c-.563-.045-1.053-.376-1.27-.86a1.318 1.318 0 0 1 .238-1.438l1.453-1.57-2.793-2.607-1.705 1.36a1.593 1.593 0 0 1-1.573.22c-.518-.186-.874-.632-.914-1.145L12.96.73H8.978l-.164 2.154c-.037.486-.352.802-.832 1.225l-.096-.064a1.593 1.593 0 0 1-1.545-.283l-1.72-1.39-2.815 2.581L3.282 6.53c.365.398.458.952.242 1.434-.217.482-.707.812-1.27.855L0 8.974v3.679l2.25.152c.559.046 1.044.376 1.26.855.216.48.127 1.03-.232 1.43l-1.472 1.592 2.816 2.601 1.71-1.364a1.593 1.593 0 0 1 1.567-.22c.523.21.876.67.915 1.196l.164 2.112h3.982l.165-2.112c.04-.521.393-.978.914-1.183l.082-.038a1.577 1.577 0 0 1 1.49.245l1.71 1.36 2.816-2.601-1.472-1.588a1.3 1.3 0 0 1-.238-1.453c.219-.476.708-.798 1.267-.832zm-1.724 2.85.915.985-1.614 1.49-1.065-.844a2.546 2.546 0 0 0-2.492-.368l-.091.043c-.809.34-1.352 1.06-1.417 1.879l-.096 1.318H9.824l-.105-1.322c-.067-.849-.642-1.59-1.49-1.922a2.546 2.546 0 0 0-2.492.368l-1.065.844-1.623-1.486.914-.984c.592-.64.746-1.533.399-2.31-.347-.78-1.136-1.312-2.044-1.382l-1.404-.097V9.755l1.404-.097c.91-.066 1.702-.598 2.05-1.377.35-.779.197-1.673-.395-2.314l-.915-.984L4.663 3.5l1.065.845a2.543 2.543 0 0 0 2.4.422l.1-.046c.85-.309 1.432-1.039 1.5-1.88l.1-1.266h2.286l.105 1.267c.085.834.665 1.555 1.504 1.871.84.316 1.8.174 2.492-.368L17.28 3.5l1.614 1.491-.915.984c-.588.643-.74 1.535-.39 2.312.348.778 1.138 1.31 2.045 1.38l1.395.093v2.111l-1.404.097c-.908.07-1.697.602-2.046 1.38-.348.777-.197 1.67.391 2.312v-.004z" />
                                    </g>
                                </svg>
                            </div>
                            <span className="menu-text">Settings</span>
                        </Link>
                    </li> */}
                </ul>
            </div>

            {/* Admin menu Below */}

        </>
    )
}

export default Sidebar
