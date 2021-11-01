import React, { useCallback, useEffect, useState } from 'react'
import {
    fetchAccountData,
    fetchDispositionData,
    postDispositionData,
    findCustomer,
    postManualCallInitiate,
    fetchCommonActivity
} from '../../API'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'
import getCorrentDateFormat from '../../Functions/getCorrentDateFormat'
import { fetchOnGoingCurrectCall } from '../../API'
import CurrentCallHistoryOfDispo from '../Components/CurrentCall/CurrentCallHistoryOfDispo'
import CurrentCallSubHeader from '../Components/CurrentCall/CurrentCallSubHeader'
import CurrentCallClientDetails from '../Components/CurrentCall/CurrentCallClientDetails'
import CurrentCallSendPaymentPopUp from '../Components/CurrentCall/CurrentCallSendPaymentPopUp'
import CurrentCallSendStatementPopUp from '../Components/CurrentCall/CurrentCallSendStatementPopUp'
import CurrentCallDispoForm from '../Components/CurrentCall/CurrentCallDispoForm'
import SearchCustomer from '../Components/CurrentCall/SearchCustomer'
import { MdCallEnd, MdCall } from 'react-icons/md'
import idealFormat from '../../Functions/secMin'
import { timeout } from 'd3-timer'

function CurrentCalls() {

    const date = new Date()
    const { id } = useParams()
    const [smSendPayment, setSendPayment] = useState(false)
    const [smSendStatement, setSendStatement] = useState(false)
    const [data, setdata] = useState([])
    const [clientOf, setClientOf] = useState(null)
    const [dispData, setDispData] = useState([])
    const [isSaving, setisSaving] = useState(false)
    const [failedCustomerSearch, setFailedCustomerSearch] = useState(false)

    //call
    const [counter, setCounter] = useState(8000)
    const [intervalCounter, setIntervalCounter] = useState(0)


    const [fromSearch, setFromSearch] = useState(true)
    const [fromRedirect, setFromRedirect] = useState(false)
    const [buttonText, setButtonText] = useState('Call Client')
    const [idealSince, setIdealSince] = useState(0)
    const [cooldown, setCooldown] = useState(0)


    const [searchPara, setSearchPara] = useState(
        {
            customer_name: null,
            mob: null,
            lrn: null
        }
    )
    const [newDispData, setNewDispData] = useState({
        loan_account_no: "",
        agency_name: "The Medius",
        batch_id: 0,
        product_name: "",
        due_agmt_no: "",
        customer_name: "",
        mobile_number: "",
        contact_date: date.toISOString().slice(0, 10),
        due_amount: 0,
        disposition: "",
        remark: "",
        ptp_amount: 0,
        ptp_date: null,
        next_action: "",
        payment_mode: "",
        paid_amount: 0,
        channel: "HUMAN_CALL"
    })


    const fetchdata = useCallback(async (urlid) => {
        try {
            const data = await fetchAccountData(urlid)
            if (data) {
                setdata(data)
                // setClientOf()
                if (data?.customer_mobile_number) {
                    const dDate = await fetchDispositionData(data?.customer_mobile_number)
                    if (dDate) {
                        if (dDate === {}) {
                            setDispData([])
                        } else {
                            setDispData(dDate)
                        }
                    }
                } else {
                    setDispData([])
                }
            }
        } catch (error) {

        }

    }, [])

    useEffect(() => {
        let redirectCooldown = setInterval(() => {
            fetchOnGoingCurrectCall(sessionStorage.getItem('agent_medius_x_contactNumber')).then((data) => {

                if (data.success === true) {
                    setCounter(60000)
                    window.location.hash = `#/agent/calls/current/${data.data}`
                    setFromSearch(false)
                    setFromRedirect(true)
                    if (intervalCounter === 0) {
                        setButtonText('Connected')
                        setNewDispData({
                            ...newDispData,
                            remark: '',
                            disposition: null,
                            paid_amount: 0,
                            ptp_amount: 0,
                            ptp_date: null,
                        })
                    }
                    setIntervalCounter(intervalCounter + 1)
                }
                if (data.success === false) {
                    setIntervalCounter(0)
                    setCounter(8000)
                }
            }).catch(err => {
                console.log(err)
            })
        }, counter)
        return () => {
            if (redirectCooldown) {
                clearInterval(redirectCooldown)
            }
        }
    }, [counter, intervalCounter])

    useEffect(() => {
        var downloadTimer
        if (buttonText === 'Call Client') {
            var timeStart = 0
            downloadTimer = setInterval(function () {
                timeStart++
                setIdealSince(timeStart)
            }, 1000)
        }
        return () => {
            clearInterval(downloadTimer)
        }
    }, [buttonText])

    useEffect(() => {
        var downloadTimer
        if (buttonText === 'Connected' && intervalCounter === 1) {

            var timeleft = 30
            downloadTimer = setInterval(function () {
                timeleft--
                setCooldown(timeleft)
            }, 1000)

            setTimeout(() => {
                console.log('calling client')
                postManualCallInitiate(data?.customer_mobile_number)
                setButtonText('Call Client')
            }, 30000)
        }

        return (() => clearInterval(downloadTimer))
    }, [buttonText, intervalCounter])

    useEffect(() => {
        if (id) {
            fetchdata(id)
        }
    }, [fetchdata, id])

    const addNewDisposition = async (e) => {
        e.preventDefault()
        setisSaving(true)
        let postData = {
            ...newDispData,
            loan_account_no: data.loan_account_no,
            agency_name: "The Medius",
            batch_id: data.batch,
            product_name: data.product_name,
            due_agmt_no: data.due_agmt_no,
            customer_name: data.customer_name,
            mobile_number: data.customer_mobile_number,
            due_amount: data.loan_amount
        }

        const res = await postDispositionData(postData)
        if (res) {
            setTimeout(() => {
                setisSaving(false)
                window.location.hash = `#/agent/calls/current`
            }, 500)
        }
    }

    const handleChange = (e) => {
        setNewDispData({
            ...newDispData,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        let customer_name = e.target[0].value ? e.target[0].value.trim() : null
        let mob = e.target[1].value ? e.target[1].value.trim() : null
        let lrn = e.target[2].value ? e.target[2].value.trim() : null



        if (mob) {
            if (mob.length === 10) {
                mob = 91 + mob
            }
            if (mob[0] === '0' && mob.length === 11) {
                mob = 91 + mob.slice(1)
            }
        }



        if (customer_name || mob || lrn) {
            setSearchPara({
                customer_name,
                mob,
                lrn,
            })
            const res = await findCustomer(customer_name, mob, lrn)

            if (!res) {
                setFailedCustomerSearch(true)
            } else {
                setCounter(8000)
                setIntervalCounter(0)
                window.location.hash = `#/agent/calls/current/${res.data.customer_id}`
                setFromSearch(true)
                setFromRedirect(false)
                setButtonText('Call Client')
                setNewDispData({
                    ...newDispData,
                    remark: '',
                    disposition: null,
                    paid_amount: 0,
                    ptp_amount: 0,
                    ptp_date: null,
                })
            }
        }
    }

    // useEffect(() => {
    //     console.log({ intervalCounter, buttonText })
    // }, [intervalCounter, buttonText])

    return (
        !id ?
            <SearchCustomer
                failedCustomerSearch={failedCustomerSearch}
                setFailedCustomerSearch={setFailedCustomerSearch}
                handelSubmit={handelSubmit}
                searchPara={searchPara}
            />
            :
            <>
                {
                    (typeof data === "object" || typeof data === 'function') ?
                        <>
                            <div className="data-status mb-5">
                                <CurrentCallSubHeader />
                                <div className="d-flex flex-row-reverse mt-3">

                                    {fromSearch &&
                                        <Button
                                            onClick={() => {
                                                postManualCallInitiate(data?.customer_mobile_number)
                                                setButtonText('Calling Client')
                                                setTimeout(() => {
                                                    setButtonText('Call Client')
                                                }, 2000)
                                            }}

                                        >
                                            {buttonText}
                                        </Button>
                                    }

                                    {
                                        (fromRedirect && buttonText === 'Call Client') &&
                                        <Button
                                            className="ms-3 bg-danger"
                                            disabled
                                        >
                                            Not Working Since {idealFormat(idealSince)}
                                        </Button>
                                    }

                                    {
                                        fromRedirect &&
                                        <Button
                                            disabled={buttonText === 'Connected'}

                                            onClick={() => {
                                                postManualCallInitiate(data?.customer_mobile_number)
                                                setButtonText('Calling Client')
                                                setTimeout(() => {
                                                    setButtonText('Call Client')
                                                }, 2000)
                                            }}
                                        >
                                            {buttonText}
                                            {(buttonText === 'Connected' && intervalCounter === 1) && `, Call Available in ${cooldown} sec`}
                                        </Button>
                                    }






                                </div>

                            </div>



                            <div className="ag-data-detail d-flex">

                                <CurrentCallClientDetails data={data} />

                                <div className="ag-data ag-data-history">
                                    <h3 className="mb-4">History of  Dispositions {dispData && (dispData.length > 0 ? dispData.length : 0)}</h3>
                                    <CurrentCallHistoryOfDispo dispData={dispData} />
                                </div>

                                <div className="ag-data ag-data-disposition">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h3 className="mb-4">Add New Disposition</h3>
                                        </div>
                                        <div className="col-lg-5 text-end">
                                            <Dropdown className="bulk-action">
                                                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style-two">
                                                    Send Payment Link
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="select-style-dropdown-two">
                                                    <Dropdown.Item onClick={() => setSendPayment(true)}>Send Payment Link</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setSendStatement(true)}>Send Statement</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <CurrentCallDispoForm
                                        setNewDispData={setNewDispData}
                                        newDispData={newDispData}
                                        addNewDisposition={addNewDisposition}
                                        handleChange={handleChange}
                                        isSaving={isSaving}
                                    />

                                </div>
                            </div>

                            {/* Send Payment Link Popup */}
                            <CurrentCallSendPaymentPopUp
                                smSendPayment={smSendPayment}
                                setSendPayment={setSendPayment}
                            />

                            {/* Send Statement Popup */}
                            <CurrentCallSendStatementPopUp
                                smSendStatement={smSendStatement}
                                setSendStatement={setSendStatement}
                            />
                        </>
                        :
                        <>
                            <h1 className='text-center'>No Data Found</h1>
                        </>
                }
                <Link
                    to='/agent/calls/current/'
                    className="position-fixed bottom-0 end-0 zindex-tooltip border border-white p-2 rounded-top bg-light text-dark"
                >
                    Back To Search Customer Page
                </Link>
            </>
    )
}

export default CurrentCalls

/*
                                <button onClick={() => setIsCallButtonVisible(true)}>start</button>
                                <button onClick={() => setIsCallButtonVisible(false)}>stop</button>

                                <button onClick={() => setIsCallAvailable(true)}>Call start</button>
                                <button onClick={() => setIsCallAvailable(false)}>Call stop</button>
                                */
