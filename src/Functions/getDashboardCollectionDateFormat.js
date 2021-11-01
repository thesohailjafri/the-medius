

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

function functionName(date) {
    const resDate = new Date(date)
    const digitDate = resDate.getDate()
    const month = monthNames[resDate.getMonth()]

    return (`${month} ${digitDate}`)
}

export default functionName