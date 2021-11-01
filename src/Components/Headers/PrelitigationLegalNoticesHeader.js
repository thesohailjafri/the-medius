import React from 'react'
import axios from 'axios'
import XLSX from 'xlsx'
import { useState, useEffect } from 'react'
import { parameters } from '../../parameters'
import Sort from '../../Static/RawImages/sort.png'
import Excel from '../../Static/Images/excel.svg'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { VscLoading } from 'react-icons/vsc'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Download from '../../Static/RawImages/download.png'
import Fileplus from '../../Static/RawImages/file-plus-dark.png'
import Police from '../../Static/RawImages/police.png'
import Comment from '../../Static/RawImages/comment-dark.png'
import Rotate from '../../Static/RawImages/rotate.png'
import Send from '../../Static/RawImages/send.png'
import RotateTwo from '../../Static/RawImages/rotate-two.png'
import Eye from '../../Static/RawImages/eye.png'
import BatchFilter2 from './precomps/BatchFilter2'


function PrelitigationLegalNoticesHeader({
    HitReload,
    setHitReload,
    setSearchParameter,
    setCurrentPage,
    StorePrevFilter,
    ArrayIds
}) {


    //Modal
    const [smShow, setSmShow] = useState(false)
    const [SortAsc, setSortAsc] = useState(true)

    //refs
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
                <button className="btn btn-secondary"
                    onClick={() => {
                        setSortAsc(!SortAsc)
                        let sort = SortAsc ? 'asc' : 'dsc'
                        console.log(sort)
                        setSearchParameter({ ...StorePrevFilter, sort })
                    }}
                >
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
                        <Dropdown.Item href=""><span><img src={Download} alt="Download" /></span> Download POD</Dropdown.Item>
                        <Dropdown.Item href=""><span><img src={Eye} alt="Eye" /></span> View Notice</Dropdown.Item>
                        <Dropdown.Item href=""><span><img src={Fileplus} alt="Issue Legal Notice" /></span> Initiate Litigation</Dropdown.Item>
                        <Dropdown.Item href=""><span><img src={RotateTwo} alt="Rotate" /></span> Re-issue Notice</Dropdown.Item>
                        <Dropdown.Item href=""><span><img src={Send} alt="Send" /></span> Reply to Respondent </Dropdown.Item>
                        <Dropdown.Item href=""><span><img src={Rotate} alt="Rotate" /></span> Re-initiate Collection</Dropdown.Item>
                        <Dropdown.Item href=""><span><img src={Police} alt="File FIR" /></span> File FIR</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

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

        </div>
    )
}

export default PrelitigationLegalNoticesHeader