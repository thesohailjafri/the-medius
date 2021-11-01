const months = ["01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12"
]

function functionName(date) {
    const resDate = new Date(date)
    const digitDate = (resDate.getDate())
    const month = months[resDate.getMonth()]
    const year = resDate.getFullYear()

    return (`${digitDate}-${month}-${year}`)
}

export default functionName