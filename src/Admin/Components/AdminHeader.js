import React, { useEffect } from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'
import Search from '../../Static/RawImages/search.png'
import Bell from '../../Static/RawImages/bell.png'
import User from '../../Static/RawImages/user.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { useGlobalContext } from '../../context'

function AdminHeader() {
    const { TotalResultFetched, setIsAgent } = useGlobalContext()

    let urlPointer
    let location//td remove this, just a hack

    // useRouteMatch('/collection/batch') && (location = 'cBatch')



    // useRouteMatch('/collection/batch') && (urlPointer = 'Batch')




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
                            window.location.hash = "#/admin/login"
                        }}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </header>
    )
}

export default AdminHeader
