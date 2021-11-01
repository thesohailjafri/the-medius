import React, { useEffect, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { Link, useRouteMatch } from 'react-router-dom'
import LineChart from '../Components/Charts/LineChart'
import MultiBarCircularChart from '../Components/Charts/MultiBarCircularChart'
import StackedHorizontalBarChart from '../Components/Charts/StackedHorizontalBarChart'
import MultiCircularMixedChart from '../Components/Charts/MultiCircularMixedChart'
import BarChart from '../Components/Charts/BarChart'
import BubbleChart from '../Components/Charts/BubbleChart'
import Dropdown from 'react-bootstrap/Dropdown'
import Arrow from '../Static/RawImages/arrow.png'
import axios from "axios"
import {
    getLiveFeed,
    getTotalCollection,
    getDataWiseBatchData,
    getDispositionWiseReport,
    getRiskAssessment
} from '../API'
import getFullForm from "../Functions/getFullForm"
import roundFigure from "../Functions/roundFigureAmount"
import dateFormat from '../Functions/getDashboardCollectionDateFormat'
import KLC from '../Functions/KLC'

import NcDispo from '../Static/Images/NcDispo'
import PaidDispo from '../Static/Images/PaidDispo'
import PtpDispo from '../Static/Images/PtpDispo'
import SwDispo from '../Static/Images/SwDispo'
import GeneDispo from '../Static/Images/GeneDispo'
import BptpDispo from '../Static/Images/BptpDispo'

import Sort from '../Static/RawImages/sort.png'
import { TiArrowSortedUp, TiArrowSortedDown, TiChevronLeft, TiChevronRight } from 'react-icons/ti'




function Dashboard() {
    const myDate = new Date()
    const [collectionData, setCollectionData] = useState(null)
    const [liveFeed, setLiveFeed] = useState([])
    const [duration, setDuration] = useState('7D')
    const [dispoAtype, setDispoAtype] = useState('amount')
    const [dispoVal, setDispoVal] = useState(null)
    const [riskAtype, setRiskAtype] = useState('amount')
    const [riskVal, setRiskVal] = useState(null)
    const [liveFeedSortOrderUp, setLiveFeedSortOrderUp] = useState(true)
    const [totalLivePages, setTotalLivePages] = useState(0)
    const [livePageNum, setLivePageNum] = useState(1)

    const getData_collection = useCallback(
        async () => {
            const res = await getTotalCollection()
            setCollectionData(res)
        },
        []
    )
    //fix
    const getData_live = useCallback(
        async () => {
            let order
            let page = 1
            if (liveFeedSortOrderUp === true) {
                order = 'id'
            }
            if (liveFeedSortOrderUp === false) {
                order = '-id'
            }
            if (livePageNum >= 1 && livePageNum <= totalLivePages) {
                page = livePageNum
            }

            const res = await getLiveFeed(order, page)
            if (res) {
                setTotalLivePages(res.count / 20)
                setLiveFeed(res.results)
            }
        },
        [liveFeedSortOrderUp, livePageNum, totalLivePages]
    )

    const getData_dispo = useCallback(
        async () => {
            let type = null
            let value = null

            if (dispoVal) {
                type = dispoVal['type']
                value = dispoVal['value']
            }
            const res = await getDispositionWiseReport(type, value)
            if (res) {
                let data
                let lableData
                if (dispoAtype === 'account') {
                    lableData = Object.values(res).map(val => { return val.customer_count })
                    data = Object.values(res).map(val => { return { category: getFullForm(val.disposition), value: val.customer_count } })
                }
                if (dispoAtype === 'amount') {
                    lableData = Object.values(res).map(val => { return val.amount })
                    data = Object.values(res).map(val => { return { category: getFullForm(val.disposition), value: val.amount } })
                }


                let lableDataMax = Math.max(...lableData)
                let lableDataMaxRound = roundFigure(lableDataMax)
                let yAxisData = [
                    0,
                    parseInt((1 / 8) * lableDataMaxRound),
                    parseInt((2 / 8) * lableDataMaxRound),
                    parseInt((3 / 8) * lableDataMaxRound),
                    parseInt((4 / 8) * lableDataMaxRound),
                    parseInt((5 / 8) * lableDataMaxRound),
                    parseInt((6 / 8) * lableDataMaxRound),
                    parseInt((7 / 8) * lableDataMaxRound),
                    parseInt(lableDataMaxRound),
                ]

                const parentChart = document.getElementById('dispositionChart')
                ReactDOM.unmountComponentAtNode(parentChart)

                ReactDOM.render(<BarChart data={{
                    color: "#1dc4e9",
                    color1: "#1de9b6",
                    maxValue: lableDataMaxRound,
                    data,
                    yAxisData
                }} width="600"></BarChart>, parentChart)
            }
        },
        [dispoAtype, dispoVal]
    )

    const getData_risk = useCallback(
        async () => {

            function setColor(clr) {
                let color
                if (clr.toLowerCase() === 'low') {
                    color = "#d5f6ef"
                }
                if (clr.toLowerCase() === 'medium') {
                    color = "#9be2dc"
                }
                if (clr.toLowerCase() === 'high') {
                    color = "#aae5f7"
                }
                return color
            }
            let type = null
            let value = null

            if (riskVal) {
                type = riskVal['type']
                value = riskVal['value']
            }
            const res = await getRiskAssessment(type, value)
            if (res) {
                let dataAry
                if (riskAtype === 'amount') {
                    dataAry = Object.values(res).map(item => { return (item?.amount) })
                }
                if (riskAtype === 'account') {
                    dataAry = Object.values(res).map(item => { return (item?.customer_count) })
                }
                console.log(dataAry, riskAtype)
                let total = 0
                for (const ele of dataAry) {
                    total = ele + total
                }


                let data
                if (riskAtype === 'amount') {
                    data = Object.keys(res).map(item => { return { name: item, color: setColor(item), value: (100 * res[item].amount) / total } })
                }
                if (riskAtype === 'account') {
                    data = Object.keys(res).map(item => { return { name: item, color: setColor(item), value: (100 * res[item].customer_count) / total } })
                }
                const parentChart = document.getElementById('riskChart')
                ReactDOM.unmountComponentAtNode(parentChart)

                ReactDOM.render(<BubbleChart data={{ data }} />, parentChart)
            }



        }, [riskAtype, riskVal])

    const getData_batchReport = useCallback(
        async () => {
            const res = await getDataWiseBatchData(duration)
            if (res) {
                let data = Object.values(res).map(val => { return { name: dateFormat(val.date), value: val.paid_amount } })
                const parentChart = document.getElementById('collectionChart')
                ReactDOM.unmountComponentAtNode(parentChart)

                ReactDOM.render(<LineChart data={
                    {
                        data: data,
                        tooltipLabel: 'Total Collections ',
                        width: 800,
                        heigth: 300,
                        padding: {
                            left: 40,
                            right: 40,
                            top: 20,
                            bottom: 20
                        }
                    }
                } />, parentChart)

            }

        },
        [duration]
    )



    useEffect(() => {
        getData_risk()
    }, [getData_risk])

    useEffect(() => {
        getData_live()
    }, [getData_live])

    useEffect(() => {
        getData_collection()
    }, [getData_collection])

    useEffect(() => {
        getData_batchReport()
    }, [getData_batchReport])

    useEffect(() => {
        getData_dispo()
    }, [getData_dispo])



    let multiBarCircularChartData = {
        data: [
            { name: 'Calls-to-Contacts', value: 75, color: "#359aba" },
            { name: 'Contacts-to-PTP', value: 90, color: "#4fbcce" },
            { name: 'Paid', value: 40, color: "#9debdc" },
        ],
        title: "12, 324",
        subTitle: "Value",
        tooltipText: "Connected Call"
    }
    let stackedHorizontalChartData = [
        {
            rowData: [
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 1.2,
                    color: "#b2f1e4"
                },
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 2.2,
                    color: "#6bd0bd"
                },
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 4.2,
                    color: "#1e897f"
                },
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 8.2,
                    color: "#4fbdce"
                },
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 16.2,
                    color: "#b2f1e4"
                },
            ],
            color: "#1dc4e9", color1: "#1de9b6",
            tooltipLabel: "1 ",
            rowName: "DPD Break-up"
        },
        {
            rowData: [
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 1.2,
                    color: "#b2f1e4"
                },
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 1.2,
                    color: "#6bd0bd"
                },
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 1.2,
                    color: "#1e897f"
                },
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 1.2,
                    color: "#4fbdce"
                },
                {
                    tooltipStartText: "90-180 Days",
                    tooltipEndText: "Cr",
                    value: 1.2,
                    color: "#b2f1e4"
                },
            ],
            color: "#1dc4e9", color1: "#1de9b6",
            tooltipLabel: "2 ",
            rowName: "Bre"
        }
    ]
    const multiCircularMixedChartData = {
        data: {
            name: 'Connected',
            value: 75,
            color: "#00777c",
            title: "5,266",
        },
        tooltipText: "Connected Call",
        pieData: [
            {
                value: 30,
                color: "#b2f1e4",
                labelBottom: "0-30 days"
            },
            {
                value: 5,
                color: "#6bd0bd",
                labelBottom: "60-90 days"
            },
            {
                value: 25,
                color: "#1e897f",
                labelBottom: "90-120 days"
            },
            {
                value: 30,
                color: "#4fbdce",
                labelBottom: "120-150 days"
            },
            {
                value: 20,
                color: "#b2f1e4",
                labelBottom: "30-60 days"
            },
        ]
    }


    return (
        <>
            <Tab.Container defaultActiveKey="collection">
                <Nav className="content-tab mb-5 mt-4">
                    <Nav.Item>
                        <Nav.Link eventKey="collection">
                            Collection
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="agents">
                            Agents
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="geoanalysis">
                            Geo Analysis
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="collection">
                        <div className="dashboard-status mb-5" data-aos="fade-up" data-aos-duration="800">
                            <div className="row">
                                <div className="col-lg-4 border-right-solid">
                                    <div className="d-flex justify-between text-black pe-4">
                                        <div>
                                            <h3 className="mb-0">{collectionData ? KLC(collectionData?.total_collection) : 'NaN'}</h3>
                                            <p>Total Collections</p>
                                        </div>
                                        <div>
                                            <h3 className="mb-0">{collectionData ? KLC(collectionData?.today_collection) : 'NaN'}</h3>
                                            <p>Today's Collection</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 border-right-solid">
                                    <div className="d-flex justify-between text-black ps-4 pe-4">
                                        <div>
                                            <h3 className="mb-0">{collectionData ? (collectionData?.ptp_ratio) + '%' : 'NaN'}</h3>
                                            <p>Total PTP</p>
                                        </div>
                                        <div>
                                            <h3 className="mb-0">{collectionData ? (collectionData?.broken_ptp_ratio) + '%' : 'NaN'}</h3>
                                            <p>Broken PTP</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="d-flex justify-between text-black ps-4">
                                        <div>
                                            <h3 className="mb-0">1.67 L</h3>
                                            <p>Notices sent</p>
                                        </div>
                                        <div>
                                            <h3 className="mb-0">43.2 K</h3>
                                            <p>Case Documents Generated</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-content">
                            <div className="row">
                                <div className="col-lg-8 border-right-dash" data-aos="fade-up" data-aos-duration="800">
                                    <div className="d-flex justify-between text-black collections-chart mb-3">
                                        <div>
                                            <h2 className="mb-0 text-black tx-18">Collections</h2>
                                        </div>
                                        <div>
                                            <p className="text-muted"><span
                                                className={duration === '7D' ? "text-primary cursorPointer" : "cursorPointer"}
                                                onClick={() => setDuration('7D')}
                                            >7D</span> | <span
                                                className={duration === '1M' ? "text-primary cursorPointer" : "cursorPointer"}
                                                onClick={() => setDuration('1M')}
                                            >1M</span> | <span
                                                className={duration === '6M' ? "text-primary cursorPointer" : "cursorPointer"}
                                                onClick={() => setDuration('6M')}
                                            >6M</span> | <span
                                                className={duration === 'YTD' ? "text-primary cursorPointer" : "cursorPointer"}
                                                onClick={() => setDuration('YTD')}
                                            >YTD</span> | <span
                                                className={duration === '1Y' ? "text-primary cursorPointer" : "cursorPointer"}
                                                onClick={() => setDuration('1Y')}
                                            >1Y</span></p>
                                        </div>
                                    </div>
                                    <div className="chart-box" id="collectionChart" >

                                    </div>
                                </div>
                                <div className="col-lg-4 border-right-solid ps-4 live-feed" data-aos="fade-up" data-aos-duration="800"
                                   
                                >
                                    <div className="row">
                                        <div className="col-lg-12 mb-3 d-inline-flex justify-content-between align-items-center">
                                            <h2 className="mb-0 text-black tx-18 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="me-3" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><g fill="#E02020"><g><g><g transform="translate(-1065.000000, -296.000000) translate(1065.000000, 293.000000) translate(0.000000, 0.000000) translate(0.000000, 3.000000)"><circle cx="10" cy="10" r="10" opacity=".16" /><circle cx="10" cy="10" r="6" /></g></g></g></g></g></svg>
                                                <span>Live Feed</span>
                                            </h2>
                                            <button className="me-2 btn btn-secondary w-auto align-items-center ps-3 pe-1"
                                                onClick={() => {
                                                    setLiveFeedSortOrderUp(!liveFeedSortOrderUp)
                                                    setLivePageNum(1)
                                                }}
                                            >
                                                <img src={Sort} alt="Sort" />
                                                <span>Sort</span>
                                                {liveFeedSortOrderUp ?
                                                    <TiArrowSortedUp className="ms-1" />
                                                    :
                                                    <TiArrowSortedDown className="ms-1" />
                                                }
                                            </button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 mb-3 d-inline-flex justify-content-between align-items-center  justify-content-center"

                                        >
                                            <button className="me-2 btn btn-secondary align-items-center ps-3 pe-3"
                                                disabled={livePageNum - 1 === 0}
                                                onClick={() => setLivePageNum(livePageNum - 1)}
                                            >
                                                <TiChevronLeft />
                                                <span>Prev</span>
                                            </button>

                                            <button className="me-2 btn btn-secondary align-items-center ps-3 pe-3"
                                                disabled
                                            >
                                                <span>{livePageNum}</span>
                                            </button>

                                            <button className="me-2 btn btn-secondary align-items-center ps-3 pe-1 justify-content-center"
                                                disabled={livePageNum + 1 > totalLivePages}
                                                onClick={() => setLivePageNum(livePageNum + 1)}
                                            >
                                                <span className="me-2">Next</span>
                                                <TiChevronRight />
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            overflow: "scroll",
                                            minHeight: "320px",
                                            maxHeight: "320px"
                                        }}
                                    >
                                    {
                                        liveFeed.length > 0 ? liveFeed.map((val, i) => {
                                            let disp
                                            let imgToPrint
                                            if (val.disposition) {
                                                disp = val.disposition.toLowerCase()
                                                if (disp === 'ptp') {
                                                    imgToPrint = <PtpDispo />
                                                }
                                                else if (disp === 'bptp') {
                                                    imgToPrint = <BptpDispo />
                                                }
                                                else if (disp === 'sw') {
                                                    imgToPrint = <SwDispo />
                                                }
                                                else if (disp === 'paid') {
                                                    imgToPrint = <PaidDispo />
                                                }
                                                else if (disp === 'nc') {
                                                    imgToPrint = <NcDispo />
                                                }
                                                else {
                                                    imgToPrint = <GeneDispo />
                                                }

                                            }
                                            return (
                                                <div className="d-flex align-center justify-between text-black pe-4 live-feed-row">
                                                    <div className="d-flex align-center justify-between">
                                                        <div className="me-3">
                                                            {imgToPrint}
                                                        </div>
                                                        <p className="m-0">
                                                            {val.disposition ? getFullForm(val.disposition) : "-"}<br />
                                                            <small>Loan No.{val.loan_account_no ? val.loan_account_no : "NaN"}</small>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="c-505050"><strong>&#8377; {val.due_amount ? val.due_amount : "0"} </strong></p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                            :
                                            <p className="c-505050 text-center"><strong>No Data Found</strong></p>
                                    }
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="border-bottom-dash mt-5 mb-5"></div>
                                </div>
                            </div>


                            {/* Batch Wise Analysis */}
                            <div className="row">
                                <div className="col-lg-8 border-right-dash batch-analysis-box" data-aos="fade-up" data-aos-duration="800">
                                    <div className="row batch-analysis-chart mb-5 text-black">
                                        <div className="col-lg-6">
                                            <div>
                                                <h2 className="mb-0 text-black tx-18">Batch Wise Analysis</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 ">
                                            <div className="d-flex justify-end">
                                                <Dropdown className="me-3">
                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 dropdown-nostyle text-start select-style">
                                                        All Product <img src={Arrow} alt="Sort" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="select-style-dropdown">
                                                        <Dropdown.Item
                                                        >Product 1</Dropdown.Item>
                                                        <Dropdown.Item
                                                        >Product 2</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown className="me-4">
                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 dropdown-nostyle text-start select-style">
                                                        All Batches <img src={Arrow} alt="Sort" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="select-style-dropdown">
                                                        <Dropdown.Item
                                                        >Batches 1</Dropdown.Item>
                                                        <Dropdown.Item
                                                        >Batches 2</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <div className="btn-group" role="group">
                                                    <button type="button" className="btn btn-secondary">Accounts</button>
                                                    <button type="button" className="btn btn-secondary active">Amount</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex text-black batch-analysis-chart align-center">
                                        <div className="chart-box">
                                            <MultiBarCircularChart data={multiBarCircularChartData}></MultiBarCircularChart>
                                        </div>
                                        <div className="chart-box ps-5">
                                            <StackedHorizontalBarChart data={stackedHorizontalChartData} scale={1}></StackedHorizontalBarChart>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 ps-4" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="row batch-analysis-chart mb-5 text-black">
                                        <div className="col-lg-6">
                                            <div>
                                                <h2 className="mb-0 text-black tx-18">Aging Report</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex justify-end">
                                                <div className="btn-group" role="group">
                                                    <button type="button" className="btn btn-secondary">Accounts</button>
                                                    <button type="button" className="btn btn-secondary active">Amount</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <Dropdown className="mt-2">
                                                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="dropdown-nostyle text-start select-style">
                                                    All Batches <img src={Arrow} alt="Sort" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="select-style-dropdown">
                                                    <Dropdown.Item
                                                    >Batches 1</Dropdown.Item>
                                                    <Dropdown.Item
                                                    >Batches 2</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="chart-box ps-5">
                                        <MultiCircularMixedChart scale={1} data={multiCircularMixedChartData}></MultiCircularMixedChart>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="border-bottom-dash mt-5 mb-5"></div>
                                </div>
                            </div>

                            {/* Disposition */}
                            <div className="row">
                                <div className="col-lg-8 border-right-dash disposition-box" data-aos="fade-up" data-aos-duration="800">
                                    <div className="row disposition-chart mb-5 text-black">
                                        <div className="col-lg-6">
                                            <div>
                                                <h2 className="mb-0 text-black tx-18">Disposition</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 ">
                                            <div className="d-flex justify-end">
                                                <Dropdown className="me-3">
                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 dropdown-nostyle text-start select-style">
                                                        All Product <img src={Arrow} alt="Sort" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="select-style-dropdown">
                                                        <Dropdown.Item
                                                            onClick={() => setDispoVal(null)}
                                                        >All</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => setDispoVal({ type: 'product', value: 1 })}
                                                        >Product 1</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => setDispoVal({ type: 'product', value: 2 })}
                                                        >Product 2</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown className="me-4">
                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 dropdown-nostyle text-start select-style">
                                                        All Batches <img src={Arrow} alt="Sort" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="select-style-dropdown">
                                                        <Dropdown.Item
                                                            onClick={() => setDispoVal(null)}
                                                        >All</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => setDispoVal({ type: 'batch', value: 1 })}
                                                        >Batches 1</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => setDispoVal({ type: 'batch', value: 2 })}
                                                        >Batches 2</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <div className="btn-group" role="group">
                                                    <button type="button" className={dispoAtype === 'account' ? "btn btn-secondary active" : "btn btn-secondary"}
                                                        onClick={() => setDispoAtype('account')}
                                                    >Accounts</button>
                                                    <button type="button" className={dispoAtype === 'amount' ? "btn btn-secondary active" : "btn btn-secondary"}
                                                        onClick={() => setDispoAtype('amount')}
                                                    >Amount</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-center">
                                        <div className="chart-box" id="dispositionChart">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 ps-4" data-aos="fade-up" data-aos-duration="800">
                                    <div className="row mb-5 text-black">
                                        <div className="col-lg-6">
                                            <div>
                                                <h2 className="mb-0 text-black tx-18">Risk Assessment</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 ">
                                            <div className="d-flex justify-end">

                                                <div className="btn-group" role="group">
                                                    <button type="button" className={riskAtype === 'account' ? "btn btn-secondary active" : "btn btn-secondary"}
                                                        onClick={() => setRiskAtype('account')}
                                                    >Accounts</button>
                                                    <button type="button" className={riskAtype === 'amount' ? "btn btn-secondary active" : "btn btn-secondary"}
                                                        onClick={() => setRiskAtype('amount')}
                                                    >Amount</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-flex">
                                                <Dropdown className="mt-2 me-3">
                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="dropdown-nostyle text-start select-style">
                                                        All Product <img src={Arrow} alt="Sort" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="select-style-dropdown">
                                                        <Dropdown.Item
                                                            onClick={() => setRiskVal(null)}
                                                        >All</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => setRiskVal({ type: 'product', value: 1 })}
                                                        >Product 1</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => setRiskVal({ type: 'product', value: 2 })}
                                                        >Product 2</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown className="mt-2 me-4">
                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="dropdown-nostyle text-start select-style">
                                                        All Batches <img src={Arrow} alt="Sort" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="select-style-dropdown">
                                                        <Dropdown.Item
                                                            onClick={() => setRiskVal(null)}
                                                        >All</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => setRiskVal({ type: 'batch', value: 1 })}
                                                        >Batches 1</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => setRiskVal({ type: 'batch', value: 2 })}
                                                        >Batches 2</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chart-box ps-5" id="riskChart">

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="border-bottom-dash mt-5 mb-5"></div>
                                </div>
                            </div>


                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="agents">
                        Agents
                    </Tab.Pane>
                    <Tab.Pane eventKey="geoanalysis">
                        Geoanalysis
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </>
    )
}

export default Dashboard
