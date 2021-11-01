import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ChatSendPaymentPopUp({ smSendPayment, setSendPayment }) {
    return (
        <>
            <Modal
                show={smSendPayment}
                dialogClassName="modal-sendpayment"
                onHide={() => setSendPayment(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header>
                    <Modal.Title>Send Payment Link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-4 mt-2 row modal-search">
                            <div className="col-sm-12 copy-link">
                                <input type="text" className="form-control" id="link" placeholder="www.razorpay.com/EMI/car_loan/…" disabled />
                                <div className="mdl-link">
                                    <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#727272" fill-rule="evenodd">
                                            <path d="M9.245 12.32a.7.7 0 1 1 1.121-.838 2.802 2.802 0 0 0 4.225.302l2.093-2.091a2.8 2.8 0 0 0-3.954-3.967l-1.205 1.197a.7.7 0 0 1-.988-.993l1.212-1.204a4.202 4.202 0 0 1 5.934 5.948l-2.101 2.1a4.203 4.203 0 0 1-6.337-.453z" />
                                            <path d="M13.168 10.082a.7.7 0 1 1-1.122.839 2.802 2.802 0 0 0-4.225-.303L5.73 12.71a2.8 2.8 0 0 0 .034 3.925 2.8 2.8 0 0 0 3.919.043l1.197-1.197a.7.7 0 0 1 .99.99l-1.206 1.206a4.202 4.202 0 0 1-5.934-5.948l2.102-2.1a4.203 4.203 0 0 1 6.337.453z" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="link-copy">
                                    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#0A7AFF" fill-rule="nonzero">
                                            <path d="M5.6 12.48c-1.5 0-2.72-1.22-2.72-2.72V3.2H1.76C.79 3.2 0 3.99 0 4.96v8.64c0 .97.79 1.76 1.76 1.76h8c.97 0 1.76-.79 1.76-1.76v-1.12H5.6z" />
                                            <path d="M14.08 1.76A1.76 1.76 0 0 0 12.32 0H5.6a1.76 1.76 0 0 0-1.76 1.76v8c0 .972.788 1.76 1.76 1.76h6.72a1.76 1.76 0 0 0 1.76-1.76v-8z" />
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
                                <Button variant="light">+Add</Button>
                            </div>
                            <div className="col-12">
                                <p className="tx-12 text-black"><em>This is your Guarantor Number.</em></p>
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
                    <Button variant="secondary" onClick={() => setSendPayment(false)}>Close</Button>
                    <Button variant="primary">Save & Send Statement</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChatSendPaymentPopUp
