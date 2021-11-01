import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    getBatchConvo,
    patchBatchConvo
} from '../../API'
function AdminBatchReset() {

    const { id } = useParams()
    const [data, setData] = useState('NaN')
    const [error, setError] = useState(false)
    // const [inputError, setInputError] = useState(false)
    // const [connection, setConnection] = useState(null)

    const getBatch = useCallback(async () => {
        const res = await getBatchConvo(id)
        if (res) {
            setError(false)
            setData(res.data)
            console.log('updateBatch', res.data)
        } else {
            setError(true)
        }
    }, [id])

    const updateBatch = async (data) => {
        // if (connection) {
        await patchBatchConvo(id, data)
        // } else {
        //     setInputError(true)
        // }

    }

    useEffect(() => {
        getBatch()
    }, [getBatch])



    const handelSubmit = (e) => {
        e.preventDefault()
        const sms = document.getElementById('sms').checked
        const whatsapp = document.getElementById('whatsapp').checked
        const call = document.getElementById('call').checked
        const ivr = document.getElementById('ivr').checked
        const myData = {
            "sms": sms,
            "whatsapp": whatsapp,
            "ivr": ivr,
            "human_call": call
        }
        updateBatch(myData)
    }


    return (
        error ?
            <h5>No batch found with batch-id of {id}</h5>
            :
            <div>
                <h5>Customer with disposition : {data?.customer_with_disposition_count}</h5>
                <h5>Customer without disposition : {data?.customer_without_disposition_count}</h5>
                <form>

                    {/* {
                        inputError &&
                        <> <br />
                            <div className="alert alert-info my-3" style={{ fontSize: 16 }} role="alert">
                                <div className='mx-3 py-1'>
                                    <li>Connection Type Is Not Selected</li>
                                </div>
                            </div>
                        </>
                    } */}

                    <br />
                    {/* <h6>Select Connection Type</h6>
                    <input className='me-2' type="radio" id="Connected" name="type" value="Connected"
                        onClick={() => {
                            setConnection(true)
                            setInputError(false)
                        }}
                    />
                    <label for="html">Connected</label><br />
                    <input className='me-2' type="radio" id="NotConnected" name="type" value="NotConnected"
                        onClick={() => {
                            setConnection(false)
                            setInputError(false)
                        }} />
                    <label for="css">Not Captured Yet</label><br /><br /> */}


                    <h6>Select Channels</h6>
                    <input
                        id='sms'
                        className='me-2' type="checkbox" name="sms" value="sms" />
                    <label className='mb-1' for="sms">Sms Channel</label><br />

                    <input
                        id='whatsapp'
                        className='me-2' type="checkbox" name="whatsapp" value="whatsapp" />
                    <label className='mb-1' for="whatsapp">Whatsapp Channel</label><br />

                    <input
                        id='call'
                        className='me-2' type="checkbox" name="human_call" value="human_call" />
                    <label className='mb-1' for="call">Human Call Channel</label><br />

                    <input
                        id='ivr'
                        className='me-2' type="checkbox" name="ivr" value="ivr" />
                    <label className='mb-1' for="ivr">IVR Channel</label><br />

                    <button
                        onClick={handelSubmit}
                        className="btn btn-info text-white">Reset</button>
                </form>

            </div>
    )
}

export default AdminBatchReset
