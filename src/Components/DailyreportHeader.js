import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Sort from '../Static/RawImages/sort.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

function DailyreportHeader() {

    //Modal
    const [smShow, setSmShow] = useState(false);
    const [ShowFilterPage, setShowFilterPage] = useState(false)
    const [BulkReport,setBulkReport] = useState(null);
    

    const downloadBulkReport = () =>{
        axios.get("dashboard/api/downlaod-daily-report/").then((res)=>{
            console.log(res.data.file_url)
            setBulkReport(res.data.file_url)
            document.getElementById("downloadBulkReport").click();
        }).catch(err=>{
            console.log(err)
        })
    }

    
    return (
        <>
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
                         Sort
                    </button>                 
                </div>
                <div className="col-md-12 col-lg-6 pt-3 pt-lg-0 text-end">
                    <Button variant="primary" size="lg" onClick={downloadBulkReport}>
                        <svg width="16" height="17" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#FFF" fill-rule="evenodd">
                                <path d="M.202 11.702a.7.7 0 0 1 1.401 0v2.1a.7.7 0 0 0 .7.7h9.806a.7.7 0 0 0 .7-.7v-2.1a.7.7 0 0 1 1.401 0v2.1a2.1 2.1 0 0 1-2.1 2.1H2.303a2.1 2.1 0 0 1-2.102-2.1v-2.1z"/>
                                <path d="M9.513 7.706a.7.7 0 0 1 .99.99l-2.801 2.8a.7.7 0 0 1-.99 0l-2.802-2.8a.7.7 0 1 1 .99-.99l2.306 2.306 2.307-2.306z"/>
                                <path d="M6.506 1.2a.7.7 0 0 1 1.4 0v9.802a.7.7 0 0 1-1.4 0V1.2z"/>
                            </g>
                        </svg>
                        Download Bulk Report
                    </Button>                    
                </div>

                    <a id="downloadBulkReport" className="d-none" href={BulkReport} ></a>
             

                {ShowFilterPage &&
                    <div className="collection_batch_extra">
                        <div className="collection_batch_filter_page">
                            <h6>Filter</h6>
                            <div className="collection_batch_filter_page_search">
                                <input
                                    type="text"
                                    name="" id=""
                                    placeholder="search by file name"
                                />
                            </div>
                            <div className="collection_batch_filter_number">

                                <div className="">
                                    <label htmlFor="c_b_filter_number">Search by Batch Number</label>
                                    <input type="number" name="" id="c_b_filter_number" />
                                </div>
                                <div className="">
                                    <label htmlFor="c_b_filter_number">Product/Portfolio</label>
                                    <select name="" id="">
                                        <option value="" selected disabled hidden>Select</option>
                                        <option value="">none</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label htmlFor="c_b_filter_number">Overdue Bucket</label>
                                    <select name="" id="">
                                        <option value="" selected disabled hidden>Select</option>
                                        <option value="">none</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label htmlFor="c_b_filter_number">Last Disposition</label>
                                    <select name="" id="">
                                        <option value="" selected disabled hidden>Select</option>
                                        <option value="">none</option>
                                    </select>

                                </div>
                            </div>

                            <div className="collection_batch_filter_loan">
                                <div>
                                    <label>Loan Account Range</label>
                                    <input className="collection_batch_filter_date_input" type="date" name="" id="" />
                                    <input className="collection_batch_filter_date_input" type="date" name="" id="" />
                                </div>
                                <div>
                                    <label>Status</label>
                                    <select name="" id="">
                                        <option value="" selected disabled hidden>Select</option>
                                        <option value="">none</option>
                                    </select>
                                </div>
                            </div>

                            <div className="collection_batch_filter_date">

                                <p>Search by Date</p>
                                <div className="">
                                    <div className="">
                                        <input type="radio" name="filterByDate" id="filterByDate1" />
                                        <label htmlFor="filterByDate1">Date Between</label>
                                    </div>
                                    <input className="collection_batch_filter_date_input" type="date" name="" id="" />
                                    <input className="collection_batch_filter_date_input" type="date" name="" id="" />
                                </div>

                                <div className="">
                                    <div className="">
                                        <input type="radio" name="filterByDate" id="filterByDate2" />
                                        <label htmlFor="filterByDate1">Specific Date</label>
                                    </div>
                                    <input type="date" name="" id="" className="collection_batch_filter_date_input" />
                                </div>
                            </div>

                            <div className="collection_batch_filter_footer">
                                <Button variant="secondary" onClick={() => setShowFilterPage(false)}>Close</Button>
                                <Button variant="primary" onClick={() => setShowFilterPage(false)}>Apply</Button>
                            </div>

                        </div>
                    </div>
                }

            </div>
            <hr className="mt-4 mb-4" />

            {/* Filter Popup */}
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
                    <form className="mt-2">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label for="Batch" className="col-form-label pt-0">Batch</label>
                                <select id="Batch" className="form-select">
                                    <option selected>Select</option>
                                    <option>Batch 1</option>
                                    <option>Batch 2</option>
                                    <option>Batch 3</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="Category" className="col-form-label pt-0">Category</label>
                                <select id="Category" className="form-select">
                                    <option selected>Select</option>
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                    <option>Category 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3 grey-bg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label for="wise" className="col-form-label pt-2">%wise</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" id="wise"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-5">
                                        <label for="value_wise" className="col-form-label pt-2">Value Wise</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="value_wise"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="mb-2 row">
                                <label for="Product" className="col-md-3 col-form-label">Product</label>
                                <div className="col-md-5">
                                    <select id="Product" className="form-select">
                                        <option selected>Select</option>
                                        <option>Product 1</option>
                                        <option>Product 2</option>
                                        <option>Product 3</option>
                                    </select>
                                </div>
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
                                        <div className="col-md-6 mb-lg-0 mb-2">
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
                                        <option>12/03/2021</option>
                                        <option>30/03/2021</option>
                                        <option>15/03/2021</option>
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
        </>
    )
}

export default DailyreportHeader
