import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function BatchFilter2({
    smShow,
    setSmShow,
    setSortAsc,
    setSearchParameter,
    refCustomerName,
    refBatchId,
    refLastDisposition,
    refOverdue,
    refProduct,
    refStatus,
    refAmountFrom,
    refAmountTo,
    refDateFrom,
    refDateTo,
    refSpecificDate,
    setCurrentPage,
}) {
    return (
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
                        <div className="col-sm-12">
                            <input onChange={(e) => refCustomerName = e.target.value}
                                type="text" className="form-control" id="inputPassword" placeholder="Search by file name" />
                        </div>
                    </div>
                    <div className="grey-bg mb-2">
                        <div className="mb-2 row">
                            <label for="inputPassword" className="col-sm-8 col-form-label">Search by Batch Number</label>
                            <div className="col-sm-4">
                                <input
                                    onChange={(e) => refBatchId = e.target.value}

                                    type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="inputState" className="col-sm-5 col-form-label">Product/ Portfolio</label>
                            <div className="col-sm-7">
                                <input type="text" onChange={(e) => refProduct = e.target.value}
                                    id="inputState" className="form-control" placeholder="Enter Product Name" />
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="Bucket" className="col-sm-5 col-form-label">Overdue Bucket</label>
                            <div className="col-sm-7">
                                <select
                                    onChange={(e) => refOverdue = e.target.value}
                                    id="Bucket" className="form-control">
                                    <option selected hidden disabled>Select</option>
                                    <option>0-30 Days</option>
                                    <option>30-60 Days</option>
                                    <option>60-90 Days</option>
                                    <option>90-180 Days</option>
                                    <option>180+ Days</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="inputState1" className="col-sm-5 col-form-label">Last Disposition</label>
                            <div className="col-sm-7">
                                <select
                                    onChange={(e) => refLastDisposition = e.target.value}
                                    id="inputState" className="form-control">
                                    <option selected hidden disabled>Select</option>
                                    <option selected value='WN'>Wrong Number</option>
                                    <option selected value='SW'>Switched Off</option>
                                    <option value='RNR'>Ringing, No Response</option>
                                    <option value='PTP'>Promise To Pay</option>
                                    <option value='BPTP'>Broken PTP</option>
                                    <option value='DIS'>Dispute</option>
                                    <option value='SUR'>Surender</option>
                                    <option value='PAID'>Paid</option>
                                    <option value='CB'>Call Back</option>
                                    <option value='SETL'>Want Settlement</option>
                                    <option value='RTP'>Refuse To Pay</option>
                                    <option value='DND'>Do Not Disturb</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 row">
                        <label for="from" className="col-sm-5 col-form-label">Loan Account Range</label>
                        <div className="col-sm-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <input
                                        onChange={(e) => refAmountFrom = e.target.value}
                                        type="text" className="form-control" id="from" placeholder="From" />
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        onChange={(e) => refAmountTo = e.target.value}
                                        type="text" className="form-control" id="to" placeholder="To" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 row">
                        <label for="inputState" className="col-sm-5 col-form-label">Status</label>
                        <div className="col-sm-7">
                            <select
                                onChange={(e) => refStatus = e.target.value}
                                id="inputState" className="form-control">
                                <option selected disabled hidden>Select</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="grey-bg">
                        <div className="mb-2 row">
                            <label for="inputState" className="col-sm-5 col-form-label">Search by Date</label>
                        </div>
                        <div className="mb-2 row">
                            <label for="gridRadios2" className="col-sm-5 col-form-label"><input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios2" value="option2" /> Date Between</label>
                            <div className="col-sm-7">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input
                                            onChange={(e) => refDateFrom = e.target.value}
                                            type="date" className="form-control" id="from" placeholder="From" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            onChange={(e) => refDateTo = e.target.value}
                                            type="date" className="form-control" id="to" placeholder="To" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="gridRadios3" className="col-sm-5 col-form-label"><input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios3" value="option2" /> Specific Date</label>
                            <div className="col-sm-7">
                                <input
                                    onChange={(e) => refSpecificDate = e.target.value}
                                    type="date" className="form-control" id="Bucket" />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setSmShow(false)}>Close</Button>
                <Button variant="primary" onClick={() => {
                    window.location.hash = `#/collection/accounts/`

                    setSortAsc(true)
                    setSearchParameter({
                        customer_name: refCustomerName,
                        batch_id: refBatchId,
                        last_disposition: refLastDisposition,
                        overdue: refOverdue,
                        product: refProduct,
                        status: refStatus,
                        amount_from: refAmountFrom,
                        amount_to: refAmountTo,
                        from_date: refDateFrom,
                        to_date: refDateTo,
                        specific_date: refSpecificDate,
                    })

                    console.log({
                        customer_name: refCustomerName,
                        batch_id: refBatchId,
                        last_disposition: refLastDisposition,
                        overdue: refOverdue,
                        product: refProduct,
                        status: refStatus,
                        amount_from: refAmountFrom,
                        amount_to: refAmountTo,
                        from_date: refDateFrom,
                        to_date: refDateTo,
                        specific_date: refSpecificDate,
                    })

                    setCurrentPage(1)
                    setSmShow(false)
                }
                }
                >Apply</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BatchFilter2
