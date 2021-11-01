import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { IoCloseCircle } from 'react-icons/io5'
import Button from 'react-bootstrap/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import ProgressBar from 'react-bootstrap/ProgressBar'



function UploadBatch() {
    //Modal
    const [smShow, setSmShow] = useState(false)
    const [smAdvocate, setSmAdvocate] = useState(false)
    const [lgShow, setLgShow] = useState(false)
    const [IsPendingDocuments, setIsPendingDocuments] = useState(false)


    return (
        <>
        <div className="row d-flex d-wrap justify-between filter-section">
            <div className="col-md-12 col-lg-6 d-flex align-center">
                <button onClick={() => setSmShow(true)} className="btn btn-secondary me-3 ms-0">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#000" fillRule="nonzero">
                            <path d="M19.2 2.4a2.4 2.4 0 0 0-2-2.364V0h-.8v.036a2.4 2.4 0 0 0 0 4.728V19.2h.8V4.764a2.4 2.4 0 0 0 2-2.364zM16.8 4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM10 10.036V0h-.8v10.036a2.4 2.4 0 0 0 0 4.728V19.2h.8v-4.436a2.4 2.4 0 0 0 0-4.728zM9.6 14a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM2.8.036V0H2v.036a2.4 2.4 0 0 0 0 4.728V19.2h.8V4.764a2.4 2.4 0 0 0 0-4.728zM2.4 4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z" />
                        </g>
                    </svg>
                    Filter
                </button>                             
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
                        <div className="mb-4 mt-4 row">
                            <label for="inputState" className="col-md-3 col-form-label">Call Record</label>
                            <div className="col-md-9">
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
                                <label for="from" className="col-md-3 col-form-label">Date Between</label>
                                <div className="col-md-9">
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
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSmShow(false)}>Close</Button>
                    <Button variant="primary" onClick={() => setSmShow(false)}>Apply</Button>
                </Modal.Footer>
            </Modal>

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

export default UploadBatch