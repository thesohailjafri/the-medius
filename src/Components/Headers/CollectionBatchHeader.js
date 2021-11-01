import React from 'react'
import { useState, useEffect, useRef } from 'react'
import checkAllBoxes from '../../Functions/checkAllboxes'
import ContentLoader from '../ContentLoader'
import { handleHeaderName, HeaderNameUpdateHandler, fieldMatcher } from '../../Functions/batchUploadHandler'
import { parameters, dummynames } from '../../parameters'
import { postBatchData } from '../../API'
import Sort from '../../Static/RawImages/sort.png'
import Excel from '../../Static/Images/excel.svg'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import BatchFilter from './colcomps/BatchFilter'

import LinearProgress from '@mui/material/LinearProgress'



function UploadBatch({
    StorePrevFilter,
    setSearchParameter,
    ArrayIds,
    HitReload,
    setHitReload
}) {
    const [OnImportPage, setOnImportPage] = useState(false)
    const [OnLoadPage, setOnLoadPage] = useState(true)
    const [BatchFile, setBatchFile] = useState(null)
    const [ProgressBar, setProgressBar] = useState(0)
    const [HeaderNameMatched, setHeaderNameMatched] = useState({})
    const [HeaderName, setHeaderName] = useState([])
    const [FileName, setFileName] = useState('')
    const [IsUploading, setIsUploading] = useState(false)
    const [UploadHeaders, setUploadHeaders] = useState({})
    const [SortAsc, setSortAsc] = useState(true)

    const [value, setValue] = React.useState(null)

    //Refs
    let refBatchName = null
    let refBatchId = null
    let refStatus = null
    let refDateFrom = null
    let refDateTo = null
    let refSpecificDate = null

    //Modal
    const [smShow, setSmShow] = useState(false)
    const [lgShow, setLgShow] = useState(false)

    //export matched columns
    const exportColumns = async () => {
        try {
            let formData = new FormData()
            formData.append("batch_file", BatchFile)
            formData.append("batch_name", FileName)
            console.log({ UploadHeaders })
            formData.append("column_rename_data", JSON.stringify(UploadHeaders))
            const res = await postBatchData(formData)
            if (res) {
                setHitReload(!HitReload)
                setIsUploading(false)
                setLgShow(false)
            }

        } catch (error) {
            console.log({ error })
        }
    }
    useEffect(() => {

    }, [HeaderName, HeaderNameMatched])


    return (

        <div className="row d-flex d-wrap justify-between filter-section">
            <div className="col-md-12 col-lg-6 d-flex align-center">
                <input
                    type="checkbox"
                    onClick={(e) => checkAllBoxes(ArrayIds, 'collection_batch_checkbox', e.target.checked)}
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
                <p className="mb-0 ms-3 tx-12 tx-grey">Ongoing data will be completed in <strong className="text-black">15 days</strong>.</p>
            </div>

            <div className="col-md-12 col-lg-6 pt-3 pt-lg-0 text-end">
                {/* <button className="btn btn-outline-primary btn-lg">
                    <svg width="16" height="17" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#000" fillRule="evenodd">
                            <path d="M.202 11.702a.7.7 0 0 1 1.401 0v2.1a.7.7 0 0 0 .7.7h9.806a.7.7 0 0 0 .7-.7v-2.1a.7.7 0 0 1 1.401 0v2.1a2.1 2.1 0 0 1-2.1 2.1H2.303a2.1 2.1 0 0 1-2.102-2.1v-2.1z" />
                            <path d="M9.513 7.706a.7.7 0 0 1 .99.99l-2.801 2.8a.7.7 0 0 1-.99 0l-2.802-2.8a.7.7 0 1 1 .99-.99l2.306 2.306 2.307-2.306z" />
                            <path d="M6.506 1.2a.7.7 0 0 1 1.4 0v9.802a.7.7 0 0 1-1.4 0V1.2z" />
                        </g>
                    </svg>
                    Download Bulk Batch File
                </button> */}
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

            <BatchFilter
                smShow={smShow}
                setSmShow={setSmShow}
                refBatchName={refBatchName}
                refBatchId={refBatchId}
                refStatus={refStatus}
                refDateFrom={refDateFrom}
                refDateTo={refDateTo}
                setSortAsc={setSortAsc}
                setSearchParameter={setSearchParameter}
                refSpecificDate={refSpecificDate}
            />

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
                <Modal.Body>
                    {
                        OnLoadPage &&



                        <div className="pt-3 pb-5 text-center upload-batch-popup">
                            {IsUploading && <ContentLoader />}

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

                                ProgressBar < 100 ?
                                    <div className="progress-main text-start ps-5 pe-5 ms-5 me-5" >
                                        <p className="mb-1">Uploading (75%)</p>
                                        <div className="progress">
                                            <div className="progress-bar w-75" id="file" value={ProgressBar} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">75%</div>
                                        </div>
                                        {/* <LinearProgress /> */}
                                    </div>
                                    :
                                    <div className='batch-upload-main'>
                                        <div className="batch-upload-field">
                                            <div className="row mb-3">
                                                <div className="col-md-6 ps-0 pe-0 text-start">
                                                    Prospect Attributes
                                                </div>
                                                <div className="col-md-6 ps-0 pe-0 text-start">
                                                    Column Label For File
                                                </div>
                                            </div>

                                            {Object.keys(parameters).map((item1, index) => {
                                                let value = fieldMatcher(item1, HeaderNameMatched)
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
                                                                    onChange={(e) => HeaderNameUpdateHandler(item1, e.target.value, HeaderNameMatched, setHeaderNameMatched, UploadHeaders, setUploadHeaders)}
                                                                >
                                                                    <option value={'Select From Option'} selected={!value} disabled hidden >Select From Options</option>
                                                                    {HeaderName.map((item2) => {
                                                                        return <option value={item2} selected={value === item2} >{item2} </option>
                                                                    })}
                                                                </select>
                                                            </div>

                                                            <div className="col-md-2 ps-2 pe-0 text-start d-inline-flex align-items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    id={`checkbox_${item1}`}
                                                                    className="me-2"
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
                                :
                                <>
                                    <div className="import-excel-img mb-2">
                                        <img src={Excel} alt="Excel" />
                                    </div>
                                    <input type="file" name="uploadFile" id="uploadFile"
                                        accept="
                                        .xlse,
                                        .xlsx,
                                        .xlsm,
                                        .xlsb,
                                        .xltx,
                                        .xltm,
                                        .xls,
                                        .xlt,
                                        .xls,
                                        .xlsb,
                                        .xml,
                                        .xlam,
                                        .xla,
                                        .xlw,
                                        .xlr,
                                        .csv"
                                        style={{ opacity: '0' }}
                                        onChange={(e) => {
                                            handleHeaderName(e.target.files[0], parameters, setProgressBar, setFileName, setOnImportPage, setHeaderName, setHeaderNameMatched, setUploadHeaders)
                                            setBatchFile(e.target.files[0])
                                            console.log({ HeaderNameMatched })
                                        }}
                                    /><br />
                                    <label htmlFor="uploadFile" className="btn btn-primary btn-lg mb-2">Select excel file from your computer</label>
                                    <p>You can upload in Excel, Binary Excel or CSV files.</p>
                                </>
                            }



                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    {(OnImportPage && ProgressBar === 100) &&
                        <Button
                            variant="primary"
                            className="collection_batch_upload_page_footer_import"
                            onClick={() => {

                                exportColumns()
                                setIsUploading(true)
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
                            // setIsUploading(false)
                            setSmShow(false)
                            setLgShow(false)
                        }}>Cancel</Button>
                </Modal.Footer>
            </Modal>
            {/**/}
        </div>
    )
}

export default UploadBatch