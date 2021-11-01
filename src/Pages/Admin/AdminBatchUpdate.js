import { offset } from '@popperjs/core'
import React, { useEffect, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { patchBatchCampaign, fetchCollectionBatch } from '../../API'
import MultipleSelectChip from '../../Components/Util/MultipleSelectChip'

const dispoPrintData = [
    {
        id: 'WN',
        value: 'Wrong Number',
    },
    {
        id: 'SW',
        value: 'Switched Off',
    },
    {
        id: 'RNR',
        value: 'Ringing, No Response',
    },
    {
        id: 'PTP',
        value: 'Promise To Pay',
    },
    {
        id: 'BPTP',
        value: 'Broken PTP',
    },
    {
        id: 'DIS',
        value: 'Dispute',
    },
    {
        id: 'SUR',
        value: 'Surender',
    },
    {
        id: 'PAID',
        value: 'Paid',
    },
    {
        id: 'CB',
        value: 'Call Back',
    },
    {
        id: 'SETL',
        value: 'Want Settlemen',
    },
    {
        id: 'RTP',
        value: 'Refuse To Pay',
    },
    {
        id: 'DND',
        value: 'Do Not Disturb',
    },
    {
        id: 'NC',
        value: 'Not Captured Yet',
    }

]

const resetPrintData = [
    {
        id: 'sms',
        value: 'Sms',
    },
    {
        id: 'whatsapp',
        value: 'Whatsapp',
    },
    {
        id: 'human_call',
        value: 'Human Call',
    },
    {
        id: 'ivr',
        value: 'IVR',
    }
]

function AdminBatchUpdate() {
    const [batchData, setBatchData] = useState([])
    const [dispoArray, setDispoArray] = useState([])
    const [resetArray, setResetArray] = useState({
        // sms: false,
        // whatsapp: false,
        // ivr: false,
        // human_call: false,
    })
    const [date, setDate] = useState(null)
    const [batchIds, setBatchIds] = useState([])
    const [error, setError] = useState(false)


    const fetchCollectionBatchData = useCallback(async () => {
        const res = await fetchCollectionBatch()
        let resData = res.data.map(item => {
            return ({ batch_id: item.batch_id, batch_name: item.batch_name })
        })
        setBatchData(resData)
    }, [])

    const handelSubmit = async (e) => {
        e.preventDefault()
        if (batchIds.length > 0 &&
            date &&
            Object.keys(resetArray).length > 0 &&
            dispoArray.length > 0
        ) {
            await patchBatchCampaign(batchIds, date, dispoArray, resetArray)
        } else {
            setError(true)
        }
    }

    const handelBatchChange = (val) => {
        setError(false)
        console.log({ val })
        setBatchIds(val)
    }

    const handelDate = (e) => {
        setError(false)
        const { value } = e.target
        if (value) {
            setDate(value)
        } else {
            setDate(null)
        }

    }

    const handelDispoChange = (e) => {
        setError(false)
        const { name, checked } = e.target
        let _dispoArray = dispoArray

        if (checked) {
            _dispoArray.push(name)
        } else {
            _dispoArray = _dispoArray.filter(item => item !== name)
        }
        setDispoArray(_dispoArray)
    }

    const handelResetChange = (e) => {
        setError(false)
        const { name, checked } = e.target
        let _resetArray = resetArray

        if (checked) {
            _resetArray[name] = true
        } else {
            delete _resetArray[name]
        }
        console.log({ _resetArray })
        setResetArray(_resetArray)
    }




    useEffect(() => {
        fetchCollectionBatchData()
    }, [fetchCollectionBatchData])


    return (


        <form
            className="w-50 mb-4 form-control"
            onSubmit={handelSubmit}>
            {error &&
                <div className="alert alert-info my-3" style={{ fontSize: 16 }} role="alert">
                    <div className='mx-3 py-1'>
                        {batchIds.length === 0 && <li>Batch Is Not Selected</li>}
                        {date === null && <li>Date Is Not Selected</li>}
                        {dispoArray.length === 0 && <li>No Diposition Is Not Selected</li>}
                        {Object.keys(resetArray).length === 0 && <li>No Channel Is Not Selected</li>}
                    </div>
                </div>
            }

            <h6 className='mt-2'>Batches</h6>
            <MultipleSelectChip names={batchData} handelBatchChange={handelBatchChange} lableName="Batch-No." />
            <hr />

            <h6>Date</h6>
            <input
                className="form-control"
                onChange={handelDate}
                type="date" name="" id="date" />
            <hr />

            <h6>Dipositions</h6>
            {dispoPrintData.map((val, i) => {
                return (
                    <div>
                        <input
                            id={'dispo_' + val.id}
                            className='me-2' type="checkbox" name={val.id}
                            onChange={handelDispoChange}
                        />
                        <label className='mb-1' htmlFor={'dispo_' + val.id}>{val.value}</label>
                    </div>
                )
            })}
            <hr />

            <h6>Channels</h6>
            {resetPrintData.map((val, i) => {
                return (
                    <div>
                        <input
                            id={'reset_' + val.id}
                            className='me-2' type="checkbox" name={val.id}
                            onChange={handelResetChange}
                        />
                        <label className='mb-1' htmlFor={'reset_' + val.id}>{val.value}</label>
                    </div>
                )
            })}
            <hr />

            <button
                className="btn btn-primary btn-lg w-100"
                type="submit">Submit</button>

        </form>
    )
}

export default AdminBatchUpdate
