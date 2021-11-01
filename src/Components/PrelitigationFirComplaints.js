import React from 'react'
import axios from 'axios'
import XLSX from 'xlsx'
import { useState, useEffect } from 'react'
import { parameters } from '../parameters'
import Sort from '../Static/RawImages/sort.png'
import Excel from '../Static/Images/excel.svg'
import Rotate from '../Static/RawImages/rotate.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { VscLoading } from 'react-icons/vsc'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Download from '../Static/RawImages/download.png'
import Fileplus from '../Static/RawImages/file-plus-dark.png'
import AxiosCalls from '../AxiosCalls'


function PrelitigationLegalNoticesHeader(props) {
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
                <Dropdown className="bulk-action">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style-two">
                        Select Option for Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="select-style-dropdown-two">
                        <Dropdown.Item href=""><span><img src={Download} alt="Download" /></span> Download Complaint Copy</Dropdown.Item>
                        <Dropdown.Item href=""><span><img src={Fileplus} alt="Issue Legal Notice" /></span> Initiate Litigation</Dropdown.Item>
                        <Dropdown.Item href=""><span><img src={Rotate} alt="Communication" /></span> Re-initiate Collection</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
        </div>
    )
}

export default PrelitigationLegalNoticesHeader