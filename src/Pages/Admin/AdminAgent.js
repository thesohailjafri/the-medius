import React, { useEffect, useState, useCallback } from "react"
import { fetchAdminAgents, patchAdminAgents } from "../../API"
// import {CheckCircleIcon} from '@material-ui/icons';
// import {CancelIcon} from '@material-ui/icons';


const DataRow = (props) => {
    const [disable, setDisable] = useState(true)
    const [CurrentData, setCurrentData] = useState({
        agent_id: props.data.agent_id,
        name: props.data.name,
        exotel_number: props.data.exotel_number,
        availability_status: props.data.availability_status,
        primary_language: props.data.primary_language,
        secondary_language: props.data.secondary_language,
        app_ids: props.data.app_ids,
        incoming_number: props.data.incoming_number,
        primary_sms_number: props.data.primary_sms_number,
        secondary_sms_number: props.data.secondary_sms_number,
        secondary_app_id: props.data.secondary_app_id,
        is_on_human_call: props.data.is_on_human_call
    })

    const handleChange = (e) => {
        setCurrentData({
            ...CurrentData,
            [e.target.name]: e.target.value
        })
    }

    const handelSave = async (id) => {
        setDisable(true)
        await patchAdminAgents(id, CurrentData)

    }

    console.log(props)
    useEffect(() => {

    }, [disable])

    return (
        <tr style={{
            fontSize: "10px",
            textAlign: "left",
            background: `${disable ? "#F5F5F5" : "#FFF"}`
        }}>
            <th className="px-2" scope="row">{CurrentData.agent_id}</th>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "80px" }} type="text" name="name" value={CurrentData.name} onChange={handleChange} /></td>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "90px" }} value={CurrentData.exotel_number} type="number" name="exotel_number" onChange={handleChange} /></td>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "80px" }} value={CurrentData.availability_status} type="number" name="availability_status" onChange={handleChange} /></td>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "70px" }} value={CurrentData.primary_language} type="text" name="primary_language" onChange={handleChange} /></td>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "70px" }} value={CurrentData.secondary_language} type="text" name="secondary_language" onChange={handleChange} /></td>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "50px" }} value={CurrentData.app_ids} type="number" name="app_ids" onChange={handleChange} /></td>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "90px" }} value={CurrentData.incoming_number} type="number" name="incoming_number" onChange={handleChange} /></td>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "90px" }} value={CurrentData.primary_sms_number} type="number" name="primary_sms_number" onChange={handleChange} /></td>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "90px" }} value={CurrentData.secondary_sms_number} type="number" name="secondary_sms_number" onChange={handleChange} /></td>
            <td className="px-2"><input disabled={disable} style={{ border: "none", maxWidth: "90px" }} value={CurrentData.secondary_app_id} type="number" name="secondary_app_id" onChange={handleChange} /></td>
            <td className="px-2">{CurrentData.is_on_human_call ? "true" : "false"}</td>
            <td className="d-flex" style={{ background: "#FFF" }}>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => setDisable(false)}>Edit</button>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => handelSave(CurrentData.agent_id)}>Save</button>
            </td>
        </tr>
    )
}

const AdminAgent = () => {

    const [data, setData] = useState(null)

    const getData = useCallback(async () => {
        const res = await fetchAdminAgents()
        setData(res)
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <>
            <table className="table">
                <thead>
                    <tr className="text-uppercase" style={{
                        fontSize: "10px"
                    }}>
                        <th scope="col">Agent Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Exotel Number</th>
                        <th scope="col">Availability Status</th>
                        <th scope="col">Primary Language</th>
                        <th scope="col">Secondary Language</th>
                        <th scope="col">App Ids</th>
                        <th scope="col">Incoming Number</th>
                        <th scope="col">Primary SMS Number</th>
                        <th scope="col">Secondary SMS Number</th>
                        <th scope="col">Secondary App ID</th>
                        <th scope="col">Is on Human Call</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 && data.map((val, i) => {
                            return (
                                <>
                                    <DataRow data={val} />
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default AdminAgent