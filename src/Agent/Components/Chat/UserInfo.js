import React from 'react'
import amountCommaSeparator from '../../../Functions/amountCommaSeparator'
import getDifferenceInDays from '../../../Functions/getDifferenceInDays'


function UserInfo({ accountData }) {
    return (
        <div className="mb-3 white-bg pb-3 px-3 agent-chat-data">
            <p className="mb-2 text-muted">ID - {accountData.customer_id ? accountData.customer_id : "-"}</p>
            <h3 className="text-black">{accountData.customer_name ? accountData.customer_name : "--"}</h3>
            <h4>{accountData.customer_city ? accountData.customer_city : ""}, {accountData.customer_state ? accountData.customer_state : ""}</h4>
            <hr />
            <div className="d-flex py-1 justify-between text-black">
                <div className="tx-15">Total Due</div>
                <div className="tx-15">Rs. {amountCommaSeparator(accountData.total_charges)} {/*(3 EMIs)*/}</div>
            </div>
            <div className="d-flex py-1 justify-between text-black">
                <div className="tx-15">Due Since</div>
                <div className="tx-15">{getDifferenceInDays(accountData.due_date)} days</div>
            </div>
            <div className="d-flex py-1 justify-between text-black">
                <div className="tx-15">Category</div>
                <div className="tx-15">{accountData.product_group ? accountData.product_group : "-"}</div>
            </div>
            <div className="d-flex py-1 justify-between text-black">
                <div className="tx-15">Product</div>
                <div className="tx-15">{accountData.product_name ? accountData.product_name : "-"}</div>
            </div>
        </div>
    )
}

export default UserInfo
