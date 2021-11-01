import React from 'react'

function AgentContact({ agentList, getWhatsappData, getAccountData, getDispoHistory, accountNumber }) {
    return (
        <div className="agent-name-list">
            {
                agentList.length > 0 && agentList.map((val, i) => {
                    return (

                        <div
                            id={`${val.number}`}

                            className={accountNumber === val.number ? "d-flex justify-between text-black agent-list-box  alert-info"
                                :
                                "d-flex justify-between text-black agent-list-box"
                            }
                            onClick={() => {
                                getWhatsappData(val.number, val.name)
                                getAccountData(val.customer_id)
                                getDispoHistory(val.number)
                            }
                            }
                        >
                            <div>
                                <p className="mb-0"><strong className="tx-16">{val.name ? val.name : ""}</strong><br />
                                    <span className="msg-status">
                                        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#B2B2B2" fill-rule="evenodd">
                                                <path d="m5.004 7.759 7.21-7.206a.7.7 0 0 1 .99.99L5.5 9.244a.7.7 0 0 1-.99 0l-3.503-3.5a.7.7 0 1 1 .99-.99l3.007 3.005z" />
                                                <path d="m5.004 12.759 7.21-7.206a.7.7 0 0 1 .99.99L5.5 14.244a.7.7 0 0 1-.99 0l-3.503-3.5a.7.7 0 1 1 .99-.99l3.007 3.005z" />
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="text-muted msg-hint">--</span></p>
                            </div>
                            <div>
                                <p className="text-muted tx-12">--</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AgentContact

{/* <div className="d-flex justify-between text-black agent-list-box agent-active">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />
        <span className="msg-status">
            <svg width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path d="m5.004 7.759 7.21-7.206a.7.7 0 0 1 .99.99L5.5 9.244a.7.7 0 0 1-.99 0l-3.503-3.5a.7.7 0 1 1 .99-.99l3.007 3.005z" fill="#B2B2B2" fill-rule="evenodd" />
            </svg>
        </span>
        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>

<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Preeti Singhal</strong><br />
        <span className="msg-status">
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                <g fill="#1A1A1A" fill-rule="evenodd" opacity=".504">
                    <path d="M8.802 13.848a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" />
                    <path d="M10.656 9.494a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1-.146-.354v-3a.5.5 0 0 1 1 0v2.793l1.354 1.353z" />
                </g>
            </svg>
        </span>
        <span className="text-muted msg-hint">Payment already done by m…</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div>
<div className="d-flex justify-between text-black agent-list-box">
<div>
    <p className="mb-0"><strong className="tx-16">Suneet Singh Sachan</strong><br />

        <span className="text-muted msg-hint">Where do you go?</span></p>
</div>
<div>
    <p className="text-muted tx-12">1:23pm</p>
</div>
</div> */}