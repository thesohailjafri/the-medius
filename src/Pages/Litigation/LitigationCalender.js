import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "../../../node_modules/moment/"
import "react-big-calendar/lib/css/react-big-calendar.css"
const localizer = momentLocalizer(moment)

function LitigationCalender() {
    const events = [
        {
            start: moment().toDate(),
            end: moment()
                .add(1, "days")
                .toDate(),
            title: "Some title"
        }
    ]
    return (
        <div data-aos="fade-up" data-aos-duration="800" className="calendar">
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={events}
                style={{ height: "100vh" }}
            />
        </div>
    )
}

export default LitigationCalender
