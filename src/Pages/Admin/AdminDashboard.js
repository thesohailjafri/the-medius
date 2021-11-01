import React, { useEffect, useState } from 'react'
import PrelitigationBatchHeader from '../../Components/Headers/PrelitigationBatchHeader'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import Arrow from '../../Static/RawImages/arrow.png'
import { fetchAdminReport } from '../../API'

//charts
import CircularChart from '../../Components/Charts/CircularChart'
import { Link } from 'react-router-dom'



function AdminDashboard() {

    const [data, setData] = useState([])

    useEffect(async () => {
        setData(await fetchAdminReport())
    }, [])


    const circularChartData = {
        data: {
            name: 'Delivered',
            value: 23,
            color: "#359aba",
        },
        title: "Postal",
        tooltipText: "Delivered"
    }
    const circularChartData2 = {
        data: {
            name: 'Delivered',
            value: 0,
            color: "#359aba",
        },
        title: "WhatsApp",
        tooltipText: "Delivered"
    }
    const circularChartData3 = {
        data: {
            name: 'Delivered',
            value: 23,
            color: "#359aba",
        },
        title: "Email",
        tooltipText: "Delivered"
    }
    const circularChartData4 = {
        data: {
            name: 'Delivered',
            value: 23,
            color: "#359aba",
        },
        title: "SMS",
        tooltipText: "Delivered"
    }
    return (
        <>
            <PrelitigationBatchHeader />
            <hr className="mt-4 mb-4" />
            {
                data.length > 0 && data.map((val, i) => {
                    const whatsapp_sent = ((val.data.whatsapp_sent / val.data.total_contacts) * 100).toFixed(1)
                    const sms_sent = ((val.data.sms_sent / val.data.total_contacts) * 100).toFixed(1)
                    const ivr_sent = ((val.data.ivr_sent / val.data.total_contacts) * 100).toFixed(1)
                    const human_calls = ((val.data.human_calls / val.data.total_contacts) * 100).toFixed(1)
                    console.log({ human_calls })
                    const circularChartDataR = {
                        data: {
                            name: 'Sent',
                            value: whatsapp_sent,
                            color: "#359aba",
                        },
                        title: "Whatsapp",
                        tooltipText: "Sent"
                    }
                    const circularChartDataR2 = {
                        data: {
                            name: 'Sent',
                            value: sms_sent,
                            color: "#359aba",
                        },
                        title: "SMS",
                        tooltipText: "Sent"
                    }
                    const circularChartDataR3 = {
                        data: {
                            name: 'Sent',
                            value: ivr_sent,
                            color: "#359aba",
                        },
                        title: "IVR Call",
                        tooltipText: "Sent"
                    }
                    const circularChartDataR4 = {
                        data: {
                            name: 'Sent',
                            value: human_calls,
                            color: "#359aba",
                        },
                        title: "Human Call",
                        tooltipText: "Sent"
                    }
                    return (
                        <div className="row d-flex justify-between" data-aos="fade-up" data-aos-duration="800" key={i}>
                            <div className="col-md-12 col-lg-2 mb-lg-0 mb-3">
                                <div className="d-flex align-start">
                                    <Checkbox
                                        className="me-3"
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                    <div className="w-75">
                                        <Link to={`/admin/dashboard/batch=${val.batch_id}`}>
                                            <p className="mb-2 text-black"><strong>Batch No. {val.batch_id ? val.batch_id : ""}</strong></p>
                                        </Link>
                                        <p className="mb-2"><a >Total Contacts - <span className="text-black">{val.data.total_contacts ? val.data.total_contacts : "NaN"}</span></a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-2 mb-lg-0 mb-3 border-right-dash">
                                <div className="status-progress">
                                    <div className="chart-box text-end">
                                        <CircularChart data={circularChartDataR} scale={1}></CircularChart>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-5 mb-lg-0 mb-3">
                                <div className="status-progress">
                                    <div className="chart-box text-center">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-4">
                                                <div className="status-progress">
                                                    <div className="chart-box text-end">
                                                        <CircularChart data={circularChartDataR2} scale={1}></CircularChart>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-4">
                                                <div className="status-progress">
                                                    <div className="chart-box text-end">
                                                        <CircularChart data={circularChartDataR3} scale={1}></CircularChart>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-4">
                                                <div className="status-progress">
                                                    <div className="chart-box text-end">
                                                        <CircularChart data={circularChartDataR4} scale={1}></CircularChart>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-3 mb-lg-0 mb-3">
                                <div className="action-box">
                                    <label htmlFor="dropdown-basic" className="col-form-label pb-2">Action</label>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                            Select <img src={Arrow} alt="Sort" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="select-style-dropdown">
                                            <Dropdown.Item><Link to={`/admin/dashboard/batch=${val.batch_id}`} style={{ color: "#000" }}>View Batch Report</Link></Dropdown.Item>
                                            <Dropdown.Item><Link to={`/admin/dashboard/reset-campaign/batch=${val.batch_id}`} style={{ color: "#000" }}>Reset Batch Data</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <hr className="mt-4 mb-4" />
                            </div>
                        </div>
                    )
                })
            }



        </>
    )
}

export default AdminDashboard
