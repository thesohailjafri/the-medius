import React, { useState, useEffect } from 'react'

function DispoPercent({ data }) {
    const [total, setTotal] = useState(null)
    const [amountTotal, setAmountTotal] = useState(null)
    const [accountTotal, setAccountTotal] = useState(null)
    useEffect(() => {
        if (data) {
            let totalA = Object.values(data)

            let amountT = 0
            let accountT = 0
            totalA.map((val, i) => {
                return (
                    accountT = accountT + val?.customer_count
                )
            })
            totalA.map((val, i) => {
                return (
                    amountT = amountT + val?.amount
                )
            })
            setTotal(totalA)
            setAmountTotal(amountT)
            setAccountTotal(accountT)
            console.log(totalA)
        }
    }, [data])

    return (
        <table className="w-100 table table-striped mb-0">
            <tbody>

                {(total && total.length > 0) ?
                    total.map((val, i) => {
                        return (
                            <tr>
                                <td>
                                    <div className="d-flex justify-between text-black ps-3 pe-4">
                                        <div>
                                            <strong>{val?.disposition}</strong>
                                        </div>
                                        <div className="text-end">
                                            <div>{val?.amount >= 0 ? ((100 * val?.amount) / amountTotal).toFixed(1) : '0.0'}%</div>
                                        </div>
                                    </div>
                                    <div className="table-prog">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: `${val?.amount >= 0 ? ((100 * val?.amount) / amountTotal).toFixed(0) : '0'}%` }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                    :
                    'No Data Found'}
            </tbody>
        </table>
    )
}

export default DispoPercent
