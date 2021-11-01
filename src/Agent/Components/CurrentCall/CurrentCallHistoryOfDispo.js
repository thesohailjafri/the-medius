import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import getFullForm from '../../../Functions/getFullForm'
import dateFormat from '../../../Functions/getCorrentDateFormat'

function CurrentCallHistoryOfDispo({ dispData }) {
    const getCategory = (val) => {
        let reponse
        if (val === 'WN' || val === 'SW' || val === 'RNR' || val === 'DND') {
            reponse = 'Not Connected'
        } else if (
            val === 'PTP' || val === 'BPTP' || val === 'DIS'
            || val === 'SUR' || val === 'PAID' || val === 'CB'
            || val === 'SETL' || val === 'LANG' || val === 'RTP'
        ) {
            reponse = 'Connected'
        } else {
            reponse = 'none'
        }
        return reponse
    }
    return (
        <div className="card">
            <div className="card-body p-0">
                <Accordion defaultActiveKey="1" className="level-one">
                    {
                        dispData && dispData.map((val, i) => {
                            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                            const date = new Date(val.contact_date)
                            return (
                                <Accordion.Item eventKey={i + 1} key={i}>
                                    <Accordion.Header>
                                        <div className="disposition-row pb-3 col-lg-12">
                                            <div className="row d-flex align-center">
                                                <div className="col-lg-3">
                                                    <div className="dispo-date text-center">
                                                        {date.getDate()}<br />
                                                        <span>{monthNames[date.getMonth()]} {date.getUTCFullYear().toString().substring(2)}</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div className="dispo-note">
                                                        {val.disposition ? getFullForm(val.disposition) : ""}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="dispositions-body">
                                            <p><strong>Paid Date</strong> - {val.paid_date ? val.paid_date : "none"}<br />
                                                <strong>Reference No.</strong> - {val.id ? val.id : "none"}<br />
                                                <strong>Reason of Disposition</strong> -  {val.disposition ? getFullForm(val.disposition) : 'none'}<br />

                                                <strong>Disposition Category</strong> -  {val.disposition ?
                                                    getCategory(val.disposition)
                                                    : 'none'}<br />
                                                <strong>Agency Name</strong> - {val.agency_name ? val.agency_name : 'none'}<br />
                                                <strong>Remarks</strong> - {val.remark ? val.remark : "none"}<br />
                                                <strong>Issued On</strong> - {val.created_at ? dateFormat(val.created_at) : 'none'}<br />
                                            </p>
                                            {/* <button className="btn btn-light">
                                                <svg width="14" height="18" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill-rule="nonzero" fill="none">
                                                        <path d="M1.575 17.92h10.5c.868 0 1.575-.707 1.575-1.575V5.25H9.975A1.577 1.577 0 0 1 8.4 3.675V0H1.575C.707 0 0 .707 0 1.575v14.77c0 .868.707 1.575 1.575 1.575zm2.1-10.535h6.3a.525.525 0 1 1 0 1.05h-6.3a.525.525 0 1 1 0-1.05zm0 2.1h6.3a.525.525 0 1 1 0 1.05h-6.3a.525.525 0 1 1 0-1.05zm0 2.1h6.3a.525.525 0 1 1 0 1.05h-6.3a.525.525 0 1 1 0-1.05zm0 2.1h4.2a.525.525 0 1 1 0 1.05h-4.2a.525.525 0 1 1 0-1.05z" fill="#0A7AFF" />
                                                        <path d="M9.975 4.2h3.367L9.45.308v3.367c0 .29.235.525.525.525z" fill="#3B3DFE" />
                                                    </g>
                                                </svg>
                                                Screenshot19122021.jpg
                                            </button> */}
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }

                </Accordion>
                {
                    ((dispData && dispData.length === 0) || !dispData)
                    &&
                    <div className='text-center m-3'>No Disposition Collected Yet</div>
                }
            </div>
        </div>
    )
}

export default CurrentCallHistoryOfDispo
