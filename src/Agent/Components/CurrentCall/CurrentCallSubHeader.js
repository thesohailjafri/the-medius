import React, { useCallback, useEffect, useState } from 'react'
import { fetchAgentPanelData } from '../../../API'

function CurrentCallSubHeader() {

    const [data, setData] = useState({
        attempted: 'Nan',
        connected: 'Nan',
        final_value: 'Nan',
        paid: 'Nan',
    })

    const getPanelData = useCallback(
        async () => {
            const res = await fetchAgentPanelData()
            setData(res)
        },
        []
    )

    useEffect(() => {
        getPanelData()
    }, [getPanelData])

    return (
        <div className="row">
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-between text-black">
                            <div>Attempted Calls</div>
                            <div><strong>{data?.attempted}/200</strong></div>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-between text-black">
                            <div>Connected Calls</div>
                            <div><strong>{data?.connected}/200</strong></div>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-between text-black">
                            <div>Paid Receipts</div>
                            <div><strong>{data?.paid}/15</strong></div>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-between text-black">
                            <div>Total Collection</div>
                            <div><strong>{data?.final_value}/ 1,00,000</strong></div>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentCallSubHeader
