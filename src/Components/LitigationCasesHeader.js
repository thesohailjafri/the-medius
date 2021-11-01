import React from 'react'
import { useState } from 'react'
import Sort from '../Static/RawImages/sort.png'
import Modal from 'react-bootstrap/Modal'
import { IoCloseCircle } from 'react-icons/io5'
import Button from 'react-bootstrap/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import ProgressBar from 'react-bootstrap/ProgressBar'
import DoubleCheck from '../Static/RawImages/double-check.png'


function LitigationCasesHeader() {
    //Modal
    const [smShow, setSmShow] = useState(false)
    const [smAdvocate, setSmAdvocate] = useState(false)
    const [lgShow, setLgShow] = useState(false)
    const [IsPendingDocuments, setIsPendingDocuments] = useState(false)

    return (
        <>
        <div className="row d-flex d-wrap justify-between filter-section">
            <div className="col-md-12 col-lg-6 d-flex align-center">
                <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <button onClick={() => setSmShow(true)} className="btn btn-secondary me-3">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#000" fillRule="nonzero">
                            <path d="M19.2 2.4a2.4 2.4 0 0 0-2-2.364V0h-.8v.036a2.4 2.4 0 0 0 0 4.728V19.2h.8V4.764a2.4 2.4 0 0 0 2-2.364zM16.8 4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM10 10.036V0h-.8v10.036a2.4 2.4 0 0 0 0 4.728V19.2h.8v-4.436a2.4 2.4 0 0 0 0-4.728zM9.6 14a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM2.8.036V0H2v.036a2.4 2.4 0 0 0 0 4.728V19.2h.8V4.764a2.4 2.4 0 0 0 0-4.728zM2.4 4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z" />
                        </g>
                    </svg>
                    Filter
                </button>
                <button className="btn btn-secondary">
                    <img src={Sort} alt="Sort" />
                    Sort by
                </button>                
            </div>

            <div className="col-md-12 col-lg-6 pt-3 pt-lg-0 text-end">                
                <Dropdown className="bulk-action">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style-two">
                        Select Option for Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="select-style-dropdown-two">
                        <Dropdown.Item onClick={() => setSmAdvocate(true)}> Assign to Advocate</Dropdown.Item>
                        <Dropdown.Item  onClick={() => setIsPendingDocuments(true)}> Document Pending</Dropdown.Item>
                        <Dropdown.Item href=""> Update Case Status</Dropdown.Item>
                        <Dropdown.Item onClick={() => setLgShow(true)}> Bulk Communicate</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* Filter */}
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-2 row modal-search">
                            <div className="col-md-12">
                                <input type="text" className="form-control" id="inputPassword" placeholder="Search by file name" />
                            </div>
                        </div>
                        <div className="grey-bg mb-2">
                            <div className="mb-2 row">
                                <label for="inputPassword" className="col-md-8 col-form-label">Search by Batch Number</label>
                                <div className="col-md-4">
                                    <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="inputState" className="col-md-5 col-form-label">Product/ Portfolio</label>
                                <div className="col-md-7">
                                    <select id="inputState" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="Bucket" className="col-md-5 col-form-label">Overdue Bucket</label>
                                <div className="col-md-7">
                                    <select id="Bucket" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="inputState" className="col-md-5 col-form-label">Last Disposition</label>
                                <div className="col-md-7">
                                    <select id="inputState" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="from" className="col-md-5 col-form-label">Loan Account Range</label>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="from" placeholder="From" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="to" placeholder="To" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="inputState" className="col-md-5 col-form-label">Status</label>
                            <div className="col-md-7">
                                <select id="inputState" className="form-select">
                                    <option selected>Select</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="grey-bg">
                            <div className="mb-2 row">
                                <label for="inputState" className="col-md-5 col-form-label">Search by Date</label>
                            </div>
                            <div className="mb-2 row">
                                <label for="gridRadios2" className="col-md-5 col-form-label"><input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios2" value="option2" /> Date Between</label>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="date" className="form-control" id="from" placeholder="From" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="date" className="form-control" id="to" placeholder="To" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="gridRadios3" className="col-md-5 col-form-label"><input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios3" value="option2" /> Specific Date</label>
                                <div className="col-md-7">
                                    <select id="Bucket" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSmShow(false)}>Close</Button>
                    <Button variant="primary" onClick={() => setSmShow(false)}>Apply</Button>
                </Modal.Footer>
            </Modal>
            
            {/* Assign to Advocate */}
            <Modal
                size="sm"
                show={smAdvocate}
                onHide={() => setSmAdvocate(false)}
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
                        <div className="mb-2 row">
                            <label for="bb" className="col-md-10 col-form-label py-0">Khaitan And Co, <span className="text-muted">Ahamdabad</span></label>
                            <div className="col-md-2 text-end">
                                <input className="form-check-input ml-0 mt-1" type="radio" name="gridRadios" id="bb" value="option2" />
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="cc" className="col-md-10 col-form-label py-0">Shardul Amarchand Mangal das And Co, <span className="text-muted">Delhi</span></label>
                            <div className="col-md-2 text-end">
                                <input className="form-check-input ml-0 mt-1" type="radio" name="gridRadios" id="cc" value="option2" />
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="dd" className="col-md-10 col-form-label py-0">Cyril Amarchand Mangaldas & Co, <span className="text-muted">Mumbai</span></label>
                            <div className="col-md-2 text-end">
                                <input className="form-check-input ml-0 mt-1" type="radio" name="gridRadios" id="dd" value="option2" />
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="ee" className="col-md-10 col-form-label py-0">J Sagar And Associates, <span className="text-muted">Mumbai</span></label>
                            <div className="col-md-2 text-end">
                                <input className="form-check-input ml-0 mt-1" type="radio" name="gridRadios" id="ee" value="option2" />
                            </div>
                        </div>
                        <div className="mb-4 row">
                            <label for="ff" className="col-md-10 col-form-label py-0">Trilegal, <span className="text-muted">Pune</span></label>
                            <div className="col-md-2 text-end">
                                <input className="form-check-input ml-0 mt-1" type="radio" name="gridRadios" id="ff" value="option2" />
                            </div>
                        </div>                    
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSmAdvocate(false)}>Close</Button>
                    <Button variant="primary">Assign</Button>
                </Modal.Footer>
            </Modal>

            {/*Bulk Communicate*/}
            <Modal
                size="sm"
                show={lgShow}
                onHide={() => setLgShow(false)}                
                aria-labelledby="Bulk-Communicate"
            >
                <Modal.Header>
                    <Modal.Title id="Bulk-Communicate">
                        Bulk Communicate
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                        <form>
                            <div className="mb-2 row">
                                <div className="col-md-12 pt-1 pb-0">
                                    <p className="pt-1">Sending message to 82 advocates for 12,377 cases.</p>
                                    <p className="mb-1">Status - <strong>SOC Filed, Unassigned</strong></p>
                                </div>
                                <div className="col-md-12 pt-3 pb-3">
                                    <textarea className="form-textarea textarea" style={{ height: '206px' }} placeholder="Type Your Message Here…"></textarea>
                                </div>
                            </div>
                        </form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => {
                            setLgShow(false)
                        }}>Close</Button>
                    <Button variant="primary">Send</Button>
                </Modal.Footer>
            </Modal>
            {/**/}
        </div>
        
        {/* Pending documents */}
        <div className="al-popup" style={IsPendingDocuments ? {
                transform: 'translateX(0)'
            } : { transform: 'translateX(110%)'}}
        >
            <div className="al-close">
                <IoCloseCircle fill="#999999" size={50} onClick={() => setIsPendingDocuments(false)} />
            </div>
            <div className="al-head">
                <h2>Pending documents for 1,362 cases.</h2>                
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
        </>
    )
}

export default LitigationCasesHeader