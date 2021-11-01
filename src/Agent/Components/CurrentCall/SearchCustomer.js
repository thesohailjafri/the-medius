import React from 'react'

function SearchCustomer({ failedCustomerSearch, setFailedCustomerSearch, handelSubmit, searchPara }) {
    return (
        <form className="text-start" onSubmit={handelSubmit}>
            <h2 className="text-center">Find Customer</h2>
            {
                failedCustomerSearch &&
                <div className="alert alert-info my-3" style={{ fontSize: 16 }} role="alert">
                    <div className='mx-3 py-1'>

                        {searchPara.customer_name !== null && <li>Check Customer Name</li>}
                        {searchPara.mob !== null && <li>Check Mobile Number</li>}
                        {searchPara.lrn !== null && <li>Check LRN</li>}
                    </div>
                </div>
            }
            <div className="input-group mb-3">
                <label for="Disposition" className="col-sm-12 col-form-label">Customer Name</label>
                <input type="text" className="form-control " id="search" placeholder="Enter Customer Name"
                    onClick={() => setFailedCustomerSearch(false)}
                />
            </div>
            <div className="input-group mb-3">
                <label for="Disposition" className="col-sm-12 col-form-label">Customer Mobile Number</label>
                <input type="text" className="form-control " id="search" placeholder="Enter Mobile Number"
                    onClick={() => setFailedCustomerSearch(false)}
                />
            </div>
            <div className="input-group mb-3">
                <label for="Disposition" className="col-sm-12 col-form-label">Customer LRN</label>
                <input type="text" className="form-control" id="search" placeholder="Enter LRN"
                    onClick={() => setFailedCustomerSearch(false)}
                />
            </div>
            <div className="input-group mb-3">
                <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary btn-lg w-100">Search</button>
                </div>
            </div>

        </form>
    )
}

export default SearchCustomer
