import React, { useState, useCallback, useEffect } from 'react'
import data from '../../JSON/cAccounts'
import { Link, useParams } from 'react-router-dom'
//api functions
import {
    fetchAccountsPageData,
    fetchSmsData,
    fetchWhatsappData,
    fetchDispositionData,
    fetchCallData,
    downloadAccountCallingReport
} from '../../API'
//functions
import getCorrentDateFormat from '../../Functions/getCorrentDateFormat'
import getDifferenceInDays from '../../Functions/getDifferenceInDays'
import getFullForm from '../../Functions/getFullForm'
import _ from "lodash"
//header
import CollectionAccountsHeader from '../../Components/Headers/CollectionAccountsHeader'
//history components
import AccountsCall from '../../Components/AccountsHistory/AccountsCall'
import AccountsSms from '../../Components/AccountsHistory/AccountsSms'
import AccountsWhatsapp from '../../Components/AccountsHistory/AccountsWhatsapp'
import AccountsDispositions from '../../Components/AccountsHistory/AccountsDispositions'
//ui
import Paging from '../../Components/Paging'
import { IoCloseCircle } from 'react-icons/io5'
import Arrow from '../../Static/RawImages/arrow.png'
import Dropdown from 'react-bootstrap/Dropdown'
import ContentLoader from '../../Components/ContentLoader'
import { useGlobalContext } from '../../context'


