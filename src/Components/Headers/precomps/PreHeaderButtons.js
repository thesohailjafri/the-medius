import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

function PreHeaderButtons({
    setSmShow,
    Sort,
    downloadReport,
    setLgShow,
    setSortAsc,
    setSearchParameter,
    SortAsc,
    StorePrevFilter

}) {
    return (
        <>
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
                        console.log('sortttt')

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
        </>
    )
}

export default PreHeaderButtons
