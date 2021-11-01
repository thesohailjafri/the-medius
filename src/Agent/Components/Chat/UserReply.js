import React from 'react'
import time from '../../../Functions/getCorrectTimeFormat'

function UserReply({ data }) {
    return (
        <div className="chat-user text-end">
            <div className="chat-wrap">
                <div className="chat-text">
                    {data.text}
                </div>
                <div className="time-stamp">{time(data.created)}
                    <svg width="13" height="14" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#0A7AFF" fill-rule="evenodd">
                            <path d="m4.202 7.411 7.21-7.206a.7.7 0 0 1 .99.99L4.698 8.896a.7.7 0 0 1-.99 0l-3.503-3.5a.7.7 0 1 1 .99-.99L4.203 7.41z" />
                            <path d="m4.202 11.411 7.21-7.206a.7.7 0 0 1 .99.99l-7.704 7.701a.7.7 0 0 1-.99 0l-3.503-3.5a.7.7 0 1 1 .99-.99l3.007 3.005z" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default UserReply