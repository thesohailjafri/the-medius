import React from 'react'

function DispoForm({ handleChange, addNewDisposition }) {
    return (
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <form className="text-start" onSubmit={addNewDisposition}>
                <div className="mb-2 row">
                    <label for="Disposition" className="col-sm-12 col-form-label">Disposition</label>
                    <div className="col-sm-12">
                        <select id="Disposition" className="form-select" name="disposition" onChange={(e) => handleChange(e)} >
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
                <div className="mb-2 row">
                    <label for="date1" className="col-sm-12 col-form-label" >Callback Date</label>
                    <div className="col-sm-12">
                        <input type="date" id="date1" className="form-control" name="contact_date" onChange={e => handleChange(e)} />
                    </div>
                </div>
                <div className="mb-2 row">
                    <label for="date2" className="col-sm-12 col-form-label">Next EMI Date</label>
                    <div className="col-sm-12">
                        <input type="date" id="date2" className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="Reason" className="col-sm-12 col-form-label">Reason for Delay</label>
                    <div className="col-sm-12">
                        <select id="Reason" className="form-select" name="remark" onChange={e => handleChange(e)}>
                            <option hidden="" disabled="">Select</option>
                            <option>Customer is out of station</option>
                            <option>Customer has some financial issues</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-12">
                        <div className="white-bg py-2 px-3">
                            <label for="Disposition" className="col-sm-12 col-form-label">Chance of Payment</label>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label for="no" className="col-sm-12 col-form-label">
                                        <input className="form-check-input me-2 ml-0" type="radio" name="gridRadios" id="c" value="option2" />
                                        YES
                                    </label>
                                </div>
                                <div className="col-sm-6">
                                    <label for="no" className="col-sm-12 col-form-label">
                                        <input className="form-check-input me-2 ml-0" type="radio" name="gridRadios" id="no" value="option2" />
                                        NO
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-2 row">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary btn-lg w-100">Save</button>
                    </div>
                </div>

            </form>
        </div>

    )
}

export default DispoForm
