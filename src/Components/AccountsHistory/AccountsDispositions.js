import React, { useEffect, useState } from 'react'
import ContentLoader from '../ContentLoader'
import Accordion from 'react-bootstrap/Accordion'
// import ddata from '../../JSON/dispositionsData.json'
import getFullForm from "../../Functions/getFullForm"

function AccountsDispositions(props) {
    // const [data, setdata] = useState(ddata)

    //const data = props.AccountDispositionsData
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.AccountDispositionsData)
        console.log(props.AccountDispositionsData)
    }, [props])
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
    return (
        data && data.length > 0 ?
            <div className="account_extra_dispositions">
                <Accordion defaultActiveKey="1" className="level-one">
                    {data.map((item, i) => {

                        const date = new Date(item.contact_date)
                        return (
                            <Accordion.Item eventKey={i}>
                                <Accordion.Header>

                                    <div className="disposition-row ">
                                        <div className="row d-flex align-center">
                                            <div className="col-lg-4">
                                                <div className="dispo-date text-center">
                                                    {date.getDate()}<br />
                                                    <span>{monthNames[date.getMonth()]} {date.getUTCFullYear().toString().substring(2)}</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 ">
                                                {item.disposition ? getFullForm(item.disposition) : ""}
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="dispositions-body">
                                        <p><strong>Paid Date</strong> - {item.paid_date}<br />
                                            <strong>Reference No.</strong> - {item.id}<br />
                                            <strong>Reason of Disposition</strong> - Paid<br />
                                            <strong>Remarks</strong> - {item.remark}.</p>
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
                    })}


                </Accordion>
            </div>
            :
            <div>NO DISPOSITION FOUND</div>

    )
}

export default AccountsDispositions
