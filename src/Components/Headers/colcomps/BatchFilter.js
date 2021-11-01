import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import TextField from '@mui/material/TextField'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
function BatchFilter({
    smShow,
    setSmShow,
    refBatchName,
    refBatchId,
    refStatus,
    refDateFrom,
    refDateTo,
    setSortAsc,
    setSearchParameter,
    refSpecificDate,
}) {
    const [from, setFrom] = React.useState(null)
    const [to, setTo] = React.useState(null)
    const handleChangeFrom = (newValue) => {
        setFrom(newValue)
        refDateFrom = newValue
    }

    const handleChangeTo = (newValue) => {
        setTo(newValue)
        refDateTo = newValue
    }
    return (
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
                        <div className="col-md-12 pt-3 pb-3">
                            <input type="text"
                                onChange={(e) => refBatchName = e.target.value}
                                className="form-control" placeholder="Search by file name" />
                        </div>
                    </div>
                    <div className="grey-bg mb-2">
                        <div className="mb-2 row">
                            <label for="inputPassword"

                                className="col-md-8 col-form-label pt-2 mt-1">Search by Batch Number</label>
                            <div className="col-md-4">
                                <input type="text"
                                    onChange={(e) => refBatchId = e.target.value}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 row"
                        onChange={(e) => refStatus = e.target.value}//td
                    >
                        <div className="col-md-3">
                            <label for="gridRadios2" className="col-form-label">
                                <input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios2" value="All_Batches" /> All Batches</label>
                        </div>
                        <div className="col-md-4">
                            <label for="gridRadios2" className="col-form-label">
                                <input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios2" value="Active_Batches" /> Active Batches</label>
                        </div>
                        <div className="col-md-5">
                            <label for="gridRadios2" className="col-form-label">
                                <input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios2" value="Completed_Batches" /> Completed Batches</label>
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
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <div className="col-md-6">
                                            <DesktopDatePicker
                                                className="form-control"
                                                label="From"
                                                inputFormat="MM/dd/yyyy"
                                                value={from}
                                                onChange={handleChangeFrom}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <DesktopDatePicker
                                                className="form-control"
                                                label="To"
                                                inputFormat="MM/dd/yyyy"
                                                value={to}
                                                onChange={handleChangeTo}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </div>

                                        {/* <input type ="date"
                                    onChange={(e) => refDateFrom = e.target.value}
                                    className="form-control" id="from" placeholder="From" />
                                </div> */}
                                        {/* <div className="col-md-6">
                                            <input type="date"
                                                onChange={(e) => refDateTo = e.target.value}
                                                className="form-control" id="to" placeholder="To" />
                                        </div> */}
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="gridRadios3" className="col-md-5 col-form-label"><input className="form-check-input ml-0" type="radio" name="gridRadios" id="gridRadios3" value="option2" /> Specific Date</label>
                            <div className="col-md-7">
                                <select id="Bucket"
                                    onChange={(e) => refSpecificDate = e.target.value}
                                    className="form-control">
                                    <option selected>Select</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body >
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    setSmShow(false)
                    setTo(null)
                    setFrom(null)
                }
                }>Close</Button>
                <Button variant="primary"
                    onClick={() => {
                        setSmShow(false)
                        setSortAsc(true)
                        setSearchParameter({
                            batch_name: refBatchName,
                            batch_id: refBatchId,
                            batch_status: refStatus,
                            from_date: refDateFrom,
                            to_date: refDateTo,
                            specific_date: refSpecificDate,
                        })

                        refBatchName = null
                        refBatchId = null
                        refStatus = null
                        refDateFrom = null
                        refDateTo = null
                        refSpecificDate = null

                    }}>Apply</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default BatchFilter
