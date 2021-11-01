import React, { useEffect, useState } from "react"
import { fetchAdminUser, fetchAdminWhatsappTemplate, patchAdminUser } from "../../API"

const RowData = (props) => {

    const [disable, setDisable] = useState(true)
    const [CurrentData, setCurrentData] = useState({
        user_id: props.data.user_id ? props.data.user_id : "-",
        first_name: props.data.first_name ? props.data.first_name : "-",
        last_name: props.data.last_name ? props.data.last_name : "-",
        email: props.data.email ? props.data.email : "-",
        phone: props.data.phone ? props.data.phone : "-",
        role: props.data.role ? props.data.role : "-",
        country: props.data.country ? props.data.country : "-",
    })

    const handleChange = (e) => {
        setCurrentData({
            ...CurrentData,
            [e.target.name]: e.target.value
        })
    }

    const handelSave = async (id) => {
        setDisable(true)
        await patchAdminUser(id, CurrentData)

    }

    useEffect(() => {

    }, [disable])
    return (
        <tr style={{
            background: `${disable ? "#F5F5F5" : "#FFF"}`
        }}>
            <th className="px-2" scope="row">{CurrentData.user_id}</th>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="first_name" onChange={handleChange} value={CurrentData.first_name} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="last_name" onChange={handleChange} value={CurrentData.last_name} /></td>
            <td className="px-2"><input style={{ maxWidth: "150px", border: "none" }} disabled={disable} type="text" name="email" onChange={handleChange} value={CurrentData.email} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="phone" onChange={handleChange} value={CurrentData.phone} /></td>
            <td className="px-2"><input style={{ maxWidth: "80px", border: "none" }} disabled={disable} type="text" name="role" onChange={handleChange} value={CurrentData.role} /></td>
            <td className="px-2"><input style={{ maxWidth: "100px", border: "none" }} disabled={disable} type="text" name="country" onChange={handleChange} value={CurrentData.country} /></td>
            <td className="d-flex" style={{ background: "#FFF" }}>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => setDisable(false)}>Edit</button>
                <button style={{ background: "none", borderRadius: "5px", padding: "0 5px" }} className="mx-2" onClick={() => handelSave(CurrentData.user_id)}>Save</button>
            </td>
        </tr>
    )
}

const AdminUser = () => {

    const [data, setData] = useState(null)

    const getData = React.useCallback(async () => {
        const res = await fetchAdminUser()
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
                        <th scope="col">User ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Role</th>
                        <th scope="col">Country</th>
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

export default AdminUser