function getOrdinal(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')
}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

function functionName(date) {
    const resDate = new Date(date)
    const digitDate = getOrdinal(resDate.getDate())
    const month = monthNames[resDate.getMonth()]
    const year = resDate.getFullYear()

    return (`${digitDate} ${month}, ${year}`)
}

export default functionName