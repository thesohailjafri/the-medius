import React from 'react'
import axios from 'axios'
import AxiosCalls from '../AxiosCalls'
import XLSX from 'xlsx'

import { useState, useEffect } from 'react'
import { parameters,dummynames } from '../parametersPrelitigation'
import Sort from '../Static/RawImages/sort.png'
import Excel from '../Static/Images/excel.svg'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { VscLoading } from 'react-icons/vsc'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { MultiSelect } from "react-multi-select-component"
import { downloadPreBatchReport } from '../API'



function PrelitigationFirBatchHeader(props) {
    const [OnImportPage, setOnImportPage] = useState(false)
    const [OnLoadPage, setOnLoadPage] = useState(true)
    const [BatchFile, setBatchFile] = useState(null)
    const [ProgressBar, setProgressBar] = useState(0)
    const [HeaderNameMatched, setHeaderNameMatched] = useState({})
    const [HeaderName, setHeaderName] = useState([])
    const [FileName, setFileName] = useState('')
    const [IsUploading, setIsUploading] = useState(false)
    const [UploadHeaders, setUploadHeaders] = useState({})
    const [downloadReportLink,setDownloadReportLink] = useState();

    //Modal
    const [smShow, setSmShow] = useState(false)
    const [lgShow, setLgShow] = useState(false)

    //export matched columns
    const exportColumns = async () => {
        try {
             let _HeaderNameMatched = HeaderNameMatched
            // _HeaderNameMatched.MORAT_TYPE = "morat_type"
            // // _HeaderNameMatched.client = localStorage.getItem('medius_x_clientId')
             console.log(_HeaderNameMatched)
            // setHeaderNameMatched(_HeaderNameMatched)
            let formData = new FormData()
            formData.append("batch_file", BatchFile)
            formData.append("batch_name", FileName)
            formData.append("column_rename_data", JSON.stringify(UploadHeaders))

            console.log('running', HeaderNameMatched)
            const res = await axios.post(AxiosCalls.uploadPreBatch, formData)
            if (res) {
                props.setHitReload(!props.HitReload)
                setIsUploading(false)
                setLgShow(false)
            }

        } catch (error) {
            console.log({ error })
        }
    }

    //parse headers
    const handleFile = (file) => {
        return new Promise((resolve, reject) => {
            if (!file) {
                reject('file not provided')
            }

            if (file) {
                let data
                const reader = new FileReader()
                reader.onload = (e) => {
                    /* Parse data */
                    const ab = e.target.result
                    const wb = XLSX.read(ab, { type: 'array' })
                    /* Get first worksheet */
                    const wsname = wb.SheetNames[0]
                    const ws = wb.Sheets[wsname]
                    /* Convert array of arrays */
                    data = XLSX.utils.sheet_to_json(ws, { header: 1 })
                    /* Update state */
                    resolve(data[0])
                    // console.log(make_cols(ws['!ref']))
                }
                reader.readAsArrayBuffer(file)
            }
        })
    }

    //parse HeaderName and assign them to HeaderName and HeaderNameMatched
    const handleHeaderName = async (file) => {
        setProgressBar(20)
        setFileName(file.name)
        // setOnLoadPage(false)
        setOnImportPage(true)
        setProgressBar(70)

        let _HeaderName = []
        let _HeaderNameMatched = {}
        let _UploadHeaders = {}

        handleFile(file).then((parsedHeader) => {
            console.log(parsedHeader)
            _HeaderName.push('Ignore This Field')
            parsedHeader.map(item => {
                return item && _HeaderName.push(item.trim())
            })
            return _HeaderName
        })
            .then((_HeaderName) => {

                let _copyHeader = _HeaderName.map(item => {
                    return item.replaceAll(' ', '')
                        .replaceAll(`-`, '')
                        .replaceAll(`_`, '')
                        .replaceAll(`(`, '')
                        .replaceAll(`)`, '')
                        .replaceAll(`[`, '')
                        .replaceAll(`]`, '')
                        .replaceAll(`+`, '')
                        .replaceAll(`.`, '')
                        .replaceAll(`&`, '')
                        .replaceAll(`*`, '')
                        .replaceAll(`"`, '')
                        .replaceAll(`'`, '')
                        .toLowerCase()
                })

                return _copyHeader
            })
            .then((_copyHeader) => {

                for (const [key, value] of Object.entries(parameters)) {

                    let doesFoundInHeader
                    let headerIndex
                    value.find(value_item => {

                        _copyHeader.map((header, index) => {
                            if (value_item === header) {
                                doesFoundInHeader = index
                                return null
                            }
                            headerIndex = index
                            return null
                        })

                        return doesFoundInHeader
                    })
                    let headValue = _HeaderName[doesFoundInHeader]
                    let headValue1 = _HeaderName[headerIndex]

                    if (doesFoundInHeader) {
                        _HeaderNameMatched[key] = headValue
                        _UploadHeaders[headValue] = key
                    } else {
                        _HeaderNameMatched[key] = null
                        _UploadHeaders[headValue1] = null
                    }

                }
                console.log({ _UploadHeaders })
                return ([setHeaderName(_HeaderName), setHeaderNameMatched(_HeaderNameMatched), setProgressBar(100), setUploadHeaders(_UploadHeaders)])
            })
    }
    //check if HeaderNameMatched contain filed
    const fieldMatcher = (item) => {
        const result = HeaderNameMatched[item]
        return result
    }

    //handel update header
    const HeaderNameUpdateHandler = (parameter, selectedValue) => {
        const equalBtn = document.getElementById(`equalBtn_${parameter}`)
        const notEqualBtn = document.getElementById(`notEqualBtn_${parameter}`)
        const checkbox = document.getElementById(`checkbox_${parameter}`)



        const _HeaderNameMatched = HeaderNameMatched

        if (selectedValue === 'Ignore This Field') {
            _HeaderNameMatched[parameter] = null
            equalBtn.style.display = 'none'
            notEqualBtn.style.display = 'block'
            checkbox.checked = false
            checkbox.labels[0].textContent = "Not Matched"
        }
        else {
            _HeaderNameMatched[parameter] = selectedValue
            equalBtn.style.display = 'block'
            notEqualBtn.style.display = 'none'
            checkbox.checked = true
            checkbox.labels[0].textContent = "Matched"
        }

        return setHeaderNameMatched(_HeaderNameMatched)
    }


    useEffect(() => {

    }, [HeaderName, HeaderNameMatched])

    const [selected, setSelected] = useState([])
    const options = [
        { label: "Arbitration Notice", value: "Arbitration-Notice" },
        { label: "Loan Recall Notice", value: "Loan_Recall" },
        { label: "Demand Notice", value: "Demand_Notice" },
        { label: "138 Notice", value: "138_Notice" },
        { label: "Sarfaesi / 13(2) Notice", value: "Sarfaesi" },
    ]

    const [Communication, setCommunication] = useState([])
    const optionsCommunication = [
        { label: "Postal", value: "Postal" },
        { label: "Whatsapp", value: "Whatsapp" },
        { label: "Email", value: "Email" },
        { label: "SMS", value: "SMS" },
    ]

    const downloadReport = async() => {
        console.log(await downloadPreBatchReport());
    }

    return (

        <div className="row d-flex d-wrap justify-between filter-section">
            <div className="col-md-12 col-lg-6 d-flex align-center">
                <Checkbox
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
                <button className="btn btn-secondary">
                    <img src={Sort} alt="Sort" />
                    Sort by
                </button>
            </div>

            <div className="col-md-12 col-lg-6 pt-3 pt-lg-0 text-end">
                <button className="btn btn-outline-primary btn-lg" onClick={() => downloadReport()}>
                    <svg width="16" height="17" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#000" fillRule="evenodd">
                            <path d="M.202 11.702a.7.7 0 0 1 1.401 0v2.1a.7.7 0 0 0 .7.7h9.806a.7.7 0 0 0 .7-.7v-2.1a.7.7 0 0 1 1.401 0v2.1a2.1 2.1 0 0 1-2.1 2.1H2.303a2.1 2.1 0 0 1-2.102-2.1v-2.1z" />
                            <path d="M9.513 7.706a.7.7 0 0 1 .99.99l-2.801 2.8a.7.7 0 0 1-.99 0l-2.802-2.8a.7.7 0 1 1 .99-.99l2.306 2.306 2.307-2.306z" />
                            <path d="M6.506 1.2a.7.7 0 0 1 1.4 0v9.802a.7.7 0 0 1-1.4 0V1.2z" />
                        </g>
                    </svg>
                    Download Bulk Batch File
                </button>
                <button className="btn btn-primary btn-lg ms-2" onClick={() => setLgShow(true)}>
                    <svg width="14" height="17" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#ffffff" fillRule="evenodd">
                            <path d="M.903 8.201a.7.7 0 0 1 1.4 0v5.601a.7.7 0 0 0 .701.7h8.405a.7.7 0 0 0 .7-.7v-5.6a.7.7 0 0 1 1.4 0v5.6a2.1 2.1 0 0 1-2.1 2.1H3.004a2.1 2.1 0 0 1-2.101-2.1v-5.6zM7.206 2.19 4.9 4.497a.7.7 0 0 1-.99-.99L6.71.706a.7.7 0 0 1 .99 0l2.802 2.8a.7.7 0 1 1-.99.99L7.206 2.19z" />
                            <path d="M6.506 1.2a.7.7 0 0 1 1.4 0v9.102a.7.7 0 0 1-1.4 0V1.2z" />
                        </g>
                    </svg>
                    Upload New Batch File
                </button>
            </div>
           {
               downloadReportLink ?  <a href={downloadReportLink} className="d-none"></a> : ""
           }
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-2 row modal-search">
                            <div className="col-md-12">
                                <input type="text" className="form-control" id="inputPassword" placeholder="Search by file name" />
                            </div>
                        </div>
                        <div className="grey-bg mb-2">
                            <div className="mb-2 row">
                                <label for="inputPassword" className="col-md-8 col-form-label">Search by Batch Number</label>
                                <div className="col-md-4">
                                    <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="inputState" className="col-md-5 col-form-label">Product/ Portfolio</label>
                                <div className="col-md-7">
                                    <select id="inputState" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="Bucket" className="col-md-5 col-form-label">Overdue Bucket</label>
                                <div className="col-md-7">
                                    <select id="Bucket" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="inputState" className="col-md-5 col-form-label">Last Disposition</label>
                                <div className="col-md-7">
                                    <select id="inputState" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="from" className="col-md-5 col-form-label">Loan Account Range</label>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="from" placeholder="From" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="to" placeholder="To" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="inputState" className="col-md-5 col-form-label">Status</label>
                            <div className="col-md-7">
                                <select id="inputState" className="form-select">
                                    <option selected>Select</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="grey-bg">
                            <div className="mb-2 row">
                                <label for="inputState" className="col-md-5 col-form-label">Search by Date</label>
                            </div>
                            <div className="mb-2 row">
                                <label for="gridRadios2" className="col-md-5 col-form-label"><input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios2" value="option2" /> Date Between</label>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="date" className="form-control" id="from" placeholder="From" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="date" className="form-control" id="to" placeholder="To" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <label for="gridRadios3" className="col-md-5 col-form-label"><input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios3" value="option2" /> Specific Date</label>
                                <div className="col-md-7">
                                    <select id="Bucket" className="form-select">
                                        <option selected>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSmShow(false)}>Close</Button>
                    <Button variant="primary" onClick={() => setSmShow(false)}>Apply</Button>
                </Modal.Footer>
            </Modal>

            {/**/}
            <Modal
                show={lgShow}
                onHide={() => setLgShow(false)}
                dialogClassName="modal-large"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Upload New Batch File
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="tab-m-body">
                    <div className="pt-0 pb-5 text-center upload-batch-popup">

                        {OnLoadPage &&

                            IsUploading ?
                            <Modal.Title id="example-custom-modal-styling-title">
                                <h1 style={{ height: '300px', display: 'grid', placeItems: 'center' }}> <span><VscLoading className='uploader' /> Uploading</span> </h1>
                            </Modal.Title>
                            :
                            <>
                                <p>This will show After click Import <br />https://riturajsrivastava589008.invisionapp.com/console/share/ME2VTOXFS8/719352747</p>

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
                                                        Legal Notice
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
                                                                <label for="Agent" className="col-md-5 col-form-label">Legal Notice</label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <form>
                                                        <div className="mb-2 row">
                                                            <div className="col-md-12">
                                                                <label for="Agent" className="col-md-5 col-form-label">Email</label>
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

                                <p>This will show After click Import end HTML here</p>
                                <div className="d-flex import-step align-center content-center">
                                    {/* className="import-step step-active content-center"  */}
                                    <div className={`import-step content-center ${ProgressBar < 100 ? 'step-active' : 'step-completed'}`}>
                                        {
                                            ProgressBar < 100 ?
                                                '01'
                                                :
                                                <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 0C7.626 0 0 7.626 0 17c0 9.374 7.626 17 17 17 9.374 0 17-7.626 17-17 0-9.374-7.626-17-17-17zm8.135 13.995-8.757 8.757a2.118 2.118 0 0 1-1.503.623 2.118 2.118 0 0 1-1.502-.623l-4.508-4.507a2.124 2.124 0 1 1 3.005-3.005l3.005 3.005 7.255-7.255a2.124 2.124 0 1 1 3.005 3.005z" fill="#409E7B" fill-rule="nonzero" />
                                                </svg>
                                        }

                                        <span>Import File</span>
                                    </div>
                                    <div className="import-step-sep"></div>
                                    <div className={`import-step content-center ${ProgressBar === 100 && 'step-active'}`}>
                                        02
                                        <span>Map Columns</span>
                                    </div>
                                </div>


                                {OnImportPage ?
                                    <>
                                        {
                                            ProgressBar < 100 ?
                                                <div className="progress-main text-start ps-5 pe-5 ms-5 me-5" >
                                                    <p className="mb-1">Uploading (75%)</p>
                                                    <div className="progress">
                                                        <div className="progress-bar w-75" id="file" value={ProgressBar} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">75%</div>
                                                    </div>
                                                </div>
                                                :
                                                <div className='batch-upload-main'>
                                                    <div className="batch-upload-field">
                                                        <div className="row mb-3">
                                                            <div className="col-md-6 ps-0 pe-0 text-start">
                                                                Column label htmlFor File
                                                            </div>
                                                            <div className="col-md-6 ps-0 pe-0 text-start">
                                                                Prospect Attributes
                                                            </div>
                                                        </div>

                                                        {Object.keys(parameters).map((item1, index) => {
                                                            let value = fieldMatcher(item1)
                                                            let checkState = value ? true : false
                                                            return (
                                                                <>
                                                                    <div key={item1} className="row mb-2">
                                                                        <div className="col-md-5 ps-0 pe-0">
                                                                            <div className="form-control text-start tx-readonly">{dummynames[item1]}</div>
                                                                        </div>
                                                                        <div className="col-md-1 ps-0 pe-0">
                                                                            {value ?
                                                                                <>
                                                                                    <div id={`equalBtn_${item1}`} style={{ opacity: '1' }} color={'#505050'} >
                                                                                        <div className="field-sep"></div>
                                                                                    </div>
                                                                                    <div id={`notEqualBtn_${item1}`} style={{ display: 'none', opacity: '0.25' }} color={'#505050'} >
                                                                                        <div className="field-sep"></div>
                                                                                    </div>
                                                                                </>
                                                                                :
                                                                                <>
                                                                                    <div id={`equalBtn_${item1}`} style={{ display: 'none' }} color={'#505050'} >
                                                                                        <div className="field-sep"></div>
                                                                                    </div>
                                                                                    <div id={`notEqualBtn_${item1}`} style={{ opacity: '0.25' }} color={'#505050'} >
                                                                                        <div className="field-sep"></div>
                                                                                    </div>

                                                                                </>}
                                                                        </div>
                                                                        <div className="col-md-4 ps-0 pe-0">

                                                                            <select
                                                                                className="form-select"
                                                                                name={item1}
                                                                                onChange={(e) => HeaderNameUpdateHandler(item1, e.target.value, e.target.selectedIndex)}
                                                                            >
                                                                                {HeaderName.map((item2) => {
                                                                                    return <option value={item2} selected={value === item2} >{item2} </option>
                                                                                })}
                                                                            </select>
                                                                        </div>

                                                                        <div className="col-md-2 ps-2 pe-0 text-start">
                                                                            <input
                                                                                type="checkbox"
                                                                                id={`checkbox_${item1}`}
                                                                                className="me-0"
                                                                                color="primary"
                                                                                checked={checkState}
                                                                                onClick={() => { document.getElementById(`checkbox_${item1}`).checked = false }}
                                                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                                            />
                                                                            <label htmlFor={`checkbox_${item1}`}>{value ? 'Matched' : 'Not Matched'}</label>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        })}
                                                    </div>

                                                </div>

                                        }
                                    </>
                                    :
                                    <>
                                        <div className="w-75 m-auto">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <form className="mt-2 text-start">
                                                        <div className="row mb-3">
                                                            <div className="col-md-12">
                                                                <label for="Batch" className="col-form-label pt-0">Type of Notice to be Issued</label>
                                                                <MultiSelect
                                                                    options={options}
                                                                    value={selected}
                                                                    onChange={setSelected}
                                                                    labelledBy="Select"
                                                                />
                                                                <p className="text-end text-primary fs-7"><strong>Check All Mandatory Fields</strong></p>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-12">
                                                                <label for="Batch" className="col-form-label pt-0">Communication Mode</label>
                                                                <MultiSelect
                                                                    options={optionsCommunication}
                                                                    value={Communication}
                                                                    onChange={setCommunication}
                                                                    labelledBy="Select"
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="import-excel-img mb-2">
                                                        <img src={Excel} alt="Excel" />
                                                    </div>
                                                    <input type="file" name="uploadFile" id="uploadFile"

                                                        style={{ opacity: '0' }}
                                                        onChange={(e) => {
                                                            handleHeaderName(e.target.files[0])
                                                            setBatchFile(e.target.files[0])
                                                        }}
                                                    /><br />
                                                    <label htmlFor="uploadFile" className="btn btn-primary btn-lg mb-2">Select excel file from your computer</label>
                                                    <p>You can upload only CSV or XLS file to import your inventory.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }
                            </>
                        }

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {OnImportPage &&
                        <Button
                            variant="primary"
                            className="collection_batch_upload_page_footer_import"
                            onClick={() => {

                                exportColumns()
                                setOnImportPage(false)
                                setOnLoadPage(true)
                                setProgressBar(0)

                                setHeaderNameMatched({})
                                setHeaderName([])
                            }
                            }>
                            Import
                        </Button>
                    }
                    <Button variant="secondary"
                        onClick={() => {
                            setOnImportPage(false)
                            setOnLoadPage(true)
                            setBatchFile(null)
                            setProgressBar(0)
                            setLgShow(false)
                            setHeaderNameMatched({})
                            setHeaderName([])
                            setFileName('')
                            setIsUploading(false)
                            setSmShow(false)
                            setLgShow(false)
                        }}>Cancel</Button>
                </Modal.Footer>
            </Modal>
            {/**/}
        </div>
    )
}

export default PrelitigationFirBatchHeader