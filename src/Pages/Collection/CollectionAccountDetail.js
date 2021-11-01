import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import AxiosCalls from '../../AxiosCalls'
import { useParams } from 'react-router-dom'
import ContentLoader from '../../Components/ContentLoader'
import CollectionAccountsDetailHeader from '../../Components/Headers/CollectionAccountDetailHeader'
import cdata from '../../JSON/customerData.json'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

function CollectionAccountDetail() {
    const { id } = useParams()
    // const [data, setData] = useState(cdata)
    const [data, setData] = useState(null)

    const fetchCustomerData = useCallback(async () => {
        try {
            let myParams = { customer_id: id }
            const res = await axios.get(AxiosCalls.collectionAccounts, { params: myParams })
            console.log({ res: res.data.data })
            setData(res.data.data)
        } catch (error) {
            console.error({ error })
        }

    }, [id])

    useEffect(() => {
        fetchCustomerData()
    }, [fetchCustomerData])


    return (
        <>
            {
                data ?
                    <div>


                        <CollectionAccountsDetailHeader data={data} />
                        <div className="account-tab-main">
                            <Tabs defaultActiveKey="tab1" className="mb-0 mt-3 account-tab">
                                <Tab eventKey="tab1" className="account-tab-detail" title="All Client uploaded Data related to that account">
                                    <Tab.Container defaultActiveKey="stab1">
                                        <div className="row">
                                            <div className="col-lg-3 account-tab-left">
                                                <Nav variant="pills" className="flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab1">Customer Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab2">Loan Amount Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab3">Payment Dates Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab4">Product Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab5">Risk Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab6">Customer Home Address Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab7">Customer Office Address Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab8">Customer Guarantor Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab9">Company Branch Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab10">Source Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab11">Collections Agent Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab12">Any Other category of data as upload by User</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div className="col-lg-9 account-tab-right">
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="stab1">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Customer Name</label>
                                                                    <input type="text" value={data.customer_name} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Father Name</label>
                                                                    <input type="text" value={data.father_name} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row ">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Customer Profile</label>
                                                                    <div className="d-flex align-center text-primary">
                                                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="me-3">
                                                                            <path d="M22.25 1.75A5.935 5.935 0 0 0 18 0c-1.6 0-3.1.6-4.25 1.75l-12 12A5.935 5.935 0 0 0 0 18c0 1.6.6 3.1 1.75 4.25A5.935 5.935 0 0 0 6 24c1.6 0 3.1-.6 4.25-1.75l8.1-8.1c1.35-1.35 1.35-3.6 0-4.95-.65-.65-1.55-1-2.45-1-.95 0-1.8.35-2.45 1l-8.5 8.5.7.7 8.5-8.5c.45-.45 1.1-.75 1.75-.75.65 0 1.3.25 1.75.75.95.95.95 2.55 0 3.55l-8.1 8.1C8.6 22.5 7.35 23 6 23c-1.35 0-2.6-.5-3.55-1.45C1.5 20.6 1 19.35 1 18c0-1.35.5-2.6 1.45-3.55l12-12C15.4 1.5 16.65 1 18 1c1.35 0 2.6.5 3.55 1.45C22.5 3.4 23 4.65 23 6c0 1.35-.5 2.6-1.45 3.55l-.2.2.7.7.2-.2A5.935 5.935 0 0 0 24 6c0-1.6-.6-3.1-1.75-4.25z" fill="#0A7AFF" fill-rule="nonzero" />
                                                                        </svg>
                                                                        {data.customer_profile}.pdf</div>

                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Loan Account Number</label>
                                                                    <input type="text" value={data.loan_account_no} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Due Prop Number</label>
                                                                    <input type="text" value={data.due_prop_no} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Due AGMT Number</label>
                                                                    <input type="text" value={data.due_agmt_no} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab2">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AGREEMENT DATE</label>
                                                                    <input type="text" value={data.agreement_date} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LRN</label>
                                                                    <input type="text" value={data.lrn} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Tenor</label>
                                                                    <input type="text" value={data.tenor} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Adv EMI</label>
                                                                    <input type="text" value={data.adv_emi} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MOB</label>
                                                                    <input type="text" value={data.mob} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">BKT</label>
                                                                    <input type="text" value={data.bkt} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">EMI</label>
                                                                    <input type="text" value={data.emi} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DEMAND</label>
                                                                    <input type="text" value={data.demand} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">RECEIVABLE</label>
                                                                    <input type="text" value={data.receivable} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">RECEIVED</label>
                                                                    <input type="text" value={data.received} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OVERDUE</label>
                                                                    <input type="text" value={data.over_due} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">TOTAL CHARGES</label>
                                                                    <input type="text" value={data.total_charges} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">TOTAL OD (OD + CHARGES)	</label>
                                                                    <input type="text" value={data.total_od} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">FUTURE_PRINC</label>
                                                                    <input type="text" value={data.future_princ} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">POS (OD + FP)</label>
                                                                    <input type="text" value={data.pos} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">AMOUNT FINANACED</label>
                                                                    <input type="text" value={data.amount_finanaced} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">LTV</label>
                                                                    <input type="text" value={data.ltv} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LOAN AMOUNT</label>
                                                                    <input type="text" value={data.loan_amount} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MORAT TYPE</label>
                                                                    <input type="text" value={data.morat_type} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">STATUS</label>
                                                                    <input type="text" value={data.status} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PAYMENT TYPE</label>
                                                                    <input type="text" value={data.payment_type} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">INSURANCE TYPE</label>
                                                                    <input type="text" value={data.insurance_type} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CBD RECEIVABLE</label>
                                                                    <input type="text" value={data.cbd_receivable} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CBD RECEIVED</label>
                                                                    <input type="text" value={data.cbd_received} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CBD WAIVED</label>
                                                                    <input type="text" value={data.cbd_waived} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CBC DUE</label>
                                                                    <input type="text" value={data.cbc_due} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AFC RECEIVALE</label>
                                                                    <input type="text" value={data.afc_receivable} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label  pt-0">AFC RECEIVED</label>
                                                                    <input type="text" value={data.afc_received} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AFC WAIVED</label>
                                                                    <input type="text" value={data.afc_waived} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label  pt-0">AFC DUE</label>
                                                                    <input type="text" value={data.afc_due} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CASH BNC RECEIVABLE</label>
                                                                    <input type="text" value={data.cash_bnc_receivable} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CASH BNC RECEIVED</label>
                                                                    <input type="text" value={data.cash_bnc_received} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CASH BNC WAIVED</label>
                                                                    <input type="text" value={data.cash_bnc_waived} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CASH BNC DUE</label>
                                                                    <input type="text" value={data.cash_bnc_due} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">INS RECEIVABLE</label>
                                                                    <input type="text" value={data.ins_receivable} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">INS RECEIVED</label>
                                                                    <input type="text" value={data.ins_received} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">INS DUE</label>
                                                                    <input type="text" value={data.ins_due} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CLEARING RECEIVABLE</label>
                                                                    <input type="text" value={data.clearing_receivable} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CLEARING RECEIVED</label>
                                                                    <input type="text" value={data.clearing_received} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CLEARING DUE</label>
                                                                    <input type="text" value={data.clearing_due} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OD COLLECTABLE</label>
                                                                    <input type="text" value={data.od_collectable} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DEMAND COLLECTABLE</label>
                                                                    <input type="text" value={data.demand_collectable} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">FUTURE OUTSTANDING</label>
                                                                    <input type="text" value={data.future_outstanding} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ASSET COST</label>
                                                                    <input type="text" value={data.asset_cost} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SCHEME CODE</label>
                                                                    <input type="text" value={data.scheme_code} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">SCHEME NAME</label>
                                                                    <input type="text" value={data.scheme_name} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab3">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">DISBURSAL DATE</label>
                                                                    <input type="text" value={data.disbursal_date} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LAST COLLECTION DATE</label>
                                                                    <input type="text" value={data.last_collection_date} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">FIRST EMI DATE</label>
                                                                    <input type="text" value={data.first_emi_date} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LAST EMI DATE</label>
                                                                    <input type="text" value={data.last_edit_date} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AGENING</label>
                                                                    <input type="text" value={data.agening} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Last Collection Gap Category</label>
                                                                    <input type="text" value={data.last_collection_gap_category} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CHEQUE BOUNCE</label>
                                                                    <input type="text" value={data.cheque_bounce} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CASH BOUNCE</label>
                                                                    <input type="text" value={data.cash_bounce} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SCORE CATEGORY</label>
                                                                    <input type="text" value={data.score_category} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">SEGMENT</label>
                                                                    <input type="text" value={data.segment} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OD MOVEMENT</label>
                                                                    <input type="text" value={data.od_movement} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">UNMATURED TENOR</label>
                                                                    <input type="text" value={data.unmatured_tenor} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OPENING DPD</label>
                                                                    <input type="text" value={data.opening_dpd} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OPENING DPD Bracket</label>
                                                                    <input type="text" value={data.opening_dpd_bracket} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PAYMENT FREQUENCY</label>
                                                                    <input type="text" value={data.payment_frequency} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DPD DEL STRING</label>
                                                                    <input type="text" value={data.dpd_del_string} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CLOSING DPD</label>
                                                                    <input type="text" value={data.closing_dpd} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CLOSING DPD Bracket</label>
                                                                    <input type="text" value={data.closing_dpd_bracket} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab4">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PORTFOLIO - Product name</label>
                                                                    <input type="text" value={data.product_name} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">PRODUCT GROUP</label>
                                                                    <input type="text" value={data.product_group} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">BUSINESS_PORTFOLIO</label>
                                                                    <input type="text" value={data.business_portfolio} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Product CODE</label>
                                                                    <input type="text" value={data.product_code} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MODEL</label>
                                                                    <input type="text" value={data.model} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">REG NUMBER</label>
                                                                    <input type="text" value={data.reg_number} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CHASSIS NO</label>
                                                                    <input type="text" value={data.chassis_no} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ENG NO</label>
                                                                    <input type="text" value={data.eng_no} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab5">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PRE-BNC RISK SEG</label>
                                                                    <input type="text" value={data.pre_bnc_risk_seg} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">POST BNC RISK SEG</label>
                                                                    <input type="text" value={data.post_bnc_risk_seg} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">BOUNCE PREDICTION</label>
                                                                    <input type="text" value={data.bounce_prediction} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OD PREDICTION</label>
                                                                    <input type="text" value={data.od_prediction} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">REPO RISK FLAG</label>
                                                                    <input type="text" value={data.repo_risk_flag} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">EXPECTED LOSS</label>
                                                                    <input type="text" value={data.expected_loss} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value={data.customer_pincode} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LANDMARK</label>
                                                                    <input type="text" value={data.customer_landmark} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS1</label>
                                                                    <input type="text" value={data.customer_address1} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ADDRESS2</label>
                                                                    <input type="text" value={data.customer_address2} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS3</label>
                                                                    <input type="text" value={data.customer_address3} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">City</label>
                                                                    <input type="text" value={data.customer_city} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">State</label>
                                                                    <input type="text" value={data.customer_state} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Region</label>
                                                                    <input type="text" value={data.customer_region} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Zone</label>
                                                                    <input type="text" value={data.customer_zone} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value={data.customer_pincode} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MOBILE NUMBER</label>
                                                                    <input type="text" value={data.customer_mobile_number} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ALT CONTACT NO.</label>
                                                                    <input type="text" value={data.customer_alt_contact_no} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab6">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value={data.customer_address1} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LANDMARK</label>
                                                                    <input type="text" value={data.customer_landmark} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS1</label>
                                                                    <input type="text" value={data.customer_address1} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ADDRESS2</label>
                                                                    <input type="text" value={data.customer_address2} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS3</label>
                                                                    <input type="text" value={data.customer_address3} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">City</label>
                                                                    <input type="text" value={data.customer_city} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">State</label>
                                                                    <input type="text" value={data.customer_state} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Region</label>
                                                                    <input type="text" value={data.customer_region} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Zone</label>
                                                                    <input type="text" value={data.customer_zone} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value={data.customer_pincode} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MOBILE NUMBER</label>
                                                                    <input type="text" value={data.customer_mobile_number} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ALT CONTACT NO.</label>
                                                                    <input type="text" value={data.customer_alt_contact_no} className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab7">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFFICE PINCODE</label>
                                                                    <input type="text" value={data.office_pincode} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFFICE LANDMARK</label>
                                                                    <input type="text" value={data.office_landmark} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC ADDRESS1</label>
                                                                    <input type="text" value={data.office_address1} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC ADDRESS2</label>
                                                                    <input type="text" value={data.office_address2} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC ADDRESS3</label>
                                                                    <input type="text" value={data.office_address3} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC City</label>
                                                                    <input type="text" value={data.office_city} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC State</label>
                                                                    <input type="text" value={data.office_state} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC Region</label>
                                                                    <input type="text" value={data.office_region} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC Zone</label>
                                                                    <input type="text" value={data.office_zone} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC PINCODE</label>
                                                                    <input type="text" value={data.office_pincode} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC MOBILE NO</label>
                                                                    <input type="text" value={data.office_mobile_no} className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab8">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUARANTOR NAME</label>
                                                                    <input type="text" value={data.guarantor_name} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">GUR ADDRESS1</label>
                                                                    <input type="text" value={data.guarantor_address1} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUR ADDRESS2</label>
                                                                    <input type="text" value={data.guarantor_address2} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">GUR ADDRESS3</label>
                                                                    <input type="text" value={data.guarantor_address3} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUR CITY</label>
                                                                    <input type="text" value={data.guarantor_city} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">GUR LANDMARK</label>
                                                                    <input type="text" value={data.guarantor_landmark} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUR PINCODE</label>
                                                                    <input type="text" value={data.guarantor_pincode} className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab9">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Zone Name</label>
                                                                    <input type="text" value={data.zone_name} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Region Name</label>
                                                                    <input type="text" value={data.region_name} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Area Name</label>
                                                                    <input type="text" value={data.area_name} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Branch Name</label>
                                                                    <input type="text" value={data.branch_name} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Branch Code</label>
                                                                    <input type="text" value={data.branch_code} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DEALER CODE</label>
                                                                    <input type="text" value={data.dealer_code} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">DEALER NAME</label>
                                                                    <input type="text" value={data.dealer_name} className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab10">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SOURCE PROPOSAL</label>
                                                                    <input type="text" value={data.source_proposal} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">SOURCE TW DEALER CODE</label>
                                                                    <input type="text" value={data.source_tw_dealer_code} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SOURCE TW DEALERNAME</label>
                                                                    <input type="text" value={data.source_tw_dealer_name} className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab11">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ASC CODE</label>
                                                                    <input type="text" value={data.asc_code} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ASC NAME</label>
                                                                    <input type="text" value={data.asc_name} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">COLLECTOR CODE</label>
                                                                    <input type="text" value={data.collector_code} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">COLLECTOR NAME</label>
                                                                    <input type="text" value={data.collector_name} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SCE NAME</label>
                                                                    <input type="text" value={data.sce_name} className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">TERRITORY MANAGER</label>
                                                                    <input type="text" value={data.territory_manager} className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab12">
                                                        Any Other category of data as upload by User
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div>
                                        </div>
                                    </Tab.Container>
                                </Tab>
                                <Tab
                                    // eventKey="tab2"
                                    className="account-tab-detail"
                                    title="All data generated by Medius"
                                >
                                    <Tab.Container
                                    // defaultActiveKey="stab1"
                                    >
                                        <div className="row">
                                            <div className="col-lg-3 account-tab-left">
                                                <Nav variant="pills" className="flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab1">Customer Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab2">Loan Amount Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab3">Payment Dates Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab4">Product Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab5">Risk Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab6">Customer Home Address Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab7">Customer Office Address Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab8">Customer Guarantor Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab9">Company Branch Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab10">Source Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab11">Collections Agent Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab12">Any Other category of data as upload by User</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div className="col-lg-9 account-tab-right">
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="stab1">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Customer Name</label>
                                                                    <input type="text" value="Ritu Raj Srivastava" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Father Name</label>
                                                                    <input type="text" value="Ritu Raj Srivastava" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row ">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Customer Profile</label>
                                                                    <div className="d-flex align-center text-primary">
                                                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="me-3">
                                                                            <path d="M22.25 1.75A5.935 5.935 0 0 0 18 0c-1.6 0-3.1.6-4.25 1.75l-12 12A5.935 5.935 0 0 0 0 18c0 1.6.6 3.1 1.75 4.25A5.935 5.935 0 0 0 6 24c1.6 0 3.1-.6 4.25-1.75l8.1-8.1c1.35-1.35 1.35-3.6 0-4.95-.65-.65-1.55-1-2.45-1-.95 0-1.8.35-2.45 1l-8.5 8.5.7.7 8.5-8.5c.45-.45 1.1-.75 1.75-.75.65 0 1.3.25 1.75.75.95.95.95 2.55 0 3.55l-8.1 8.1C8.6 22.5 7.35 23 6 23c-1.35 0-2.6-.5-3.55-1.45C1.5 20.6 1 19.35 1 18c0-1.35.5-2.6 1.45-3.55l12-12C15.4 1.5 16.65 1 18 1c1.35 0 2.6.5 3.55 1.45C22.5 3.4 23 4.65 23 6c0 1.35-.5 2.6-1.45 3.55l-.2.2.7.7.2-.2A5.935 5.935 0 0 0 24 6c0-1.6-.6-3.1-1.75-4.25z" fill="#0A7AFF" fill-rule="nonzero" />
                                                                        </svg>
                                                                        Ritu_Raj.pdf</div>

                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Loan Account Number</label>
                                                                    <input type="text" value="BHV89467DE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Due Prop Number</label>
                                                                    <input type="text" value="ABD836" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Due AGMT Number</label>
                                                                    <input type="text" value="JHDH26TH9" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab2">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AGREEMENT DATE</label>
                                                                    <input type="text" value="AGREEMENT DATE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LRN</label>
                                                                    <input type="text" value="LRN" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Tenor</label>
                                                                    <input type="text" value="Tenor" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Adv EMI</label>
                                                                    <input type="text" value="Adv EMI" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MOB</label>
                                                                    <input type="text" value="MOB" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">BKT</label>
                                                                    <input type="text" value="BKT" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">EMI</label>
                                                                    <input type="text" value="EMI" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DEMAND</label>
                                                                    <input type="text" value="DEMAND" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">RECEIVABLE</label>
                                                                    <input type="text" value="RECEIVABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">RECEIVED</label>
                                                                    <input type="text" value="RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OVERDUE</label>
                                                                    <input type="text" value="OVERDUE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">TOTAL CHARGES</label>
                                                                    <input type="text" value="TOTAL CHARGES" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">TOTAL OD ( OD + CHARGES )	</label>
                                                                    <input type="text" value="TOTAL OD ( OD + CHARGES )" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">FUTURE_PRINC</label>
                                                                    <input type="text" value="FUTURE_PRINC" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">POS ( OD + FP )</label>
                                                                    <input type="text" value="POS ( OD + FP )" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">AMOUNT FINANACED</label>
                                                                    <input type="text" value="AMOUNT FINANACED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">LTV</label>
                                                                    <input type="text" value="LTV" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LOAN AMOUNT</label>
                                                                    <input type="text" value="LOAN AMOUNT" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MORAT TYPE</label>
                                                                    <input type="text" value="MORAT TYPE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">STATUS</label>
                                                                    <input type="text" value="STATUS" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PAYMENT TYPE</label>
                                                                    <input type="text" value="PAYMENT TYPE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">INSURANCE TYPE</label>
                                                                    <input type="text" value="INSURANCE TYPE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CBD RECEIVABLE</label>
                                                                    <input type="text" value="CBD RECEIVABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CBD RECEIVED</label>
                                                                    <input type="text" value="CBD RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CBD WAIVED</label>
                                                                    <input type="text" value="CBD WAIVED" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CBC DUE</label>
                                                                    <input type="text" value="CBC DUE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AFC RECEIVALE</label>
                                                                    <input type="text" value="AFC RECEIVALE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">AFC RECEIVED</label>
                                                                    <input type="text" value="AFC RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AFC WAIVED</label>
                                                                    <input type="text" value="AFC WAIVED" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">AFC DUE</label>
                                                                    <input type="text" value="AFC DUE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CASH BNC RECEIVABLE</label>
                                                                    <input type="text" value="CASH BNC RECEIVABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CASH BNC RECEIVED</label>
                                                                    <input type="text" value="CASH BNC RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CASH BNC WAIVED</label>
                                                                    <input type="text" value="CASH BNC WAIVED" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CASH BNC DUE</label>
                                                                    <input type="text" value="CASH BNC DUE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">INS RECEIVABLE</label>
                                                                    <input type="text" value="INS RECEIVABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">INS RECEIVED</label>
                                                                    <input type="text" value="INS RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">INS DUE</label>
                                                                    <input type="text" value="INS DUE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CLEARING RECEIVABLE</label>
                                                                    <input type="text" value="CLEARING RECEIVABLE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CLEARING RECEIVED</label>
                                                                    <input type="text" value="CLEARING RECEIVED" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CLEARING DUE</label>
                                                                    <input type="text" value="CLEARING DUE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OD COLLECTABLE</label>
                                                                    <input type="text" value="OD COLLECTABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DEMAND COLLECTABLE</label>
                                                                    <input type="text" value="DEMAND COLLECTABLE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">FUTURE OUTSTANDING</label>
                                                                    <input type="text" value="FUTURE OUTSTANDING" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ASSET COST</label>
                                                                    <input type="text" value="ASSET COST" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SCHEME CODE</label>
                                                                    <input type="text" value="SCHEME CODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">SCHEME NAME</label>
                                                                    <input type="text" value="SCHEME NAME" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab3">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">DISBURSAL DATE</label>
                                                                    <input type="text" value="DISBURSAL DATE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LAST Collection DATE</label>
                                                                    <input type="text" value="LAST Collection DATE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">FIRST EMI DATE</label>
                                                                    <input type="text" value="FIRST EMI DATE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LAST EMI DATE</label>
                                                                    <input type="text" value="LAST EMI DATE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AGENING</label>
                                                                    <input type="text" value="AGENING" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Last Collection Gap Category</label>
                                                                    <input type="text" value="Last Collection Gap Category" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CHEQUE BOUNCE</label>
                                                                    <input type="text" value="CHEQUE BOUNCE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CASH BOUNCE</label>
                                                                    <input type="text" value="CASH BOUNCE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SCORE CATEGORY</label>
                                                                    <input type="text" value="SCORE CATEGORY" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">SEGMENT</label>
                                                                    <input type="text" value="SEGMENT" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OD MOVEMENT</label>
                                                                    <input type="text" value="OD MOVEMENT" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">UNMATURED TENOR</label>
                                                                    <input type="text" value="UNMATURED TENOR" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OPENING DPD</label>
                                                                    <input type="text" value="OPENING DPD" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OPENING DPD Bracket</label>
                                                                    <input type="text" value="OPENING DPD Bracket" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PAYMENT FREQUENCY</label>
                                                                    <input type="text" value="PAYMENT FREQUENCY" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DPD DEL STRING</label>
                                                                    <input type="text" value="DPD DEL STRING" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CLOSING DPD</label>
                                                                    <input type="text" value="CLOSING DPD" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CLOSING DPD Bracket</label>
                                                                    <input type="text" value="CLOSING DPD Bracket" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab4">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PORTFOLIO - Product name</label>
                                                                    <input type="text" value="PORTFOLIO - Product name" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">PRODUCT GROUP</label>
                                                                    <input type="text" value="PRODUCT GROUP" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">BUSINESS_PORTFOLIO</label>
                                                                    <input type="text" value="BUSINESS_PORTFOLIO" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Product CODE</label>
                                                                    <input type="text" value="Product CODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MODEL</label>
                                                                    <input type="text" value="MODEL" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">REG NUMBER</label>
                                                                    <input type="text" value="REG NUMBER" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CHASSIS NO</label>
                                                                    <input type="text" value="CHASSIS NO" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ENG NO</label>
                                                                    <input type="text" value="ENG NO" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab5">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PRE-BNC RISK SEG</label>
                                                                    <input type="text" value="PRE-BNC RISK SEG" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">POST BNC RISK SEG</label>
                                                                    <input type="text" value="POST BNC RISK SEG" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">BOUNCE PREDICTION</label>
                                                                    <input type="text" value="BOUNCE PREDICTION" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OD PREDICTION</label>
                                                                    <input type="text" value="OD PREDICTION" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">REPO RISK FLAG</label>
                                                                    <input type="text" value="REPO RISK FLAG" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">EXPECTED LOSS</label>
                                                                    <input type="text" value="EXPECTED LOSS" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value="PINCODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LANDMARK</label>
                                                                    <input type="text" value="LANDMARK" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS1</label>
                                                                    <input type="text" value="ADDRESS1" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ADDRESS2</label>
                                                                    <input type="text" value="ADDRESS2" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS3</label>
                                                                    <input type="text" value="ADDRESS3" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">City</label>
                                                                    <input type="text" value="City" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">State</label>
                                                                    <input type="text" value="State" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Region</label>
                                                                    <input type="text" value="Region" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Zone</label>
                                                                    <input type="text" value="Zone" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value="PINCODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MOBILE NUMBER</label>
                                                                    <input type="text" value="MOBILE NUMBER" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ALT CONTACT NO.</label>
                                                                    <input type="text" value="ALT CONTACT NO." className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab6">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value="PINCODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LANDMARK</label>
                                                                    <input type="text" value="LANDMARK" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS1</label>
                                                                    <input type="text" value="ADDRESS1" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ADDRESS2</label>
                                                                    <input type="text" value="ADDRESS2" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS3</label>
                                                                    <input type="text" value="ADDRESS3" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">City</label>
                                                                    <input type="text" value="City" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">State</label>
                                                                    <input type="text" value="State" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Region</label>
                                                                    <input type="text" value="Region" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Zone</label>
                                                                    <input type="text" value="Zone" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value="PINCODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MOBILE NUMBER</label>
                                                                    <input type="text" value="MOBILE NUMBER" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ALT CONTACT NO.</label>
                                                                    <input type="text" value="ALT CONTACT NO." className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab7">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFFICE PINCODE</label>
                                                                    <input type="text" value="OFFICE PINCODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFFICE LANDMARK</label>
                                                                    <input type="text" value="OFFICE LANDMARK" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC ADDRESS1</label>
                                                                    <input type="text" value="OFC ADDRESS1" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC ADDRESS2</label>
                                                                    <input type="text" value="OFC ADDRESS2" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC ADDRESS3</label>
                                                                    <input type="text" value="OFC ADDRESS3" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC City</label>
                                                                    <input type="text" value="OFC City" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC State</label>
                                                                    <input type="text" value="OFC State" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC Region</label>
                                                                    <input type="text" value="OFC Region" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC Zone</label>
                                                                    <input type="text" value="OFC Zone" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC PINCODE</label>
                                                                    <input type="text" value="OFC PINCODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC MOBILE NO</label>
                                                                    <input type="text" value="OFC MOBILE NO" className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab8">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUARANTOR NAME</label>
                                                                    <input type="text" value="GUARANTOR NAME" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">GUR ADDRESS1</label>
                                                                    <input type="text" value="GUR ADDRESS1" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUR ADDRESS2</label>
                                                                    <input type="text" value="GUR ADDRESS2" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">GUR ADDRESS3</label>
                                                                    <input type="text" value="GUR ADDRESS3" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUR CITY</label>
                                                                    <input type="text" value="GUR CITY" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">GUR LANDMARK</label>
                                                                    <input type="text" value="GUR LANDMARK" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUR PINCODE</label>
                                                                    <input type="text" value="GUR PINCODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab9">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Zone Name</label>
                                                                    <input type="text" value="Zone Name" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Region Name</label>
                                                                    <input type="text" value="Region Name" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Area Name</label>
                                                                    <input type="text" value="Area Name" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Branch Name</label>
                                                                    <input type="text" value="Branch Name" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Branch Code</label>
                                                                    <input type="text" value="Branch Code" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DEALER CODE</label>
                                                                    <input type="text" value="DEALER CODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">DEALER NAME</label>
                                                                    <input type="text" value="DEALER NAME" className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab10">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SOURCE PROPOSAL</label>
                                                                    <input type="text" value="SOURCE PROPOSAL" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">SOURCE TW DEALER CODE</label>
                                                                    <input type="text" value="SOURCE TW DEALER CODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SOURCE TW DEALERNAME</label>
                                                                    <input type="text" value="SOURCE TW DEALERNAME" className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab11">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ASC CODE</label>
                                                                    <input type="text" value="ASC CODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ASC NAME</label>
                                                                    <input type="text" value="ASC NAME" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">COLLECTOR CODE</label>
                                                                    <input type="text" value="COLLECTOR CODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">COLLECTOR NAME</label>
                                                                    <input type="text" value="COLLECTOR NAME" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SCE NAME</label>
                                                                    <input type="text" value="SCE NAME" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">TERRITORY MANAGER</label>
                                                                    <input type="text" value="TERRITORY MANAGER" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab12">
                                                        Any Other category of data as upload by User
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div>
                                        </div>
                                    </Tab.Container>
                                </Tab>
                                <Tab
                                    // eventKey="tab3"
                                    className="account-tab-detail"
                                    title="All data extracted from Open Web">
                                    <Tab.Container
                                    // defaultActiveKey="stab1"
                                    >
                                        <div className="row">
                                            <div className="col-lg-3 account-tab-left">
                                                <Nav variant="pills" className="flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab1">Customer Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab2">Loan Amount Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab3">Payment Dates Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab4">Product Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab5">Risk Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab6">Customer Home Address Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab7">Customer Office Address Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab8">Customer Guarantor Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab9">Company Branch Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab10">Source Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab11">Collections Agent Data</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="stab12">Any Other category of data as upload by User</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div className="col-lg-9 account-tab-right">
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="stab1">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Customer Name</label>
                                                                    <input type="text" value="Ritu Raj Srivastava" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Father Name</label>
                                                                    <input type="text" value="Ritu Raj Srivastava" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row ">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Customer Profile</label>
                                                                    <div className="d-flex align-center text-primary">
                                                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="me-3">
                                                                            <path d="M22.25 1.75A5.935 5.935 0 0 0 18 0c-1.6 0-3.1.6-4.25 1.75l-12 12A5.935 5.935 0 0 0 0 18c0 1.6.6 3.1 1.75 4.25A5.935 5.935 0 0 0 6 24c1.6 0 3.1-.6 4.25-1.75l8.1-8.1c1.35-1.35 1.35-3.6 0-4.95-.65-.65-1.55-1-2.45-1-.95 0-1.8.35-2.45 1l-8.5 8.5.7.7 8.5-8.5c.45-.45 1.1-.75 1.75-.75.65 0 1.3.25 1.75.75.95.95.95 2.55 0 3.55l-8.1 8.1C8.6 22.5 7.35 23 6 23c-1.35 0-2.6-.5-3.55-1.45C1.5 20.6 1 19.35 1 18c0-1.35.5-2.6 1.45-3.55l12-12C15.4 1.5 16.65 1 18 1c1.35 0 2.6.5 3.55 1.45C22.5 3.4 23 4.65 23 6c0 1.35-.5 2.6-1.45 3.55l-.2.2.7.7.2-.2A5.935 5.935 0 0 0 24 6c0-1.6-.6-3.1-1.75-4.25z" fill="#0A7AFF" fill-rule="nonzero" />
                                                                        </svg>
                                                                        Ritu_Raj.pdf</div>

                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Loan Account Number</label>
                                                                    <input type="text" value="BHV89467DE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Due Prop Number</label>
                                                                    <input type="text" value="ABD836" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Due AGMT Number</label>
                                                                    <input type="text" value="JHDH26TH9" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab2">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AGREEMENT DATE</label>
                                                                    <input type="text" value="AGREEMENT DATE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LRN</label>
                                                                    <input type="text" value="LRN" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Tenor</label>
                                                                    <input type="text" value="Tenor" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Adv EMI</label>
                                                                    <input type="text" value="Adv EMI" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MOB</label>
                                                                    <input type="text" value="MOB" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">BKT</label>
                                                                    <input type="text" value="BKT" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">EMI</label>
                                                                    <input type="text" value="EMI" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DEMAND</label>
                                                                    <input type="text" value="DEMAND" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">RECEIVABLE</label>
                                                                    <input type="text" value="RECEIVABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">RECEIVED</label>
                                                                    <input type="text" value="RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OVERDUE</label>
                                                                    <input type="text" value="OVERDUE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">TOTAL CHARGES</label>
                                                                    <input type="text" value="TOTAL CHARGES" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">TOTAL OD ( OD + CHARGES )	</label>
                                                                    <input type="text" value="TOTAL OD ( OD + CHARGES )" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">FUTURE_PRINC</label>
                                                                    <input type="text" value="FUTURE_PRINC" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">POS ( OD + FP )</label>
                                                                    <input type="text" value="POS ( OD + FP )" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">AMOUNT FINANACED</label>
                                                                    <input type="text" value="AMOUNT FINANACED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">LTV</label>
                                                                    <input type="text" value="LTV" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LOAN AMOUNT</label>
                                                                    <input type="text" value="LOAN AMOUNT" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MORAT TYPE</label>
                                                                    <input type="text" value="MORAT TYPE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">STATUS</label>
                                                                    <input type="text" value="STATUS" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PAYMENT TYPE</label>
                                                                    <input type="text" value="PAYMENT TYPE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">INSURANCE TYPE</label>
                                                                    <input type="text" value="INSURANCE TYPE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CBD RECEIVABLE</label>
                                                                    <input type="text" value="CBD RECEIVABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CBD RECEIVED</label>
                                                                    <input type="text" value="CBD RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CBD WAIVED</label>
                                                                    <input type="text" value="CBD WAIVED" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CBC DUE</label>
                                                                    <input type="text" value="CBC DUE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AFC RECEIVALE</label>
                                                                    <input type="text" value="AFC RECEIVALE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">AFC RECEIVED</label>
                                                                    <input type="text" value="AFC RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AFC WAIVED</label>
                                                                    <input type="text" value="AFC WAIVED" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">AFC DUE</label>
                                                                    <input type="text" value="AFC DUE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CASH BNC RECEIVABLE</label>
                                                                    <input type="text" value="CASH BNC RECEIVABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CASH BNC RECEIVED</label>
                                                                    <input type="text" value="CASH BNC RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CASH BNC WAIVED</label>
                                                                    <input type="text" value="CASH BNC WAIVED" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CASH BNC DUE</label>
                                                                    <input type="text" value="CASH BNC DUE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">INS RECEIVABLE</label>
                                                                    <input type="text" value="INS RECEIVABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">INS RECEIVED</label>
                                                                    <input type="text" value="INS RECEIVED" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">INS DUE</label>
                                                                    <input type="text" value="INS DUE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CLEARING RECEIVABLE</label>
                                                                    <input type="text" value="CLEARING RECEIVABLE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CLEARING RECEIVED</label>
                                                                    <input type="text" value="CLEARING RECEIVED" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CLEARING DUE</label>
                                                                    <input type="text" value="CLEARING DUE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OD COLLECTABLE</label>
                                                                    <input type="text" value="OD COLLECTABLE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DEMAND COLLECTABLE</label>
                                                                    <input type="text" value="DEMAND COLLECTABLE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">FUTURE OUTSTANDING</label>
                                                                    <input type="text" value="FUTURE OUTSTANDING" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ASSET COST</label>
                                                                    <input type="text" value="ASSET COST" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SCHEME CODE</label>
                                                                    <input type="text" value="SCHEME CODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">SCHEME NAME</label>
                                                                    <input type="text" value="SCHEME NAME" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab3">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">DISBURSAL DATE</label>
                                                                    <input type="text" value="DISBURSAL DATE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LAST Collection DATE</label>
                                                                    <input type="text" value="LAST Collection DATE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">FIRST EMI DATE</label>
                                                                    <input type="text" value="FIRST EMI DATE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LAST EMI DATE</label>
                                                                    <input type="text" value="LAST EMI DATE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">AGENING</label>
                                                                    <input type="text" value="AGENING" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Last Collection Gap Category</label>
                                                                    <input type="text" value="Last Collection Gap Category" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CHEQUE BOUNCE</label>
                                                                    <input type="text" value="CHEQUE BOUNCE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CASH BOUNCE</label>
                                                                    <input type="text" value="CASH BOUNCE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SCORE CATEGORY</label>
                                                                    <input type="text" value="SCORE CATEGORY" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">SEGMENT</label>
                                                                    <input type="text" value="SEGMENT" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OD MOVEMENT</label>
                                                                    <input type="text" value="OD MOVEMENT" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">UNMATURED TENOR</label>
                                                                    <input type="text" value="UNMATURED TENOR" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OPENING DPD</label>
                                                                    <input type="text" value="OPENING DPD" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OPENING DPD Bracket</label>
                                                                    <input type="text" value="OPENING DPD Bracket" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PAYMENT FREQUENCY</label>
                                                                    <input type="text" value="PAYMENT FREQUENCY" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DPD DEL STRING</label>
                                                                    <input type="text" value="DPD DEL STRING" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CLOSING DPD</label>
                                                                    <input type="text" value="CLOSING DPD" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">CLOSING DPD Bracket</label>
                                                                    <input type="text" value="CLOSING DPD Bracket" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab4">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PORTFOLIO - Product name</label>
                                                                    <input type="text" value="PORTFOLIO - Product name" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">PRODUCT GROUP</label>
                                                                    <input type="text" value="PRODUCT GROUP" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">BUSINESS_PORTFOLIO</label>
                                                                    <input type="text" value="BUSINESS_PORTFOLIO" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Product CODE</label>
                                                                    <input type="text" value="Product CODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MODEL</label>
                                                                    <input type="text" value="MODEL" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">REG NUMBER</label>
                                                                    <input type="text" value="REG NUMBER" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">CHASSIS NO</label>
                                                                    <input type="text" value="CHASSIS NO" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ENG NO</label>
                                                                    <input type="text" value="ENG NO" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab5">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PRE-BNC RISK SEG</label>
                                                                    <input type="text" value="PRE-BNC RISK SEG" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">POST BNC RISK SEG</label>
                                                                    <input type="text" value="POST BNC RISK SEG" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">BOUNCE PREDICTION</label>
                                                                    <input type="text" value="BOUNCE PREDICTION" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OD PREDICTION</label>
                                                                    <input type="text" value="OD PREDICTION" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">REPO RISK FLAG</label>
                                                                    <input type="text" value="REPO RISK FLAG" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">EXPECTED LOSS</label>
                                                                    <input type="text" value="EXPECTED LOSS" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value="PINCODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LANDMARK</label>
                                                                    <input type="text" value="LANDMARK" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS1</label>
                                                                    <input type="text" value="ADDRESS1" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ADDRESS2</label>
                                                                    <input type="text" value="ADDRESS2" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row ">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS3</label>
                                                                    <input type="text" value="ADDRESS3" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">City</label>
                                                                    <input type="text" value="City" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">State</label>
                                                                    <input type="text" value="State" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Region</label>
                                                                    <input type="text" value="Region" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Zone</label>
                                                                    <input type="text" value="Zone" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value="PINCODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MOBILE NUMBER</label>
                                                                    <input type="text" value="MOBILE NUMBER" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ALT CONTACT NO.</label>
                                                                    <input type="text" value="ALT CONTACT NO." className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab6">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value="PINCODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">LANDMARK</label>
                                                                    <input type="text" value="LANDMARK" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS1</label>
                                                                    <input type="text" value="ADDRESS1" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ADDRESS2</label>
                                                                    <input type="text" value="ADDRESS2" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ADDRESS3</label>
                                                                    <input type="text" value="ADDRESS3" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">City</label>
                                                                    <input type="text" value="City" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">State</label>
                                                                    <input type="text" value="State" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Region</label>
                                                                    <input type="text" value="Region" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Zone</label>
                                                                    <input type="text" value="Zone" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">PINCODE</label>
                                                                    <input type="text" value="PINCODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">MOBILE NUMBER</label>
                                                                    <input type="text" value="MOBILE NUMBER" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ALT CONTACT NO.</label>
                                                                    <input type="text" value="ALT CONTACT NO." className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab7">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFFICE PINCODE</label>
                                                                    <input type="text" value="OFFICE PINCODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFFICE LANDMARK</label>
                                                                    <input type="text" value="OFFICE LANDMARK" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row ">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC ADDRESS1</label>
                                                                    <input type="text" value="OFC ADDRESS1" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC ADDRESS2</label>
                                                                    <input type="text" value="OFC ADDRESS2" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC ADDRESS3</label>
                                                                    <input type="text" value="OFC ADDRESS3" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC City</label>
                                                                    <input type="text" value="OFC City" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC State</label>
                                                                    <input type="text" value="OFC State" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC Region</label>
                                                                    <input type="text" value="OFC Region" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC Zone</label>
                                                                    <input type="text" value="OFC Zone" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">OFC PINCODE</label>
                                                                    <input type="text" value="OFC PINCODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">OFC MOBILE NO</label>
                                                                    <input type="text" value="OFC MOBILE NO" className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab8">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUARANTOR NAME</label>
                                                                    <input type="text" value="GUARANTOR NAME" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">GUR ADDRESS1</label>
                                                                    <input type="text" value="GUR ADDRESS1" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUR ADDRESS2</label>
                                                                    <input type="text" value="GUR ADDRESS2" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">GUR ADDRESS3</label>
                                                                    <input type="text" value="GUR ADDRESS3" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUR CITY</label>
                                                                    <input type="text" value="GUR CITY" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">GUR LANDMARK</label>
                                                                    <input type="text" value="GUR LANDMARK" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">GUR PINCODE</label>
                                                                    <input type="text" value="GUR PINCODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab9">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Zone Name</label>
                                                                    <input type="text" value="Zone Name" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Region Name</label>
                                                                    <input type="text" value="Region Name" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Area Name</label>
                                                                    <input type="text" value="Area Name" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">Branch Name</label>
                                                                    <input type="text" value="Branch Name" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">Branch Code</label>
                                                                    <input type="text" value="Branch Code" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">DEALER CODE</label>
                                                                    <input type="text" value="DEALER CODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">DEALER NAME</label>
                                                                    <input type="text" value="DEALER NAME" className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab10">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SOURCE PROPOSAL</label>
                                                                    <input type="text" value="SOURCE PROPOSAL" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">SOURCE TW DEALER CODE</label>
                                                                    <input type="text" value="SOURCE TW DEALER CODE" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SOURCE TW DEALERNAME</label>
                                                                    <input type="text" value="SOURCE TW DEALERNAME" className="form-control" id="cname" disabled />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab11">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">ASC CODE</label>
                                                                    <input type="text" value="ASC CODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">ASC NAME</label>
                                                                    <input type="text" value="ASC NAME" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">COLLECTOR CODE</label>
                                                                    <input type="text" value="COLLECTOR CODE" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">COLLECTOR NAME</label>
                                                                    <input type="text" value="COLLECTOR NAME" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 pe-lg-5 mb-3">
                                                                    <label for="cname" className="col-form-label pt-0">SCE NAME</label>
                                                                    <input type="text" value="SCE NAME" className="form-control" id="cname" disabled />
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 ps-lg-5 mb-3">
                                                                    <label for="fname" className="col-form-label pt-0">TERRITORY MANAGER</label>
                                                                    <input type="text" value="TERRITORY MANAGER" className="form-control" id="fname" disabled />
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stab12">
                                                        Any Other category of data as upload by User
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div>
                                        </div>
                                    </Tab.Container>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    :
                    <ContentLoader />
            }
        </>
    )
}

export default CollectionAccountDetail
