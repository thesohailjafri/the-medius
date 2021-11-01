import React, { useEffect } from 'react'
import { MultiSelect } from "react-multi-select-component"
import Excel from '../../../Static/Images/excel.svg'


const options = [
    { label: "Arbitration Notice", value: "Arbitration Notice" },
    { label: "Loan Recall Notice", value: "Loan Recall" },
    { label: "Demand Notice", value: "Demand Notice" },
    { label: "138 Notice", value: "138 Notice" },
    { label: "Sarfaesi / 13(2) Notice", value: "Sarfaesi" },
]

const optionsCommunication = [
    { label: "Postal", value: "postal" },
    { label: "Whatsapp", value: "whatsapp" },
    { label: "Email", value: "email" },
    { label: "SMS", value: "sms" },
]

function PreFormInputs({
    noticeType,
    setNoticeType,
    noticeLanguage,
    commicationMode,
    setCommicationMode,
    setNoticeLanguage,
    handleHeaderName,
    parameters,
    setProgressBar,
    setFileName,
    setOnImportPage,
    setHeaderName,
    setHeaderNameMatched,
    setUploadHeaders,
    setBatchFile,
    HeaderNameMatched,
}) {
    useEffect(() => {
        document.getElementById("uploadFile").disabled = (noticeType && noticeLanguage && commicationMode.length > 0) ? false : true
    }, [noticeLanguage, noticeType, commicationMode])

    const checkFields = () => {
        if (!(noticeType && noticeLanguage && commicationMode.length > 0)) alert("Please select all the fields")
    }
    return (
        <div className="w-75 m-auto">
            <div className="row">
                <div className="col-lg-4">
                    <form className="mt-2 text-start">

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <p className="mb-0 text-danger fs-7"><strong>**All Are Fields Mandatory </strong></p>
                                <br />
                                <label for="Batch" className="col-form-label pt-0">Type of Notice to be Issued</label>
                                <br />
                                <select className="form-control" name="" id=""
                                    onChange={(e) => setNoticeType(e.target.value)}
                                >
                                    <option selected disabled hidden>Select Notice Type</option>
                                    {options.map((val) => {
                                        return (
                                            <option value={val.value}>{val.label}</option>
                                        )
                                    })}
                                </select>



                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label for="Batch" className="col-form-label pt-0">Communication Mode</label>
                                <MultiSelect className="bg-light"
                                    options={optionsCommunication}
                                    value={commicationMode}
                                    onChange={setCommicationMode}
                                    labelledBy="Select Communication Mode"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label for="Batch" className="col-form-label pt-0">Notice Language</label>
                                <br />
                                <select className="form-control" name="" id=""
                                    onChange={(e) => setNoticeLanguage(e.target.value)}
                                >
                                    <option selected disabled hidden>Select Language</option>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="marathi">Marathi</option>
                                    <option value="tamil">Tamil</option>
                                </select>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="col-lg-8">
                    <div className="import-excel-img mb-2">
                        <img src={Excel} alt="Excel" />
                    </div>
                    <input type="file" name="uploadFile" id="uploadFile"
                        accept="
    .xlse,
    .xlsx,
    .xlsm,
    .xlsb,
    .xltx,
    .xltm,
    .xls,
    .xlt,
    .xls,
    .xlsb,
    .xml,
    .xlam,
    .xla,
    .xlw,
    .xlr,
    .csv"
                        style={{ opacity: '0' }}
                        onChange={(e) => {
                            handleHeaderName(e.target.files[0], parameters, setProgressBar, setFileName, setOnImportPage, setHeaderName, setHeaderNameMatched, setUploadHeaders)
                            setBatchFile(e.target.files[0])
                            console.log({ HeaderNameMatched })
                        }}
                    /><br />
                    <label htmlFor="uploadFile" onClick={checkFields} style={(noticeType && noticeLanguage && commicationMode.length > 0) ? {} : { background: "#F1F8E9", border: "#607D8B", color: "#607D8B" }} className="btn btn-primary btn-lg mb-2">Select excel file from your computer</label>
                    <p>You can upload only CSV or XLS file to import your inventory.</p>
                </div>
            </div>
        </div>
    )
}

export default PreFormInputs
