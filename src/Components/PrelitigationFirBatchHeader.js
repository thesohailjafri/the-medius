import React from 'react'
import axios from 'axios'
import XLSX from 'xlsx'
import AxiosCalls from '../AxiosCalls'

import { useState, useEffect } from 'react'
import { parameters } from '../parameters'
import Sort from '../Static/RawImages/sort.png'
import Excel from '../Static/Images/excel.svg'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { VscLoading } from 'react-icons/vsc'
import { MultiSelect } from "react-multi-select-component"


function PrelitigationBatchHeader(props) {
    const [OnImportPage, setOnImportPage] = useState(false)
    const [OnLoadPage, setOnLoadPage] = useState(true)
    const [BatchFile, setBatchFile] = useState(null)
    const [ProgressBar, setProgressBar] = useState(0)
    const [HeaderNameMatched, setHeaderNameMatched] = useState({})
    const [HeaderName, setHeaderName] = useState([])
    const [FileName, setFileName] = useState('')
    const [IsUploading, setIsUploading] = useState(false)
    const [UploadHeaders, setUploadHeaders] = useState({})

    //Modal
    const [smShow, setSmShow] = useState(false)
    const [lgShow, setLgShow] = useState(false)

    //export matched columns
    const exportColumns = async () => {
        try {
            // let _HeaderNameMatched = HeaderNameMatched
            // _HeaderNameMatched.MORAT_TYPE = "morat_type"
            // // _HeaderNameMatched.client = localStorage.getItem('medius_x_clientId')
            // console.log(_HeaderNameMatched)
            // setHeaderNameMatched(_HeaderNameMatched)
            let formData = new FormData()
            formData.append("batch_file", BatchFile)
            formData.append("batch_name", FileName)
            formData.append("column_rename_data", JSON.stringify(UploadHeaders))

            console.log('running', HeaderNameMatched)
            const res = await axios.post(AxiosCalls.uploadBatch, formData)
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


    const [Communication, setCommunication] = useState([])
    const optionsCommunication = [
        { label: "Postal", value: "Postal" },
        { label: "Whatsapp", value: "Whatsapp" },
        { label: "Email", value: "Email" },
        { label: "SMS", value: "SMS" },
    ]


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
                <button className="btn btn-outline-primary btn-lg">
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
                                <div className="pt-4 d-flex import-step align-center content-center">
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
                                                                            <div className="form-control text-start tx-readonly">{index}</div>
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
                                                        {/* <div className="row mb-3">
                                                            <div className="col-md-12">
                                                                <label for="Batch" className="col-form-label pt-0">Police Station</label>
                                                                <select id="Batch" className="form-select form-select-s2">
                                                                    <option>Select</option>
                                                                    <option>Police Station</option>
                                                                    <option>Police Station</option>
                                                                    <option>Police Station</option>
                                                                </select>
                                                            </div>
                                                        </div> */}
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

export default PrelitigationBatchHeader