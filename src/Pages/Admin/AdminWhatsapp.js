import React, { useEffect, useState } from "react"
import { fetchAdminWhatsappTemplate, patchAdminWhatsappTemplate } from "../../API"

const RowData = (props) => {

    const [disable, setDisable] = useState(true)
    const [CurrentData, setCurrentData] = useState({
        id: props.data.id ? props.data.id : "-",
        template_name: props.data.template_name ? props.data.template_name : "-",
        template_message: props.data.template_message ? props.data.template_message : "-",
        language: props.data.language ? props.data.language : "-",
        type: props.data.type ? props.data.type : "-",
    })

    const handleChange = (e) => {
        setCurrentData({
            ...CurrentData,
            [e.target.name]: e.target.value
        })
    }

    const handelSave = async (id) => {
        setDisable(true)
        const res = await patchAdminWhatsappTemplate(id, CurrentData)
        console.log(res)
    }

    useEffect(() => {

    }, [disable])
    return (
        <tr style={{
            background: `${disable ? "#F5F5F5" : "#FFF"}`
        }}>
            <th className="px-2" scope="row">{CurrentData.id}</th>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="template_name" onChange={handleChange} value={CurrentData.template_name} /></td>
            <td className="px-2"><input style={{ maxWidth: "350px", border: "none" }} disabled={disable} type="text" name="template_message" onChange={handleChange} value={CurrentData.template_message} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="language" onChange={handleChange} value={CurrentData.language} /></td>
            <td className="px-2"><input style={{ maxWidth: "200px", border: "none" }} disabled={disable} type="text" name="type" onChange={handleChange} value={CurrentData.type} /></td>
            <td className="d-flex" style={{ background: "#FFF" }}>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => setDisable(false)}>Edit</button>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => handelSave(CurrentData.id)}>Save</button>
            </td>
        </tr>
    )
}

const AdminWhatsapp = () => {

    const [data, setData] = useState(null)

    const getData = React.useCallback(async () => {
        const res = await fetchAdminWhatsappTemplate()
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
                        <th scope="col">Template Name</th>
                        <th scope="col">Template Message</th>
                        <th scope="col">Language</th>
                        <th scope="col">type</th>
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

export default AdminWhatsapp