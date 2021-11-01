import React from 'react'
import {
    fieldMatcher,
    HeaderNameUpdateHandler
} from '../../../Functions/batchUploadHandler'

import { parameters, dummynames } from '../../../parametersPrelitigation'


function PreMatcher({
    HeaderNameMatched,
    setHeaderNameMatched,
    UploadHeaders,
    setUploadHeaders,
    HeaderName,
}) {
    return (
        <div className='batch-upload-main'>
            <div className="batch-upload-field">
                <div className="row mb-3">
                    <div className="col-md-6 ps-0 pe-0 text-start">
                        Column label htmlFor File
                    </div>
                    <div className="col-md-6 ps-0 pe-0 text-start">
                        Prospect Attributes
                    </div>
                </div>

                {Object.keys(parameters).map((item1, index) => {
                    let value = fieldMatcher(item1, HeaderNameMatched)
                    let checkState = value ? true : false
                    return (
                        <>
                            <div key={item1} className="row mb-2">
                                <div className="col-md-5 ps-0 pe-0">
                                    <div className="form-control text-start tx-readonly">{dummynames[item1]}</div>
                                </div>
                                <div className="col-md-1 ps-0 pe-0">
                                    {value ?
                                        <>
                                            <div id={`equalBtn_${item1}`} style={{ opacity: '1' }} color={'#505050'} >
                                                <div className="field-sep"></div>
                                            </div>
                                            <div id={`notEqualBtn_${item1}`} style={{ display: 'none', opacity: '0.25' }} color={'#505050'} >
                                                <div className="field-sep"></div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div id={`equalBtn_${item1}`} style={{ display: 'none' }} color={'#505050'} >
                                                <div className="field-sep"></div>
                                            </div>
                                            <div id={`notEqualBtn_${item1}`} style={{ opacity: '0.25' }} color={'#505050'} >
                                                <div className="field-sep"></div>
                                            </div>

                                        </>}
                                </div>
                                <div className="col-md-4 ps-0 pe-0">

                                    <select
                                        className="form-select"
                                        name={item1}
                                        onChange={(e) => HeaderNameUpdateHandler(item1, e.target.value, HeaderNameMatched, setHeaderNameMatched, UploadHeaders, setUploadHeaders)}
                                    >
                                        {HeaderName.map((item2) => {
                                            return <option value={item2} selected={value === item2} >{item2} </option>
                                        })}
                                    </select>
                                </div>

                                <div className="col-md-2 ps-2 pe-0 text-start">
                                    <input
                                        type="checkbox"
                                        id={`checkbox_${item1}`}
                                        className="me-0"
                                        color="primary"
                                        checked={checkState}
                                        onClick={() => { document.getElementById(`checkbox_${item1}`).checked = false }}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    <label htmlFor={`checkbox_${item1}`}>{value ? 'Matched' : 'Not Matched'}</label>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    )
}

export default PreMatcher
