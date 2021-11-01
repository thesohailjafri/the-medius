import React, { useEffect } from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'
import Search from '../Static/RawImages/search.png'
import Bell from '../Static/RawImages/bell.png'
import User from '../Static/RawImages/user.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { useGlobalContext } from '../context'

function Header(props) {
    const { TotalResultFetched, setIsAgent } = useGlobalContext()

    let urlPointer
    let location//td remove this, just a hack

    useRouteMatch('/collection/batch') && (location = 'cBatch')
    useRouteMatch('/collection/accounts') && (location = 'cAccounts')
    useRouteMatch('/prelitigation/legal/batch') && (location = 'plBatch')
    useRouteMatch('/prelitigation/legal/notices') && (location = 'plNotice')


    useRouteMatch('/collection/batch') && (urlPointer = 'Batch')
    useRouteMatch('/collection/accounts') && (urlPointer = 'Accounts')
    useRouteMatch('/collection/dailyreport') && (urlPointer = 'Daily Report')
    useRouteMatch('/collection/dailyreport') && (urlPointer = 'Daily Report')
    useRouteMatch('/prelitigation/batch') && (urlPointer = 'Batch')
    useRouteMatch('/prelitigation/notices') && (urlPointer = 'Legal Notices')
    useRouteMatch('/prelitigation/complaints') && (urlPointer = 'Complaints')
    useRouteMatch('/prelitigation/legal/batch') && (urlPointer = 'Batch')
    useRouteMatch('/prelitigation/legal/notices') && (urlPointer = 'Legal Notices')
    useRouteMatch('/prelitigation/fir/batch') && (urlPointer = 'Batch')
    useRouteMatch('/prelitigation/fir/complaints') && (urlPointer = 'Complaints')
    useRouteMatch('/collection/accounts/username') && (urlPointer = 'Ritu Raj Srivastava (124516716)')
    useRouteMatch('/litigation/batch') && (urlPointer = 'Batch')
    useRouteMatch('/litigation/case') && (urlPointer = 'Case')
    useRouteMatch('/litigation/advocates') && (urlPointer = 'Advocates')
    useRouteMatch('/litigation/calendar') && (urlPointer = 'Calendar')
    useRouteMatch('/agent/mycall/current-calls') && (urlPointer = 'Current Calls')
    useRouteMatch('/admin/dispositions') && (urlPointer = 'Dispositions')



    // useEffect(() => {
    //     console.log({ TotalResultFetched })
    // }, [TotalResultFetched])

    return (
        <header className="d-flex align-center header justify-between">
            <div className="d-flex align-center header-left mb-lg-0 mb-2">

                {urlPointer &&
                    <>
                        <h1> {urlPointer} </h1>


                        {(location === 'cBatch'
                            || location === 'cAccounts'
                            || location === 'plBatch'
                            || location === 'plNotice'
                        ) &&
                            <>
                                {
                                    TotalResultFetched ?

                                        <small>Total Result : {TotalResultFetched}</small>
                                        :
                                        <small>Total Result : 0</small>
                                }
                            </>
                        }
                    </>

                }

            </div>
            <div className="d-flex align-center header-right">
                <span className="right-hmenu">
                    <img src={Search} alt="Search" />
                </span>
                <span className="right-hmenu">
                    <img src={Bell} alt="Notification" />
                </span>
                
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <img src={User} alt="User" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            sessionStorage.clear()
                            window.location.hash = "#/login"
                        }}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </header>
    )
}

export default Header
