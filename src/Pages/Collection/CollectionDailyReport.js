// import React from 'react'
import React, { useEffect, useState } from 'react'
import DailyreportHeader from '../../Components/DailyreportHeader'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import Arrow from '../../Static/RawImages/arrow.png'
import axios from 'axios'

//charts
import VerticalBarChart from '../../Components/Charts/VerticalBarChart'

//functions
import getCorrentDateFormat from '../../Functions/getCorrentDateFormat'
import amountCommaSeparator from '../../Functions/amountCommaSeparator'

//API
import { fetchReportData } from '../../API'

// const Data = [
//     {
//         "date": "2021-02-09",
//         "over_all": {
//             "total_count": 2162,
//             "total_amount": 6069602.0
//         },
//         "new_calls": {
//             "total_count": 2161,
//             "total_amount": 6067323.0,
//             "connected": 797,
//             "ptp": 352,
//             "connected_amount": 2185105.0,
//             "ptp_amount": 907693.0
//         },
//         "followup_calls": {
//             "total_count": 1,
//             "total_amount": 2279.0,
//             "paid": 0.0,
//             "broken_ptp": 0.0,
//             "paid_amount": 0,
//             "broken_ptp_amount": 0
//         }
//     }
// ]

function CollectionDailyReport() {

    const [reportData, setReportData] = useState([])
    const [Report, setReport] = useState(null)

    useEffect(async () => {
        const dat = await fetchReportData()
        console.log(dat)
        setReportData(dat.data)
        // setReportData(Data);
    }, [])

    const downloadReport = (date) => {
        console.log(date)
        axios.get(`dashboard/api/downlaod-daily-report/?date=${date}`).then((res) => {
            console.log(res.data.file_url)
            setReport(res.data.file_url)
            //  document.getElementById("downloadReport").href=res.data.file_url;
            document.getElementById("downloadReport").click()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <DailyreportHeader />
            {
                reportData && reportData.map((val, i) => {

                    console.log(val)
                    let verticalBarChartDataN = {
                        titleLeft: "New Calls",
                        // titleRight: "Follow-up Calls",
                        data: [{
                            label: "Connected",
                            top: {
                                value: val.new_calls.connected,
                                label: amountCommaSeparator(val.new_calls.connected),
                                maxValue: val.new_calls.total_count,
                                color: "#009ec0"
                            },
                            bottom: {
                                value: val.new_calls.connected_amount,
                                label: amountCommaSeparator(val.new_calls.connected_amount),
                                maxValue: val.new_calls.total_amount,
                                color: "#1de9b6",
                                color1: "#1dc4e9"
                            }
                        },
                        {
                            label: "PTP",
                            top: {
                                value: val.new_calls.ptp,
                                label: amountCommaSeparator(val.new_calls.ptp),
                                maxValue: val.new_calls.total_count,
                                color: "#009ec0"
                            },
                            bottom: {
                                value: val.new_calls.ptp_amount,
                                label: amountCommaSeparator(val.new_calls.ptp_amount),
                                maxValue: val.new_calls.total_amount,
                                color: "#1de9b6",
                                color1: "#1dc4e9"
                            }
                        }]
                    }
                    let verticalBarChartDataN2 = {
                        // titleLeft: "New Calls",
                        titleRight: "Follow-up Calls",
                        data: [{
                            label: "Paid",
                            top: {
                                value: val.followup_calls.paid,
                                label: amountCommaSeparator(val.followup_calls.paid),
                                maxValue: val.followup_calls.total_count,
                                color: "#009ec0"
                            },
                            bottom: {
                                value: val.followup_calls.paid_amount,
                                label: amountCommaSeparator(val.followup_calls.paid_amount),
                                maxValue: val.followup_calls.total_amount,
                                color: "#1de9b6",
                                color1: "#1dc4e9"
                            }
                        },
                        {
                            label: "Broken PTP",
                            top: {
                                value: val.followup_calls.broken_ptp,
                                label: amountCommaSeparator(val.followup_calls.broken_ptp),
                                maxValue: val.followup_calls.total_count,
                                color: "#009ec0"
                            },
                            bottom: {
                                value: val.followup_calls.broken_ptp_amount,
                                label: amountCommaSeparator(val.followup_calls.broken_ptp_amount),
                                maxValue: val.followup_calls.total_amount,
                                color: "#1de9b6",
                                color1: "#1dc4e9"
                            }
                        }]
                    }



                    return (
                        <div className="row d-flex justify-between" data-aos="fade-up" data-aos-duration="800">
                            <div className="col-md-12 col-lg-3 mb-lg-0 mb-3">
                                <div className="d-flex align-start">
                                    <Checkbox
                                        className="me-3"
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                    <div className="w-75">
                                        <p className="text-muted mb-2"><a ><small>{getCorrentDateFormat(val.date)}</small></a></p>
                                        <p className="mb-4"><a ><strong>Total Calls - {val.over_all.total_count ? val.over_all.total_count : "-"} ({val.over_all.total_amount})</strong></a></p>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <p className="text-muted mb-0"><small>New Calls</small></p>
                                            </div>
                                            <div className="col-md-5">
                                                <p className="mb-0"><small>{val.new_calls.total_count ? val.new_calls.total_count : ""} ({val.new_calls.total_amount})</small></p>
                                            </div>
                                        </div>
                                        <hr className="hr-dotted mt-1 mb-1" />
                                        <div className="row">
                                            <div className="col-md-7">
                                                <p className="text-muted mb-2"><small>Follow-up Calls</small></p>
                                            </div>
                                            <div className="col-md-5">

                                                <p className="mb-0"><small>{val.followup_calls.total_count ? val.followup_calls.total_count : ""} ({val.followup_calls.total_amount})</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-6 mb-lg-0 mb-3">
                                <div className="text-end">
                                    <div className="chart-box d-wrap content-center d-flex">
                                        <VerticalBarChart data={verticalBarChartDataN}></VerticalBarChart>
                                        <VerticalBarChart data={verticalBarChartDataN2}></VerticalBarChart>
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
                                            <Dropdown.Item href="" onClick={(e) => downloadReport(val.date)}>Download Calling Report</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <hr className="hr-dotted mt-4 mb-4" />
                            </div>
                            <a className="d-none" id="downloadReport" target="_blank" href={Report}></a>
                        </div>
                    )
                })
            }


        </>
    )
}

export default CollectionDailyReport
