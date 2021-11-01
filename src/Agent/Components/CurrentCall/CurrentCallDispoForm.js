import { init } from 'aos'
import React, { useEffect, useRef, useState } from 'react'

const dpAry = [
    "Already Paid",
    "Already Surrendered",
    "Payee is Dead",
    "Ready to surrender vehicle",
    "Already Received N.O.C",
    "Wrong product received",
    "Wrong Ownership of product",
    "Product Stolen /Accident",
    "If Insurance claim is not received",
    "Documents Not Received",
    "Due to collection agent disturbance",
    "Due to collection agent fruads",
    "Until statement is received",
    "If msg or receipt not received",
    "Vehicle sold to 3rd Party",
    "ECS dispute",
    "No option of payment ",
    "Fake Payee",
]

const ptpAry = [
    "Out of Station",
    "Down With Covid",
    "Job Lost",
    "Will pay By",
    "If borrower is sick",
    "Want more time",
    "Relative Death",
    "Bank Account issue",
    "No option of payment ",
    "Wrong amount figured",
    "Climate issue / not able to visit showrrom or bank",
]

const rpAry = [
    "Job Lost",
    "Already Paid",
    "Already Surrendered",
    "Payee is Dead",
    "Ready to surrender vehicle",
    "Already Received N.O.C",
    "Wrong product received",
    "Wrong Ownership of product",
    "Product Stolen /Accident",
    "If Insurance claim is not received",
    "Documents Not Received",
    "Due to collection agent disturbance",
    "Due to collection agent fruads",
    "Until statement is received",
    "If msg or receipt not received",
    "Vehicle sold to 3rd Party",
    "ECS dispute",
    "No option of payment ",
    "Fake Payee",
]




