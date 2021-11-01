import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import PrelitigationBatchHeader from '../../Components/Headers/PrelitigationBatchHeader'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import Arrow from '../../Static/RawImages/arrow.png'
import { getPreLitiBatchData } from '../../API'
import ContentLoader from '../../Components/ContentLoader'
import dateFormat from '../../Functions/getCorrentDateFormat'
//charts
import CircularChart from '../../Components/Charts/CircularChart'

import { useGlobalContext } from '../../context'

function PreLitigationBatch() {
    const { updateFetchedCount } = useGlobalContext()
    const [data, setData] = useState(null)
    const [SearchParameter, setSearchParameter] = useState({})
    const [HitReload, setHitReload] = useState(false)
    const [StorePrevFilter, setStorePrevFilter] = useState(null)
    const [ArrayIds, setArrayIds] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)



    const getData = useCallback(
        async () => {
            setStorePrevFilter(SearchParameter)
            const res = await getPreLitiBatchData(SearchParameter)
            if (res) {
                setData(res.data)
                updateFetchedCount(res.total)
            }
        },
        [SearchParameter]
    )

    useEffect(() => {
        getData()
    }, [getData])





    return (
        <>
            <PrelitigationBatchHeader 
                ArrayIds={ArrayIds}
                setSearchParameter={setSearchParameter}
                StorePrevFilter={StorePrevFilter}
                HitReload={HitReload}
                setHitReload={setHitReload}
                setCurrentPage={setCurrentPage}
             />
            <hr className="mt-4 mb-4" />
            {data ?
                <>
                    {data.length > 0 ?
                        data.map((val, i) => {
                            const circularChartData = {
                                data: {
                                    name: 'Delivered',
                                    value: 23,
                                    color: "#359aba",
                                },
                                title: "Postal",
                                tooltipText: "Delivered"
                            }
                            const circularChartData2 = {
                                data: {
                                    name: 'Delivered',
                                    value: 0,
                                    color: "#359aba",
                                },
                                title: "WhatsApp",
                                tooltipText: "Delivered"
                            }
                            const circularChartData3 = {
                                data: {
                                    name: 'Delivered',
                                    value: 23,
                                    color: "#359aba",
                                },
                                title: "Email",
                                tooltipText: "Delivered"
                            }
                            const circularChartData4 = {
                                data: {
                                    name: 'Delivered',
                                    value: 23,
                                    color: "#359aba",
                                },
                                title: "SMS",
                                tooltipText: "Delivered"
                            }

                            return (
                                <div className="row d-flex justify-between" data-aos="fade-up" data-aos-duration="800">
                                    <div className="col-md-12 col-lg-2 mb-lg-0 mb-3">
                                        <div className="d-flex align-start">
                                            <Checkbox
                                                className="me-3"
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                            <div className="w-75">
                                                <Link to={`/prelitigation/legal/notices/${val?.batch_id}`}>
                                                    <p className="mb-2 text-black"><a ><strong>Batch No. {val?.batch_id}</strong></a></p>
                                                </Link>
                                                <p className="mb-2"><a >{dateFormat(val?.uploaded_date)}</a></p>
                                                <p className="mb-2"><a >Total Notices - <span className="text-black">89,366</span></a></p>
                                                <label for="Product" className="col-form-label pt-0 pb-0">Product</label>
                                                <Dropdown className="w-75">
                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                                        All <img src={Arrow} alt="Sort" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="select-style-dropdown">
                                                        <Dropdown.Item href="">Product 1</Dropdown.Item>
                                                        <Dropdown.Item href="">Product 2</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-lg-2 mb-lg-0 mb-3 border-right-dash">
                                        <div className="status-progress">
                                            <div className="chart-box text-end">
                                                <CircularChart data={circularChartData} scale={1}></CircularChart>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-lg-5 mb-lg-0 mb-3">
                                        <div className="status-progress">
                                            <div className="chart-box text-center">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-4">
                                                        <div className="status-progress">
                                                            <div className="chart-box text-end">
                                                                <CircularChart data={circularChartData2} scale={1}></CircularChart>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-4">
                                                        <div className="status-progress">
                                                            <div className="chart-box text-end">
                                                                <CircularChart data={circularChartData3} scale={1}></CircularChart>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-4">
                                                        <div className="status-progress">
                                                            <div className="chart-box text-end">
                                                                <CircularChart data={circularChartData4} scale={1}></CircularChart>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-3 mb-lg-0 mb-3">
                                        <div className="action-box">
                                            <label htmlFor="dropdown-basic" className="col-form-label pb-2">Action</label>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                                    Select <img src={Arrow} alt="Sort" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="select-style-dropdown">
                                                    <Dropdown.Item href={val?.raw_file}>Download Uploaded Data</Dropdown.Item>
                                                    <Dropdown.Item href="">Download Status Report</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <hr className="mt-4 mb-4" />
                                    </div>
                                </div>
                            )
                        })
                        :
                        <h1 className="text-center">No Data Found</h1>
                    }
                </>

                :
                <ContentLoader />
            }


        </>
    )
}

export default PreLitigationBatch
