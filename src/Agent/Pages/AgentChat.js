import React, { useCallback, useEffect, useState, useRef } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {
    getAgentChat,
    fetchAccountData,
    fetchDispositionData,
    postDispositionData,
    fetchWhatsappData,
    sendWhatsappMessage,

} from '../../API'
import ChatSendStatementPopUp from '../Components/Chat/ChatSendStatementPopUp'
import ChatSendPaymentPopUp from '../Components/Chat/ChatSendPaymentPopUp'
import DispoHistory from '../Components/Chat/DispoHistory'
import AgentContact from '../Components/Chat/AgentContact'
import Msgbg from '../../Static/RawImages/msg-bg.jpg'
import ArrowRight from '../../Static/RawImages/arrow-right.png'
import { useParams } from 'react-router-dom'
import getDifferenceInDays from '../../Functions/getDifferenceInDays'
import getCorrentDateFormat from '../../Functions/getCorrentDateFormat'
import amountCommaSeparator from '../../Functions/amountCommaSeparator'
import OwnerReply from '../Components/Chat/OwnerReply'
import UserReply from '../Components/Chat/UserReply'
import ContentLoader from '../../Components/ContentLoader'
import SmallLoader from '../../Components/SmallLoader'
import DispoForm from '../Components/Chat/DispoForm'
import UserInfo from '../Components/Chat/UserInfo'

import tempData from '../../JSON/agentChat.json'

