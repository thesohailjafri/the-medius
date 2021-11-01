import React from 'react'
import getFullForm from '../../../Functions/getFullForm'
import Accordion from 'react-bootstrap/Accordion'
import dateFormat from '../../../Functions/getCorrentDateFormat'

function DispoHistory({ dispoHistory }) {
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
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

            <div className="card-body p-0">
                <Accordion defaultActiveKey="1" className="level-one">
                    {
                        dispoHistory && dispoHistory.map((val, i) => {
                            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                            const date = new Date(val.contact_date)
                            return (
                                <Accordion.Item eventKey={i + 1} key={i}>
                                    <Accordion.Header>
                                        <div className="disposition-row pt-3 pb-3 col-lg-12" >
                                            <div className="row d-flex align-center " >
                                                <div className="col-lg-4">
                                                    <div className="dispo-date text-center">
                                                        {date.getDate()}<br />
                                                        <span>{monthNames[date.getMonth()]} {date.getUTCFullYear().toString().substring(2)}</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 pe-0 text-start">
                                                    <div className="dispo-note">
                                                        <p className="tx-14 text-black mb-1">{val.disposition ? getFullForm(val.disposition) : ""}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>

                                        <div className="dispositions-body text-start">
                                            <p><strong>Paid Date</strong> - {val.paid_date ? val.paid_date : ""}<br />
                                                <strong>Reference No.</strong> - {val.id ? val.id : ""}<br />
                                                <strong>Reason of Disposition</strong> - none<br />
                                                <strong>Disposition Category</strong> -  {val.disposition ?
                                                    getCategory(val.disposition)
                                                    : 'none'}<br />
                                                <strong>Agency Name</strong> - {val.agency_name ? val.agency_name : 'none'}<br />
                                                <strong>Remarks</strong> - {val.remark ? val.remark : "none"}<br />
                                                <strong>Issued On</strong> - {val.created_at ? dateFormat(val.created_at) : 'none'}<br /></p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                    {
                        (dispoHistory && (dispoHistory.length === 0)) &&
                        <div className='text-center m-3'>No Disposition Collected Yet</div>
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default DispoHistory
