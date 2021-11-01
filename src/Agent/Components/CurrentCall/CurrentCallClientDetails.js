import React from 'react'
import getDifferenceInDays from '../../../Functions/getDifferenceInDays'
import getCorrentDateFormat from '../../../Functions/getCorrentDateFormat'
import amountCommaSeparator from '../../../Functions/amountCommaSeparator'
function CurrentCallClientDetails({ data }) {
    return (
        <>
            {
                !(Object.keys(data).length !== 0) ?
                    <div className="ag-data ag-data-history">
                        <h3 className="mb-4">No Client Data Found</h3>
                    </div>
                    :
                    <div className="ag-data ag-data-client">
                        <h3 className="mb-4">Client Details</h3>
                        <div className="card">
                            <div className="card-body">
                                <div className="grey-bg mb-3">
                                    <p className="mb-2">ID - {data.customer_id}</p>
                                    <h3 className="text-black">{data.customer_name}</h3>
                                    {/* <h4>Client of. {data.customer_mobile_number}</h4> */}
                                    <h4>Contact No. {data.customer_mobile_number}</h4>
                                    <h4>{data.customer_city}, {data.customer_state}</h4>



                                    <hr />
                                    {/* total_charges */}
                                    <div className="d-flex py-1 justify-between text-black">
                                        <div className="tx-15">Total Due</div>
                                        <div className="tx-15">Rs. {amountCommaSeparator(data.loan_amount)}</div>
                                    </div>
                                    <div className="d-flex py-1 justify-between text-black">
                                        <div className="tx-15">Due Since</div>
                                        {data.due_date && <div className="tx-15">{getDifferenceInDays(data.due_date)} days</div>}
                                    </div>
                                    <div className="d-flex py-1 justify-between text-black">
                                        <div className="tx-15">Category</div>
                                        <div className="tx-15">{data.product_group}</div>
                                    </div>
                                    <div className="d-flex py-1 justify-between text-black">
                                        <div className="tx-15">Product</div>
                                        <div className="tx-15">{data.product_name}</div>
                                    </div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Total Loan Amount</div>
                                    <div>Rs. {amountCommaSeparator(data.amount_finanaced)}</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Loan A/c No.</div>
                                    <div>{data.loan_account_no}</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Arbitration</div>
                                    <div>Award Passed</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Legal Notice</div>
                                    <div>Sent</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Penalty</div>
                                    <div>Rs. 1,100</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Interest</div>
                                    <div>Rs. 943</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">First EMI</div>
                                    <div>{getCorrentDateFormat(data.first_emi_date)}</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Last EMI Date</div>
                                    <div>{getCorrentDateFormat(data.last_emi_date)}</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Address Line 1</div>
                                    <div>{data.customer_address1}</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Address Line 2</div>
                                    <div>{data.customer_address2}</div>
                                </div>
                                <div className="d-flex py-2 justify-between text-black">
                                    <div className="text-muted me-4">Address Line 3</div>
                                    <div>{data.customer_address3}</div>
                                </div>
                            </div>
                        </div>
                    </div>


            }
        </>
    )
}

export default CurrentCallClientDetails
