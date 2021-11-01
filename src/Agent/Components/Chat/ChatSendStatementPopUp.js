import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function ChatSendStatementPopUp({
    smSendStatement,
    setSendStatement
}) {
    return (
        <>
            <Modal
                show={smSendStatement}
                dialogClassName="modal-sendpayment"
                onHide={() => setSendStatement(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header>
                    <Modal.Title>Send Statement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-4 mt-2 row modal-search">
                            <div className="col-sm-12 copy-link">
                                <input type="text" className="form-control" id="link" placeholder="www.razorpay.com/EMI/car_loan/…" disabled />
                                <div className="mdl-link">
                                    <svg width="14" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#727272" fill-rule="nonzero">
                                            <path d="M1.575 17.92h10.5c.868 0 1.575-.707 1.575-1.575V5.25H9.975A1.577 1.577 0 0 1 8.4 3.675V0H1.575C.707 0 0 .707 0 1.575v14.77c0 .868.707 1.575 1.575 1.575zm2.1-10.535h6.3a.525.525 0 1 1 0 1.05h-6.3a.525.525 0 1 1 0-1.05zm0 2.1h6.3a.525.525 0 1 1 0 1.05h-6.3a.525.525 0 1 1 0-1.05zm0 2.1h6.3a.525.525 0 1 1 0 1.05h-6.3a.525.525 0 1 1 0-1.05zm0 2.1h4.2a.525.525 0 1 1 0 1.05h-4.2a.525.525 0 1 1 0-1.05z" />
                                            <path d="M9.975 4.2h3.367L9.45.308v3.367c0 .29.235.525.525.525z" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="link-copy">
                                    <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#0A7AFF" fill-rule="evenodd">
                                            <path d="M4.202 14.702a.7.7 0 0 1 1.401 0v2.1a.7.7 0 0 0 .7.7h9.806a.7.7 0 0 0 .7-.7v-2.1a.7.7 0 0 1 1.401 0v2.1a2.1 2.1 0 0 1-2.1 2.1H6.303a2.1 2.1 0 0 1-2.102-2.1v-2.1z" />
                                            <path d="M13.513 10.706a.7.7 0 0 1 .99.99l-2.801 2.8a.7.7 0 0 1-.99 0l-2.802-2.8a.7.7 0 1 1 .99-.99l2.306 2.306 2.307-2.306z" />
                                            <path d="M10.506 4.2a.7.7 0 0 1 1.4 0v9.802a.7.7 0 0 1-1.4 0V4.2z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 row m-number">
                            <label for="number" className="col-lg-12 col-form-label">Mobile Number</label>
                            <div className="col-10 pe-0">
                                <select
                                    id="number" className="form-select">
                                    <option selected>9876543123</option>
                                    <option>9876543123</option>
                                    <option>9876543123</option>
                                    <option>9876543123</option>
                                </select>
                            </div>
                            <div className="col-2 ps-0">
                                <p
                                    className="btn btn-light"
                                    variant="light"
                                    data-toggle="collapse"
                                    data-target="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                >+Add
                                </p>
                            </div>
                            <div className="col-12">
                                <p className="tx-12 text-black"><em>This is your Guarantor Number.</em></p>
                            </div>
                        </div>

                        <div className="grey-bg pt-4 mb-3">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="d-flex justify-between">
                                        <p className="text-black"><strong>Add New Number</strong></p>
                                        <p className="text-primary">Close</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-3">
                                    <label for="mnumber" className="col-lg-12 col-form-label pb-0"><small>Mobile Number</small></label>
                                    <input type="text" className="form-control" id="mnumber" placeholder="Enter New Mobile Number" />
                                </div>
                                <div className="col-sm-12">
                                    <label for="gridcheck1" className="col-form-label pt-0"><input type="radio" className="form-check-input me-2" id="gridcheck1" /> Primary Number</label>
                                </div>
                                <div className="col-sm-12">
                                    <label for="gridcheck1" className="col-form-label pt-0"><input type="radio" className="form-check-input me-2" id="gridcheck1" /> Secondary Number</label>
                                </div>
                                <div className="col-sm-12">
                                    <label for="gridcheck1" className="col-form-label pt-0"><input type="radio" className="form-check-input me-2" id="gridcheck1" /> WhatsApp Number</label>
                                </div>
                            </div>
                        </div>


                        <div className="mb-4 row">
                            <label for="number" className="col-lg-12 col-form-label pb-0">Communication Mode</label>
                            <div className="col-12 d-flex justify-between">
                                <div className="d-flex">
                                    <label for="gridcheck1" className="col-form-label pt-0"><input type="checkbox" className="form-check-input" id="gridcheck1" /> WhatsApp</label>
                                </div>
                                <div>
                                    <label for="gridcheck2" className="col-form-label pt-0"><input type="checkbox" className="form-check-input" id="gridcheck2" /> Email</label>
                                </div>
                                <div>
                                    <label for="gridcheck3" className="col-form-label pt-0"><input type="checkbox" className="form-check-input" id="gridcheck3" /> SMS</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSendStatement(false)}>Close</Button>
                    <Button variant="primary">Save & Send Statement</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChatSendStatementPopUp
