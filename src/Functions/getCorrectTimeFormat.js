
function functionName(date) {
    let resDate = new Date(date)
    var hours = resDate.getHours()
    var minutes = resDate.getMinutes()
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'

    if (hours < 10) {
        hours = '0' + hours
    }

    minutes = minutes < 10 ? '0' + minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
}

export default functionName