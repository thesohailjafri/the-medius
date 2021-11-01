import React, { useState } from 'react'
import Comment from '../../Static/RawImages/comment-dark.png'
import Fileplus from '../../Static/RawImages/file-plus-dark.png'
import Dropdown from 'react-bootstrap/Dropdown'
import ListGroup from 'react-bootstrap/ListGroup'

function CollectionAccountDetailHeader(props) {

    //Modal
    const [ShowFilterPage, setShowFilterPage] = useState(false)
    const { data } = props
    return (
        <>
            <div className="row d-flex d-wrap justify-between filter-section">
                <div className="col-md-12 col-lg-9">
                    <ListGroup horizontal className="account-group">
                        <ListGroup.Item>
                            <p className="mb-0"><span className="text-muted">EMI Amount Due</span><br />
                                <span className="text-black fw-600">Rs. {data.emi}</span>
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p className="mb-0"><span className="text-muted">EMI Due Date</span><br />
                                <span className="text-black fw-600">{data.last_emi_date}</span>
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p className="mb-0"><span className="text-muted">Product</span><br />
                                <span className="text-black fw-600">{data.product_name}</span>
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p className="mb-0"><span className="text-muted">Last Disposition</span><br />
                                <span className="text-black fw-600">{data.last_disposition}</span>
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {/* #note reason not provided */}
                            <p className="mb-0"><span className="text-muted">Reason for Delay</span><br />
                                <span className="text-black fw-600">Broken promise to pay</span>
                            </p>
                        </ListGroup.Item>

                    </ListGroup>
                </div>
                <div className="col-md-12 col-lg-3 pt-3 pt-lg-0 text-end">
                    <Dropdown className="bulk-action">
                        <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style-two">
                            Select Option for Bulk Action
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="select-style-dropdown-two">
                            <Dropdown.Item><span><img src={Fileplus} alt="Issue Legal Notice" /></span> Send Issue Legal Notice</Dropdown.Item>
                            <Dropdown.Item><span><img src={Comment} alt="Communication" /></span> Send Communicate</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default CollectionAccountDetailHeader