function CurrentCallDispoForm({ newDispData, setNewDispData, addNewDisposition, handleChange, isSaving }) {

    const [showPTP, setShowPTP] = useState(false)
    const [showPaid, setShowPaid] = useState(false)
    const [showDP, setshowDP] = useState(false)
    const [showCB, setShowCB] = useState(false)
    const [showRP, setshowRP] = useState(false)
    const [isGo, setIsGo] = useState(null)

    const validateInputs = () => {

        const { disposition, paid_amount, ptp_amount, ptp_date, remark } = newDispData


        let pass = false
        if (disposition) {
            if (disposition === 'CB') {
                if (ptp_date && remark) {
                    pass = true
                }
            }
            else if (disposition === 'PTP') {
                if (ptp_date && ptp_amount && remark) {
                    pass = true
                }
            }
            else if (disposition === 'PAID') {
                if (ptp_date && paid_amount) {
                    pass = true
                }
            }
            else if (disposition === 'DIS') {
                if (remark) {
                    pass = true
                }
            } 
            else {
                pass = true
            }

        }
        // console.log('run', newDispData)
        return pass
    }

    return (
        <div className="card border-0">
            <div className="card-body">
                <div className="grey-bg px-4">
                    <form id="dispoForm"
                        onChange={() => setIsGo(null)}
                    >
                        <div className="mb-2">
                            <div className="mb-2 row">
                                {isGo === false &&
                                    <div class="alert alert-info"
                                        style={{ fontSize: 16 }}
                                        role="alert">
                                        <div className='mx-3 py-1'>
                                            <li>Please fill the all the details</li>
                                        </div>
                                    </div>
                                }

                                <label for="Disposition" className="col-md-12 col-form-label pt-2 mt-1">Disposition</label>

                                <div className="col-md-12">


                                    <select




                                        id="Disposition" name="disposition" onChange={(e) => {

                                            setNewDispData({
                                                ...newDispData,
                                                remark: '',
                                                disposition: null,
                                                paid_amount: 0,
                                                ptp_amount: 0,
                                                ptp_date: null,
                                            })

                                            e.target.value === "PTP" ? setShowPTP(true) : setShowPTP(false)
                                            e.target.value === "PAID" ? setShowPaid(true) : setShowPaid(false)
                                            e.target.value === "DIS" ? setshowDP(true) : setshowDP(false)
                                            e.target.value === "CB" ? setShowCB(true) : setShowCB(false)
                                            e.target.value === "RTP" ? setshowRP(true) : setshowRP(false)

                                            document.getElementById('ReasonDelay').value = 'Select'
                                            handleChange(e)
                                        }}
                                        className="form-select">
                                        <option value={null} selected hidden disabled>Select Disposition</option>
                                        <option value='WN'>Wrong Number</option>
                                        <option value='SW'>Switched Off</option>
                                        <option value='RNR'>Ringing, No Response</option>
                                        <option value='PTP'>Promise To Pay</option>
                                        <option value='BPTP'>Broken PTP</option>
                                        <option value='LANG'>Language Barrier</option>
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
                                {
                                    showCB &&
                                    <div className="col-lg-6 ">
                                        <label for="CallbackDate" className="col-md-12 col-form-label pt-2 mt-1">Callback Date</label>
                                        <input
                                            type="date" className="form-control" name="ptp_date" onChange={e => handleChange(e)} />
                                    </div>
                                }
                                {
                                    showPTP &&
                                    <>
                                        <div className="col-lg-6 ">
                                            <label for="EMIDate" className="col-md-12 col-form-label pt-2 mt-1">PTP Date</label>
                                            <input
                                                type="date" className="form-control" name="ptp_date" onChange={e => handleChange(e)} />
                                        </div>
                                        <div className="col-lg-6 ">
                                            <label for="EMIDate" className="col-md-12 col-form-label pt-2 mt-1">PTP Amount</label>
                                            <input
                                                type="text" className="form-control" name="ptp_amount" onChange={e => handleChange(e)} />
                                        </div>
                                    </>

                                }
                                {
                                    showPaid &&
                                    <>
                                        <div className="col-lg-6 ">
                                            <label for="EMIDate" className="col-md-12 col-form-label pt-2 mt-1">Paid Date</label>
                                            <input
                                                type="date" className="form-control" name="ptp_date" onChange={e => handleChange(e)} />
                                        </div>
                                        <div className="col-lg-6 ">
                                            <label for="EMIDate" className="col-md-12 col-form-label pt-2 mt-1">Paid Amount</label>
                                            <input
                                                type="text" className="form-control" name="paid_amount" onChange={e => handleChange(e)} />
                                        </div>
                                    </>
                                }


                            </div>
                            <div className="mb-2 row">
                                <label for="ReasonDelay" className="col-md-12 col-form-label pt-2 mt-1">Select Reason for Delay</label>
                                <div className="col-md-12">
                                    <select
                                        name="remark"
                                        onChange={e => handleChange(e)}
                                        id="ReasonDelay"
                                        className="form-select">
                                        <option selected disabled hidden>Select</option>
                                        <option>Customer is out of station</option>
                                        <option>Customer has some financial issues</option>
                                        {showPTP &&
                                            ptpAry.map(val => {
                                                return (
                                                    <option>{val}</option>
                                                )
                                            }
                                            )
                                        }

                                        {showCB &&
                                            ptpAry.map(val => {
                                                return (
                                                    <option>{val}</option>
                                                )
                                            }
                                            )
                                        }

                                        {showDP &&
                                            dpAry.map(val => {
                                                return (
                                                    <option>{val}</option>
                                                )
                                            }
                                            )
                                        }



                                        {showRP &&
                                            rpAry.map(val => {
                                                return (
                                                    <option>{val}</option>
                                                )
                                            }
                                            )
                                        }



                                    </select>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="Reason" className="col-md-12 col-form-label pt-2 mt-1">Write Reason</label>
                                <div className="col-md-12">
                                    <textarea
                                        onClick={() => {
                                            document.getElementById('ReasonDelay').value = 'Select'
                                        }}
                                        id="Reason" className="form-textarea" placeholder="Type here…" name="remark" onChange={e => handleChange(e)}></textarea>
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <div className="col-md-12">
                                    <div className="white-bg pt-3 pb-3 px-4">
                                        <div className="row">
                                            <label for="inputPassword" className="col-md-6 col-form-label pt-2">Chance of Payment</label>
                                            <div className="col-md-3">
                                                <label for="gridRadios2" className="col-form-label">
                                                    <input

                                                        className="form-check-input me-2" type="radio" name="gridRadios" id="gridRadios2" value="yes" /> YES
                                                </label>
                                            </div>
                                            <div className="col-md-3">
                                                <label for="gridRadios3" className="col-form-label">
                                                    <input

                                                        className="form-check-input me-2" type="radio" name="gridRadios" id="gridRadios3" value="no" /> NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 mt-2 row">
                                <div className="col-md-12">
                                    <button className="btn btn-primary btn-lg w-100"
                                        type='button'
                                        onClick={(e) => {
                                            let valid = validateInputs()
                                            if (valid) {
                                                console.log(valid)
                                                addNewDisposition(e)
                                                document.getElementById("dispoForm").reset()
                                            } else {
                                                setIsGo(false)
                                            }
                                        }}
                                    >
                                        {isSaving ? 'Saving' : 'Save'}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CurrentCallDispoForm
