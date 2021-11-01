import React, { useEffect, useState } from "react"
import { fetchAdminChannelRules, patchAdminChannelRules } from "../../API"

const RowData = (props) => {

    const [disable, setDisable] = useState(true)
    const [CurrentData, setCurrentData] = useState({
        batch_id: props.data.batch_id,
        current_channel: props.data.current_channel,
        first_channel: props.data.first_channel,
        second_channel: props.data.second_channel,
        third_channel: props.data.third_channel,
        fourth_channel: props.data.fourth_channel,
        fifth_channel: props.data.fifth_channel,
    })

    const handleChange = (e) => {
        setCurrentData({
            ...CurrentData,
            [e.target.name]: e.target.value
        })
    }

    const handelSave = async (id) => {
        setDisable(true)
        const res = await patchAdminChannelRules(id, CurrentData)
        console.log(res)
    }

    useEffect(() => {

    }, [disable])
    return (
        <tr style={{
            background: `${disable ? "#F5F5F5" : "#FFF"}`
        }}>
            <th className="px-2" scope="row">{CurrentData.batch_id}</th>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="current_channel" onChange={handleChange} value={CurrentData.current_channel} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="first_channel" onChange={handleChange} value={CurrentData.first_channel} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="second_channel" onChange={handleChange} value={CurrentData.second_channel} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="third_channel" onChange={handleChange} value={CurrentData.third_channel} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="fourth_channel" onChange={handleChange} value={CurrentData.fourth_channel} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="fifth_channel" onChange={handleChange} value={CurrentData.fifth_channel} /></td>
            <td className="d-flex" style={{ background: "#FFF" }}>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => setDisable(false)}>Edit</button>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => handelSave(CurrentData.batch_id)}>Save</button>
            </td>
        </tr>
    )
}

const AdminChannelRules = () => {

    const [data, setData] = useState(null)


    useEffect(async () => {
        setData(await fetchAdminChannelRules())
    }, [])

    return (
        <>
            <table className="table">
                <thead>
                    <tr className="text-uppercase ">
                        <th scope="col">Batch Id</th>
                        <th scope="col">Current Channel</th>
                        <th scope="col">First Channel</th>
                        <th scope="col">Second Channel</th>
                        <th scope="col">Third Channel</th>
                        <th scope="col">Fourth Channel</th>
                        <th scope="col">Fifth Channel</th>
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

export default AdminChannelRules