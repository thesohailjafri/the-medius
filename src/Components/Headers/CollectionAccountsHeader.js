import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import checkAllBoxes from '../../Functions/checkAllboxes'

import Sort from '../../Static/RawImages/sort.png'
import Comment from '../../Static/RawImages/comment-dark.png'
import Download from '../../Static/RawImages/download.png'
import Fileplus from '../../Static/RawImages/file-plus-dark.png'
import Police from '../../Static/RawImages/police.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Arrow from '../../Static/RawImages/arrow.png'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import BatchFilter2 from './colcomps/BatchFilter2'

function CollectionAccountsHeader({ setSearchParameter,
    setCurrentPage,
    StorePrevFilter,
    ArrayIds
}) {

    //Modal
    const [smShow, setSmShow] = useState(false)
    const [smCommunication, setCommunication] = useState(false)
    const [smLegalNotice, setLegalNotice] = useState(false)
    const [SortAsc, setSortAsc] = useState(true)

    //Refs
    let refCustomerName = null
    let refBatchId = null
    let refLastDisposition = null
    let refOverdue = null
    let refProduct = null
    let refStatus = null
    let refAmountFrom = null
    let refAmountTo = null
    let refDateFrom = null
    let refDateTo = null
    let refSpecificDate = null


    return (
        <>
            <div className="row d-flex d-wrap justify-between filter-section">
                <div className="col-md-12 col-lg-6 d-flex align-center">
                    <input
                        type="checkbox"
                        onClick={(e) => checkAllBoxes(ArrayIds, 'collection_accounts_checkbox', e.target.checked)}
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <button onClick={() => setSmShow(true)} className="btn btn-secondary me-3">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#000" fillRule="nonzero">
                                <path d="M19.2 2.4a2.4 2.4 0 0 0-2-2.364V0h-.8v.036a2.4 2.4 0 0 0 0 4.728V19.2h.8V4.764a2.4 2.4 0 0 0 2-2.364zM16.8 4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM10 10.036V0h-.8v10.036a2.4 2.4 0 0 0 0 4.728V19.2h.8v-4.436a2.4 2.4 0 0 0 0-4.728zM9.6 14a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM2.8.036V0H2v.036a2.4 2.4 0 0 0 0 4.728V19.2h.8V4.764a2.4 2.4 0 0 0 0-4.728zM2.4 4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z" />
                            </g>
                        </svg>
                        Filter
                    </button>
                    <button className="btn btn-secondary"
                        onClick={() => {
                            setSortAsc(!SortAsc)
                            let sort = SortAsc ? 'asc' : 'dsc'

                            setSearchParameter({ ...StorePrevFilter, sort })
                        }}
                    >
                        <img src={Sort} alt="Sort" />
                        Sort
                    </button>
                </div>
                <div className="col-md-12 col-lg-6 pt-3 pt-lg-0 text-end">
                    <Dropdown className="bulk-action">
                        <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style-two">
                            Select Option for Bulk Action
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="select-style-dropdown-two">
                            {/* <Dropdown.Item href=""><span><img src={Download} alt="Download" /></span> Download</Dropdown.Item> */}
                            <Dropdown.Item href="" onClick={() => setLegalNotice(true)}><span><img src={Fileplus} alt="Issue Legal Notice" /></span> Issue Legal Notice</Dropdown.Item>
                            <Dropdown.Item href="" onClick={() => setCommunication(true)} ><span><img src={Comment} alt="Communication" /></span> Communication</Dropdown.Item>
                            <Dropdown.Item href=""><span><img src={Police} alt="File FIR" /></span> File FIR</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>


            </div>
            <hr className="mt-4 mb-4" />

            {/* Filter Popup */}
            <BatchFilter2
                smShow={smShow}
                setSmShow={setSmShow}
                setSortAsc={setSortAsc}
                setSearchParameter={setSearchParameter}
                refCustomerName={refCustomerName}
                refBatchId={refBatchId}
                refLastDisposition={refLastDisposition}
                refOverdue={refOverdue}
                refProduct={refProduct}
                refStatus={refStatus}
                refAmountFrom={refAmountFrom}
                refAmountTo={refAmountTo}
                refDateFrom={refDateFrom}
                refDateTo={refDateTo}
                refSpecificDate={refSpecificDate}
                setCurrentPage={setCurrentPage}
            /
            >

            {/* Communication Popup */}
            <Modal
                show={smCommunication}
                dialogClassName="modal-communication"
                onHide={() => setCommunication(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header>
                    <Modal.Title>Communicate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="row">
                            <div className="col-md-4 com-left ps-0 pe-0">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className="d-flex align-center">
                                            <div className="comm-icon">
                                                <svg width="29" height="29" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.512 18.186a3.726 3.726 0 0 0-2.304.27l-2.586 1.116a25.428 25.428 0 0 1-4.584-3.636 24.84 24.84 0 0 1-3.6-4.65l.846-2.328a3.78 3.78 0 0 0 .222-2.238L8.784 0 0 1.266l.036.534a28.974 28.974 0 0 0 8.322 18.6 28.566 28.566 0 0 0 18.936 8.4h.57l.936-9.144-6.288-1.47zm4.278 9.36a27.33 27.33 0 0 1-17.58-7.95A27.78 27.78 0 0 1 1.266 2.292l6.6-.954 1.428 5.646c.102.52.043 1.057-.168 1.542L8.1 11.4l.15.246a26.4 26.4 0 0 0 3.936 5.154 27.132 27.132 0 0 0 5.058 3.972l.27.174 3.192-1.374a2.49 2.49 0 0 1 1.554-.192l5.25 1.2-.72 6.966z" fill="#505050" fill-rule="nonzero" />
                                                </svg>
                                            </div>
                                            Call
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className="d-flex align-center">
                                            <div className="comm-icon">
                                                <svg width="29" height="29" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.4 0A14.4 14.4 0 0 0 1.8 21.342L0 28.8l7.278-1.884A14.4 14.4 0 1 0 14.4 0zm0 27.6a13.2 13.2 0 0 1-6.726-1.842l-.216-.132-5.76 1.476 1.374-5.928-.126-.216A13.2 13.2 0 1 1 14.4 27.6z" fill="#505050" fill-rule="nonzero" />
                                                </svg>
                                            </div>
                                            SMS
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className="d-flex align-center">
                                            <div className="comm-icon">
                                                <svg width="29" height="22" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#505050" fill-rule="nonzero">
                                                        <path d="M0 0v16.2a5.4 5.4 0 0 0 5.4 5.4h18a5.4 5.4 0 0 0 5.4-5.4V0H0zm27.6 16.2a4.2 4.2 0 0 1-4.2 4.2h-18a4.2 4.2 0 0 1-4.2-4.2v-15h26.4v15z" />
                                                        <path d="m25.488 4.602-.804-.888L14.4 12.99 4.176 3.726l-.804.888L14.4 14.61z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            Email
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" className="d-flex align-center">
                                            <div className="comm-icon">
                                                <svg width="29" height="29" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="#505050" fill-rule="nonzero">
                                                        <path d="M14.4 0A14.4 14.4 0 0 0 1.8 21.342L0 28.8l7.278-1.884A14.4 14.4 0 1 0 14.4 0zm0 27.6a13.2 13.2 0 0 1-6.726-1.842l-.216-.132-5.76 1.476 1.374-5.928-.126-.216A13.2 13.2 0 1 1 14.4 27.6z" />
                                                        <path d="M9.54 16.549a18.432 18.432 0 0 0 6.131 4.802c.896.425 2.095.929 3.43 1.015.084.004.163.008.246.008.896 0 1.616-.31 2.203-.947a.079.079 0 0 0 .014-.018c.209-.252.447-.479.695-.72.17-.162.342-.331.508-.504.766-.8.766-1.815-.008-2.589l-2.163-2.163c-.367-.382-.807-.583-1.267-.583-.461 0-.904.201-1.282.58l-1.289 1.288c-.119-.068-.241-.13-.356-.187a4.452 4.452 0 0 1-.396-.216c-1.174-.745-2.24-1.717-3.258-2.967-.515-.651-.86-1.198-1.102-1.756.339-.306.655-.627.961-.94.108-.112.22-.223.332-.335.388-.389.597-.839.597-1.296 0-.457-.205-.907-.597-1.296l-1.073-1.073c-.126-.126-.245-.248-.367-.374a19.746 19.746 0 0 0-.731-.724C10.397 5.191 9.96 5 9.5 5c-.458 0-.897.19-1.282.558L6.873 6.904a2.766 2.766 0 0 0-.825 1.772c-.068.86.09 1.774.5 2.88.63 1.71 1.581 3.297 2.992 4.993zM6.927 8.75c.043-.479.226-.878.572-1.224l1.34-1.339c.208-.202.438-.306.662-.306.22 0 .442.104.648.313.24.223.468.457.712.706l.375.381 1.073 1.073c.223.223.338.45.338.673 0 .224-.115.45-.338.674-.112.111-.224.226-.335.338-.335.338-.648.659-.994.965l-.018.018c-.299.299-.252.583-.18.799l.011.029c.277.666.662 1.3 1.264 2.055 1.08 1.332 2.217 2.366 3.47 3.161.155.101.32.18.475.26.144.071.277.14.396.215.015.008.025.015.04.022.119.061.234.09.349.09.288 0 .475-.184.536-.245l1.347-1.346c.209-.209.435-.32.659-.32.273 0 .496.169.637.32l2.17 2.167c.433.432.429.9-.01 1.357-.151.162-.31.317-.479.479-.252.245-.515.497-.752.781-.414.447-.908.655-1.545.655-.061 0-.126-.003-.187-.007-1.18-.075-2.279-.536-3.103-.929a17.51 17.51 0 0 1-5.836-4.572c-1.343-1.616-2.246-3.12-2.844-4.734-.37-.99-.511-1.785-.453-2.509z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            WhatsApp
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth" className="d-flex align-center">
                                            <div className="comm-icon">
                                                <svg width="24" height="31" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m21.065 24.528-4.407-2.452c-.457-.23-.745-.7-.742-1.212l-.003-1.228a11.853 11.853 0 0 0 2.038-4.161.509.509 0 0 0 .013-.115v-1.024H19.5c.848 0 1.535-.688 1.536-1.536V9.728a1.534 1.534 0 0 0-1.024-1.442v-.094a8.192 8.192 0 0 0-16.384 0v.094a1.534 1.534 0 0 0-1.024 1.442V12.8a1.533 1.533 0 0 0 1.024 1.442v1.118a2.05 2.05 0 0 0 2.048 2.048h.704c.373.784.823 1.53 1.344 2.224v1.18c.002.497-.27.954-.706 1.19l-4.566 2.493a4.607 4.607 0 0 0-2.408 4.054v1.659a.512.512 0 0 0 .512.512h22.528c.283 0 .512-.23.512-.512v-1.556a4.591 4.591 0 0 0-2.531-4.124zm-1.053-14.8V12.8c0 .283-.23.512-.512.512h-1.536V9.216H19.5c.283 0 .512.23.512.512zM4.14 13.312a.513.513 0 0 1-.512-.512V9.728c0-.283.23-.512.512-.512h1.536v4.096H4.14zm1.536 3.072a1.025 1.025 0 0 1-1.024-1.024v-1.024h1.024v1.024c0 .039.004.077.013.115.073.308.164.611.27.909h-.283zm-.003-8.192H4.652a7.176 7.176 0 0 1 7.168-7.168 7.176 7.176 0 0 1 7.168 7.168h-1.021a4.58 4.58 0 0 0-1.073-3.312c-1.052-1.2-2.759-1.808-5.074-1.808S7.798 3.68 6.747 4.88a4.58 4.58 0 0 0-1.074 3.312zM1.068 29.696V28.55a3.585 3.585 0 0 1 1.873-3.155l4.565-2.492a2.367 2.367 0 0 0 1.242-2.09v-1.18a1.01 1.01 0 0 0-.207-.617c-.38-.509-.72-1.046-1.017-1.607h2.342a1.533 1.533 0 0 0 1.442 1.024h1.536a1.536 1.536 0 0 0 0-3.072h-1.536a1.534 1.534 0 0 0-1.442 1.024H7.051a7.961 7.961 0 0 1-.351-1.083V8.192a3.552 3.552 0 0 1 .816-2.637c.849-.968 2.297-1.459 4.304-1.459 2 0 3.445.487 4.294 1.448a3.6 3.6 0 0 1 .826 2.648v7.109a10.832 10.832 0 0 1-1.84 3.714 1.01 1.01 0 0 0-.208.618v1.231a2.358 2.358 0 0 0 1.287 2.116l4.407 2.453a3.583 3.583 0 0 1 1.986 3.219v1.044H1.068zm9.728-12.8c0-.283.23-.512.512-.512h1.536a.512.512 0 0 1 0 1.024h-1.536a.513.513 0 0 1-.512-.512z" fill="#505050" fill-rule="nonzero" />
                                                </svg>
                                            </div>
                                            Agent
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="col-md-8">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <form>
                                            <div className="mb-2 row">
                                                <div className="col-md-12">
                                                    <label for="Agent" className="col-md-5 col-form-label">Agent</label>
                                                    <select id="Agent" className="form-select">
                                                        <option selected>Select</option>
                                                        <option>Agent 1</option>
                                                        <option>Agent 2</option>
                                                        <option>Agent 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mb-2 row">
                                                <div className="col-md-12">
                                                    <label className="col-md-5 col-form-label">Contact Number</label>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                                            Select <img src={Arrow} alt="Sort" />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="select-style-dropdown">
                                                            <Dropdown.Item href="">Home - +91 9876543210</Dropdown.Item>
                                                            <Dropdown.Item href="">Landline - 022-234567</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <form>
                                            <div className="mb-2 row">
                                                <div className="col-md-12">
                                                    <label for="Agent" className="col-md-5 col-form-label">Agent</label>
                                                    <select id="Agent" className="form-select">
                                                        <option selected>Select</option>
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mb-2 row">
                                                <div className="col-md-12">
                                                    <label for="Contact" className="col-md-5 col-form-label">Contact Number</label>
                                                    <select id="Contact" className="form-select">
                                                        <option selected>Select</option>
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mb-2 row">
                                                <div className="col-md-12">
                                                    <label for="SMS" className="col-md-5 col-form-label">Write SMS</label>
                                                    <textarea id="SMS" className="form-control textarea"></textarea>
                                                    <p className="text-end fs-7"><small className="text-muted">Count 0/200</small></p>
                                                </div>
                                            </div>
                                        </form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <form>
                                            <div className="mb-2 row">
                                                <div className="col-md-12">
                                                    <label for="Agent" className="col-md-5 col-form-label">Email</label>
                                                </div>
                                            </div>
                                        </form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <form>
                                            <div className="mb-2 row">
                                                <div className="col-md-12">
                                                    <label for="Agent" className="col-md-5 col-form-label">WhatsApp</label>
                                                </div>
                                            </div>
                                        </form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <form>
                                            <div className="mb-2 row">
                                                <div className="col-md-12">
                                                    <label for="Agent" className="col-md-5 col-form-label">Agent</label>
                                                </div>
                                            </div>
                                        </form>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setCommunication(false)}>Close</Button>
                    <Button variant="primary" onClick={() => setCommunication(false)}>Send</Button>
                </Modal.Footer>
            </Modal>


            {/* Issue Legal Notice Popup */}
            <Modal
                show={smLegalNotice}
                dialogClassName="modal-legalnotice"
                onHide={() => setLegalNotice(false)
                }
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header>
                    <Modal.Title>Issue Legal Notice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="my-4 mx-1 row">
                            <div className="col-md-12">
                                <Form.Check
                                    type="radio"
                                    label="Arbitration Notice"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    className="mb-3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Loan recall Notice"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    className="mb-3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Demand Notice"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    className="mb-3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="138 Notice"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios4"
                                    className="mb-3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Sarfaesi / 13(2) Notice"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios5"
                                    className="mb-0"
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLegalNotice(false)}>Close</Button>
                    <Button variant="primary" onClick={() => setLegalNotice(false)}>SEND</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CollectionAccountsHeader
