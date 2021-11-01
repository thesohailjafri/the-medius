import React from 'react'
import { useState, useEffect } from 'react'
import { parameters, dummynames } from '../../parametersPrelitigation'
import Sort from '../../Static/RawImages/sort.png'
import Excel from '../../Static/Images/excel.svg'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { VscLoading } from 'react-icons/vsc'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { MultiSelect } from "react-multi-select-component"
import { downloadPreBatchReport, postPreLitiBatchData } from '../../API'
import { handleHeaderName, HeaderNameUpdateHandler, fieldMatcher } from '../../Functions/batchUploadHandler'

import PreFormInputs from './precomps/PreFormInputs'
import PreHeaderButtons from './precomps/PreHeaderButtons'
import PreMatcher from './precomps/PreMatcher'
import PreTabs from './precomps/PreTabs'
import BatchFilter from './precomps/BatchFilter'

function PrelitigationFirBatchHeader({
    HitReload,
    setHitReload,
    setSearchParameter,
    setCurrentPage,
    StorePrevFilter,
    ArrayIds
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
    const [downloadReportLink, setDownloadReportLink] = useState()
    const [noticeType, setNoticeType] = useState(null)
    const [commicationMode, setCommicationMode] = useState([])
    const [noticeLanguage, setNoticeLanguage] = useState(null)
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


    //Modal
    const [smShow, setSmShow] = useState(false)
    const [lgShow, setLgShow] = useState(false)

    const exportColumns = async () => {
        try {
            let _commicationMode = commicationMode
            _commicationMode = _commicationMode.map(val => { return val.value })
            let formData = new FormData()

            console.log({
                "headers": JSON.stringify(UploadHeaders),
                "batch_file": BatchFile,
                "batch_name": FileName,
            })

            formData.append("batch_file", BatchFile)
            formData.append("batch_name", FileName)
            formData.append("notice_type", noticeType)
            formData.append("notice_language", noticeLanguage)
            console.log(_commicationMode)
            formData.append("communication_mode", JSON.stringify(_commicationMode))
            formData.append("column_rename_data", JSON.stringify(UploadHeaders))

            console.log('running', HeaderNameMatched)
            const res = await postPreLitiBatchData(formData)
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



    const downloadReport = async () => {
        console.log(await downloadPreBatchReport())
    }

    return (

        <div className="row d-flex d-wrap justify-between filter-section">
            <PreHeaderButtons
                setSmShow={setSmShow}
                Sort={Sort}
                downloadReport={downloadReport}
                setLgShow={setLgShow}
                setSortAsc={setSortAsc}
                setSearchParameter={setSearchParameter}
                SortAsc={SortAsc}
                StorePrevFilte={StorePrevFilter}
            />
            {
                downloadReportLink ? <a href={downloadReportLink} className="d-none"></a> : ""
            }
            <BatchFilter
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
                                {/*<p>This will show After click Import <br />https://riturajsrivastava589008.invisionapp.com/console/share/ME2VTOXFS8/719352747</p>

                                <PreTabs />

                                <p>This will show After click Import end HTML here</p>*/}

                                <div className="d-flex import-step align-center content-center mt-3">
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
                                                <PreMatcher
                                                    HeaderNameMatched={HeaderNameMatched}
                                                    setHeaderNameMatched={setHeaderNameMatched}
                                                    UploadHeaders={UploadHeaders}
                                                    setUploadHeaders={setUploadHeaders}
                                                    HeaderName={HeaderName}
                                                />

                                        }
                                    </>
                                    :
                                    <>
                                        <PreFormInputs
                                            noticeType={noticeType}
                                            setNoticeType={setNoticeType}
                                            noticeLanguage={noticeLanguage}
                                            commicationMode={commicationMode}
                                            setCommicationMode={setCommicationMode}
                                            setNoticeLanguage={setNoticeLanguage}
                                            handleHeaderName={handleHeaderName}
                                            parameters={parameters}
                                            setProgressBar={setProgressBar}
                                            setFileName={setFileName}
                                            setOnImportPage={setOnImportPage}
                                            setHeaderName={setHeaderName}
                                            setHeaderNameMatched={setHeaderNameMatched}
                                            setUploadHeaders={setUploadHeaders}
                                            setBatchFile={setBatchFile}
                                            HeaderNameMatched={HeaderNameMatched}
                                        />
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
                                setCommicationMode([])
                                setNoticeLanguage(null)
                                setNoticeType(null)
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
                            setNoticeLanguage(null)
                            setNoticeType(null)
                            setCommicationMode([])
                        }}>Cancel</Button>
                </Modal.Footer>
            </Modal>
            {/**/}
        </div>
    )
}

export default PrelitigationFirBatchHeader