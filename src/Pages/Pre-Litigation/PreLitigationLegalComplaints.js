import React from 'react'
import PrelitigationFirComplaints from '../../Components/PrelitigationFirComplaints'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'
import Arrow from '../../Static/RawImages/arrow.png'
import Check from '../../Static/RawImages/check.png'
import Close from '../../Static/RawImages/close.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function PreLitigationComplaints() {
    const [smLegalNotice, setLegalNotice] = useState(false);
    return (
        <div>
            <PrelitigationFirComplaints />
            <hr className="mt-4 mb-4" />
            <div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
                <div className="col-md-4">
                    <div className="d-flex align-start">
                        <Checkbox
                            className="me-3"
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <div>
                            <p className="text-primary mb-2 tx-16"><a><strong>Ritu Raj Srivastava (124516716)</strong></a></p>
                            <p>Batch No. - <span className="text-black">ABC516A</span></p>
                            <hr />
                            <p>Product - <span className="text-black">Two Wheeler</span><br />
                                <span className="text-black">Rs. 45,1671</span><br />
                                <span className="text-black">180 + Days</span></p>
                            <hr />
                            <p>Complaint Status - <b className="text-success">Filed</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>                                
                                <td>Police Station</td>
                                <td>Aarey, Mumbai</td>
                            </tr>
                            <tr>                                
                                <td>Statement by TVS</td>
                                <td>Done</td>
                            </tr>
                            <tr>                               
                                <td>Statement by Borrower</td>
                                <td>Done</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <div className="action-box">
                        <label htmlFor="dropdown-basic" className="col-form-label mb-2">Action</label>
                        <Dropdown className="dropdown-s2">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                Select <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item onClick={() => setLegalNotice(true)}>View Complaint Copy</Dropdown.Item>
                                <Dropdown.Item href="">Initiate Litigation</Dropdown.Item>
                                <Dropdown.Item href="">Re-initiate Collection</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>       
                        <hr className="mt-4 mb-4" />
                        <p>Delivery Status</p>

                        <ul className="d-flex history-box">
                            <li>
                                <p className="al-popup-button" id="whatsapp">
                                    <div>
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#0A7AFF" fillRule="nonzero">
                                                <path d="M11.52 0A11.52 11.52 0 0 0 1.44 17.074L0 23.04l5.822-1.507A11.52 11.52 0 1 0 11.52 0zm0 22.08a10.56 10.56 0 0 1-5.38-1.474l-.174-.105-4.608 1.18 1.1-4.742-.101-.173a10.56 10.56 0 1 1 9.163 5.314z" />
                                                <path d="M7.632 13.239a14.745 14.745 0 0 0 4.905 3.842c.717.34 1.676.743 2.744.812.067.003.13.006.196.006.717 0 1.293-.248 1.763-.758.003-.002.008-.008.011-.014.167-.202.357-.383.556-.576.136-.13.274-.265.406-.403.614-.64.614-1.452-.005-2.07l-1.731-1.732c-.294-.305-.645-.466-1.014-.466s-.723.161-1.025.463l-1.031 1.031a5.48 5.48 0 0 0-.286-.15 3.561 3.561 0 0 1-.316-.172c-.94-.596-1.792-1.374-2.607-2.373-.412-.522-.688-.96-.881-1.406.27-.245.524-.5.769-.751.086-.09.176-.179.265-.268.31-.311.478-.671.478-1.037 0-.366-.164-.726-.478-1.037l-.858-.858c-.101-.1-.196-.199-.294-.3-.19-.195-.389-.397-.585-.578C8.318 4.153 7.97 4 7.6 4c-.365 0-.717.153-1.025.446L5.498 5.524a2.213 2.213 0 0 0-.66 1.416c-.054.689.073 1.42.4 2.304.505 1.368 1.265 2.639 2.394 3.995zm-2.09-6.238c.034-.383.18-.703.457-.98l1.072-1.07c.167-.162.35-.245.53-.245.175 0 .354.083.518.25.193.179.374.366.57.565l.3.305.858.858c.178.179.27.36.27.539 0 .178-.092.36-.27.538l-.268.271c-.268.27-.518.527-.795.772l-.014.014c-.24.24-.202.467-.144.64.003.008.006.014.008.023.222.532.53 1.04 1.011 1.644.864 1.066 1.774 1.892 2.777 2.529.123.08.256.144.38.207.115.058.222.112.317.173l.031.017a.602.602 0 0 0 .28.072.61.61 0 0 0 .429-.196l1.077-1.077c.167-.167.348-.256.527-.256.219 0 .397.135.51.256l1.736 1.734c.346.346.343.72-.008 1.086-.121.13-.248.253-.383.383-.202.196-.412.397-.602.625-.332.357-.726.524-1.236.524-.049 0-.1-.003-.15-.006-.944-.06-1.823-.429-2.482-.743a14.008 14.008 0 0 1-4.669-3.657c-1.074-1.294-1.797-2.497-2.275-3.788-.296-.792-.409-1.428-.363-2.007z" />
                                            </g>
                                        </svg>
                                        <div className="action-status status-uncheck"><img src={Close} alt="Sort" /></div>
                                    </div>
                                    WhatsApp
                                </p>
                            </li>
                            <li>
                                <p className="al-popup-button">
                                    <div>
                                        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#0A7AFF" fillRule="nonzero">
                                                <path d="M0 0v12.96a4.32 4.32 0 0 0 4.32 4.32h14.4a4.32 4.32 0 0 0 4.32-4.32V0H0zm22.08 12.96a3.36 3.36 0 0 1-3.36 3.36H4.32a3.36 3.36 0 0 1-3.36-3.36v-12h21.12v12z" />
                                                <path d="m20.39 3.682-.643-.71-8.227 7.42-8.18-7.411-.642.71 8.822 7.997z" />
                                            </g>
                                        </svg>
                                        <div className="action-status status-check"><img src={Check} alt="Check" /></div>
                                    </div>
                                    Email
                                </p>
                            </li>
                        </ul>                
                    </div>
                </div>
                <hr className="mt-4 mb-4" />
            </div>
            
            <div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
                <div className="col-md-4">
                    <div className="d-flex align-start">
                        <Checkbox
                            className="me-3"
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <div>
                            <p className="text-primary mb-2 tx-16"><a><strong>Priya Darshan (124516716)</strong></a></p>
                            <p>Batch No. - <span className="text-black">ABC516A</span></p>
                            <hr />
                            <p>Product - <span className="text-black">Two Wheeler</span><br />
                                <span className="text-black">Rs. 45,1671</span><br />
                                <span className="text-black">180 + Days</span></p>
                            <hr />
                            <p>Complaint Status - <b className="text-danger">Not Filed</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>                                
                                <td>Police Station</td>
                                <td>Aarey, Mumbai</td>
                            </tr>
                            <tr>                                
                                <td>Statement by TVS</td>
                                <td>Done</td>
                            </tr>
                            <tr>                               
                                <td>Statement by Borrower</td>
                                <td>Done</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <div className="action-box">
                        <label htmlFor="dropdown-basic" className="col-form-label mb-2">Action</label>
                        <Dropdown className="dropdown-s2">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                Select <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item onClick={() => setLegalNotice(true)}>View Complaint Copy</Dropdown.Item>
                                <Dropdown.Item href="">Initiate Litigation</Dropdown.Item>
                                <Dropdown.Item href="">Re-initiate Collection</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>       
                        <hr className="mt-4 mb-4" />
                        <p>Delivery Status</p>

                        <ul className="d-flex history-box">
                            <li>
                                <p className="al-popup-button" id="whatsapp">
                                    <div>
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#0A7AFF" fillRule="nonzero">
                                                <path d="M11.52 0A11.52 11.52 0 0 0 1.44 17.074L0 23.04l5.822-1.507A11.52 11.52 0 1 0 11.52 0zm0 22.08a10.56 10.56 0 0 1-5.38-1.474l-.174-.105-4.608 1.18 1.1-4.742-.101-.173a10.56 10.56 0 1 1 9.163 5.314z" />
                                                <path d="M7.632 13.239a14.745 14.745 0 0 0 4.905 3.842c.717.34 1.676.743 2.744.812.067.003.13.006.196.006.717 0 1.293-.248 1.763-.758.003-.002.008-.008.011-.014.167-.202.357-.383.556-.576.136-.13.274-.265.406-.403.614-.64.614-1.452-.005-2.07l-1.731-1.732c-.294-.305-.645-.466-1.014-.466s-.723.161-1.025.463l-1.031 1.031a5.48 5.48 0 0 0-.286-.15 3.561 3.561 0 0 1-.316-.172c-.94-.596-1.792-1.374-2.607-2.373-.412-.522-.688-.96-.881-1.406.27-.245.524-.5.769-.751.086-.09.176-.179.265-.268.31-.311.478-.671.478-1.037 0-.366-.164-.726-.478-1.037l-.858-.858c-.101-.1-.196-.199-.294-.3-.19-.195-.389-.397-.585-.578C8.318 4.153 7.97 4 7.6 4c-.365 0-.717.153-1.025.446L5.498 5.524a2.213 2.213 0 0 0-.66 1.416c-.054.689.073 1.42.4 2.304.505 1.368 1.265 2.639 2.394 3.995zm-2.09-6.238c.034-.383.18-.703.457-.98l1.072-1.07c.167-.162.35-.245.53-.245.175 0 .354.083.518.25.193.179.374.366.57.565l.3.305.858.858c.178.179.27.36.27.539 0 .178-.092.36-.27.538l-.268.271c-.268.27-.518.527-.795.772l-.014.014c-.24.24-.202.467-.144.64.003.008.006.014.008.023.222.532.53 1.04 1.011 1.644.864 1.066 1.774 1.892 2.777 2.529.123.08.256.144.38.207.115.058.222.112.317.173l.031.017a.602.602 0 0 0 .28.072.61.61 0 0 0 .429-.196l1.077-1.077c.167-.167.348-.256.527-.256.219 0 .397.135.51.256l1.736 1.734c.346.346.343.72-.008 1.086-.121.13-.248.253-.383.383-.202.196-.412.397-.602.625-.332.357-.726.524-1.236.524-.049 0-.1-.003-.15-.006-.944-.06-1.823-.429-2.482-.743a14.008 14.008 0 0 1-4.669-3.657c-1.074-1.294-1.797-2.497-2.275-3.788-.296-.792-.409-1.428-.363-2.007z" />
                                            </g>
                                        </svg>
                                        <div className="action-status status-uncheck"><img src={Close} alt="Sort" /></div>
                                    </div>
                                    WhatsApp
                                </p>
                            </li>
                            <li>
                                <p className="al-popup-button">
                                    <div>
                                        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#0A7AFF" fillRule="nonzero">
                                                <path d="M0 0v12.96a4.32 4.32 0 0 0 4.32 4.32h14.4a4.32 4.32 0 0 0 4.32-4.32V0H0zm22.08 12.96a3.36 3.36 0 0 1-3.36 3.36H4.32a3.36 3.36 0 0 1-3.36-3.36v-12h21.12v12z" />
                                                <path d="m20.39 3.682-.643-.71-8.227 7.42-8.18-7.411-.642.71 8.822 7.997z" />
                                            </g>
                                        </svg>
                                        <div className="action-status status-check"><img src={Check} alt="Check" /></div>
                                    </div>
                                    Email
                                </p>
                            </li>
                        </ul>                
                    </div>
                </div>
                <hr className="mt-4 mb-4" />
            </div>
            <div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
                <div className="col-md-4">
                    <div className="d-flex align-start">
                        <Checkbox
                            className="me-3"
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <div>
                            <p className="text-primary mb-2 tx-16"><a><strong>Priya Darshan (124516716)</strong></a></p>
                            <p>Batch No. - <span className="text-black">ABC516A</span></p>
                            <hr />
                            <p>Product - <span className="text-black">Two Wheeler</span><br />
                                <span className="text-black">Rs. 45,1671</span><br />
                                <span className="text-black">180 + Days</span></p>
                            <hr />
                            <p>Complaint Status - <b className="text-success">Filed</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>                                
                                <td>Police Station</td>
                                <td>Aarey, Mumbai</td>
                            </tr>
                            <tr>                                
                                <td>Statement by TVS</td>
                                <td>Done</td>
                            </tr>
                            <tr>                               
                                <td>Statement by Borrower</td>
                                <td>Done</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <div className="action-box">
                        <label htmlFor="dropdown-basic" className="col-form-label mb-2">Action</label>
                        <Dropdown className="dropdown-s2">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                Select <img src={Arrow} alt="Sort" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="select-style-dropdown">
                                <Dropdown.Item onClick={() => setLegalNotice(true)}>View Complaint Copy</Dropdown.Item>
                                <Dropdown.Item href="">Initiate Litigation</Dropdown.Item>
                                <Dropdown.Item href="">Re-initiate Collection</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>       
                        <hr className="mt-4 mb-4" />
                        <p>Delivery Status</p>

                        <ul className="d-flex history-box">
                            <li>
                                <p className="al-popup-button" id="whatsapp">
                                    <div>
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#0A7AFF" fillRule="nonzero">
                                                <path d="M11.52 0A11.52 11.52 0 0 0 1.44 17.074L0 23.04l5.822-1.507A11.52 11.52 0 1 0 11.52 0zm0 22.08a10.56 10.56 0 0 1-5.38-1.474l-.174-.105-4.608 1.18 1.1-4.742-.101-.173a10.56 10.56 0 1 1 9.163 5.314z" />
                                                <path d="M7.632 13.239a14.745 14.745 0 0 0 4.905 3.842c.717.34 1.676.743 2.744.812.067.003.13.006.196.006.717 0 1.293-.248 1.763-.758.003-.002.008-.008.011-.014.167-.202.357-.383.556-.576.136-.13.274-.265.406-.403.614-.64.614-1.452-.005-2.07l-1.731-1.732c-.294-.305-.645-.466-1.014-.466s-.723.161-1.025.463l-1.031 1.031a5.48 5.48 0 0 0-.286-.15 3.561 3.561 0 0 1-.316-.172c-.94-.596-1.792-1.374-2.607-2.373-.412-.522-.688-.96-.881-1.406.27-.245.524-.5.769-.751.086-.09.176-.179.265-.268.31-.311.478-.671.478-1.037 0-.366-.164-.726-.478-1.037l-.858-.858c-.101-.1-.196-.199-.294-.3-.19-.195-.389-.397-.585-.578C8.318 4.153 7.97 4 7.6 4c-.365 0-.717.153-1.025.446L5.498 5.524a2.213 2.213 0 0 0-.66 1.416c-.054.689.073 1.42.4 2.304.505 1.368 1.265 2.639 2.394 3.995zm-2.09-6.238c.034-.383.18-.703.457-.98l1.072-1.07c.167-.162.35-.245.53-.245.175 0 .354.083.518.25.193.179.374.366.57.565l.3.305.858.858c.178.179.27.36.27.539 0 .178-.092.36-.27.538l-.268.271c-.268.27-.518.527-.795.772l-.014.014c-.24.24-.202.467-.144.64.003.008.006.014.008.023.222.532.53 1.04 1.011 1.644.864 1.066 1.774 1.892 2.777 2.529.123.08.256.144.38.207.115.058.222.112.317.173l.031.017a.602.602 0 0 0 .28.072.61.61 0 0 0 .429-.196l1.077-1.077c.167-.167.348-.256.527-.256.219 0 .397.135.51.256l1.736 1.734c.346.346.343.72-.008 1.086-.121.13-.248.253-.383.383-.202.196-.412.397-.602.625-.332.357-.726.524-1.236.524-.049 0-.1-.003-.15-.006-.944-.06-1.823-.429-2.482-.743a14.008 14.008 0 0 1-4.669-3.657c-1.074-1.294-1.797-2.497-2.275-3.788-.296-.792-.409-1.428-.363-2.007z" />
                                            </g>
                                        </svg>
                                        <div className="action-status status-uncheck"><img src={Close} alt="Sort" /></div>
                                    </div>
                                    WhatsApp
                                </p>
                            </li>
                            <li>
                                <p className="al-popup-button">
                                    <div>
                                        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#0A7AFF" fillRule="nonzero">
                                                <path d="M0 0v12.96a4.32 4.32 0 0 0 4.32 4.32h14.4a4.32 4.32 0 0 0 4.32-4.32V0H0zm22.08 12.96a3.36 3.36 0 0 1-3.36 3.36H4.32a3.36 3.36 0 0 1-3.36-3.36v-12h21.12v12z" />
                                                <path d="m20.39 3.682-.643-.71-8.227 7.42-8.18-7.411-.642.71 8.822 7.997z" />
                                            </g>
                                        </svg>
                                        <div className="action-status status-check"><img src={Check} alt="Check" /></div>
                                    </div>
                                    Email
                                </p>
                            </li>
                        </ul>                
                    </div>
                </div>
                <hr className="mt-4 mb-4" />
            </div>
            {/* View Complaint Copy Popup */}
            <Modal
                show={smLegalNotice}
                dialogClassName="modal-large"
                onHide={() => setLegalNotice(false)}
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header>
                    <Modal.Title>View FIR Copy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>                                        
                        <div className="my-4 mx-1 row">
                            <div className="col-md-12 text-center">
                                {/* <img src={Fir} alt="FIR Copy" /> */}
                                <object data="http://www.africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="600">
                                    alt : <a href="http://www.africau.edu/images/default/sample.pdf">test.pdf</a>
                                </object>
                            </div>
                        </div>                          
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLegalNotice(false)}>Close</Button>                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PreLitigationComplaints
