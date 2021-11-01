import React, { useEffect, useState, useCallback } from "react"
import { useParams } from "react-router-dom"
import PrelitigationBatchHeader from './Headers/PrelitigationBatchHeader'
import { fetchAdminBatchReport } from "../API"
import ContentLoader from './ContentLoader'
import AdminBatchReportHeader from "./AdminBatchReportHeader"

function AdminBatchReport() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    const getData = useCallback(
        async () => {
            const data = await fetchAdminBatchReport(id)

            if (data) {
                setData(data)
            }
        },
        [id]
    )

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <>
            <AdminBatchReportHeader id={id} />
            {
                data ?
                    <div className="mt-5">
                        <h4>Batch Id:- {id}</h4>
                        <h4>Sent Report</h4>
                        <div className="d-flex justify-content-start">
                            <div className="mx-4">
                                <h5>WhatsApp</h5>
                                {
                                    Object.entries(data.sent.WHATSAPP).map((val, i) => {
                                        return (
                                            <div className="text-capitalize" key={i}>{val[0]}- {val[1]}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mx-4">
                                <h5>SMS</h5>
                                {
                                    Object.entries(data.sent.SMS).map((val, i) => {
                                        return (
                                            <div className="text-capitalize">{val[0]}- {val[1]}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mx-4">
                                <h5>IVR</h5>
                                {
                                    Object.entries(data.sent.IVR).map((val, i) => {
                                        return (
                                            <div className="text-capitalize">{val[0]}- {val[1]}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <h4 className="mt-5">Report Not Sent</h4>
                        <div className="d-flex justify-content-start">
                            <div className="mx-4">
                                <h5>WhatsApp</h5>
                                {
                                    Object.entries(data.not_sent.WHATSAPP).map((val, i) => {
                                        return (
                                            <div className="text-capitalize" key={i}>{val[0]}- {val[1]}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mx-4">
                                <h5>SMS</h5>
                                {
                                    Object.entries(data.not_sent.SMS).map((val, i) => {
                                        return (
                                            <div className="text-capitalize">{val[0]}- {val[1]}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mx-4">
                                <h5>IVR</h5>
                                {
                                    Object.entries(data.not_sent.IVR).map((val, i) => {
                                        return (
                                            <div className="text-capitalize">{val[0]}- {val[1]}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>


                        <h4 className="mt-5">Report Not Sent</h4>
                        <div className="d-flex justify-content-start">
                            <div className="mx-4">
                                <h5>Human Call</h5>
                                {
                                    Object.entries(data.not_sent.HUMAN_CALL).map((val, i) => {
                                        return (
                                            <div className="text-capitalize" key={i}>{val[0]}- {val[1]}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mx-4">
                                <h5>SMS</h5>
                                {
                                    Object.entries(data.not_sent.HUMAN_CALL).map((val, i) => {
                                        return (
                                            <div className="text-capitalize">{val[0]}- {val[1]}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mx-4">
                                <h5>IVR</h5>
                                {
                                    Object.entries(data.not_sent.HUMAN_CALL).map((val, i) => {
                                        return (
                                            <div className="text-capitalize">{val[0]}- {val[1]}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div> : <ContentLoader />
            }
        </>
    )
}

export default AdminBatchReport