import React, { useEffect, useCallback, useState } from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'
import Search from '../../Static/RawImages/search.png'
import Bell from '../../Static/RawImages/bell.png'
import User from '../../Static/RawImages/user.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useGlobalContext } from '../../context'
import { fetchCommonActivity } from '../../API'


function AgentHeader(props) {
    const { TotalResultFetched } = useGlobalContext()
    const [notificationData, setNotificationData] = useState([])
    const [AgentName, setAgentName] = useState(sessionStorage.getItem('agent_medius_x_clientFullname'))

    let urlPointer


    useRouteMatch('/agent/calls/current') && (urlPointer = 'Current Calls')
    useRouteMatch('/agent/calls/logs') && (urlPointer = 'Call Logs')
    useRouteMatch('/agent/history') && (urlPointer = 'History')
    useRouteMatch('/agent/myreport') && (urlPointer = 'My Report')

    useEffect(() => {
    }, [notificationData])

    const getAgentName = useCallback(
        async () => {
            const userId = sessionStorage.getItem("agent_medius_x_clientId")
            const dat = await fetchCommonActivity(userId)
            setNotificationData(dat)
            console.log(dat)
        },
        [],
    )

    useEffect(() => {
        getAgentName()
    }, [getAgentName])

    return (
        <header className="d-flex align-center header justify-between">
            <div className="d-flex align-center header-left mb-lg-0 mb-2">
                {urlPointer &&
                    <>
                        <h1> {urlPointer} </h1>
                        {/* {(location === 'cBatch' || location === 'cAccounts') && //td do agent data fetch count
                            <>
                                {
                                    TotalResultFetched ?

                                        <small>Total Result : {TotalResultFetched}</small>
                                        :
                                        <small>Total Result : 0</small>
                                }
                            </>
                        } */}
                    </>
                }
            </div>

            <div className="d-flex align-center header-right">

                <span className="right-hmenu">
                    <img src={Search} alt="Search" />
                </span>
                <Dropdown className="mx-4">
                    <Dropdown.Toggle id="dropdown-basic">
                        <img src={Bell} alt="Notification" />
                    </Dropdown.Toggle>
                    {
                        notificationData && notificationData.length > 0 ? <span style={{
                            position: "relative",
                            top: "-5px",
                            left: "-15px",
                            background: "#F44336",
                            color: "#FFF",
                            borderRadius: "50%",
                            fontSize: "8px",
                            padding: "1px 4px"
                        }}>{notificationData.length}</span> : ""
                    }
                    <Dropdown.Menu>
                        {
                            (notificationData && notificationData.length > 0) ? notificationData?.map((val, i) => {
                                return (
                                    <Dropdown.Item>
                                        <p className="mb-0 " style={{ fontWeight: "700" }}>Name: <span style={{ fontWeight: "500" }}>{val.customer_name ? val.customer_name : ""}</span>, Number: <span style={{ fontWeight: "500" }}>{val.to_number ? val.to_number : ""}</span></p>
                                    </Dropdown.Item>
                                )
                            }) :
                                <Dropdown.Item>
                                    <p className="mb-0 " style={{ fontWeight: "700" }}>Status: <span style={{ fontWeight: "500" }}>No incoming calls</span></p>
                                </Dropdown.Item>


                        }

                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <span style={{
                            color: 'black',
                            fontSize: "20px",
                            fontWeight: "600",
                            marginRight: "50px"
                        }}>
                            {AgentName ? AgentName : ""}
                            <RiArrowDropDownLine ></RiArrowDropDownLine>
                        </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            sessionStorage.clear()
                            window.location.hash = "#/agent/login"
                        }}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </header>
    )
}

export default AgentHeader
