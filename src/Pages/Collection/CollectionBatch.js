import React, { useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { fetchCollectionBatch } from '../../API'
import { Link, useRouteMatch } from 'react-router-dom'
import getFirstLetterCapital from '../../Functions/getFirstLetterCapital'
import { useState } from 'react'
import { downloadBatchCallingReport } from '../../API'
//Componets
import CollectionBatchHeader from '../../Components/Headers/CollectionBatchHeader'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Dropdown from 'react-bootstrap/Dropdown'
import Arrow from '../../Static/RawImages/arrow.png'
import ContentLoader from '../../Components/ContentLoader'
import Paging from '../../Components/Paging'
import dateFormat from '../../Functions/getCorrentDateFormat'
//charts
import BarRadialChart from '../../Components/Charts/BarRadialChart'

import { useGlobalContext } from '../../context'
import ReactDOM from 'react-dom'

import sampleData from '../../JSON/batch.json'

function CollectionBatch() {
    const { updateFetchedCount } = useGlobalContext()
    const [BatchData, setBatchData] = useState(null)
    const [pageTotal, setPageTotal] = useState('NaN')
    const [currentPage, setCurrentPage] = useState(1)

    const [UnableToFetch, setUnableToFetch] = useState(false)
    const [SearchParameter, setSearchParameter] = useState({})
    const [HitReload, setHitReload] = useState(false)
    const [StorePrevFilter, setStorePrevFilter] = useState(null)
    const [ArrayIds, setArrayIds] = useState(null)
    const [downloadReportUrl, setDownloadReportUrl] = useState(null)


    const fetchCollectionBatchData = useCallback(async () => {
        try {
            setStorePrevFilter(SearchParameter)
            const res = await fetchCollectionBatch(SearchParameter)
            const resData = res.data
            setArrayIds(resData.map(item => { return (item.id) }))
            setBatchData(resData)
            handleInitPagination(res)
            updateFetchedCount(resData.length)
        } catch (error) {
            setUnableToFetch(true)
            console.log({ error })
        }

    }, [SearchParameter])

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



    const changeChartData = ({ index, lableValue1, lableValue2, }) => {
        const lable1 = document.getElementById(`cb_toggelLable1_${index}`)
        const lable2 = document.getElementById(`cb_toggelLable2_${index}`)


        if (lableValue1) {
            lable1.innerHTML = getFirstLetterCapital(lableValue1)
            lable1.title = lableValue1
        } else {
            lable2.innerHTML = lableValue2 === 'total' ? 'All Product' : getFirstLetterCapital(lableValue2)
            lable2.title = lableValue2
        }

        let filter2 = lable2.title
        let filter1 = lable1.title

        const data = {
            data: [
                { name: 'Connected', value: BatchData[index].total_connected, color: "#359aba", indexValue: index },
                { name: 'PTP', value: BatchData[index].statics_data[0].[filter2].ptp, color: "#4fbcce", indexValue: index },
                { name: 'Broken PTP', value: BatchData[index].statics_data[0].[filter2].broken_ptp, color: "#4fbcce", indexValue: index },
                { name: 'Paid', value: BatchData[index].statics_data[0].[filter2].paid, color: "#9debdc", indexValue: index }
            ],
            title: (BatchData[index].statics_data[0].[filter2].[filter1]),
            tooltipText: "Connected Call",
        }
        console.log(filter1, filter2, data)

        const parentChart = document.getElementById(`${index}_cb_chart-box`)

        ReactDOM.unmountComponentAtNode(parentChart)

        ReactDOM.render(<BarRadialChart data={data} scale={1} />, parentChart)
    }

    const downloadCallingReport = async (batch_id, customer_mobile_number) => {
        const res = await downloadBatchCallingReport(batch_id, customer_mobile_number)
        if (res) {
            let ele = document.getElementById(`${customer_mobile_number}_downloadCallingReport`)
            setDownloadReportUrl(res.file_url)
            ele.click()
        }
    }



    useEffect(() => {
        fetchCollectionBatchData()
    }, [fetchCollectionBatchData, HitReload])




    return (

        <div>
            <CollectionBatchHeader
                ArrayIds={ArrayIds}
                setSearchParameter={setSearchParameter}
                StorePrevFilter={StorePrevFilter}
                HitReload={HitReload}
                setHitReload={setHitReload} />
            <hr className="mt-3 mb-5" />

            {BatchData &&
                <>
                    {
                        BatchData.length > 0 &&
                        <>
                            {
                                BatchData.map((item, index) => {
                                    let data = {
                                        data: [
                                            { name: 'Connected', value: item.total_connected, color: "#359aba", indexValue: index },
                                            { name: 'PTP', value: item.total_ptp, color: "#4fbcce", indexValue: index },
                                            { name: 'Broken PTP', value: item.total_broken_ptp, color: "#4fbcce", indexValue: index },
                                            { name: 'Paid', value: item.total_paid, color: "#9debdc", indexValue: index }
                                        ],
                                        title: item.statics_data[0].total.accounts ? item.statics_data[0].total.accounts : '0',
                                        tooltipText: "Connected Call",
                                    }
                                    return (
                                        <>
                                            {/* <UploadBatch /> */}
                                            <div key={item.id} className="row d-flex justify-between batch-listing" data-aos="fade-up" data-aos-duration="800">
                                                <div className="col-md-2">
                                                    <div className="d-flex align-start">
                                                        <input
                                                            type="checkbox"
                                                            id={`collection_batch_checkbox_${item.id}`}
                                                            className="me-3 multi-checkbox"
                                                            color="primary"
                                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                        />
                                                        <div className="border-right-dotted w-100">
                                                            <p>
                                                                <Link
                                                                    to={`/collection/accounts/${item.batch_id}`}
                                                                ><b className="text-black tx-16"> Batch No. {item.client_batch_id}</b></Link><br />
                                                                Ref - {item.batch_name}<br />
                                                                {dateFormat(item?.uploaded_date)}
                                                            </p>
                                                            <p>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="25" viewBox="-263.6 383.2 43.3 25.2">
                                                                    <g>
                                                                        <g>
                                                                            <g>
                                                                                <g>
                                                                                    <path class="st0" fill="#FF5700" d="M-220.3,395.8c0-7-5.7-12.6-12.6-12.6l-30.6,0l0,25.2l30.7,0C-226,408.4-220.3,402.8-220.3,395.8z
                                                                                        M-232.9,406.6l-28.8,0l0-21.6l28.8,0c6,0,10.8,4.9,10.8,10.8C-222.1,401.8-227,406.6-232.9,406.6z"/>
                                                                                    <path class="st0" fill="#FF5700" d="M-232.9,386.8l-27,0l0,18l27,0c5,0,9-4,9-9C-223.9,390.8-227.9,386.8-232.9,386.8z M-250.5,399.4l-1.6-2.8
                                                                                        c-0.4-0.8-0.9-1.7-1.3-2.6l0,0c0,1,0.1,2,0.1,3.2l0,2.2l-1.5,0l0-7.3l1.9,0l1.5,2.7c0.4,0.8,0.9,1.7,1.2,2.5l0,0
                                                                                        c-0.1-1-0.1-1.9-0.1-3l0-2.1l1.5,0l0,7.3L-250.5,399.4L-250.5,399.4z M-247.3,399.4l0-7.3l4.5,0l0,1.4l-2.8,0l0,1.5l2.7,0l0,1.3
                                                                                        l-2.7,0l0,1.7l3,0l0,1.3C-242.7,399.4-247.3,399.4-247.3,399.4z M-236.4,399.4l-0.6-3.1c-0.1-0.7-0.3-1.4-0.3-2.2l0,0
                                                                                        c-0.1,0.8-0.3,1.5-0.4,2.2l-0.7,3.1l-1.8,0l-1.7-7.3l1.8,0l0.6,3c0.2,0.9,0.3,1.8,0.4,2.5l0,0c0.1-0.8,0.3-1.7,0.5-2.6l0.6-3
                                                                                        l1.8,0l0.6,3.1c0.2,0.9,0.3,1.6,0.4,2.4l0,0c0.1-0.8,0.3-1.7,0.4-2.5l0.6-3l1.7,0l-1.9,7.3
                                                                                        C-234.6,399.4-236.4,399.4-236.4,399.4z M-228.2,397.7c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2
                                                                                        C-226.2,396.9-227.1,397.8-228.2,397.7z"/>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7 border-right-dotted">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="ps-4">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="primary" className="batch-select mb-4 dropdown-nostyle text-start select-style">
                                                                        <span id={`cb_toggelLable1_${index}`} title='accounts'>Accounts</span>
                                                                        <img src={Arrow} alt="Sort" />
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="select-style-dropdown"

                                                                    >
                                                                        <Dropdown.Item
                                                                            onClick={() => {
                                                                                changeChartData({ index: index, lableValue1: 'accounts' })
                                                                            }}
                                                                        >Accounts</Dropdown.Item>
                                                                        <Dropdown.Item
                                                                            onClick={() => {
                                                                                changeChartData({ index: index, lableValue1: 'amount' })
                                                                            }}
                                                                        >Amount</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="batch-select mb-4 dropdown-nostyle text-start select-style">

                                                                        <span id={`cb_toggelLable2_${index}`} title='total'>All Product</span>
                                                                        <img src={Arrow} alt="Sort" />
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="select-style-dropdown">
                                                                        {Object.keys(item.statics_data[0]).map(mapItem => {
                                                                            return (<Dropdown.Item
                                                                                onClick={() => {
                                                                                    changeChartData({ index: index, lableValue2: mapItem })
                                                                                }}

                                                                                href="">{mapItem === 'total' ? 'All Product' : getFirstLetterCapital(mapItem)}</Dropdown.Item>)
                                                                        })}


                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="row status-progress">
                                                                <div className="chart-box"
                                                                    id={`${index}_cb_chart-box`}>
                                                                    <BarRadialChart data={data} scale={1}></BarRadialChart>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 ps-5">
                                                    <InputLabel id="label" className="mb-1">Action</InputLabel>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 text-start select-style">
                                                            Select <img src={Arrow} alt="Sort" />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="select-style-dropdown">
                                                            <Dropdown.Item href={item.raw_file}>Download Uploaded Data</Dropdown.Item>
                                                            <Dropdown.Item
                                                                onClick={() => downloadCallingReport(item.batch_id)}
                                                            >Download Calling Report</Dropdown.Item>
                                                            <a className="d-none"
                                                                rel='noreferrer noopener'
                                                                id={`${item.customer_mobile_number}_downloadCallingReport`}
                                                                target="_blank"
                                                                href={downloadReportUrl}></a>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <hr className="mt-5 mb-5" />
                                        </>
                                    )
                                })
                            }
                            <Paging currentPage={currentPage} pageTotal={pageTotal} handlePagination={handlePagination} />
                        </>
                    }
                    {
                        BatchData.length === 0 && <h1 className="text-center">No Data Found</h1>
                    }

                </>}

            {
                (!BatchData && UnableToFetch) && <h1 className='text-center'>Unable To Fetch Data</h1>
            }

            {
                (!BatchData && !UnableToFetch) && <ContentLoader />
            }
        </div>
    )
}

export default CollectionBatch



