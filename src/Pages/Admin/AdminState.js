import React, { useEffect, useState, useCallback } from "react"
import { fetchAdminState, patchAdminState } from "../../API"

const RowData = (props) => {

    const [disable, setDisable] = useState(true)
    const [CurrentData, setCurrentData] = useState({
        id: props.data.id ? props.data.id : "-",
        state: props.data.state ? props.data.state : "-",
        priority: props.data.priority ? props.data.priority : "-",
        language: props.data.language ? props.data.language : "-",
        sms_language: props.data.sms_language ? props.data.sms_language : "-",
        whatsapp_language: props.data.whatsapp_language ? props.data.whatsapp_language : "-",
        ivr_language: props.data.ivr_language ? props.data.ivr_language : "-",
    })
    console.log(props)

    const handleChange = (e) => {
        setCurrentData({
            ...CurrentData,
            [e.target.name]: e.target.value
        })
    }

    const handelSave = async (id) => {
        setDisable(true)
        await patchAdminState(id, CurrentData)
    }


    useEffect(() => {

    }, [disable])
    return (
        <tr style={{
            background: `${disable ? "#F5F5F5" : "#FFF"}`
        }}>
            <th className="px-2" scope="row">{CurrentData.id}</th>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="state" onChange={handleChange} value={CurrentData.state} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="priority" onChange={handleChange} value={CurrentData.priority} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="language" onChange={handleChange} value={CurrentData.language} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="sms_language" onChange={handleChange} value={CurrentData.sms_language} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="whatsapp_language" onChange={handleChange} value={CurrentData.whatsapp_language} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="ivr_language" onChange={handleChange} value={CurrentData.ivr_language} /></td>
            <td className="d-flex" style={{ background: "#FFF" }}>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => setDisable(false)}>Edit</button>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => handelSave(CurrentData.id)}>Save</button>
            </td>
        </tr>
    )
}

const AdminState = () => {

    const [data, setData] = useState(null)

    const getData = useCallback(async () => {
        const res = await fetchAdminState()
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
                        <th scope="col">ID</th>
                        <th scope="col">State</th>
                        <th scope="col">priority</th>
                        <th scope="col">Language</th>
                        <th scope="col">SMS Language</th>
                        <th scope="col">whatsapp Language</th>
                        <th scope="col">IVR Language</th>
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

export default AdminState