function AgentChat() {
    const date = new Date()
    const agentReply = useRef(null)
    const [smSendPayment, setSendPayment] = useState(false)
    const [smSendStatement, setSendStatement] = useState(false)
    const [searchTag,setSearchTag] = useState(null);
    const [agentList, setAgentList] = useState(null)

    const [accountData, setAccountData] = useState([])
    const [dispoHistory, setDispoHistory] = useState([])
    const [whatsappChat, setWhatsappChat] = useState(null)

    const [accountName, setAccountName] = useState(null)
    const [accountNumber, setAccountNumber] = useState(null)

    const [isSaving, setisSaving] = useState(false)

    useEffect(()=>{
        console.log("srch",searchTag)
        console.log("account",accountName,accountNumber,accountData)
    },[searchTag])

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
        next_action: "",
        payment_mode: "",
        paid_amount: "0",
        channel: "WHATSAPP"
    })
    var sectionMsgbg = {
        backgroundImage: `url(${Msgbg})`
    }

    const fetchData = useCallback(async () => {
        const agent = await getAgentChat(sessionStorage.getItem('agent_medius_x_contactNumber'))
        if (agent.data.length > 0) {
            let data = agent.data
            setAgentList(data)
            let { number, name, customer_id } = data[0]
            getWhatsappData(number, name)
            getAccountData(customer_id)
            getDispoHistory(number)
        }
        if (agent.data.length === 0) {
            let data = agent.data
            setAgentList(data)
        }
    }, [])

    const getWhatsappData = async (number, name) => {
        setWhatsappChat(null)
        setAccountName(name)
        setAccountNumber(number)
        const whatsapp = await fetchWhatsappData(number)
        setWhatsappChat(whatsapp.data)
    }

    const getAccountData = async (id) => {
        const account = await fetchAccountData(id)
        setAccountData(account)
    }

    const getDispoHistory = async (number) => {
        const dispo = await fetchDispositionData(number)
        setDispoHistory(dispo)
    }



    useEffect(() => {
        fetchData()
    }, [fetchData])

    const addNewDisposition = async (e) => {
        e.preventDefault()
        setisSaving(true)
        let postData = {
            ...newDispData,
            loan_account_no: accountData.loan_account_no,
            agency_name: "The Medius",
            batch_id: accountData.batch,
            product_name: accountData.product_name,
            due_agmt_no: accountData.due_agmt_no,
            customer_name: accountData.customer_name,
            mobile_number: accountData.customer_mobile_number,
            due_amount: accountData.loan_amount
        }
        console.log({ postData })
        const res = await postDispositionData(postData)
        if (res) {
            setTimeout(() => {
                setisSaving(false)
                window.location.reload()
            }, 2000)
        }
    }

    const handleChange = (e) => {
        setNewDispData({
            ...newDispData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>



            {!agentList ?
                <ContentLoader />
                :
                <>
                    {agentList.length > 0 ?
                        <div className="agent-chat">
                            <div className="d-flex">
                                <div className="agent-list-col">

                                    <div className="agent-list">
                                        <form>
                                            <div className="mb-2">
                                                <div className="agent-search">
                                                    <input type="text" className="form-control" id="search" placeholder="Search" onChange={(e)=>setSearchTag(e.target.value)} />
                                                    <div className="search-icon">
                                                        <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                                            <g fill="#1A1A1A" fill-rule="evenodd" opacity=".3">
                                                                <path d="M10.156 16.102a5.952 5.952 0 0 1-5.954-5.95A5.952 5.952 0 0 1 10.156 4.2a5.952 5.952 0 0 1 5.953 5.95 5.952 5.952 0 0 1-5.953 5.951zm0-1.4a4.552 4.552 0 1 0-4.553-4.55 4.552 4.552 0 0 0 4.553 4.55z" />
                                                                <path d="M18.005 17.007a.7.7 0 1 1-.99.99l-3.642-3.64a.7.7 0 1 1 .99-.99l3.642 3.64z" />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                                {/* agent list */}
                                                <AgentContact agentList={agentList} getWhatsappData={getWhatsappData} getAccountData={getAccountData} getDispoHistory={getDispoHistory} accountNumber={accountNumber} />
                                            </div>
                                        </form>
                                    </div>

                                </div>
                                <div className="agent-chat-main-col">
                                    <div className="agent-chat-main">
                                        <div className="d-flex justify-between text-black pe-4 ps-4">
                                            <div>
                                                <p className="mb-0 tx-16"><strong>{accountName ? accountName : "--"}</strong></p>
                                            </div>
                                            <div className="chat-popup">
                                                <p className="text-muted"> <Link onClick={() => setSendPayment(true)}>Send Payment Link</Link> | <Link onClick={() => setSendStatement(true)}>Send Statement</Link></p>
                                            </div>
                                        </div>
                                        <div className="agent-chat-detail" style={sectionMsgbg}>

                                            {!whatsappChat ?
                                                <div className=" text-center">
                                                    <SmallLoader />
                                                </div>

                                                :
                                                <>

                                                    <div className="time-history text-center">
                                                        <span>12 November 20</span>
                                                    </div>
                                                    {
                                                        whatsappChat.length > 0 ?
                                                            <>
                                                                {
                                                                    whatsappChat.map((val, i) => {

                                                                        let print
                                                                        if (val.owner === "Wati") {
                                                                            print = <OwnerReply data={val} />
                                                                        } else {
                                                                            print = <UserReply data={val} />

                                                                        }
                                                                        return (
                                                                            print
                                                                        )
                                                                    }
                                                                    )
                                                                }
                                                            </>
                                                            :
                                                            <div className=" text-center">
                                                                <span>No Data Found</span>
                                                            </div>
                                                    }
                                                </>
                                            }

                                        </div>
                                        <div className="agent-chat-type">
                                            <div className="agent-chat-input">
                                                <div className="agent-chat-emogi">
                                                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.488 0C19.4 0 25 5.6 25 12.5S19.4 25 12.488 25C5.588 25 0 19.4 0 12.5S5.588 0 12.488 0zm6.4 15H6.111c1 2.55 3.476 4.375 6.388 4.375S17.887 17.55 18.887 15zm-2.013-7.5A1.872 1.872 0 0 0 15 9.375c0 1.037.838 1.875 1.875 1.875a1.872 1.872 0 0 0 1.875-1.875A1.872 1.872 0 0 0 16.875 7.5zm-8.75 0A1.872 1.872 0 0 0 6.25 9.375c0 1.037.838 1.875 1.875 1.875A1.872 1.872 0 0 0 10 9.375 1.872 1.872 0 0 0 8.125 7.5z" fill="#256F7F" fill-rule="nonzero" />
                                                    </svg>
                                                </div>
                                                <input type="text" className="form-control" id="chat-input" ref={agentReply} placeholder="Type message here" />
                                                <div className="agent-chat-send"
                                                    onClick={() => {
                                                        sendWhatsappMessage(accountNumber, agentReply.current.value)
                                                        agentReply.current.value = ""
                                                    }}
                                                >
                                                    <svg width="21" height="18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M.01 18 21 9 .01 0 0 7l15 2-15 2z" fill="#009EC0" fill-rule="nonzero" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="agent-chat-info-col">
                                    <div className="agent-chat-info">
                                        <UserInfo accountData={accountData} />
                                        <div className="agent-chat-tab text-center px-3">
                                            <div className="agent-chat-tab-wrap">
                                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                            Add New
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                            History
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab-content" id="pills-tabContent">
                                                <DispoForm handleChange={handleChange} addNewDisposition={addNewDisposition} />
                                                <DispoHistory dispoHistory={dispoHistory} />

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <h2 className="text-center">No Previous Chat Found</h2>
                        </div>
                    }
                </>
            }


            {/* Send Payment Link Popup */}
            <ChatSendPaymentPopUp
                smSendPayment={smSendPayment}
                setSendPayment={setSendPayment}
            />
            {/* Send Statement Popup */}
            <ChatSendStatementPopUp
                smSendStatement={smSendStatement}
                setSendStatement={setSendStatement}
            />
        </>
    )
}

export default AgentChat
