const mydate = new Date()

function functionName(batch_date) {
    let resdate = new Date(batch_date)
    let diffdate = mydate - resdate
    return (parseInt(diffdate / (1000 * 3600 * 24)))
}

export default functionName