function CollectionAccounts() {
    const { id } = useParams()


    const { updateFetchedCount } = useGlobalContext()
    const [AccountsData, setAccountsData] = useState(null)
    const [pageTotal, setPageTotal] = useState('NaN')
    const [currentPage, setCurrentPage] = useState(1)

    //hsitory
    const [AccountSmsData, setAccountSmsData] = useState(null)
    const [AccountWhatsappData, setAccountWhatsappData] = useState(null)
    const [AccountMailData, setAccountMailData] = useState(null)
    const [AccountCallData, setAccountCallData] = useState(null)
    const [AccountDispositionsData, setAccountDispositionsData] = useState(null)


    //sider toggles
    const [IsAccountCall, setIsAccountCall] = useState(false)
    const [IsAccountSms, setIsAccountSms] = useState(false)
    const [IsAccountMail, setIsAccountMail] = useState(false)
    const [IsAccountWhatsapp, setIsAccountWhatsapp] = useState(false)
    const [IsAccountDispositions, setIsAccountDispositions] = useState(false)

    //extras
    const [unableToFetch, setUnableToFetch] = useState(false)
    const [SearchParameter, setSearchParameter] = useState({})
    const [StorePrevFilter, setStorePrevFilter] = useState(null)
    const [ArrayIds, setArrayIds] = useState(null)
    const [downloadReportUrl, setDownloadReportUrl] = useState(null)



    const fetchCollectionAccountsData = useCallback(async () => {
        try {
            setStorePrevFilter(SearchParameter)
            let myParams
            if (SearchParameter.batch_id) {
                myParams = { ...SearchParameter, page: currentPage }
            } else {
                id ? myParams = { ...SearchParameter, batch_id: id, page: currentPage } : myParams = { ...SearchParameter, page: currentPage }
            }

            const res = await fetchAccountsPageData(myParams)
            if (res) {
                const resData = res.data
                setArrayIds(resData.map(item => { return (item.customer_id) }))
                setAccountsData(resData)
                handleInitPagination(res)
                updateFetchedCount(res.total)
            }
        } catch (error) {
            setUnableToFetch(true)
        }
    }, [SearchParameter, currentPage])

    const handleInitPagination = (res) => {
        console.log({ res: res })
        let total = res.total
        let totalPage = Math.ceil(total / 20)
        setPageTotal(totalPage)
    }

    const handlePagination = (type, target) => {
        if (type === 'directValue') (
            setCurrentPage(parseInt(target))
        )
    }

    const downloadCallingReport = async (batch_id, customer_mobile_number) => {
        const res = await downloadAccountCallingReport(batch_id, customer_mobile_number)
        if (res) {
            let ele = document.getElementById(`${customer_mobile_number}_downloadCallingReport`)
            setDownloadReportUrl(res.file_url)
            ele.click()
        }
    }






    const fetchAccountHistoryData = async (which, mobile_number) => {
        try {

            if (which === 'call') {
                setIsAccountCall(true)
                const res = await fetchCallData(mobile_number)

                // res.push(
                //     { RecordingUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
                // )
                if (res) {
                    console.log('calls', res)
                    setAccountCallData(res)
                }
            }

            if (which === 'sms') {
                setIsAccountSms(true)
                const res = await fetchSmsData(mobile_number)
                if (res) {
                    const resData = res.data.data
                    setAccountSmsData(resData)
                }
            }

            if (which === 'whatsapp') {
                setIsAccountWhatsapp(true)
                const res = await fetchWhatsappData(mobile_number)
                if (res) {
                    const resData = res.data
                    setAccountWhatsappData(resData)
                }
            }

            if (which === 'mail') {
                setIsAccountMail(true)
                setAccountMailData('xxx')
            }

            if (which === 'dispositions') {
                setIsAccountDispositions(true)
                const res = await fetchDispositionData(mobile_number)
                if (res) {
                    setAccountDispositionsData(res)
                }

            }

        } catch (error) {
            if (which === 'call') {
                setAccountSmsData([])
            }

            if (which === 'sms') {
                setAccountSmsData([])
            }

            if (which === 'whatsapp') {
                setAccountWhatsappData([])
            }

            if (which === 'mail') {
                setAccountMailData([])
            }

            if (which === 'dispositions') {
                setAccountDispositionsData([])
            }
            console.log({ error })
        }
    }

    useEffect(() => {
        fetchCollectionAccountsData()
    }, [fetchCollectionAccountsData])




    return (

        <div>
            {AccountsData ?
                <>
                    <CollectionAccountsHeader setSearchParameter={setSearchParameter} setCurrentPage={setCurrentPage} StorePrevFilter={StorePrevFilter} ArrayIds={ArrayIds} />
                    {AccountsData.length > 0
                        ?
                        <>
                            {AccountsData && AccountsData.map(item => {
                                const daysBetween = getDifferenceInDays(item.due_date)
                                const status = item.risk_status ? item.risk_status : ""
                                return (
                                    <>
                                        <div className="row d-flex justify-between account-listing">
                                            <div className="col-md-4">
                                                <div className="d-flex align-start">
                                                    <input
                                                        type="checkbox"
                                                        id={`collection_accounts_checkbox_${item.customer_id}`}
                                                        className="me-3 multi-checkbox"
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                    <div>
                                                        <p className="text-primary mb-2">
                                                            <Link to={`/collection/account/${item.customer_id}`} ><strong>{item.customer_name} ({item.loan_account_no})</strong></Link></p>
                                                        <p>Batch No. - <span className="text-black"><strong>{item.batch_id}</strong></span></p>
                                                        <hr />
                                                        <p>Product - <strong>{item.product_name}</strong><br />
                                                            <strong>Rs. {item.loan_amount}</strong><br />
                                                            <strong>{daysBetween}+ Days</strong></p>
                                                        <hr />
                                                        <p>Risk - <b style={status.toLowerCase() === 'high' ? { color: '#ff0000' } : status.toLowerCase() === 'medium' ? { color: '#FFC0CB' } : { color: '#2d9308' }}>{item.risk_status}</b></p>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="col-md-4">
                                                <table className="table table-bordered w-auto">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th colspan="2">
                                                                <small>Last Disposition</small><br />
                                                                <span className="text-black">{getFullForm(item.last_disposition)}</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-50">Assigned Date</td>
                                                            <td className="w-50">{item.assigned_date && getCorrentDateFormat(item.assigned_date)}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1st Called Date</td>
                                                            <td>{item.first_called_date && getCorrentDateFormat(item.first_called_date)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Last Disposition</td>
                                                            <td>{item.last_disposition_date && getCorrentDateFormat(item.last_disposition_date)}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="action-box">
                                                    <label className="col-form-label mb-2">Action</label>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="primary" id="dropdown-action2" className="w-100 text-start select-style">
                                                            Select <img src={Arrow} alt="Sort" />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="select-style-dropdown">
                                                            {/* <Dropdown.Item href="">Download Uploaded Data</Dropdown.Item> */}
                                                            <Dropdown.Item

                                                                onClick={() => downloadCallingReport(item.batch_id, item.customer_mobile_number)}
                                                            >Download Calling Report</Dropdown.Item>
                                                            <a className="d-none"
                                                                rel='noreferrer noopener'
                                                                id={`${item.customer_mobile_number}_downloadCallingReport`}
                                                                target="_blank"
                                                                href={downloadReportUrl}></a>

                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <hr className="mt-4 mb-4" />
                                                    <p>View History</p>

                                                    <ul className="d-flex history-box ">
                                                        <li>
                                                            <p className="al-popup-button cursor-pointer" id="call"
                                                                onClick={() => {
                                                                    fetchAccountHistoryData('call', item.customer_mobile_number)
                                                                }}
                                                            >
                                                                <div className="d-flex align-items-center  justify-content-center">
                                                                    <svg style={{ fill: "#0A7AFF" }} width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M18.01 14.549a2.98 2.98 0 0 0-1.844.216l-2.068.893a20.342 20.342 0 0 1-3.668-2.91 19.872 19.872 0 0 1-2.88-3.72l.677-1.862c.24-.565.302-1.189.178-1.79L7.027 0 0 1.013l.029.427a23.18 23.18 0 0 0 6.657 14.88 22.853 22.853 0 0 0 15.15 6.72h.455l.749-7.315-5.03-1.176zm3.422 7.488a21.864 21.864 0 0 1-14.064-6.36A22.224 22.224 0 0 1 1.013 1.834l5.28-.764 1.142 4.517c.082.416.035.846-.134 1.234L6.48 9.12l.12.197a21.12 21.12 0 0 0 3.149 4.123 21.706 21.706 0 0 0 4.046 3.178l.216.139 2.554-1.1a1.992 1.992 0 0 1 1.243-.153l4.2.96-.576 5.573z" fillRule="nonzero" />
                                                                    </svg>
                                                                </div>
                                                                Call
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className="al-popup-button cursor-pointer"
                                                                onClick={() => {
                                                                    fetchAccountHistoryData('sms', item.customer_mobile_number)
                                                                }
                                                                }
                                                            >
                                                                <div className="d-flex align-items-center  justify-content-center">
                                                                    <svg style={{ fill: "#0A7AFF" }} width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.52 0A11.52 11.52 0 0 0 1.44 17.074L0 23.04l5.822-1.507A11.52 11.52 0 1 0 11.52 0zm0 22.08a10.56 10.56 0 0 1-5.38-1.474l-.174-.105-4.608 1.18 1.1-4.742-.101-.173a10.56 10.56 0 1 1 9.163 5.314z" fillRule="nonzero" />
                                                                    </svg>
                                                                </div>
                                                                SMS
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className="al-popup-button cursor-pointer"
                                                            // onClick={() => {
                                                            //     fetchAccountHistoryData('mail', item.customer_mobile_number)
                                                            // }}
                                                            >
                                                                <div className="d-flex align-items-center  justify-content-center">
                                                                    <svg style={{ fill: "#999999" }} width="24" height="18" xmlns="http://www.w3.org/2000/svg">
                                                                        <g fillRule="nonzero">
                                                                            <path d="M0 0v12.96a4.32 4.32 0 0 0 4.32 4.32h14.4a4.32 4.32 0 0 0 4.32-4.32V0H0zm22.08 12.96a3.36 3.36 0 0 1-3.36 3.36H4.32a3.36 3.36 0 0 1-3.36-3.36v-12h21.12v12z" />
                                                                            <path d="m20.39 3.682-.643-.71-8.227 7.42-8.18-7.411-.642.71 8.822 7.997z" />
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                Email
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className="al-popup-button cursor-pointer" id="whatsapp"
                                                                onClick={() => {
                                                                    fetchAccountHistoryData('whatsapp', item.customer_mobile_number)
                                                                }}
                                                            >
                                                                <div className="d-flex align-items-center  justify-content-center">
                                                                    <svg style={{ fill: "#0A7AFF" }} width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                                                        <g fillRule="nonzero">
                                                                            <path d="M11.52 0A11.52 11.52 0 0 0 1.44 17.074L0 23.04l5.822-1.507A11.52 11.52 0 1 0 11.52 0zm0 22.08a10.56 10.56 0 0 1-5.38-1.474l-.174-.105-4.608 1.18 1.1-4.742-.101-.173a10.56 10.56 0 1 1 9.163 5.314z" />
                                                                            <path d="M7.632 13.239a14.745 14.745 0 0 0 4.905 3.842c.717.34 1.676.743 2.744.812.067.003.13.006.196.006.717 0 1.293-.248 1.763-.758.003-.002.008-.008.011-.014.167-.202.357-.383.556-.576.136-.13.274-.265.406-.403.614-.64.614-1.452-.005-2.07l-1.731-1.732c-.294-.305-.645-.466-1.014-.466s-.723.161-1.025.463l-1.031 1.031a5.48 5.48 0 0 0-.286-.15 3.561 3.561 0 0 1-.316-.172c-.94-.596-1.792-1.374-2.607-2.373-.412-.522-.688-.96-.881-1.406.27-.245.524-.5.769-.751.086-.09.176-.179.265-.268.31-.311.478-.671.478-1.037 0-.366-.164-.726-.478-1.037l-.858-.858c-.101-.1-.196-.199-.294-.3-.19-.195-.389-.397-.585-.578C8.318 4.153 7.97 4 7.6 4c-.365 0-.717.153-1.025.446L5.498 5.524a2.213 2.213 0 0 0-.66 1.416c-.054.689.073 1.42.4 2.304.505 1.368 1.265 2.639 2.394 3.995zm-2.09-6.238c.034-.383.18-.703.457-.98l1.072-1.07c.167-.162.35-.245.53-.245.175 0 .354.083.518.25.193.179.374.366.57.565l.3.305.858.858c.178.179.27.36.27.539 0 .178-.092.36-.27.538l-.268.271c-.268.27-.518.527-.795.772l-.014.014c-.24.24-.202.467-.144.64.003.008.006.014.008.023.222.532.53 1.04 1.011 1.644.864 1.066 1.774 1.892 2.777 2.529.123.08.256.144.38.207.115.058.222.112.317.173l.031.017a.602.602 0 0 0 .28.072.61.61 0 0 0 .429-.196l1.077-1.077c.167-.167.348-.256.527-.256.219 0 .397.135.51.256l1.736 1.734c.346.346.343.72-.008 1.086-.121.13-.248.253-.383.383-.202.196-.412.397-.602.625-.332.357-.726.524-1.236.524-.049 0-.1-.003-.15-.006-.944-.06-1.823-.429-2.482-.743a14.008 14.008 0 0 1-4.669-3.657c-1.074-1.294-1.797-2.497-2.275-3.788-.296-.792-.409-1.428-.363-2.007z" />
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                WhatsApp
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className="al-popup-button cursor-pointer" id="dispositions"
                                                                onClick={() => {
                                                                    fetchAccountHistoryData('dispositions', item.customer_mobile_number)
                                                                }}
                                                            >
                                                                <div className="d-flex align-items-center  justify-content-center">
                                                                    <svg style={{ fill: "#0A7AFF" }} width="19" height="25" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="m16.852 19.622-3.525-1.961a1.079 1.079 0 0 1-.594-.97l-.002-.982a9.482 9.482 0 0 0 1.63-3.33c.007-.03.01-.06.01-.091v-.82H15.6a1.23 1.23 0 0 0 1.229-1.228V7.782a1.227 1.227 0 0 0-.82-1.153v-.075a6.554 6.554 0 0 0-13.107 0v.075c-.49.172-.817.634-.819 1.153v2.458c.002.519.33.98.82 1.153v.895a1.64 1.64 0 0 0 1.638 1.638h.563c.299.628.659 1.224 1.075 1.78v.944c.002.397-.215.763-.565.951l-3.652 1.995a3.686 3.686 0 0 0-1.927 3.243v1.327a.41.41 0 0 0 .41.41h18.022a.41.41 0 0 0 .41-.41v-1.245a3.673 3.673 0 0 0-2.025-3.299zm-.842-11.84v2.458a.41.41 0 0 1-.41.41h-1.229V7.373H15.6a.41.41 0 0 1 .41.41zM3.312 10.65a.41.41 0 0 1-.41-.41V7.782a.41.41 0 0 1 .41-.41h1.229v3.278H3.312zm1.229 2.457a.82.82 0 0 1-.82-.819v-.82h.82v.82c0 .03.003.062.01.092.059.246.131.489.217.727H4.54zm-.002-6.553h-.817A5.74 5.74 0 0 1 9.456.819a5.74 5.74 0 0 1 5.734 5.735h-.817a3.664 3.664 0 0 0-.858-2.65c-.841-.96-2.207-1.446-4.059-1.446-1.852 0-3.218.486-4.059 1.446a3.664 3.664 0 0 0-.858 2.65zM.854 23.757v-.918a2.868 2.868 0 0 1 1.5-2.524l3.65-1.993c.615-.332.996-.974.994-1.672v-.944a.808.808 0 0 0-.166-.494 9.738 9.738 0 0 1-.813-1.286h1.874c.173.49.634.818 1.153.82h1.23a1.229 1.229 0 0 0 0-2.458h-1.23c-.519.002-.98.33-1.153.82H5.641a6.369 6.369 0 0 1-.281-.867V6.554a2.842 2.842 0 0 1 .653-2.11c.679-.775 1.837-1.167 3.443-1.167 1.6 0 2.756.39 3.436 1.158a2.88 2.88 0 0 1 .66 2.119v5.687a8.666 8.666 0 0 1-1.472 2.97.808.808 0 0 0-.166.495v.985a1.886 1.886 0 0 0 1.03 1.693l3.525 1.962a2.866 2.866 0 0 1 1.589 2.575v.836H.854zm7.783-10.24a.41.41 0 0 1 .41-.41h1.228a.41.41 0 0 1 0 .82H9.046a.41.41 0 0 1-.41-.41z" fillRule="nonzero" />
                                                                    </svg>
                                                                </div>
                                                                Dispositions
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <hr className="mt-4 mb-4" />
                                        </div>
                                    </ >
                                )
                            }
                            )
                            }

                            <Paging currentPage={currentPage} pageTotal={pageTotal} handlePagination={handlePagination} />
                        </>
                        :
                        <h1 className="text-center">No Data Found</h1>
                    }
                </>
                :
                unableToFetch ?
                    <h1 className="text-center">Unable To Fetch Data</h1>
                    :
                    <ContentLoader />
            }




            <div className="al-popup"
                //call
                style={
                    IsAccountCall
                        ?
                        {
                            transform: 'translateX(0)', boxShadow: '0 2px 11px 7px rgba(0, 0, 0, 0.21)'
                        }
                        :
                        {
                            transform: 'translateX(100%)', boxShadow: 'none'
                        }}>
                <div className="al-close"
                    onClick={() => {
                        setIsAccountCall(false)
                        setAccountCallData(null)
                    }}
                >
                    <IoCloseCircle fill="#999999" size={50} />
                </div>
                <div className="al-head">
                    <h2>Call Records ({AccountCallData ? AccountCallData.length : ""})</h2>
                </div>
                <AccountsCall data={AccountCallData} />

            </div>


            <div className="al-popup"
                //sms

                style={
                    IsAccountSms ?
                        {
                            transform: 'translateX(0)', boxShadow: '0 2px 11px 7px rgba(0, 0, 0, 0.21)'
                        }
                        :
                        {
                            transform: 'translateX(100%)', boxShadow: 'none'
                        }}>

                <div
                    className="al-close"
                    onClick={() => {
                        setIsAccountSms(false)
                        setAccountSmsData(null)
                    }}
                >
                    <IoCloseCircle fill="#999999" size={50} />
                </div>
                <div className="al-head">
                    <h2>Sms Records ({AccountSmsData ? AccountSmsData.length : 0})</h2>
                </div>
                <AccountsSms AccountSmsData={AccountSmsData} />
            </div>


            <div className="al-popup"
                //mail
                style={
                    IsAccountMail
                        ?
                        {
                            transform: 'translateX(0)', boxShadow: '0 2px 11px 7px rgba(0, 0, 0, 0.21)'
                        }
                        :
                        {
                            transform: 'translateX(100%)', boxShadow: 'none'
                        }}>
                <div className="al-close"
                    onClick={() => {
                        setIsAccountMail(false)
                        setAccountMailData(null)
                    }}
                >
                    <IoCloseCircle fill="#999999" size={50} />
                </div>
                <div className="al-head">
                    <h2>Mail Records (2)</h2>
                </div>
                {/* <AccountsSms /> */}
            </div>


            <div className="al-popup"
                //Whatsapp
                style={
                    IsAccountWhatsapp
                        ? {
                            transform: 'translateX(0)', boxShadow: '0 2px 11px 7px rgba(0, 0, 0, 0.21)'
                        }
                        :
                        {
                            transform: 'translateX(100%)', boxShadow: 'none'
                        }}>
                <div className="al-close"
                    onClick={() => {
                        setIsAccountWhatsapp(false)
                        setAccountWhatsappData(null)
                    }}>
                    <IoCloseCircle fill="#999999" size={50} />
                </div>
                <div className="al-head">
                    <h2>WhatsApp ({AccountWhatsappData ? AccountWhatsappData.length : 0})</h2>
                </div>
                <AccountsWhatsapp AccountWhatsappData={AccountWhatsappData} />
            </div>


            <div className="al-popup"
                //disposition
                style={
                    IsAccountDispositions
                        ? {
                            transform: 'translateX(0)', boxShadow: '0 2px 11px 7px rgba(0, 0, 0, 0.21)'
                        }
                        :
                        { transform: 'translateX(100%)', boxShadow: 'none' }}>
                <div className="al-close" onClick={() => {
                    setIsAccountDispositions(false)
                    setAccountDispositionsData(null)
                }}>
                    <IoCloseCircle fill="#999999" size={50} />
                </div>
                <div className="al-head">
                    <h2>Dispositions ({AccountDispositionsData ? AccountDispositionsData.length : 0})</h2>
                </div>
                <AccountsDispositions AccountDispositionsData={AccountDispositionsData} />
            </div>


        </div >


    )
}

export default CollectionAccounts
