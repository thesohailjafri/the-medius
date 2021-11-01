import React, { useCallback, useEffect } from 'react'
import PrelitigationLegalNoticesHeader from '../../Components/Headers/PrelitigationLegalNoticesHeader'
import { Link, useParams } from 'react-router-dom'
import { getPreLitiNoticeData } from '../../API'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import Arrow from '../../Static/RawImages/arrow.png'
import ContentLoader from '../../Components/ContentLoader'
import commaFormat from '../../Functions/amountCommaSeparator'
import Paging from '../../Components/Paging'
import { useGlobalContext } from '../../context'

function PreLitigationNotices() {
    const { updateFetchedCount } = useGlobalContext()

    const { id } = useParams()
    const [lgShow, setLgShow] = useState(false)
    const [data, setData] = useState(null)
    const [pageTotal, setPageTotal] = useState('NaN')
    const [currentPage, setCurrentPage] = useState(1)
    const [SearchParameter, setSearchParameter] = useState({})
    const [StorePrevFilter, setStorePrevFilter] = useState(null)
    const [HitReload, setHitReload] = useState(false)
    const [ArrayIds, setArrayIds] = useState(null)

    const getData = useCallback(
        async () => {
            let myParams
            setStorePrevFilter(SearchParameter)
            if (SearchParameter.batch_id) {
                myParams = { ...SearchParameter, page: currentPage }
            } else {
                id ? myParams = { ...SearchParameter, batch_id: id, page: currentPage } : myParams = { ...SearchParameter, page: currentPage }
            }
            const res = await getPreLitiNoticeData(myParams)
            if (res) {
                setData(res.data)
                handleInitPagination(res)
                updateFetchedCount(res.total)
            }
        },
        [currentPage, SearchParameter, id]
    )

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

    useEffect(() => {
        getData()
    }, [getData])


    return (
        <>
            <PrelitigationLegalNoticesHeader
                ArrayIds={ArrayIds}
                setSearchParameter={setSearchParameter}
                StorePrevFilter={StorePrevFilter}
                HitReload={HitReload}
                setHitReload={setHitReload}
                setCurrentPage={setCurrentPage}
            />
            <hr className="mt-4 mb-4" />
            {
                !data ?
                    <ContentLoader />
                    :
                    <>
                        {data.length > 0 ?
                            <>
                                {data.map((val, i) => {
                                    return (
                                        <div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
                                            <div className="col-md-4">
                                                <div className="d-flex align-start">
                                                    <Checkbox
                                                        className="me-3"
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                    <div>
                                                        <p className="text-primary mb-2 tx-16"><a><strong>{val?.customer_name}</strong></a></p>
                                                        <p>Notice Id. - <span className="text-black">{val?.notice_id}</span></p>
                                                        <p>Batch No. - <span className="text-black">{val?.batch?.batch_id + ' - ' + val?.batch?.batch_name}</span></p>
                                                        <hr />
                                                        <p>Product - <span className="text-black">{val?.prd_grp}</span><br />
                                                            <span className="text-black">Rs.{commaFormat(val?.od_pos_final)}</span><br />
                                                            <span className="text-black">{val?.bkt_grp} Days</span></p>
                                                        <hr />
                                                        <p>Notice Type - <b>{val?.batch.notice_type}</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <table className="table table-bordered table-striped w-auto">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <svg width="25" height="22" xmlns="http://www.w3.org/2000/svg">
                                                                    <g fill="#505050" fill-rule="nonzero">
                                                                        <path d="M14.452 21.449h-2.155a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM6.682 21.449H.362a.346.346 0 0 1-.346-.346V7.106a.346.346 0 1 1 .692 0v13.65h5.974a.346.346 0 1 1 0 .693zM10.567 21.449H8.412a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM23.886 21.449h-7.704a.346.346 0 1 1 0-.692h7.358V7.106a.346.346 0 0 1 .692 0v13.997a.346.346 0 0 1-.346.346z" />
                                                                        <path d="M.362 7.452a.346.346 0 0 1-.218-.615l4.15-3.363a.347.347 0 1 1 .437.539L.58 7.376a.346.346 0 0 1-.218.076zM23.886 7.452a.346.346 0 0 1-.217-.077l-4.152-3.363a.346.346 0 1 1 .436-.538l4.151 3.363a.346.346 0 0 1-.218.615z" />
                                                                        <path d="M12.124 16.57a4.49 4.49 0 0 1-3.002-1.148L.132 7.363a.346.346 0 1 1 .46-.513l8.992 8.057a3.805 3.805 0 0 0 5.08 0l8.991-8.057a.346.346 0 0 1 .462.515l-8.991 8.057a4.49 4.49 0 0 1-3.002 1.149zM14.452 21.449h-2.155a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692z" />
                                                                        <path d="M6.682 21.449H.362a.346.346 0 0 1-.217-.615l8.216-6.636a.346.346 0 1 1 .434.54l-7.454 6.019h5.341a.346.346 0 1 1 0 .692zM10.567 21.449H8.412a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM23.886 21.449h-7.704a.346.346 0 1 1 0-.692h6.725l-7.454-6.02a.346.346 0 1 1 .434-.538l8.216 6.635a.346.346 0 0 1-.217.615zM19.735 11.17a.346.346 0 0 1-.346-.345V.692H4.859v10.133a.346.346 0 1 1-.692 0V.345c0-.19.155-.345.346-.345h15.222c.19 0 .346.155.346.346v10.479a.346.346 0 0 1-.346.346z" />
                                                                        <path d="M16.967 3.805H7.281a.346.346 0 0 1 0-.691h9.686a.346.346 0 1 1 0 .691zM16.967 6.573H7.281a.346.346 0 1 1 0-.692h9.686a.346.346 0 1 1 0 .692zM16.967 9.34H7.281a.346.346 0 0 1 0-.691h9.686a.346.346 0 1 1 0 .692z" />
                                                                    </g>
                                                                </svg>
                                                            </td>
                                                            <td>{val?.batch?.communication_mode.find(element => element === 'postal') ? 'Dispatched' : 'Not Dispatched'}</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.52 0A11.52 11.52 0 0 0 1.44 17.074L0 23.04l5.822-1.507A11.52 11.52 0 1 0 11.52 0zm0 22.08a10.56 10.56 0 0 1-5.38-1.474l-.174-.105-4.608 1.18 1.1-4.742-.101-.173a10.56 10.56 0 1 1 9.163 5.314z" fill="#505050" fill-rule="nonzero" />
                                                                </svg>
                                                            </td>
                                                            <td>{val?.batch?.communication_mode.find(element => element === 'sms') ? 'Dispatched' : 'Not Dispatched'}</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <svg width="26" height="20" xmlns="http://www.w3.org/2000/svg">
                                                                    <g fill="#505050" fill-rule="nonzero">
                                                                        <path d="M0 0v14.58a4.86 4.86 0 0 0 4.86 4.86h16.2a4.86 4.86 0 0 0 4.86-4.86V0H0zm24.84 14.58a3.78 3.78 0 0 1-3.78 3.78H4.86a3.78 3.78 0 0 1-3.78-3.78V1.08h23.76v13.5z" />
                                                                        <path d="m22.94 4.142-.724-.8-9.256 8.349-9.202-8.338-.723.8 9.925 8.996z" />
                                                                    </g>
                                                                </svg>
                                                            </td>
                                                            <td>{val?.batch?.communication_mode.find(element => element === 'email') ? 'Dispatched' : 'Not Dispatched'}</td>
                                                            <td>NA</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                                                                    <g fill="#505050" fill-rule="nonzero">
                                                                        <path d="M12.96 0A12.96 12.96 0 0 0 1.62 19.208L0 25.92l6.55-1.696A12.96 12.96 0 1 0 12.96 0zm0 24.84c-2.13 0-4.22-.573-6.053-1.658l-.195-.119-5.184 1.329 1.237-5.335-.114-.195A11.88 11.88 0 1 1 12.96 24.84z" />
                                                                        <path d="M8.586 14.894a16.588 16.588 0 0 0 5.518 4.322c.807.382 1.886.836 3.088.914.074.003.145.006.22.006.807 0 1.455-.278 1.983-.852.003-.003.01-.01.013-.016.188-.227.402-.431.625-.648.152-.146.308-.298.457-.454.69-.719.69-1.633-.007-2.33l-1.947-1.946c-.33-.344-.726-.525-1.14-.525-.415 0-.813.181-1.154.521l-1.16 1.16a6.164 6.164 0 0 0-.32-.168 4.007 4.007 0 0 1-.357-.195c-1.056-.67-2.015-1.545-2.932-2.67-.463-.586-.774-1.078-.991-1.58.304-.276.59-.564.865-.846.097-.1.197-.201.298-.302.35-.35.538-.754.538-1.166 0-.411-.185-.816-.538-1.166l-.966-.966c-.113-.113-.22-.223-.33-.337-.214-.22-.438-.447-.658-.651-.334-.327-.726-.499-1.14-.499-.412 0-.807.172-1.154.502L6.185 6.214c-.44.44-.69.975-.742 1.594-.061.774.081 1.597.45 2.592.568 1.539 1.423 2.968 2.693 4.494zM6.234 7.876c.039-.43.204-.79.515-1.102L7.954 5.57c.188-.181.396-.275.597-.275.197 0 .398.094.583.282.217.2.42.411.641.635l.337.343.966.966c.2.2.304.405.304.606 0 .2-.103.405-.304.605-.1.1-.201.205-.302.305-.3.305-.583.593-.894.868l-.016.017c-.269.268-.227.524-.162.719l.01.026c.25.6.596 1.17 1.137 1.85.972 1.199 1.996 2.128 3.123 2.844.14.091.289.162.428.234.13.065.25.126.356.194l.036.02c.107.055.21.08.314.08.26 0 .428-.165.483-.22l1.212-1.211c.188-.188.392-.289.593-.289.246 0 .447.152.573.289l1.954 1.95c.389.389.386.81-.01 1.221-.136.146-.278.286-.43.431-.227.22-.464.448-.678.703-.372.402-.816.59-1.39.59-.055 0-.113-.003-.168-.006-1.063-.068-2.051-.483-2.793-.836a15.759 15.759 0 0 1-5.252-4.115c-1.209-1.455-2.022-2.81-2.56-4.26-.334-.892-.46-1.608-.408-2.259z" />
                                                                    </g>
                                                                </svg>
                                                            </td>
                                                            <td>{val?.batch?.communication_mode.find(element => element === 'whatsapp') ? 'Dispatched' : 'Not Dispatched'}</td>
                                                            <td>NA</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="action-box">
                                                    <label htmlFor="dropdown-basic" className="col-form-label mb-2">Action</label>
                                                    <Dropdown className="dropdown-s2">
                                                        <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                                            Select <img src={Arrow} alt="Sort" />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="select-style-dropdown">
                                                            <Dropdown.Item>Download POD</Dropdown.Item>
                                                            <Dropdown.Item>View Notice</Dropdown.Item>
                                                            <Dropdown.Item>Initiate Litigation</Dropdown.Item>
                                                            <Dropdown.Item>Re-issue Notice</Dropdown.Item>
                                                            <Dropdown.Item>Reply to Respondent</Dropdown.Item>
                                                            <Dropdown.Item>Re-initiate Collection</Dropdown.Item>
                                                            <Dropdown.Item>File FIR</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <hr className="mt-4 mb-4" />
                                        </div>
                                    )
                                })}
                                <Paging currentPage={currentPage} pageTotal={pageTotal} handlePagination={handlePagination} />
                            </>
                            :
                            <h1 className="text-center">No Data Found</h1>

                        }
                    </>
            }


            {/**/}
            <Modal
                show={lgShow}
                onHide={() => setLgShow(false)}
                dialogClassName="modal-large"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Reply Received from Rituraj Srivastava
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="tab-m-body">
                    <div className="upload-batch-popup">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <div className="row">
                                <div className="col-lg-3 com-left ps-0 pe-0">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" className="d-flex align-center">
                                                <div className="comm-icon me-4 ps-2">
                                                    <svg width="29" height="29" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.512 18.186a3.726 3.726 0 0 0-2.304.27l-2.586 1.116a25.428 25.428 0 0 1-4.584-3.636 24.84 24.84 0 0 1-3.6-4.65l.846-2.328a3.78 3.78 0 0 0 .222-2.238L8.784 0 0 1.266l.036.534a28.974 28.974 0 0 0 8.322 18.6 28.566 28.566 0 0 0 18.936 8.4h.57l.936-9.144-6.288-1.47zm4.278 9.36a27.33 27.33 0 0 1-17.58-7.95A27.78 27.78 0 0 1 1.266 2.292l6.6-.954 1.428 5.646c.102.52.043 1.057-.168 1.542L8.1 11.4l.15.246a26.4 26.4 0 0 0 3.936 5.154 27.132 27.132 0 0 0 5.058 3.972l.27.174 3.192-1.374a2.49 2.49 0 0 1 1.554-.192l5.25 1.2-.72 6.966z" fill="#505050" fill-rule="nonzero" />
                                                    </svg>
                                                </div>
                                                Postal
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second" className="d-flex align-center">
                                                <div className="comm-icon me-4 ps-2">
                                                    <svg width="29" height="29" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.4 0A14.4 14.4 0 0 0 1.8 21.342L0 28.8l7.278-1.884A14.4 14.4 0 1 0 14.4 0zm0 27.6a13.2 13.2 0 0 1-6.726-1.842l-.216-.132-5.76 1.476 1.374-5.928-.126-.216A13.2 13.2 0 1 1 14.4 27.6z" fill="#505050" fill-rule="nonzero" />
                                                    </svg>
                                                </div>
                                                SMS
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third" className="d-flex align-center">
                                                <div className="comm-icon me-4 ps-2">
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
                                                <div className="comm-icon me-4 ps-2">
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
                                    </Nav>
                                </div>
                                <div className="col-lg-9">
                                    <Tab.Content className="text-start py-4 px-4">
                                        <Tab.Pane eventKey="first">
                                            <form>
                                                <div className="mb-2 row">
                                                    <div className="col-md-12">
                                                        <label for="Agent" className="col-md-5 col-form-label"></label>
                                                        {/* <img src={Jsa} alt="JSA" /> */}
                                                        <object data="http://www.africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="600">
                                                            alt : <a href="http://www.africau.edu/images/default/sample.pdf">test.pdf</a>
                                                        </object>
                                                    </div>
                                                </div>
                                            </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <form>
                                                <div className="mb-2 row">
                                                    <div className="col-md-12">
                                                        <label for="Agent" className="col-md-5 col-form-label">SMS</label>
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
                                    </Tab.Content>
                                </div>
                            </div>
                        </Tab.Container>
                    </div>
                </Modal.Body>
                <Modal.Footer className="custom-footer">
                    <div className="row">
                        <div className="col-lg-6">
                            <Button variant="outline-primary">Download</Button>
                            <Button variant="outline-primary">Email</Button>
                        </div>
                        <div className="col-lg-6 text-end">
                            <Button variant="primary">Add Notes For Reply</Button>
                            <Button variant="secondary" onClick={() => { setLgShow(false) }}>Cancel</Button>
                        </div>
                    </div>

                </Modal.Footer>
            </Modal>
            {/**/}
        </>
    )
}

