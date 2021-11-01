import React, { useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { useState } from 'react'
//Componets
import AdminDispositionsHeader from '../../Components/Headers/AdminDispositionsHeader'

import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'

import { getDispositionWiseReport } from '../../API'

import DispoPercent from '../Components/dispositions/DispoPercent'

function AdminDispositions() {
    const [data, setData] = useState(null)
    const getData = useCallback(
        async () => {
            const res = await getDispositionWiseReport()
            setData(res)
        }, [])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <>
            <div className="admin-dashboard">
                <AdminDispositionsHeader />

                <div className="admin-dashboard-status mt-5 mb-5" data-aos="fade-up" data-aos-duration="800">
                    <div className="row">
                        <div className="col-lg-2 border-right-dash">
                            <div className="d-flex justify-between text-black pe-2">
                                <div>
                                    <h3 className="mb-1">23 Sep to 24 Sep</h3>
                                    <p className="mb-0">Date Range</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 border-right-dash">
                            <div className="d-flex justify-between text-black ps-3 pe-4">
                                <div>
                                    <h3 className="mb-1">3,627</h3>
                                    <p className="mb-0">Attempted</p>
                                </div>
                                <div>
                                    <h3 className="mb-1">3,627</h3>
                                    <p className="mb-0">Contected</p>
                                </div>
                                <div>
                                    <h3 className="mb-1">1,223</h3>
                                    <p className="mb-0">Missed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex justify-between text-black ps-4">
                                <div>
                                    <h3 className="mb-1">2,373</h3>
                                    <p className="mb-0">PTP</p>
                                </div>
                                <div>
                                    <h3 className="mb-1">14</h3>
                                    <p className="mb-0">Paid Receipts</p>
                                </div>
                                <div>
                                    <h3 className="mb-1">&#8377; 44k</h3>
                                    <p className="mb-0">Collection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dispo-table-detail pb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="border-box mb-2" data-aos="fade-up" data-aos-duration="1000">
                                <table className="w-100">
                                    <tr>
                                        <td colSpan="2" className="text-black"><strong>Type</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="w-75">New Calls</td>
                                        <td className="text-end text-black tx-14"><strong>60%</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="w-75">Followup Calls</td>
                                        <td className="text-end text-black"><strong>40%</strong></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="border-box" data-aos="fade-up" data-aos-duration="1000">
                                <table className="w-100">
                                    <tr>
                                        <td colSpan="2" className="text-black"><strong>Source</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="w-75">IVR</td>
                                        <td className="text-end text-black tx-14"><strong>10%</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="w-75">SMS</td>
                                        <td className="text-end text-black"><strong>20%</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="w-75">Outbound</td>
                                        <td className="text-end text-black"><strong>20%</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="w-75">WhatsApp</td>
                                        <td className="text-end text-black"><strong>50%</strong></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="border-box progress-table p-0 me-3 ms-3" data-aos="fade-up" data-aos-duration="1200">
                                <DispoPercent data={data} />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="border-box progress-table p-0 me-3 ms-3" data-aos="fade-up" data-aos-duration="1200">
                                <table className="w-100 table table-striped mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="ps-3 pe-4"><strong>Agents (6)</strong></td>
                                            <td className="ps-3 pe-4"><strong>Calls</strong></td>
                                            <td className="ps-3 pe-4"><strong>Chat</strong></td>
                                        </tr>
                                        <tr>
                                            <td className="ps-3 pe-4 txc-50">BOT</td>
                                            <td className="ps-3 pe-4 text-black">30%</td>
                                            <td className="ps-3 pe-4 text-black">50%</td>
                                        </tr>
                                        <tr>
                                            <td className="ps-3 pe-4 txc-50">Vivek</td>
                                            <td className="ps-3 pe-4 text-black">30%</td>
                                            <td className="ps-3 pe-4 text-black">50%</td>
                                        </tr>
                                        <tr>
                                            <td className="ps-3 pe-4 txc-50">Seema</td>
                                            <td className="ps-3 pe-4 text-black">30%</td>
                                            <td className="ps-3 pe-4 text-black">50%</td>
                                        </tr>
                                        <tr>
                                            <td className="ps-3 pe-4 txc-50">Rakesh</td>
                                            <td className="ps-3 pe-4 text-black">30%</td>
                                            <td className="ps-3 pe-4 text-black">50%</td>
                                        </tr>
                                        <tr>
                                            <td className="ps-3 pe-4 txc-50">Vivek</td>
                                            <td className="ps-3 pe-4 text-black">30%</td>
                                            <td className="ps-3 pe-4 text-black">50%</td>
                                        </tr>
                                        <tr>
                                            <td className="ps-3 pe-4 txc-50">BOT</td>
                                            <td className="ps-3 pe-4 text-black">30%</td>
                                            <td className="ps-3 pe-4 text-black">50%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dispo-listing mt-5" data-aos="fade-up" data-aos-duration="1400">
                    <h2 className="text-black">Listing (3 Records Found)</h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="w-100 table table-striped mb-0">
                                <tbody>
                                    <tr>
                                        <th>
                                            <strong>Date</strong><br />
                                            <input type="search" class="form-control dropdown-toggle w-auto" id="dropdownDate" data-bs-toggle="dropdown" aria-expanded="false" placeholder="Search" />
                                            <ul class="dropdown-menu py-3 px-3" aria-labelledby="dropdownDate">
                                                <li>
                                                    <div className="row">
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="date" className="form-control" />
                                                        </div>
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="text" className="form-control" placeholder="Time" />
                                                        </div>
                                                        <div className="col-lg-12 mb-2">
                                                            <a className="btn btn-primary w-100">Search</a>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <a className="btn btn-link w-100">Close</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </th>
                                        <th>
                                            <strong>Borrower</strong><br />
                                            <input type="search" class="form-control dropdown-toggle w-auto" id="dropdownDate" data-bs-toggle="dropdown" aria-expanded="false" placeholder="Search" />
                                            <ul class="dropdown-menu py-3 px-3" aria-labelledby="dropdownDate">
                                                <li>
                                                    <div className="row">
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="date" className="form-control" />
                                                        </div>
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="text" className="form-control" placeholder="Time" />
                                                        </div>
                                                        <div className="col-lg-12 mb-2">
                                                            <a className="btn btn-primary w-100">Search</a>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <a className="btn btn-link w-100">Close</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </th>
                                        <th>
                                            <strong>Type/ Source</strong><br />
                                            <input type="search" class="form-control dropdown-toggle w-auto" id="dropdownDate" data-bs-toggle="dropdown" aria-expanded="false" placeholder="Search" />
                                            <ul class="dropdown-menu py-3 px-3" aria-labelledby="dropdownDate">
                                                <li>
                                                    <div className="row">
                                                        <div className="col-lg-12 mb-3">
                                                            <select id="inputState" class="form-select">
                                                                <option>Ongoing</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-12 mb-3">
                                                            <select id="inputState" class="form-select">
                                                                <option>Select</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-12 mb-3">
                                                            <select id="inputState" class="form-select">
                                                                <option>Select</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-12 mb-2">
                                                            <a className="btn btn-primary w-100">Search</a>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <a className="btn btn-link w-100">Close</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul></th>
                                        <th>
                                            <strong>Agent</strong><br />
                                            <input type="search" class="form-control dropdown-toggle w-auto" id="dropdownDate" data-bs-toggle="dropdown" aria-expanded="false" placeholder="Search" />
                                            <ul class="dropdown-menu py-3 px-3" aria-labelledby="dropdownDate">
                                                <li>
                                                    <div className="row">
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="date" className="form-control" />
                                                        </div>
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="text" className="form-control" placeholder="Time" />
                                                        </div>
                                                        <div className="col-lg-12 mb-2">
                                                            <a className="btn btn-primary w-100">Search</a>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <a className="btn btn-link w-100">Close</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </th>
                                        <th>
                                            <strong>Disposition</strong><br />
                                            <input type="search" class="form-control dropdown-toggle w-auto" id="dropdownDate" data-bs-toggle="dropdown" aria-expanded="false" placeholder="Search" />
                                            <ul class="dropdown-menu py-3 px-3" aria-labelledby="dropdownDate">
                                                <li>
                                                    <div className="row">
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="date" className="form-control" />
                                                        </div>
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="text" className="form-control" placeholder="Time" />
                                                        </div>
                                                        <div className="col-lg-12 mb-2">
                                                            <a className="btn btn-primary w-100">Search</a>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <a className="btn btn-link w-100">Close</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </th>
                                        <th>
                                            <strong>Call Duration</strong><br />
                                            <input type="search" class="form-control dropdown-toggle w-auto" id="dropdownDate" data-bs-toggle="dropdown" aria-expanded="false" placeholder="Search" />
                                            <ul class="dropdown-menu py-3 px-3" aria-labelledby="dropdownDate">
                                                <li>
                                                    <div className="row">
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="date" className="form-control" />
                                                        </div>
                                                        <div className="col-lg-12 mb-3">
                                                            <input type="text" className="form-control" placeholder="Time" />
                                                        </div>
                                                        <div className="col-lg-12 mb-2">
                                                            <a className="btn btn-primary w-100">Search</a>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <a className="btn btn-link w-100">Close</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td className="ps-4">
                                            23 Sep<br />
                                            1:15 PM
                                        </td>
                                        <td className="text-black">
                                            Ritu Raj Srivastava{['top'].map((placement) => (
                                                <OverlayTrigger
                                                    key={placement}
                                                    placement={placement}
                                                    overlay={
                                                        <Tooltip id={`tooltip-${placement}`}>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </Tooltip>
                                                    }
                                                >
                                                    <Button variant="secondary" className="tooltip-btn">
                                                        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.985 2.4A8.139 8.139 0 0 0 8.192 0a8.139 8.139 0 0 0-5.793 2.4A8.139 8.139 0 0 0 0 8.191c0 2.188.852 4.245 2.4 5.793a8.139 8.139 0 0 0 5.792 2.399 8.139 8.139 0 0 0 5.793-2.4 8.139 8.139 0 0 0 2.399-5.792 8.139 8.139 0 0 0-2.4-5.793zm-5.793-.16c.97 0 1.76.79 1.76 1.76s-.79 1.76-1.76 1.76-1.76-.79-1.76-1.76.79-1.76 1.76-1.76zm2.24 11.2h-4.48v-.96h.96v-4.8h-.96v-.96h3.52v5.76h.96v.96z" fill="#000" fill-rule="nonzero" opacity=".7" />
                                                        </svg>
                                                    </Button>

                                                </OverlayTrigger>
                                            ))}
                                            <br />
                                            9876543212

                                        </td>
                                        <td>
                                            <div className="w-auto d-inline-block">
                                                <span class="badge badge-color-1 bg-secondary d-flex align-center">
                                                    <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                                        <g fill="#FFF" fill-rule="evenodd">
                                                            <path d="M14.913 6.506a.7.7 0 0 1 .991.99l-8.405 8.4a.7.7 0 0 1-.99-.99l8.404-8.4z" />
                                                            <path d="M7.704 14.702h5.604a.7.7 0 1 1 0 1.4H7.004a.7.7 0 0 1-.7-.7v-6.3a.7.7 0 0 1 1.4 0v5.6z" />
                                                        </g>
                                                    </svg>
                                                    <div>Ongoing</div>
                                                    <div className="icon-holder">
                                                        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                                                            <g fill="#093638" fill-rule="nonzero">
                                                                <path d="M11.77 2.007A6.851 6.851 0 0 0 6.905 0a6.886 6.886 0 0 0-4.872 2.006A6.782 6.782 0 0 0 0 6.848v.003c0 1.105.29 2.219.841 3.236L.02 13.824l3.78-.86a6.92 6.92 0 0 0 3.103.737h.003a6.887 6.887 0 0 0 4.872-2.006 6.774 6.774 0 0 0 2.034-4.842c0-1.813-.724-3.534-2.041-4.846zM6.905 12.622h-.002a5.832 5.832 0 0 1-2.772-.702l-.18-.097-2.513.572.546-2.482-.105-.181a5.767 5.767 0 0 1-.8-2.882C1.08 3.67 3.694 1.08 6.905 1.08a5.78 5.78 0 0 1 4.103 1.693c1.112 1.108 1.724 2.557 1.724 4.08-.002 3.182-2.615 5.77-5.827 5.77z" />
                                                                <path d="M5.026 3.83h-.303a.581.581 0 0 0-.42.197c-.146.158-.554.539-.554 1.313 0 .775.566 1.523.645 1.628.08.105 1.093 1.746 2.698 2.377 1.335.524 1.606.42 1.896.393.29-.026.934-.38 1.066-.748.132-.367.132-.683.092-.748-.04-.066-.145-.105-.303-.184s-.932-.466-1.077-.519c-.144-.052-.25-.078-.355.08a9.535 9.535 0 0 1-.508.626c-.092.105-.184.118-.342.04-.158-.08-.661-.249-1.265-.785a4.84 4.84 0 0 1-.888-1.107c-.092-.158-.01-.243.07-.321.07-.07.167-.167.246-.26.079-.091.101-.157.154-.262.052-.105.026-.197-.013-.275-.04-.08-.343-.858-.484-1.169-.118-.262-.242-.271-.355-.276z" />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                            <br />
                                            <span className="text-black">New</span>
                                        </td>
                                        <td>
                                            Vivek<br />
                                            SMS
                                        </td>
                                        <td>
                                            <strong>RNR</strong>
                                        </td>
                                        <td>
                                            <svg width="24" height="23" className="me-1" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#1A1A1A" fill-rule="evenodd" opacity=".627">
                                                    <path d="M12.206 18.902a7.703 7.703 0 0 1-7.704-7.7c0-4.254 3.45-7.702 7.704-7.702a7.703 7.703 0 0 1 7.705 7.701c0 4.253-3.45 7.701-7.705 7.701zm0-1.4a6.302 6.302 0 0 0 6.304-6.3c0-3.48-2.822-6.301-6.304-6.301a6.302 6.302 0 0 0-6.303 6.3c0 3.48 2.822 6.301 6.303 6.301z" />
                                                    <path d="M14.803 12.807a.7.7 0 1 1-.99.99l-2.102-2.1a.7.7 0 0 1-.205-.496v-4.2a.7.7 0 0 1 1.4 0v3.91l1.897 1.896z" />
                                                </g>
                                            </svg>
                                            2:30 min<br />
                                            <svg width="24" height="23" className="me-1" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#1A1A1A" fill-rule="evenodd" opacity=".627">
                                                    <path d="M12.206 18.902a7.703 7.703 0 0 1-7.704-7.7c0-4.254 3.45-7.702 7.704-7.702a7.703 7.703 0 0 1 7.705 7.701c0 4.253-3.45 7.701-7.705 7.701zm0-1.4a6.302 6.302 0 0 0 6.304-6.3c0-3.48-2.822-6.301-6.304-6.301a6.302 6.302 0 0 0-6.303 6.3c0 3.48 2.822 6.301 6.303 6.301z" />
                                                    <path d="M14.803 12.807a.7.7 0 1 1-.99.99l-2.102-2.1a.7.7 0 0 1-.205-.496v-4.2a.7.7 0 0 1 1.4 0v3.91l1.897 1.896z" />
                                                </g>
                                            </svg>
                                            1:10 min
                                        </td>
                                        <td>
                                            <a>
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <rect fill="#009EC0" width="32" height="32" rx="16" />
                                                        <path d="M12.704 11.183V21.22l7.81-5.019-7.81-5.018zm-.321-1.871 9.805 6.3a.7.7 0 0 1 0 1.178l-9.805 6.301a.7.7 0 0 1-1.08-.589V9.901a.7.7 0 0 1 1.08-.59z" fill="#FFF" />
                                                    </g>
                                                </svg>
                                            </a>

                                            <a className="ms-3">
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <rect fill="#009EC0" width="32" height="32" rx="16" />
                                                        <g fill="#FFF">
                                                            <path d="M9.605 16.697c.402.623.878 1.246 1.422 1.826 1.52 1.622 3.257 2.579 5.18 2.579 1.922 0 3.658-.957 5.18-2.58a12.961 12.961 0 0 0 1.725-2.32 12.961 12.961 0 0 0-1.726-2.322c-1.52-1.622-3.257-2.58-5.18-2.58-1.922 0-3.658.958-5.18 2.58A12.961 12.961 0 0 0 9.302 16.2c.088.153.19.319.304.496zm-1.73-.809c.099-.197.284-.525.553-.942.446-.69.971-1.378 1.577-2.024 1.762-1.879 3.834-3.021 6.201-3.021 2.368 0 4.44 1.142 6.202 3.021a14.347 14.347 0 0 1 1.577 2.024c.269.417.454.745.552.942a.7.7 0 0 1 0 .626c-.098.197-.283.526-.552.942-.446.69-.972 1.38-1.577 2.025-1.762 1.878-3.834 3.021-6.202 3.021-2.367 0-4.44-1.143-6.201-3.021a14.347 14.347 0 0 1-1.577-2.025c-.27-.416-.454-.745-.552-.942a.7.7 0 0 1 0-.626z" />
                                                            <path d="M16.206 19.002a2.801 2.801 0 1 1 0-5.602 2.801 2.801 0 0 1 0 5.602zm0-1.4a1.4 1.4 0 1 0 .001-2.801 1.4 1.4 0 0 0 0 2.8z" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-4">
                                            23 Sep<br />
                                            1:11 PM
                                        </td>
                                        <td className="text-black">
                                            Amit Rajput
                                            {['top'].map((placement) => (
                                                <OverlayTrigger
                                                    key={placement}
                                                    placement={placement}
                                                    overlay={
                                                        <Tooltip id={`tooltip-${placement}`}>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </Tooltip>
                                                    }
                                                >
                                                    <Button variant="secondary" className="tooltip-btn">
                                                        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.985 2.4A8.139 8.139 0 0 0 8.192 0a8.139 8.139 0 0 0-5.793 2.4A8.139 8.139 0 0 0 0 8.191c0 2.188.852 4.245 2.4 5.793a8.139 8.139 0 0 0 5.792 2.399 8.139 8.139 0 0 0 5.793-2.4 8.139 8.139 0 0 0 2.399-5.792 8.139 8.139 0 0 0-2.4-5.793zm-5.793-.16c.97 0 1.76.79 1.76 1.76s-.79 1.76-1.76 1.76-1.76-.79-1.76-1.76.79-1.76 1.76-1.76zm2.24 11.2h-4.48v-.96h.96v-4.8h-.96v-.96h3.52v5.76h.96v.96z" fill="#000" fill-rule="nonzero" opacity=".7" />
                                                        </svg>
                                                    </Button>

                                                </OverlayTrigger>
                                            ))}
                                            <br />
                                            9090909011
                                        </td>
                                        <td>
                                            <div className="w-auto d-inline-block">
                                                <span class="badge badge-color-2 bg-secondary d-flex align-center">
                                                    <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                                        <g fill="#FFF" fill-rule="evenodd">
                                                            <path d="M14.913 6.506a.7.7 0 0 1 .991.99l-8.405 8.4a.7.7 0 0 1-.99-.99l8.404-8.4z" />
                                                            <path d="M7.704 14.702h5.604a.7.7 0 1 1 0 1.4H7.004a.7.7 0 0 1-.7-.7v-6.3a.7.7 0 0 1 1.4 0v5.6z" />
                                                        </g>
                                                    </svg>
                                                    <div>Done</div>
                                                    <div className="icon-holder">
                                                        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.063 9.768a.565.565 0 0 0-.48-.585 7.788 7.788 0 0 1-1.704-.425.561.561 0 0 0-.591.125l-.715.714a.562.562 0 0 1-.675.091 9.562 9.562 0 0 1-3.586-3.586.562.562 0 0 1 .09-.675l.713-.713a.563.563 0 0 0 .126-.594 7.772 7.772 0 0 1-.424-1.699.564.564 0 0 0-.568-.484H2.562a.563.563 0 0 0-.56.605c.175 1.65.737 3.237 1.642 4.634a10.412 10.412 0 0 0 3.206 3.205 10.56 10.56 0 0 0 4.6 1.639.563.563 0 0 0 .613-.565V9.767zm1.124.006v1.679a1.688 1.688 0 0 1-1.849 1.686 11.689 11.689 0 0 1-5.095-1.811 11.525 11.525 0 0 1-3.546-3.544A11.703 11.703 0 0 1 .882 2.652a1.688 1.688 0 0 1 1.68-1.84h1.682A1.689 1.689 0 0 1 5.932 2.27c.066.498.188.987.363 1.456a1.689 1.689 0 0 1-.382 1.783l-.404.403a8.438 8.438 0 0 0 2.58 2.58l.405-.406a1.687 1.687 0 0 1 1.78-.38c.47.175.96.297 1.462.364.846.119 1.469.851 1.451 1.705z" fill="#093638" fill-rule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                            <br />
                                            <span className="text-black">New</span>
                                        </td>
                                        <td>
                                            Avinash<br />
                                            IVR
                                        </td>
                                        <td>
                                            <strong>SW</strong>
                                        </td>
                                        <td>
                                            <svg width="24" height="23" className="me-1" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#1A1A1A" fill-rule="evenodd" opacity=".627">
                                                    <path d="M12.206 18.902a7.703 7.703 0 0 1-7.704-7.7c0-4.254 3.45-7.702 7.704-7.702a7.703 7.703 0 0 1 7.705 7.701c0 4.253-3.45 7.701-7.705 7.701zm0-1.4a6.302 6.302 0 0 0 6.304-6.3c0-3.48-2.822-6.301-6.304-6.301a6.302 6.302 0 0 0-6.303 6.3c0 3.48 2.822 6.301 6.303 6.301z" />
                                                    <path d="M14.803 12.807a.7.7 0 1 1-.99.99l-2.102-2.1a.7.7 0 0 1-.205-.496v-4.2a.7.7 0 0 1 1.4 0v3.91l1.897 1.896z" />
                                                </g>
                                            </svg>
                                            <span className="time-badge">0:10 min</span>
                                            <br />
                                            <svg width="24" height="23" className="me-1" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#1A1A1A" fill-rule="evenodd" opacity=".627">
                                                    <path d="M12.206 18.902a7.703 7.703 0 0 1-7.704-7.7c0-4.254 3.45-7.702 7.704-7.702a7.703 7.703 0 0 1 7.705 7.701c0 4.253-3.45 7.701-7.705 7.701zm0-1.4a6.302 6.302 0 0 0 6.304-6.3c0-3.48-2.822-6.301-6.304-6.301a6.302 6.302 0 0 0-6.303 6.3c0 3.48 2.822 6.301 6.303 6.301z" />
                                                    <path d="M14.803 12.807a.7.7 0 1 1-.99.99l-2.102-2.1a.7.7 0 0 1-.205-.496v-4.2a.7.7 0 0 1 1.4 0v3.91l1.897 1.896z" />
                                                </g>
                                            </svg>
                                            1:20 min
                                        </td>
                                        <td>
                                            <a>
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <rect fill="#009EC0" width="32" height="32" rx="16" />
                                                        <path d="M12.704 11.183V21.22l7.81-5.019-7.81-5.018zm-.321-1.871 9.805 6.3a.7.7 0 0 1 0 1.178l-9.805 6.301a.7.7 0 0 1-1.08-.589V9.901a.7.7 0 0 1 1.08-.59z" fill="#FFF" />
                                                    </g>
                                                </svg>
                                            </a>
                                            <a className="ms-3">
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <rect fill="#009EC0" width="32" height="32" rx="16" />
                                                        <g fill="#FFF">
                                                            <path d="M9.605 16.697c.402.623.878 1.246 1.422 1.826 1.52 1.622 3.257 2.579 5.18 2.579 1.922 0 3.658-.957 5.18-2.58a12.961 12.961 0 0 0 1.725-2.32 12.961 12.961 0 0 0-1.726-2.322c-1.52-1.622-3.257-2.58-5.18-2.58-1.922 0-3.658.958-5.18 2.58A12.961 12.961 0 0 0 9.302 16.2c.088.153.19.319.304.496zm-1.73-.809c.099-.197.284-.525.553-.942.446-.69.971-1.378 1.577-2.024 1.762-1.879 3.834-3.021 6.201-3.021 2.368 0 4.44 1.142 6.202 3.021a14.347 14.347 0 0 1 1.577 2.024c.269.417.454.745.552.942a.7.7 0 0 1 0 .626c-.098.197-.283.526-.552.942-.446.69-.972 1.38-1.577 2.025-1.762 1.878-3.834 3.021-6.202 3.021-2.367 0-4.44-1.143-6.201-3.021a14.347 14.347 0 0 1-1.577-2.025c-.27-.416-.454-.745-.552-.942a.7.7 0 0 1 0-.626z" />
                                                            <path d="M16.206 19.002a2.801 2.801 0 1 1 0-5.602 2.801 2.801 0 0 1 0 5.602zm0-1.4a1.4 1.4 0 1 0 .001-2.801 1.4 1.4 0 0 0 0 2.8z" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-4">
                                            23 Sep<br />
                                            11:30 AM
                                        </td>
                                        <td className="text-black">
                                            Rahul Shukla{['top'].map((placement) => (
                                                <OverlayTrigger
                                                    key={placement}
                                                    placement={placement}
                                                    overlay={
                                                        <Tooltip id={`tooltip-${placement}`}>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </Tooltip>
                                                    }
                                                >
                                                    <Button variant="secondary" className="tooltip-btn">
                                                        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.985 2.4A8.139 8.139 0 0 0 8.192 0a8.139 8.139 0 0 0-5.793 2.4A8.139 8.139 0 0 0 0 8.191c0 2.188.852 4.245 2.4 5.793a8.139 8.139 0 0 0 5.792 2.399 8.139 8.139 0 0 0 5.793-2.4 8.139 8.139 0 0 0 2.399-5.792 8.139 8.139 0 0 0-2.4-5.793zm-5.793-.16c.97 0 1.76.79 1.76 1.76s-.79 1.76-1.76 1.76-1.76-.79-1.76-1.76.79-1.76 1.76-1.76zm2.24 11.2h-4.48v-.96h.96v-4.8h-.96v-.96h3.52v5.76h.96v.96z" fill="#000" fill-rule="nonzero" opacity=".7" />
                                                        </svg>
                                                    </Button>

                                                </OverlayTrigger>
                                            ))}
                                            <br />
                                            9089087890
                                        </td>
                                        <td>
                                            <div className="w-auto d-inline-block">
                                                <span class="badge badge-color-3 bg-secondary d-flex align-center">
                                                    <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                                        <g fill="#FFF" fill-rule="evenodd">
                                                            <path d="M14.913 6.506a.7.7 0 0 1 .991.99l-8.405 8.4a.7.7 0 0 1-.99-.99l8.404-8.4z" />
                                                            <path d="M7.704 14.702h5.604a.7.7 0 1 1 0 1.4H7.004a.7.7 0 0 1-.7-.7v-6.3a.7.7 0 0 1 1.4 0v5.6z" />
                                                        </g>
                                                    </svg>
                                                    <div>Missed</div>
                                                    <div className="icon-holder">
                                                        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.063 9.768a.565.565 0 0 0-.48-.585 7.788 7.788 0 0 1-1.704-.425.561.561 0 0 0-.591.125l-.715.714a.562.562 0 0 1-.675.091 9.562 9.562 0 0 1-3.586-3.586.562.562 0 0 1 .09-.675l.713-.713a.563.563 0 0 0 .126-.594 7.772 7.772 0 0 1-.424-1.699.564.564 0 0 0-.568-.484H2.562a.563.563 0 0 0-.56.605c.175 1.65.737 3.237 1.642 4.634a10.412 10.412 0 0 0 3.206 3.205 10.56 10.56 0 0 0 4.6 1.639.563.563 0 0 0 .613-.565V9.767zm1.124.006v1.679a1.688 1.688 0 0 1-1.849 1.686 11.689 11.689 0 0 1-5.095-1.811 11.525 11.525 0 0 1-3.546-3.544A11.703 11.703 0 0 1 .882 2.652a1.688 1.688 0 0 1 1.68-1.84h1.682A1.689 1.689 0 0 1 5.932 2.27c.066.498.188.987.363 1.456a1.689 1.689 0 0 1-.382 1.783l-.404.403a8.438 8.438 0 0 0 2.58 2.58l.405-.406a1.687 1.687 0 0 1 1.78-.38c.47.175.96.297 1.462.364.846.119 1.469.851 1.451 1.705z" fill="#093638" fill-rule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                            <br />
                                            <span className="text-black">Followup</span>
                                        </td>
                                        <td>
                                            Seema<br />
                                            IVR
                                        </td>
                                        <td>
                                            <strong>PTP</strong>
                                        </td>
                                        <td>
                                            <svg width="24" height="23" className="me-1" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#1A1A1A" fill-rule="evenodd" opacity=".627">
                                                    <path d="M12.206 18.902a7.703 7.703 0 0 1-7.704-7.7c0-4.254 3.45-7.702 7.704-7.702a7.703 7.703 0 0 1 7.705 7.701c0 4.253-3.45 7.701-7.705 7.701zm0-1.4a6.302 6.302 0 0 0 6.304-6.3c0-3.48-2.822-6.301-6.304-6.301a6.302 6.302 0 0 0-6.303 6.3c0 3.48 2.822 6.301 6.303 6.301z" />
                                                    <path d="M14.803 12.807a.7.7 0 1 1-.99.99l-2.102-2.1a.7.7 0 0 1-.205-.496v-4.2a.7.7 0 0 1 1.4 0v3.91l1.897 1.896z" />
                                                </g>
                                            </svg>
                                            2:12 min<br />
                                            <svg width="24" height="23" className="me-1" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#1A1A1A" fill-rule="evenodd" opacity=".627">
                                                    <path d="M12.206 18.902a7.703 7.703 0 0 1-7.704-7.7c0-4.254 3.45-7.702 7.704-7.702a7.703 7.703 0 0 1 7.705 7.701c0 4.253-3.45 7.701-7.705 7.701zm0-1.4a6.302 6.302 0 0 0 6.304-6.3c0-3.48-2.822-6.301-6.304-6.301a6.302 6.302 0 0 0-6.303 6.3c0 3.48 2.822 6.301 6.303 6.301z" />
                                                    <path d="M14.803 12.807a.7.7 0 1 1-.99.99l-2.102-2.1a.7.7 0 0 1-.205-.496v-4.2a.7.7 0 0 1 1.4 0v3.91l1.897 1.896z" />
                                                </g>
                                            </svg>
                                            <span className="time-badge">11:30 min</span>
                                        </td>
                                        <td>
                                            <a>
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <rect fill="#009EC0" width="32" height="32" rx="16" />
                                                        <path d="M12.704 11.183V21.22l7.81-5.019-7.81-5.018zm-.321-1.871 9.805 6.3a.7.7 0 0 1 0 1.178l-9.805 6.301a.7.7 0 0 1-1.08-.589V9.901a.7.7 0 0 1 1.08-.59z" fill="#FFF" />
                                                    </g>
                                                </svg>
                                            </a>

                                            <a className="ms-3">
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <rect fill="#009EC0" width="32" height="32" rx="16" />
                                                        <g fill="#FFF">
                                                            <path d="M9.605 16.697c.402.623.878 1.246 1.422 1.826 1.52 1.622 3.257 2.579 5.18 2.579 1.922 0 3.658-.957 5.18-2.58a12.961 12.961 0 0 0 1.725-2.32 12.961 12.961 0 0 0-1.726-2.322c-1.52-1.622-3.257-2.58-5.18-2.58-1.922 0-3.658.958-5.18 2.58A12.961 12.961 0 0 0 9.302 16.2c.088.153.19.319.304.496zm-1.73-.809c.099-.197.284-.525.553-.942.446-.69.971-1.378 1.577-2.024 1.762-1.879 3.834-3.021 6.201-3.021 2.368 0 4.44 1.142 6.202 3.021a14.347 14.347 0 0 1 1.577 2.024c.269.417.454.745.552.942a.7.7 0 0 1 0 .626c-.098.197-.283.526-.552.942-.446.69-.972 1.38-1.577 2.025-1.762 1.878-3.834 3.021-6.202 3.021-2.367 0-4.44-1.143-6.201-3.021a14.347 14.347 0 0 1-1.577-2.025c-.27-.416-.454-.745-.552-.942a.7.7 0 0 1 0-.626z" />
                                                            <path d="M16.206 19.002a2.801 2.801 0 1 1 0-5.602 2.801 2.801 0 0 1 0 5.602zm0-1.4a1.4 1.4 0 1 0 .001-2.801 1.4 1.4 0 0 0 0 2.8z" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-4">
                                            23 Sep<br />
                                            11:17 AM
                                        </td>
                                        <td className="text-black">
                                            Kajal Prakash{['top'].map((placement) => (
                                                <OverlayTrigger
                                                    key={placement}
                                                    placement={placement}
                                                    overlay={
                                                        <Tooltip id={`tooltip-${placement}`}>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </Tooltip>
                                                    }
                                                >
                                                    <Button variant="secondary" className="tooltip-btn">
                                                        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.985 2.4A8.139 8.139 0 0 0 8.192 0a8.139 8.139 0 0 0-5.793 2.4A8.139 8.139 0 0 0 0 8.191c0 2.188.852 4.245 2.4 5.793a8.139 8.139 0 0 0 5.792 2.399 8.139 8.139 0 0 0 5.793-2.4 8.139 8.139 0 0 0 2.399-5.792 8.139 8.139 0 0 0-2.4-5.793zm-5.793-.16c.97 0 1.76.79 1.76 1.76s-.79 1.76-1.76 1.76-1.76-.79-1.76-1.76.79-1.76 1.76-1.76zm2.24 11.2h-4.48v-.96h.96v-4.8h-.96v-.96h3.52v5.76h.96v.96z" fill="#000" fill-rule="nonzero" opacity=".7" />
                                                        </svg>
                                                    </Button>

                                                </OverlayTrigger>
                                            ))}
                                            <br />
                                            9878767656
                                        </td>
                                        <td>
                                            <div className="w-auto d-inline-block">
                                                <span class="badge badge-color-4 bg-secondary d-flex align-center">
                                                    <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                                                        <g fill="#FFF" fill-rule="evenodd">
                                                            <path d="M8.5 16.897a.7.7 0 0 1-.991-.99l8.404-8.401a.7.7 0 0 1 .991.99l-8.405 8.4z" />
                                                            <path d="M15.708 8.7h-5.603a.7.7 0 1 1 0-1.4h6.304a.7.7 0 0 1 .7.7v6.302a.7.7 0 0 1-1.4 0V8.7z" />
                                                        </g>
                                                    </svg>
                                                    <div>Not Conneted</div>
                                                    <div className="icon-holder">
                                                        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                                                            <g fill="#093638" fill-rule="nonzero">
                                                                <path d="M11.77 2.007A6.851 6.851 0 0 0 6.905 0a6.886 6.886 0 0 0-4.872 2.006A6.782 6.782 0 0 0 0 6.848v.003c0 1.105.29 2.219.841 3.236L.02 13.824l3.78-.86a6.92 6.92 0 0 0 3.103.737h.003a6.887 6.887 0 0 0 4.872-2.006 6.774 6.774 0 0 0 2.034-4.842c0-1.813-.724-3.534-2.041-4.846zM6.905 12.622h-.002a5.832 5.832 0 0 1-2.772-.702l-.18-.097-2.513.572.546-2.482-.105-.181a5.767 5.767 0 0 1-.8-2.882C1.08 3.67 3.694 1.08 6.905 1.08a5.78 5.78 0 0 1 4.103 1.693c1.112 1.108 1.724 2.557 1.724 4.08-.002 3.182-2.615 5.77-5.827 5.77z" />
                                                                <path d="M5.026 3.83h-.303a.581.581 0 0 0-.42.197c-.146.158-.554.539-.554 1.313 0 .775.566 1.523.645 1.628.08.105 1.093 1.746 2.698 2.377 1.335.524 1.606.42 1.896.393.29-.026.934-.38 1.066-.748.132-.367.132-.683.092-.748-.04-.066-.145-.105-.303-.184s-.932-.466-1.077-.519c-.144-.052-.25-.078-.355.08a9.535 9.535 0 0 1-.508.626c-.092.105-.184.118-.342.04-.158-.08-.661-.249-1.265-.785a4.84 4.84 0 0 1-.888-1.107c-.092-.158-.01-.243.07-.321.07-.07.167-.167.246-.26.079-.091.101-.157.154-.262.052-.105.026-.197-.013-.275-.04-.08-.343-.858-.484-1.169-.118-.262-.242-.271-.355-.276z" />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                            <br />
                                            <span className="text-black">New</span>
                                        </td>
                                        <td>
                                            Sayali<br />
                                            IVR
                                        </td>
                                        <td>
                                            <strong>CB</strong>
                                        </td>
                                        <td>
                                            <svg width="24" height="23" className="me-1" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#1A1A1A" fill-rule="evenodd" opacity=".627">
                                                    <path d="M12.206 18.902a7.703 7.703 0 0 1-7.704-7.7c0-4.254 3.45-7.702 7.704-7.702a7.703 7.703 0 0 1 7.705 7.701c0 4.253-3.45 7.701-7.705 7.701zm0-1.4a6.302 6.302 0 0 0 6.304-6.3c0-3.48-2.822-6.301-6.304-6.301a6.302 6.302 0 0 0-6.303 6.3c0 3.48 2.822 6.301 6.303 6.301z" />
                                                    <path d="M14.803 12.807a.7.7 0 1 1-.99.99l-2.102-2.1a.7.7 0 0 1-.205-.496v-4.2a.7.7 0 0 1 1.4 0v3.91l1.897 1.896z" />
                                                </g>
                                            </svg>
                                            2:30 min<br />
                                            <svg width="24" height="23" className="me-1" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#1A1A1A" fill-rule="evenodd" opacity=".627">
                                                    <path d="M12.206 18.902a7.703 7.703 0 0 1-7.704-7.7c0-4.254 3.45-7.702 7.704-7.702a7.703 7.703 0 0 1 7.705 7.701c0 4.253-3.45 7.701-7.705 7.701zm0-1.4a6.302 6.302 0 0 0 6.304-6.3c0-3.48-2.822-6.301-6.304-6.301a6.302 6.302 0 0 0-6.303 6.3c0 3.48 2.822 6.301 6.303 6.301z" />
                                                    <path d="M14.803 12.807a.7.7 0 1 1-.99.99l-2.102-2.1a.7.7 0 0 1-.205-.496v-4.2a.7.7 0 0 1 1.4 0v3.91l1.897 1.896z" />
                                                </g>
                                            </svg>
                                            1:20 min
                                        </td>
                                        <td>
                                            <a>
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <rect fill="#009EC0" width="32" height="32" rx="16" />
                                                        <path d="M12.704 11.183V21.22l7.81-5.019-7.81-5.018zm-.321-1.871 9.805 6.3a.7.7 0 0 1 0 1.178l-9.805 6.301a.7.7 0 0 1-1.08-.589V9.901a.7.7 0 0 1 1.08-.59z" fill="#FFF" />
                                                    </g>
                                                </svg>
                                            </a>

                                            <a className="ms-3">
                                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <rect fill="#009EC0" width="32" height="32" rx="16" />
                                                        <g fill="#FFF">
                                                            <path d="M9.605 16.697c.402.623.878 1.246 1.422 1.826 1.52 1.622 3.257 2.579 5.18 2.579 1.922 0 3.658-.957 5.18-2.58a12.961 12.961 0 0 0 1.725-2.32 12.961 12.961 0 0 0-1.726-2.322c-1.52-1.622-3.257-2.58-5.18-2.58-1.922 0-3.658.958-5.18 2.58A12.961 12.961 0 0 0 9.302 16.2c.088.153.19.319.304.496zm-1.73-.809c.099-.197.284-.525.553-.942.446-.69.971-1.378 1.577-2.024 1.762-1.879 3.834-3.021 6.201-3.021 2.368 0 4.44 1.142 6.202 3.021a14.347 14.347 0 0 1 1.577 2.024c.269.417.454.745.552.942a.7.7 0 0 1 0 .626c-.098.197-.283.526-.552.942-.446.69-.972 1.38-1.577 2.025-1.762 1.878-3.834 3.021-6.202 3.021-2.367 0-4.44-1.143-6.201-3.021a14.347 14.347 0 0 1-1.577-2.025c-.27-.416-.454-.745-.552-.942a.7.7 0 0 1 0-.626z" />
                                                            <path d="M16.206 19.002a2.801 2.801 0 1 1 0-5.602 2.801 2.801 0 0 1 0 5.602zm0-1.4a1.4 1.4 0 1 0 .001-2.801 1.4 1.4 0 0 0 0 2.8z" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDispositions



