import React from 'react'
import { useState } from 'react'
import LitigationCasesHeader from '../../Components/LitigationCasesHeader'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import Arrow from '../../Static/RawImages/arrow.png'
import ArrowRight from '../../Static/RawImages/arrow-right.png'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { IoCloseCircle } from 'react-icons/io5'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DoubleCheck from '../../Static/RawImages/double-check.png'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link, useRouteMatch } from 'react-router-dom'

function LitigationCase(props) {
    const [IsHistory, setIsHistory] = useState(false)
    const [IsCaseNotes, setIsCaseNotes] = useState(false)
    const [lgShow, setLgShow] = useState(false)
    const [IsHistoryDetail, setIsHistoryDetail] = useState(false)
    const [smShow, setSmShow] = useState(false)
    const [IsPendingDocuments, setIsPendingDocuments] = useState(false)
    const [IsCommunication, setIsCommunication] = useState(false)

    //Refs
    let refBatchName = null
    let refBatchId = null
    let refLastDisposition = null
    let refOverdue = null
    let refProduct = null
    let refStatus = null
    let refAmountFrom = null
    let refAmountTo = null
    let refDateFrom = null
    let refDateTo = null
    let refSpecificDate = null
    return (
        <>
        <Tab.Container defaultActiveKey="first">
            <Nav className="content-tab mb-4">
                <Nav.Item>
                    <Nav.Link eventKey="first">
                        Open (3,242)
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">
                        Closed (3,179)
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <LitigationCasesHeader />
            <hr className="mt-4 mb-4" />
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
                        <div className="col-lg-4">
                            <div className="d-flex align-start">
                                <Checkbox
                                    className="me-3"
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <div>
                                    <p className="mb-2 tx-16 text-black"><a><strong>Ritu Raj Srivastava (124516716)</strong></a></p>
                                    <p>Product - <span className="text-black">Car</span></p>
                                    <hr />
                                    <p className="mb-2"><span className="text-black">Arbitration (Mumbai) - Contested</span></p>
                                    <p className="mb-2">Arbitrator - <span className="text-black">Justice Nirgude - (9090909090)</span></p>
                                    <p className="mb-3"> KS Legal & Associates (9090909090)</p>
                                    <hr />
                                    <p>Status - <b className="text-success">SOC Filed</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    <tr>                                
                                        <td>Assigned</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>                                
                                        <td>First Hearning</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>                               
                                        <td>Last Hearing</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>                               
                                        <td>Next Hearing</td>
                                        <td>--</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <div className="action-box">
                                <label htmlFor="dropdown-basic" className="col-form-label mb-2 pt-0">Action</label>
                                <Dropdown className="dropdown-s2">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                        Select <img src={Arrow} alt="Sort" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="select-style-dropdown">
                                        <Dropdown.Item onClick={() => setLgShow(true)}>View Case Paper</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setSmShow(true)}>Assign to Lawyer</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setIsCaseNotes(true)}>Add Case Notes</Dropdown.Item>
                                        <Dropdown.Item>Update Information</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>       
                                <hr className="mt-5 mb-5" />
                                <ul className="d-flex history-box">
                                    <li>
                                        <p className="al-popup-button" id="whatsapp" onClick={() => setIsHistory(true)}>
                                            <div>
                                                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#0A7AFF" fill-rule="nonzero">
                                                        <path d="M12.267 0C5.503 0 0 5.503 0 12.267c0 6.763 5.503 12.266 12.267 12.266 6.763 0 12.266-5.503 12.266-12.266C24.533 5.503 19.03 0 12.267 0zm0 23.467c-6.176 0-11.2-5.024-11.2-11.2 0-6.176 5.024-11.2 11.2-11.2 6.176 0 11.2 5.024 11.2 11.2 0 6.176-5.024 11.2-11.2 11.2z"/>
                                                        <path d="M17.444 16.69 12.8 12.046V3.733a.534.534 0 0 0-1.067 0v8.534c0 .142.057.277.156.377l4.8 4.8a.536.536 0 0 0 .755 0 .534.534 0 0 0 0-.754z"/>
                                                    </g>
                                                </svg>                                                                                           
                                            </div>
                                            History
                                        </p>
                                    </li>
                                    <li>
                                        <p className="al-popup-button" onClick={() => setIsPendingDocuments(true)}>
                                            <div>
                                                <svg width="18" height="24" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#0A7AFF" fill-rule="nonzero">
                                                        <path d="M0 0v24h11.5a6.5 6.5 0 0 0 6.5-6.5V0H0zm17 17.5a5.5 5.5 0 0 1-5.5 5.5H1V1h16v16.5z"/>
                                                        <path d="M8.5 9.205V15h1V9.205l2.645 2.65.71-.71L9 7.295l-3.855 3.85.71.71z"/>
                                                    </g>
                                                </svg>
                                                <span className="badge badge-success">6</span>                                                
                                            </div>
                                            Requisition
                                        </p>
                                    </li>
                                    <li>
                                        <p className="al-popup-button" onClick={() => setIsCommunication(true)}>
                                            <div>
                                                <svg width="26" height="23" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#0A7AFF" fill-rule="nonzero">
                                                        <path d="M12.8 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM4.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                                        <path d="M16.8 0c-4.501 0-8.196 3.104-8.482 7.013C4.031 7.228 0 10.319 0 14.5c0 1.747.691 3.44 1.95 4.782a3.04 3.04 0 0 1-.804 2.864A.5.5 0 0 0 1.5 23c1.426 0 2.8-.56 3.821-1.545.995.34 2.293.545 3.479.545 4.5 0 8.195-3.103 8.481-7.011 1.047-.047 2.136-.24 2.998-.534A5.515 5.515 0 0 0 24.1 16a.5.5 0 0 0 .354-.854 3.04 3.04 0 0 1-.804-2.864C24.909 10.94 25.6 9.247 25.6 7.5c0-4.344-4.342-7.5-8.8-7.5zm-8 21c-1.18 0-2.525-.232-3.426-.59a.5.5 0 0 0-.553.127 4.512 4.512 0 0 1-2.244 1.332 4.044 4.044 0 0 0 .304-2.976.499.499 0 0 0-.122-.212C1.625 17.513 1 16.028 1 14.5 1 10.977 4.572 8 8.8 8c3.993 0 7.5 2.776 7.5 6.5 0 3.584-3.364 6.5-7.5 6.5zm14.04-9.319a.501.501 0 0 0-.121.212 4.044 4.044 0 0 0 .304 2.976 4.51 4.51 0 0 1-2.244-1.332.5.5 0 0 0-.553-.127c-.781.31-1.895.526-2.946.578-.146-1.891-1.09-3.668-2.702-4.988H21.1a.5.5 0 1 0 0-1h-8.058a9.325 9.325 0 0 0-3.721-.985C9.608 3.656 12.853 1 16.8 1c4.228 0 7.8 2.977 7.8 6.5 0 1.528-.625 3.013-1.76 4.181z"/>
                                                        <path d="M12.8 13H6.5a.5.5 0 1 0 0 1h6.3a.5.5 0 1 0 0-1zM12.8 16H4.5a.5.5 0 1 0 0 1h8.3a.5.5 0 1 0 0-1zM21.1 5h-6.3a.5.5 0 1 0 0 1h6.3a.5.5 0 1 0 0-1z"/>
                                                    </g>
                                                </svg>
                                                <span className="badge badge-success">2</span>                                                
                                            </div>
                                            Communication
                                        </p>
                                    </li>
                                </ul>                
                            </div>
                        </div>
                        <div className="col-lg-12"><hr className="mt-4 mb-5" /></div>
                    </div>
                    <div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
                        <div className="col-lg-4">
                            <div className="d-flex align-start">
                                <Checkbox
                                    className="me-3"
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <div>
                                    <p className="mb-2 tx-16 text-black"><a><strong>Ritu Raj Srivastava (124516716)</strong></a></p>
                                    <p>Product - <span className="text-black">Car</span></p>
                                    <hr />
                                    <p className="mb-2"><span className="text-black">Arbitration (Mumbai) - Contested</span></p>
                                    <p className="mb-2">Arbitrator - <span className="text-black">Justice Nirgude - (9090909090)</span></p>
                                    <p className="mb-3"> KS Legal & Associates (9090909090)</p>
                                    <hr />
                                    <p>Status - <b className="text-success">SOC Filed</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <td>Assigned</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>First Hearning</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Last Hearing</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Next Hearing</td>
                                        <td>--</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <div className="action-box">
                                <label htmlFor="dropdown-basic" className="col-form-label mb-2 pt-0">Action</label>
                                <Dropdown className="dropdown-s2">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                        Select <img src={Arrow} alt="Sort" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="select-style-dropdown">
                                        <Dropdown.Item onClick={() => setLgShow(true)}>View Case Paper</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setSmShow(true)}>Assign to Lawyer</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setIsCaseNotes(true)}>Add Case Notes</Dropdown.Item>
                                        <Dropdown.Item>Update Information</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>       
                                <hr className="mt-5 mb-5" />
                                <ul className="d-flex history-box">
                                    <li>
                                        <p className="al-popup-button" id="whatsapp" onClick={() => setIsHistory(true)}>
                                            <div>
                                                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#0A7AFF" fill-rule="nonzero">
                                                        <path d="M12.267 0C5.503 0 0 5.503 0 12.267c0 6.763 5.503 12.266 12.267 12.266 6.763 0 12.266-5.503 12.266-12.266C24.533 5.503 19.03 0 12.267 0zm0 23.467c-6.176 0-11.2-5.024-11.2-11.2 0-6.176 5.024-11.2 11.2-11.2 6.176 0 11.2 5.024 11.2 11.2 0 6.176-5.024 11.2-11.2 11.2z"/>
                                                        <path d="M17.444 16.69 12.8 12.046V3.733a.534.534 0 0 0-1.067 0v8.534c0 .142.057.277.156.377l4.8 4.8a.536.536 0 0 0 .755 0 .534.534 0 0 0 0-.754z"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            History
                                        </p>
                                    </li>
                                    <li>
                                        <p className="al-popup-button" onClick={() => setIsPendingDocuments(true)}>
                                            <div>
                                                <svg width="18" height="24" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#0A7AFF" fill-rule="nonzero">
                                                        <path d="M0 0v24h11.5a6.5 6.5 0 0 0 6.5-6.5V0H0zm17 17.5a5.5 5.5 0 0 1-5.5 5.5H1V1h16v16.5z"/>
                                                        <path d="M8.5 9.205V15h1V9.205l2.645 2.65.71-.71L9 7.295l-3.855 3.85.71.71z"/>
                                                    </g>
                                                </svg>
                                                <span className="badge badge-success">6</span>
                                            </div>
                                            Requisition
                                        </p>
                                    </li>
                                    <li>
                                        <p className="al-popup-button" onClick={() => setIsCommunication(true)}>
                                            <div>
                                                <svg width="26" height="23" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#0A7AFF" fill-rule="nonzero">
                                                        <path d="M12.8 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM4.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                                        <path d="M16.8 0c-4.501 0-8.196 3.104-8.482 7.013C4.031 7.228 0 10.319 0 14.5c0 1.747.691 3.44 1.95 4.782a3.04 3.04 0 0 1-.804 2.864A.5.5 0 0 0 1.5 23c1.426 0 2.8-.56 3.821-1.545.995.34 2.293.545 3.479.545 4.5 0 8.195-3.103 8.481-7.011 1.047-.047 2.136-.24 2.998-.534A5.515 5.515 0 0 0 24.1 16a.5.5 0 0 0 .354-.854 3.04 3.04 0 0 1-.804-2.864C24.909 10.94 25.6 9.247 25.6 7.5c0-4.344-4.342-7.5-8.8-7.5zm-8 21c-1.18 0-2.525-.232-3.426-.59a.5.5 0 0 0-.553.127 4.512 4.512 0 0 1-2.244 1.332 4.044 4.044 0 0 0 .304-2.976.499.499 0 0 0-.122-.212C1.625 17.513 1 16.028 1 14.5 1 10.977 4.572 8 8.8 8c3.993 0 7.5 2.776 7.5 6.5 0 3.584-3.364 6.5-7.5 6.5zm14.04-9.319a.501.501 0 0 0-.121.212 4.044 4.044 0 0 0 .304 2.976 4.51 4.51 0 0 1-2.244-1.332.5.5 0 0 0-.553-.127c-.781.31-1.895.526-2.946.578-.146-1.891-1.09-3.668-2.702-4.988H21.1a.5.5 0 1 0 0-1h-8.058a9.325 9.325 0 0 0-3.721-.985C9.608 3.656 12.853 1 16.8 1c4.228 0 7.8 2.977 7.8 6.5 0 1.528-.625 3.013-1.76 4.181z"/>
                                                        <path d="M12.8 13H6.5a.5.5 0 1 0 0 1h6.3a.5.5 0 1 0 0-1zM12.8 16H4.5a.5.5 0 1 0 0 1h8.3a.5.5 0 1 0 0-1zM21.1 5h-6.3a.5.5 0 1 0 0 1h6.3a.5.5 0 1 0 0-1z"/>
                                                    </g>
                                                </svg>
                                                <span className="badge badge-success">2</span>
                                            </div>
                                            Communication
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12"><hr className="mt-4 mb-5" /></div>
                    </div>
                    <div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
                        <div className="col-lg-4">
                            <div className="d-flex align-start">
                                <Checkbox
                                    className="me-3"
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <div>
                                    <p className="mb-2 tx-16 text-black"><a><strong>Ritu Raj Srivastava (124516716)</strong></a></p>
                                    <p>Product - <span className="text-black">Car</span></p>
                                    <hr />
                                    <p className="mb-2"><span className="text-black">Arbitration (Mumbai) - Contested</span></p>
                                    <p className="mb-2">Arbitrator - <span className="text-black">Justice Nirgude - (9090909090)</span></p>
                                    <p className="mb-3"> KS Legal & Associates (9090909090)</p>
                                    <hr />
                                    <p>Status - <b className="text-success">SOC Filed</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <td>Assigned</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>First Hearning</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Last Hearing</td>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <td>Next Hearing</td>
                                        <td>--</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <div className="action-box">
                                <label htmlFor="dropdown-basic" className="col-form-label mb-2 pt-0">Action</label>
                                <Dropdown className="dropdown-s2">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                        Select <img src={Arrow} alt="Sort" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="select-style-dropdown">
                                        <Dropdown.Item onClick={() => setLgShow(true)}>View Case Paper</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setSmShow(true)}>Assign to Lawyer</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setIsCaseNotes(true)}>Add Case Notes</Dropdown.Item>
                                        <Dropdown.Item>Update Information</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>       
                                <hr className="mt-5 mb-5" />
                                <ul className="d-flex history-box">
                                    <li>
                                        <p className="al-popup-button" id="whatsapp" onClick={() => setIsHistory(true)}>
                                            <div>
                                                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#0A7AFF" fill-rule="nonzero">
                                                        <path d="M12.267 0C5.503 0 0 5.503 0 12.267c0 6.763 5.503 12.266 12.267 12.266 6.763 0 12.266-5.503 12.266-12.266C24.533 5.503 19.03 0 12.267 0zm0 23.467c-6.176 0-11.2-5.024-11.2-11.2 0-6.176 5.024-11.2 11.2-11.2 6.176 0 11.2 5.024 11.2 11.2 0 6.176-5.024 11.2-11.2 11.2z"/>
                                                        <path d="M17.444 16.69 12.8 12.046V3.733a.534.534 0 0 0-1.067 0v8.534c0 .142.057.277.156.377l4.8 4.8a.536.536 0 0 0 .755 0 .534.534 0 0 0 0-.754z"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            History
                                        </p>
                                    </li>
                                    <li>
                                        <p className="al-popup-button" onClick={() => setIsPendingDocuments(true)}>
                                            <div>
                                                <svg width="18" height="24" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#0A7AFF" fill-rule="nonzero">
                                                        <path d="M0 0v24h11.5a6.5 6.5 0 0 0 6.5-6.5V0H0zm17 17.5a5.5 5.5 0 0 1-5.5 5.5H1V1h16v16.5z"/>
                                                        <path d="M8.5 9.205V15h1V9.205l2.645 2.65.71-.71L9 7.295l-3.855 3.85.71.71z"/>
                                                    </g>
                                                </svg>
                                                <span className="badge badge-success">6</span>
                                            </div>
                                            Requisition
                                        </p>
                                    </li>
                                    <li>
                                        <p className="al-popup-button" onClick={() => setIsCommunication(true)}>
                                            <div>
                                                <svg width="26" height="23" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#0A7AFF" fill-rule="nonzero">
                                                        <path d="M12.8 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM4.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                                        <path d="M16.8 0c-4.501 0-8.196 3.104-8.482 7.013C4.031 7.228 0 10.319 0 14.5c0 1.747.691 3.44 1.95 4.782a3.04 3.04 0 0 1-.804 2.864A.5.5 0 0 0 1.5 23c1.426 0 2.8-.56 3.821-1.545.995.34 2.293.545 3.479.545 4.5 0 8.195-3.103 8.481-7.011 1.047-.047 2.136-.24 2.998-.534A5.515 5.515 0 0 0 24.1 16a.5.5 0 0 0 .354-.854 3.04 3.04 0 0 1-.804-2.864C24.909 10.94 25.6 9.247 25.6 7.5c0-4.344-4.342-7.5-8.8-7.5zm-8 21c-1.18 0-2.525-.232-3.426-.59a.5.5 0 0 0-.553.127 4.512 4.512 0 0 1-2.244 1.332 4.044 4.044 0 0 0 .304-2.976.499.499 0 0 0-.122-.212C1.625 17.513 1 16.028 1 14.5 1 10.977 4.572 8 8.8 8c3.993 0 7.5 2.776 7.5 6.5 0 3.584-3.364 6.5-7.5 6.5zm14.04-9.319a.501.501 0 0 0-.121.212 4.044 4.044 0 0 0 .304 2.976 4.51 4.51 0 0 1-2.244-1.332.5.5 0 0 0-.553-.127c-.781.31-1.895.526-2.946.578-.146-1.891-1.09-3.668-2.702-4.988H21.1a.5.5 0 1 0 0-1h-8.058a9.325 9.325 0 0 0-3.721-.985C9.608 3.656 12.853 1 16.8 1c4.228 0 7.8 2.977 7.8 6.5 0 1.528-.625 3.013-1.76 4.181z"/>
                                                        <path d="M12.8 13H6.5a.5.5 0 1 0 0 1h6.3a.5.5 0 1 0 0-1zM12.8 16H4.5a.5.5 0 1 0 0 1h8.3a.5.5 0 1 0 0-1zM21.1 5h-6.3a.5.5 0 1 0 0 1h6.3a.5.5 0 1 0 0-1z"/>
                                                    </g>
                                                </svg>
                                                <span className="badge badge-success">2</span>
                                            </div>
                                            Communication
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
        
        {/* History of Case Hearing */}
        <div className="al-popup" style={IsHistory ? {
                transform: 'translateX(0)'
            } : { transform: 'translateX(110%)'}}
        >
            <div className="al-close">
                <IoCloseCircle fill="#999999" size={50} onClick={() => setIsHistory(false)} />
            </div>
            <div className="al-head">
                <h2>History of Case Hearing (13)</h2>                
            </div>
            
            <div className="disposition-row pt-3 pb-3"  onClick={() => setIsHistoryDetail(true)}>
                <div className="row d-flex align-center">
                    <div className="col-lg-3">
                        <div className="dispo-date text-center">
                            8<br />
                            <span>Nov 20</span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="dispo-note">
                            <p className="fs-7 mb-1">District Judge-1 Addl. Sess. Judge </p>
                            <p className="fs-7 mb-1">Hearning Date - 19 Jul 2021 </p>
                            <p className="fs-7 mb-1">Awating Notice </p>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-end">
                        <div className="dispo-arrow">
                            <img src={ArrowRight} alt="Arrow Right" />
                        </div>
                    </div>
                </div>                
            </div> 
            <div className="disposition-row pt-3 pb-3" onClick={() => setIsHistoryDetail(true)}>
                <div className="row d-flex align-center">
                    <div className="col-lg-3">
                        <div className="dispo-date text-center">
                            29<br />
                            <span>Oct 20</span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="dispo-note">
                            <p className="fs-7 mb-1">District Judge-1 Addl. Sess. Judge </p>
                            <p className="fs-7 mb-1">Hearning Date - 19 Jul 2021 </p>
                            <p className="fs-7 mb-1">Awating Notice </p>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-end">
                        <div className="dispo-arrow">
                            <img src={ArrowRight} alt="Arrow Right" />
                        </div>
                    </div>
                </div>                
            </div> 
            <div className="disposition-row pt-3 pb-3" onClick={() => setIsHistoryDetail(true)}>
                <div className="row d-flex align-center">
                    <div className="col-lg-3">
                        <div className="dispo-date text-center">
                            10<br />
                            <span>Nov 20</span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="dispo-note">
                            <p className="fs-7 mb-1">District Judge-1 Addl. Sess. Judge </p>
                            <p className="fs-7 mb-1">Hearning Date - 19 Jul 2021 </p>
                            <p className="fs-7 mb-1">Awating Notice </p>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-end">
                        <div className="dispo-arrow">
                            <img src={ArrowRight} alt="Arrow Right" />
                        </div>
                    </div>
                </div>                
            </div>           
        </div>

        {/* View Business */}
        <div className="al-popup al-grey" style={IsHistoryDetail ? {
                transform: 'translateX(0)'
            } : { transform: 'translateX(110%)'}}
        >
            <div className="popup-white clearfix">
                <div className="al-close">
                    <IoCloseCircle fill="#999999" size={50} onClick={() => setIsHistoryDetail(false)} />
                </div>
                <div className="al-head">
                    <h2>
                        <Link onClick={() => setIsHistoryDetail(false)}>
                            <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
                                <g fill="#1A1A1A" fill-rule="evenodd">
                                    <path d="M25.5 15.938a1.063 1.063 0 0 1 0 2.124h-17a1.062 1.062 0 1 1 0-2.125h17z"/>
                                    <path d="m10.003 17 5.623 5.624a1.063 1.063 0 0 1-1.502 1.502l-6.375-6.375a1.063 1.063 0 0 1 0-1.502l6.375-6.375a1.063 1.063 0 0 1 1.502 1.502L10.003 17z"/>
                                </g>
                            </svg>
                        </Link>
                        View Business
                    </h2>                
                </div>                
                <div className="pt-0 pb-0">
                    <div className="row d-flex align-center">
                        <div className="col-lg-12">
                            <p className="text-black"><strong>Daily Status</strong></p>
                            <p className="text-black">
                                <span className="text-muted">In The Court Of</span><br />
                                District Judge and Addtional Session Judge Malkapur
                            </p>
                            <p className="text-black">
                                <span className="text-muted">CNR Number</span><br />
                                MHBU110009032016
                            </p>
                            <p className="text-black">
                                <span className="text-muted">Case Number</span><br />
                                Arbitration R.D/0000087/2017 TVS credit Services Limited Versus Ritu Raj Srivastava
                            </p>
                            <p className="text-black mb-0">
                                <span className="text-muted">Date</span><br />
                                06/09/2018
                            </p>
                        </div>                    
                    </div>
                </div>    
            </div>   
            <div className="mt-4 pb-5 clearfix grey-bg">
                <p className="text-black">
                    <span className="text-muted">Business</span><br />
                    D.H. and his counsel absent J.D. and his counsel absent Say not file by J.D. counsel hence adj
                </p>
                <p className="text-black">
                    <span className="text-muted">Next Purpose</span><br />                    
                    Reply/Say
                </p>
                <p className="text-black">
                    <span className="text-muted">Next Hearing Date</span><br />                    
                    22/11/2018
                </p>
                <hr />
                <p className="text-black">
                    District Judge and Addtional Session Judge Malkapur
                </p>
            </div>    
        </div>
        
        {/* Case Notes */}
        <div className="al-popup" style={IsCaseNotes ? {
                transform: 'translateX(0)'
            } : { transform: 'translateX(110%)'}}
        >
            <div className="al-close">
                <IoCloseCircle fill="#999999" size={50} onClick={() => setIsCaseNotes(false)} />
            </div>
            <div className="al-head">
                <h2>Case Notes</h2>                
            </div>            
            <div className="pt-3 pb-0">
                <p className="mb-2">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.</p>
                <p className="text-muted fs-7">16 May 2021  |  01:15 PM</p>
                <hr className="hr-dotted" />
            </div>
            <div className="pt-0 pb-0">
                <p className="mb-2">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.</p>
                <p className="text-muted fs-7">16 May 2021  |  01:15 PM</p>
                <hr className="hr-dotted" />
            </div>
            <div className="pt-0 pb-0">
                <p className="mb-2">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.</p>
                <p className="text-muted fs-7">16 May 2021  |  01:15 PM</p>
                <hr className="hr-dotted" />
            </div>
            <div className="pt-0 pb-0">
                <p className="mb-2">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.</p>
                <p className="text-muted fs-7">16 May 2021  |  01:15 PM</p>
                <hr className="hr-dotted" />
            </div>
            
            <div className="add-case py-4 px-3">
                <form>
                    <div className="row mb-2">
                        <div className="col-md-12 text-end">
                            <textarea className="form-textarea" style={{ height: '175px' }} placeholder="Type a Case Notes…"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-end">
                            <Button variant="primary">Add Case Note</Button>
                        </div>
                    </div>                    
                </form>
            </div>            
        </div>

        {/* Communication */}
        <div className="al-popup communication" style={IsCommunication ? {
                transform: 'translateX(0)'
            } : { transform: 'translateX(110%)'}}
        >
            <div className="al-close">
                <IoCloseCircle fill="#999999" size={50} onClick={() => setIsCommunication(false)} />
            </div>
            <div className="al-head">
                <h2>KS Legal & Associates (13)</h2>
            </div>            
            <p className="title-hr mt-2 mb-4"><span>16 May 2021</span></p>
            
            <div className="comm-box-right mb-2 d-flex direction-column align-end">
                <div className="comm-box-content">
                    <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.</p>
                </div>    
                <p className="text-muted">01:15 PM</p>
            </div>

            <div className="comm-box-left mb-2 d-flex d-wrap">
                <div className="comm-box-content">
                    <p>Hi Vijay, please tell me</p>
                </div>    
                <p className="text-muted">01:15 PM</p>
            </div>

            <div className="comm-box-right mb-2 d-flex direction-column align-end">
                <div className="comm-box-content">
                    <p>Thanks, I will check with you tomorrow</p>
                </div>    
                <p className="text-muted">01:15 PM</p>
            </div>
            
            <div className="comm-box-right mb-2 d-flex direction-column align-end">
                <div className="comm-box-content">
                    <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.</p>
                </div>    
                <p className="text-muted">01:15 PM</p>
            </div>

            <div className="add-case py-4 px-3">
                <form>
                    <div className="row mb-2">
                        <div className="col-md-12 text-end">
                            <textarea className="form-textarea" style={{ height: '175px' }} placeholder="Type a Message…"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-end">
                            <Button variant="primary">Send</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {/* Upload Pending Documents */}
        <div className="al-popup al-grey" style={IsPendingDocuments ? {
                transform: 'translateX(0)'
            } : { transform: 'translateX(110%)'}}
        >
            <div className="popup-white clearfix">
                <div className="al-close">
                    <IoCloseCircle fill="#999999" size={50} onClick={() => setIsPendingDocuments(false)} />
                </div>
                <div className="al-head">
                    <h2>Upload Pending Documents (3)</h2>                
                </div>
                <div className="row mt-5">
                    <div className="col-md-7">
                        <p className="text-primary mb-0">Board Resolution</p>
                    </div>
                    <div className="col-md-5">
                        <div className="d-flex justify-end">
                            <div><img src={DoubleCheck} alt="Double Check" /></div>											
                            <div className="ms-2"><IoCloseCircle fill="#bebebe" size={15} onClick={() => setIsPendingDocuments(false)} /></div>
                        </div>
                    </div>
                </div>
                <hr className="hr-dotted" />
                <div className="row align-center">
                    <div className="col-md-8">
                        <p className="mb-1">Copy of Cheque</p>
                        <ProgressBar now={60} />
                    </div>
                    <div className="col-md-4 text-end">
                        <div className="text-muted tx-12">Uploading</div>                    
                    </div>
                </div>
                <hr className="hr-dotted" />
                <div className="row">
                    <div className="col-md-8">
                        <p className="text-primary mb-0">Power of Attorney</p>
                    </div>
                    <div className="col-md-4 text-end">
                        <p className="text-primary mb-0 tx-12">Upload</p>
                        
                    </div>
                    <div className="col-md-12 text-end mt-4 mb-4">
                        <Button variant="primary">DONE</Button>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-7">
                    <p className="text-primary mb-0">Loan Agreement</p>
                </div>
                <div className="col-md-5">
                    <div className="d-flex justify-end">
                        <div><img src={DoubleCheck} alt="Double Check" /></div>                        
                    </div>
                </div>
            </div>
            <hr className="hr-dotted" />
            <div className="row mt-1">
                <div className="col-md-7">
                    <p className="text-primary mb-0">Statement of Account</p>
                </div>
                <div className="col-md-5">
                    <div className="d-flex justify-end">
                        <div><img src={DoubleCheck} alt="Double Check" /></div>                        
                    </div>
                </div>
            </div>
        </div>
        
        {/*Case Documents*/}
        <Modal
            show={lgShow}
            dialogClassName="modal-normal"
            onHide={() => setLgShow(false)}                
            aria-labelledby="Bulk-Communicate"
        >
            <Modal.Header>
                <Modal.Title id="Bulk-Communicate">
                Case Documents for Ritu Raj Srivastava (52632/2021)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>                
                <div className="mb-2 row">
                    <div className="col-lg-12 text-center pt-5 pb-5">
                    <object data="http://www.africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="600">
                        alt : <a href="http://www.africau.edu/images/default/sample.pdf">test.pdf</a>
                    </object>
                    </div>
                </div>                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Download</Button>
                <Button variant="secondary"
                    onClick={() => {
                        setLgShow(false)
                    }}>Close</Button>
            </Modal.Footer>
        </Modal>
        {/**/}

        {/* Assign to Advocate */}
        <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="Assign-Advocate"
        >
            <Modal.Header>
                <Modal.Title id="Assign-Advocate">Assign to Advocate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-2 row modal-search">
                        <div className="col-md-12 pt-3 pb-3">
                            <input type="text" className="form-control" id="inputPassword" placeholder="Search by any keywords" />
                        </div>
                    </div>
                    <div className="grey-bg mb-2 pb-1 pt-2">                            
                        <div className="mb-2 row">
                            <label for="aa" className="col-md-10 col-form-label py-0">KS Legal & Associates, <span className="text-muted">Mumbai</span></label>
                            <div className="col-md-2 text-end">
                                <input id="aa" className="form-check-input ml-0 mt-1" type="radio" name="gridRadios" value="option2" />
                            </div>
                        </div>                            
                    </div>    
                    <div className="mb-3 mt-3 row">
                        <label for="bb" className="col-md-10 col-form-label py-0">Khaitan And Co, <span className="text-muted">Ahamdabad</span></label>
                        <div className="col-md-2 text-end">
                            <input className="form-check-input ml-0 mt-1" type="radio" name="gridRadios" id="bb" value="option2" />
                        </div>
                    </div>
                    <div className="mb-3 mt-3 row">
                        <label for="cc" className="col-md-10 col-form-label py-0">Shardul Amarchand Mangal das And Co, <span className="text-muted">Delhi</span></label>
                        <div className="col-md-2 text-end">
                            <input className="form-check-input ml-0 mt-1" type="radio" name="gridRadios" id="cc" value="option2" />
                        </div>
                    </div>
                    <div className="mb-3 mt-3 row">
                        <label for="dd" className="col-md-10 col-form-label py-0">Cyril Amarchand Mangaldas & Co, <span className="text-muted">Mumbai</span></label>
                        <div className="col-md-2 text-end">
                            
                        </div>
                    </div>
                    <div className="mb-3 mt-3 row">
                        <label for="ee" className="col-md-10 col-form-label py-0">J Sagar And Associates, <span className="text-muted">Mumbai</span></label>
                        <div className="col-md-2 text-end">
                            
                        </div>
                    </div>
                    <div className="mb-4 row">
                        <label for="ff" className="col-md-10 col-form-label py-0">Trilegal, <span className="text-muted">Pune</span></label>
                        <div className="col-md-2 text-end">
                            
                        </div>
                    </div>                    
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setSmShow(false)}>Close</Button>
                <Button variant="primary">Assign</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default LitigationCase