export default PreLitigationNotices


{/* <div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
<div className="col-md-4">
    <div className="d-flex align-start">
        <Checkbox
            className="me-3"
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <div>
            <p className="text-primary mb-2 tx-16"><a><strong>Ritu Raj Srivastava (124516716)</strong></a></p>
            <p>Batch No. - <span className="text-black">ABC516A</span></p>
            <hr />
            <p>Product - <span className="text-black">Two Wheeler</span><br />
                <span className="text-black">Rs. 45,1671</span><br />
                <span className="text-black">180 + Days</span></p>
            <hr />
            <p>Notice Type - <b>138 Notice</b></p>
        </div>
    </div>
</div>
<div className="col-md-4">
    <table className="table table-bordered table-striped w-auto">
        <tbody>
            <tr>
                <td>
                    <svg width="25" height="22" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#505050" fill-rule="nonzero">
                            <path d="M14.452 21.449h-2.155a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM6.682 21.449H.362a.346.346 0 0 1-.346-.346V7.106a.346.346 0 1 1 .692 0v13.65h5.974a.346.346 0 1 1 0 .693zM10.567 21.449H8.412a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM23.886 21.449h-7.704a.346.346 0 1 1 0-.692h7.358V7.106a.346.346 0 0 1 .692 0v13.997a.346.346 0 0 1-.346.346z"/>
                            <path d="M.362 7.452a.346.346 0 0 1-.218-.615l4.15-3.363a.347.347 0 1 1 .437.539L.58 7.376a.346.346 0 0 1-.218.076zM23.886 7.452a.346.346 0 0 1-.217-.077l-4.152-3.363a.346.346 0 1 1 .436-.538l4.151 3.363a.346.346 0 0 1-.218.615z"/>
                            <path d="M12.124 16.57a4.49 4.49 0 0 1-3.002-1.148L.132 7.363a.346.346 0 1 1 .46-.513l8.992 8.057a3.805 3.805 0 0 0 5.08 0l8.991-8.057a.346.346 0 0 1 .462.515l-8.991 8.057a4.49 4.49 0 0 1-3.002 1.149zM14.452 21.449h-2.155a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692z"/>
                            <path d="M6.682 21.449H.362a.346.346 0 0 1-.217-.615l8.216-6.636a.346.346 0 1 1 .434.54l-7.454 6.019h5.341a.346.346 0 1 1 0 .692zM10.567 21.449H8.412a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM23.886 21.449h-7.704a.346.346 0 1 1 0-.692h6.725l-7.454-6.02a.346.346 0 1 1 .434-.538l8.216 6.635a.346.346 0 0 1-.217.615zM19.735 11.17a.346.346 0 0 1-.346-.345V.692H4.859v10.133a.346.346 0 1 1-.692 0V.345c0-.19.155-.345.346-.345h15.222c.19 0 .346.155.346.346v10.479a.346.346 0 0 1-.346.346z"/>
                            <path d="M16.967 3.805H7.281a.346.346 0 0 1 0-.691h9.686a.346.346 0 1 1 0 .691zM16.967 6.573H7.281a.346.346 0 1 1 0-.692h9.686a.346.346 0 1 1 0 .692zM16.967 9.34H7.281a.346.346 0 0 1 0-.691h9.686a.346.346 0 1 1 0 .692z"/>
                        </g>
                    </svg>
                </td>
                <td>Not Dispatched</td>
                <td>NA</td>
            </tr>
            <tr>
                <td>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.52 0A11.52 11.52 0 0 0 1.44 17.074L0 23.04l5.822-1.507A11.52 11.52 0 1 0 11.52 0zm0 22.08a10.56 10.56 0 0 1-5.38-1.474l-.174-.105-4.608 1.18 1.1-4.742-.101-.173a10.56 10.56 0 1 1 9.163 5.314z" fill="#505050" fill-rule="nonzero"/>
                    </svg>
                </td>
                <td>Delivered</td>
                <td>NA</td>
            </tr>
            <tr>
                <td>
                    <svg width="26" height="20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#505050" fill-rule="nonzero">
                            <path d="M0 0v14.58a4.86 4.86 0 0 0 4.86 4.86h16.2a4.86 4.86 0 0 0 4.86-4.86V0H0zm24.84 14.58a3.78 3.78 0 0 1-3.78 3.78H4.86a3.78 3.78 0 0 1-3.78-3.78V1.08h23.76v13.5z"/>
                            <path d="m22.94 4.142-.724-.8-9.256 8.349-9.202-8.338-.723.8 9.925 8.996z"/>
                        </g>
                    </svg>
                </td>
                <td>Delivered</td>
                <td>No Response</td>
            </tr>
            <tr>
                <td>
                    <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#505050" fill-rule="nonzero">
                            <path d="M12.96 0A12.96 12.96 0 0 0 1.62 19.208L0 25.92l6.55-1.696A12.96 12.96 0 1 0 12.96 0zm0 24.84c-2.13 0-4.22-.573-6.053-1.658l-.195-.119-5.184 1.329 1.237-5.335-.114-.195A11.88 11.88 0 1 1 12.96 24.84z"/>
                            <path d="M8.586 14.894a16.588 16.588 0 0 0 5.518 4.322c.807.382 1.886.836 3.088.914.074.003.145.006.22.006.807 0 1.455-.278 1.983-.852.003-.003.01-.01.013-.016.188-.227.402-.431.625-.648.152-.146.308-.298.457-.454.69-.719.69-1.633-.007-2.33l-1.947-1.946c-.33-.344-.726-.525-1.14-.525-.415 0-.813.181-1.154.521l-1.16 1.16a6.164 6.164 0 0 0-.32-.168 4.007 4.007 0 0 1-.357-.195c-1.056-.67-2.015-1.545-2.932-2.67-.463-.586-.774-1.078-.991-1.58.304-.276.59-.564.865-.846.097-.1.197-.201.298-.302.35-.35.538-.754.538-1.166 0-.411-.185-.816-.538-1.166l-.966-.966c-.113-.113-.22-.223-.33-.337-.214-.22-.438-.447-.658-.651-.334-.327-.726-.499-1.14-.499-.412 0-.807.172-1.154.502L6.185 6.214c-.44.44-.69.975-.742 1.594-.061.774.081 1.597.45 2.592.568 1.539 1.423 2.968 2.693 4.494zM6.234 7.876c.039-.43.204-.79.515-1.102L7.954 5.57c.188-.181.396-.275.597-.275.197 0 .398.094.583.282.217.2.42.411.641.635l.337.343.966.966c.2.2.304.405.304.606 0 .2-.103.405-.304.605-.1.1-.201.205-.302.305-.3.305-.583.593-.894.868l-.016.017c-.269.268-.227.524-.162.719l.01.026c.25.6.596 1.17 1.137 1.85.972 1.199 1.996 2.128 3.123 2.844.14.091.289.162.428.234.13.065.25.126.356.194l.036.02c.107.055.21.08.314.08.26 0 .428-.165.483-.22l1.212-1.211c.188-.188.392-.289.593-.289.246 0 .447.152.573.289l1.954 1.95c.389.389.386.81-.01 1.221-.136.146-.278.286-.43.431-.227.22-.464.448-.678.703-.372.402-.816.59-1.39.59-.055 0-.113-.003-.168-.006-1.063-.068-2.051-.483-2.793-.836a15.759 15.759 0 0 1-5.252-4.115c-1.209-1.455-2.022-2.81-2.56-4.26-.334-.892-.46-1.608-.408-2.259z"/>
                        </g>
                    </svg>
                </td>
                <td>Not Delivered</td>
                <td>Not on WhatsApp</td>
            </tr>
        </tbody>
    </table>
</div>
<div className="col-md-4">
    <div className="action-box">
        <label htmlFor="dropdown-basic" className="col-form-label mb-2">Action</label>
        <Dropdown className="dropdown-s2">
            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                Select <img src={Arrow} alt="Sort" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="select-style-dropdown">
                <Dropdown.Item>Download POD</Dropdown.Item>
                <Dropdown.Item>View Notice</Dropdown.Item>
                <Dropdown.Item>Initiate Litigation</Dropdown.Item>
                <Dropdown.Item>Re-issue Notice</Dropdown.Item>
                <Dropdown.Item>Reply to Respondent</Dropdown.Item>
                <Dropdown.Item>Re-initiate Collection</Dropdown.Item>
                <Dropdown.Item>File FIR</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>                       
    </div>
</div>
<hr className="mt-4 mb-4" />
</div>


<div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
<div className="col-md-4">
    <div className="d-flex align-start">
        <Checkbox
            className="me-3"
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <div>
            <p className="text-primary mb-2 tx-16"><a><strong>Priya Darshan (124516716)</strong></a></p>
            <p>Batch No. - <span className="text-black">ABC516A</span></p>
            <hr />
            <p>Product - <span className="text-black">Two Wheeler</span><br />
                <span className="text-black">Rs. 45,1671</span><br />
                <span className="text-black">180 + Days</span></p>
            <hr />
            <p>Notice Type - <b>138 Notice</b></p>
        </div>
    </div>
</div>
<div className="col-md-4">
    <table className="table table-bordered table-striped w-auto">
        <tbody>
            <tr>
                <td>
                    <svg width="25" height="22" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#505050" fill-rule="nonzero">
                            <path d="M14.452 21.449h-2.155a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM6.682 21.449H.362a.346.346 0 0 1-.346-.346V7.106a.346.346 0 1 1 .692 0v13.65h5.974a.346.346 0 1 1 0 .693zM10.567 21.449H8.412a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM23.886 21.449h-7.704a.346.346 0 1 1 0-.692h7.358V7.106a.346.346 0 0 1 .692 0v13.997a.346.346 0 0 1-.346.346z"/>
                            <path d="M.362 7.452a.346.346 0 0 1-.218-.615l4.15-3.363a.347.347 0 1 1 .437.539L.58 7.376a.346.346 0 0 1-.218.076zM23.886 7.452a.346.346 0 0 1-.217-.077l-4.152-3.363a.346.346 0 1 1 .436-.538l4.151 3.363a.346.346 0 0 1-.218.615z"/>
                            <path d="M12.124 16.57a4.49 4.49 0 0 1-3.002-1.148L.132 7.363a.346.346 0 1 1 .46-.513l8.992 8.057a3.805 3.805 0 0 0 5.08 0l8.991-8.057a.346.346 0 0 1 .462.515l-8.991 8.057a4.49 4.49 0 0 1-3.002 1.149zM14.452 21.449h-2.155a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692z"/>
                            <path d="M6.682 21.449H.362a.346.346 0 0 1-.217-.615l8.216-6.636a.346.346 0 1 1 .434.54l-7.454 6.019h5.341a.346.346 0 1 1 0 .692zM10.567 21.449H8.412a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM23.886 21.449h-7.704a.346.346 0 1 1 0-.692h6.725l-7.454-6.02a.346.346 0 1 1 .434-.538l8.216 6.635a.346.346 0 0 1-.217.615zM19.735 11.17a.346.346 0 0 1-.346-.345V.692H4.859v10.133a.346.346 0 1 1-.692 0V.345c0-.19.155-.345.346-.345h15.222c.19 0 .346.155.346.346v10.479a.346.346 0 0 1-.346.346z"/>
                            <path d="M16.967 3.805H7.281a.346.346 0 0 1 0-.691h9.686a.346.346 0 1 1 0 .691zM16.967 6.573H7.281a.346.346 0 1 1 0-.692h9.686a.346.346 0 1 1 0 .692zM16.967 9.34H7.281a.346.346 0 0 1 0-.691h9.686a.346.346 0 1 1 0 .692z"/>
                        </g>
                    </svg>
                </td>
                <td>In-Transit <br />
                <span className="text-primary">15162718171615</span></td>
                <td>NA</td>
            </tr>
            <tr>
                <td>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.52 0A11.52 11.52 0 0 0 1.44 17.074L0 23.04l5.822-1.507A11.52 11.52 0 1 0 11.52 0zm0 22.08a10.56 10.56 0 0 1-5.38-1.474l-.174-.105-4.608 1.18 1.1-4.742-.101-.173a10.56 10.56 0 1 1 9.163 5.314z" fill="#505050" fill-rule="nonzero"/>
                    </svg>
                </td>
                <td>Delivered</td>
                <td>NA</td>
            </tr>
            <tr>
                <td>
                    <svg width="26" height="20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#505050" fill-rule="nonzero">
                            <path d="M0 0v14.58a4.86 4.86 0 0 0 4.86 4.86h16.2a4.86 4.86 0 0 0 4.86-4.86V0H0zm24.84 14.58a3.78 3.78 0 0 1-3.78 3.78H4.86a3.78 3.78 0 0 1-3.78-3.78V1.08h23.76v13.5z"/>
                            <path d="m22.94 4.142-.724-.8-9.256 8.349-9.202-8.338-.723.8 9.925 8.996z"/>
                        </g>
                    </svg>
                </td>
                <td>Delivered</td>
                <td>
                    <Link onClick={() => setLgShow(true)}>Response Received</Link>                                
                </td>
            </tr>
            <tr>
                <td>
                    <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#505050" fill-rule="nonzero">
                            <path d="M12.96 0A12.96 12.96 0 0 0 1.62 19.208L0 25.92l6.55-1.696A12.96 12.96 0 1 0 12.96 0zm0 24.84c-2.13 0-4.22-.573-6.053-1.658l-.195-.119-5.184 1.329 1.237-5.335-.114-.195A11.88 11.88 0 1 1 12.96 24.84z"/>
                            <path d="M8.586 14.894a16.588 16.588 0 0 0 5.518 4.322c.807.382 1.886.836 3.088.914.074.003.145.006.22.006.807 0 1.455-.278 1.983-.852.003-.003.01-.01.013-.016.188-.227.402-.431.625-.648.152-.146.308-.298.457-.454.69-.719.69-1.633-.007-2.33l-1.947-1.946c-.33-.344-.726-.525-1.14-.525-.415 0-.813.181-1.154.521l-1.16 1.16a6.164 6.164 0 0 0-.32-.168 4.007 4.007 0 0 1-.357-.195c-1.056-.67-2.015-1.545-2.932-2.67-.463-.586-.774-1.078-.991-1.58.304-.276.59-.564.865-.846.097-.1.197-.201.298-.302.35-.35.538-.754.538-1.166 0-.411-.185-.816-.538-1.166l-.966-.966c-.113-.113-.22-.223-.33-.337-.214-.22-.438-.447-.658-.651-.334-.327-.726-.499-1.14-.499-.412 0-.807.172-1.154.502L6.185 6.214c-.44.44-.69.975-.742 1.594-.061.774.081 1.597.45 2.592.568 1.539 1.423 2.968 2.693 4.494zM6.234 7.876c.039-.43.204-.79.515-1.102L7.954 5.57c.188-.181.396-.275.597-.275.197 0 .398.094.583.282.217.2.42.411.641.635l.337.343.966.966c.2.2.304.405.304.606 0 .2-.103.405-.304.605-.1.1-.201.205-.302.305-.3.305-.583.593-.894.868l-.016.017c-.269.268-.227.524-.162.719l.01.026c.25.6.596 1.17 1.137 1.85.972 1.199 1.996 2.128 3.123 2.844.14.091.289.162.428.234.13.065.25.126.356.194l.036.02c.107.055.21.08.314.08.26 0 .428-.165.483-.22l1.212-1.211c.188-.188.392-.289.593-.289.246 0 .447.152.573.289l1.954 1.95c.389.389.386.81-.01 1.221-.136.146-.278.286-.43.431-.227.22-.464.448-.678.703-.372.402-.816.59-1.39.59-.055 0-.113-.003-.168-.006-1.063-.068-2.051-.483-2.793-.836a15.759 15.759 0 0 1-5.252-4.115c-1.209-1.455-2.022-2.81-2.56-4.26-.334-.892-.46-1.608-.408-2.259z"/>
                        </g>
                    </svg>
                </td>
                <td>Not Delivered</td>
                <td>Invalid Number</td>
            </tr>
        </tbody>
    </table>
</div>
<div className="col-md-4">
    <div className="action-box">
        <label htmlFor="dropdown-basic" className="col-form-label mb-2">Action</label>
        <Dropdown className="dropdown-s2">
            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                Select <img src={Arrow} alt="Sort" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="select-style-dropdown">
                <Dropdown.Item>Download POD</Dropdown.Item>
                <Dropdown.Item>View Notice</Dropdown.Item>
                <Dropdown.Item>Initiate Litigation</Dropdown.Item>
                <Dropdown.Item>Re-issue Notice</Dropdown.Item>
                <Dropdown.Item>Reply to Respondent</Dropdown.Item>
                <Dropdown.Item>Re-initiate Collection</Dropdown.Item>
                <Dropdown.Item>File FIR</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>                         
    </div>
</div>
<hr className="mt-4 mb-4" />
</div>


<div className="row d-flex justify-between legal-notices-listing" data-aos="fade-up" data-aos-duration="800">
<div className="col-md-4">
    <div className="d-flex align-start">
        <Checkbox
            className="me-3"
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <div>
            <p className="text-primary mb-2 tx-16"><a><strong>Atul Setu (124516716)</strong></a></p>
            <p>Batch No. - <span className="text-black">ABC516A</span></p>
            <hr />
            <p>Product - <span className="text-black">Two Wheeler</span><br />
                <span className="text-black">Rs. 45,1671</span><br />
                <span className="text-black">180 + Days</span></p>
            <hr />
            <p>Notice Type - <b>138 Notice</b></p>
        </div>
    </div>
</div>
<div className="col-md-4">
    <table className="table table-bordered table-striped w-auto">
        <tbody>
            <tr>
                <td>
                    <svg width="25" height="22" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#505050" fill-rule="nonzero">
                            <path d="M14.452 21.449h-2.155a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM6.682 21.449H.362a.346.346 0 0 1-.346-.346V7.106a.346.346 0 1 1 .692 0v13.65h5.974a.346.346 0 1 1 0 .693zM10.567 21.449H8.412a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM23.886 21.449h-7.704a.346.346 0 1 1 0-.692h7.358V7.106a.346.346 0 0 1 .692 0v13.997a.346.346 0 0 1-.346.346z"/>
                            <path d="M.362 7.452a.346.346 0 0 1-.218-.615l4.15-3.363a.347.347 0 1 1 .437.539L.58 7.376a.346.346 0 0 1-.218.076zM23.886 7.452a.346.346 0 0 1-.217-.077l-4.152-3.363a.346.346 0 1 1 .436-.538l4.151 3.363a.346.346 0 0 1-.218.615z"/>
                            <path d="M12.124 16.57a4.49 4.49 0 0 1-3.002-1.148L.132 7.363a.346.346 0 1 1 .46-.513l8.992 8.057a3.805 3.805 0 0 0 5.08 0l8.991-8.057a.346.346 0 0 1 .462.515l-8.991 8.057a4.49 4.49 0 0 1-3.002 1.149zM14.452 21.449h-2.155a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692z"/>
                            <path d="M6.682 21.449H.362a.346.346 0 0 1-.217-.615l8.216-6.636a.346.346 0 1 1 .434.54l-7.454 6.019h5.341a.346.346 0 1 1 0 .692zM10.567 21.449H8.412a.346.346 0 1 1 0-.692h2.155a.346.346 0 1 1 0 .692zM23.886 21.449h-7.704a.346.346 0 1 1 0-.692h6.725l-7.454-6.02a.346.346 0 1 1 .434-.538l8.216 6.635a.346.346 0 0 1-.217.615zM19.735 11.17a.346.346 0 0 1-.346-.345V.692H4.859v10.133a.346.346 0 1 1-.692 0V.345c0-.19.155-.345.346-.345h15.222c.19 0 .346.155.346.346v10.479a.346.346 0 0 1-.346.346z"/>
                            <path d="M16.967 3.805H7.281a.346.346 0 0 1 0-.691h9.686a.346.346 0 1 1 0 .691zM16.967 6.573H7.281a.346.346 0 1 1 0-.692h9.686a.346.346 0 1 1 0 .692zM16.967 9.34H7.281a.346.346 0 0 1 0-.691h9.686a.346.346 0 1 1 0 .692z"/>
                        </g>
                    </svg>
                </td>
                <td>Not Dispatched</td>
                <td>NA</td>
            </tr>
            <tr>
                <td>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.52 0A11.52 11.52 0 0 0 1.44 17.074L0 23.04l5.822-1.507A11.52 11.52 0 1 0 11.52 0zm0 22.08a10.56 10.56 0 0 1-5.38-1.474l-.174-.105-4.608 1.18 1.1-4.742-.101-.173a10.56 10.56 0 1 1 9.163 5.314z" fill="#505050" fill-rule="nonzero"/>
                    </svg>
                </td>
                <td>Delivered</td>
                <td>NA</td>
            </tr>
            <tr>
                <td>
                    <svg width="26" height="20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#505050" fill-rule="nonzero">
                            <path d="M0 0v14.58a4.86 4.86 0 0 0 4.86 4.86h16.2a4.86 4.86 0 0 0 4.86-4.86V0H0zm24.84 14.58a3.78 3.78 0 0 1-3.78 3.78H4.86a3.78 3.78 0 0 1-3.78-3.78V1.08h23.76v13.5z"/>
                            <path d="m22.94 4.142-.724-.8-9.256 8.349-9.202-8.338-.723.8 9.925 8.996z"/>
                        </g>
                    </svg>
                </td>
                <td>Delivered</td>
                <td>No Response</td>
            </tr>
            <tr>
                <td>
                    <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#505050" fill-rule="nonzero">
                            <path d="M12.96 0A12.96 12.96 0 0 0 1.62 19.208L0 25.92l6.55-1.696A12.96 12.96 0 1 0 12.96 0zm0 24.84c-2.13 0-4.22-.573-6.053-1.658l-.195-.119-5.184 1.329 1.237-5.335-.114-.195A11.88 11.88 0 1 1 12.96 24.84z"/>
                            <path d="M8.586 14.894a16.588 16.588 0 0 0 5.518 4.322c.807.382 1.886.836 3.088.914.074.003.145.006.22.006.807 0 1.455-.278 1.983-.852.003-.003.01-.01.013-.016.188-.227.402-.431.625-.648.152-.146.308-.298.457-.454.69-.719.69-1.633-.007-2.33l-1.947-1.946c-.33-.344-.726-.525-1.14-.525-.415 0-.813.181-1.154.521l-1.16 1.16a6.164 6.164 0 0 0-.32-.168 4.007 4.007 0 0 1-.357-.195c-1.056-.67-2.015-1.545-2.932-2.67-.463-.586-.774-1.078-.991-1.58.304-.276.59-.564.865-.846.097-.1.197-.201.298-.302.35-.35.538-.754.538-1.166 0-.411-.185-.816-.538-1.166l-.966-.966c-.113-.113-.22-.223-.33-.337-.214-.22-.438-.447-.658-.651-.334-.327-.726-.499-1.14-.499-.412 0-.807.172-1.154.502L6.185 6.214c-.44.44-.69.975-.742 1.594-.061.774.081 1.597.45 2.592.568 1.539 1.423 2.968 2.693 4.494zM6.234 7.876c.039-.43.204-.79.515-1.102L7.954 5.57c.188-.181.396-.275.597-.275.197 0 .398.094.583.282.217.2.42.411.641.635l.337.343.966.966c.2.2.304.405.304.606 0 .2-.103.405-.304.605-.1.1-.201.205-.302.305-.3.305-.583.593-.894.868l-.016.017c-.269.268-.227.524-.162.719l.01.026c.25.6.596 1.17 1.137 1.85.972 1.199 1.996 2.128 3.123 2.844.14.091.289.162.428.234.13.065.25.126.356.194l.036.02c.107.055.21.08.314.08.26 0 .428-.165.483-.22l1.212-1.211c.188-.188.392-.289.593-.289.246 0 .447.152.573.289l1.954 1.95c.389.389.386.81-.01 1.221-.136.146-.278.286-.43.431-.227.22-.464.448-.678.703-.372.402-.816.59-1.39.59-.055 0-.113-.003-.168-.006-1.063-.068-2.051-.483-2.793-.836a15.759 15.759 0 0 1-5.252-4.115c-1.209-1.455-2.022-2.81-2.56-4.26-.334-.892-.46-1.608-.408-2.259z"/>
                        </g>
                    </svg>
                </td>
                <td>Not Delivered</td>
                <td>No Response</td>
            </tr>
        </tbody>
    </table>
</div>
<div className="col-md-4">
    <div className="action-box">
        <label htmlFor="dropdown-basic" className="col-form-label mb-2">Action</label>
        <Dropdown className="dropdown-s2">
            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                Select <img src={Arrow} alt="Sort" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="select-style-dropdown">
                <Dropdown.Item>Download POD</Dropdown.Item>
                <Dropdown.Item>View Notice</Dropdown.Item>
                <Dropdown.Item>Initiate Litigation</Dropdown.Item>
                <Dropdown.Item>Re-issue Notice</Dropdown.Item>
                <Dropdown.Item>Reply to Respondent</Dropdown.Item>
                <Dropdown.Item>Re-initiate Collection</Dropdown.Item>
                <Dropdown.Item>File FIR</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>                         
    </div>
</div>
<hr className="mt-4 mb-4" />
</div> */}