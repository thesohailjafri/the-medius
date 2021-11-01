import React, { useEffect, useState } from "react"
import { fetchAdminChannels, patchAdminChannels } from "../../API"

const RowData = (props) => {

    const [disable, setDisable] = useState(true)
    const [CurrentData, setCurrentData] = useState({
        name: props.data.name ? props.data.name : "-",
        status: props.data.status ? props.data.status : "-",
        start_time: props.data.start_time ? props.data.start_time : "-",
        end_time: props.data.end_time ? props.data.end_time : "-",
        interval: props.data.interval ? props.data.interval : "-",
        wait_time: props.data.wait_time ? props.data.wait_time : "-",
        customer_limit: props.data.customer_limit ? props.data.customer_limit : "-",
    })

    const handleChange = (e) => {
        setCurrentData({
            ...CurrentData,
            [e.target.name]: e.target.value
        })
    }


    const handelSave = async () => {
        setDisable(true)
        await patchAdminChannels(CurrentData)
    }


    useEffect(() => {

    }, [disable])
    return (
        <tr style={{
            background: `${disable ? "#F5F5F5" : "#FFF"}`
        }}>
            <th className="px-2" scope="row">{CurrentData.name}</th>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="status" onChange={handleChange} value={CurrentData.status} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="start_time" onChange={handleChange} value={CurrentData.start_time} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="end_time" onChange={handleChange} value={CurrentData.end_time} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="interval" onChange={handleChange} value={CurrentData.interval} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="wait_time" onChange={handleChange} value={CurrentData.wait_time} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="customer_limit" onChange={handleChange} value={CurrentData.customer_limit} /></td>
            <td className="d-flex" style={{ background: "#FFF" }}>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => setDisable(false)}>Edit</button>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => handelSave()}>Save</button>
            </td>
        </tr>
    )
}

const AdminChannel = () => {

    const [data, setData] = useState(null)

    const getData = React.useCallback(async () => {
        const res = await fetchAdminChannels()
        setData(res)
    }, [])

    useEffect(() => {
        getData()
    }, [getData])


    return (
        <>
            <table className="table">
                <thead>
                    <tr className="text-uppercase ">
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Start time</th>
                        <th scope="col">End Time</th>
                        <th scope="col">Interval</th>
                        <th scope="col">Wait time</th>
                        <th scope="col">Customer Limit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 && data.map((val, i) => {
                            return (
                                <RowData key={i} data={val} />
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}



export default AdminChannel