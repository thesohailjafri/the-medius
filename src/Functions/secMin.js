export default function zz(timeStart) {
    let timeToPrint
    if (timeStart) {
        if (timeStart <= 60) {
            timeToPrint = `00:${(timeStart).toString().padStart(2, '0')} sec`
        } else if (timeStart >= 60) {
            var minutes = Math.floor(timeStart / 60)
            timeToPrint = `${(minutes).toString().padStart(2, '0')}:${(timeStart - minutes * 60).toString().padStart(2, '0')} min`
        }
    }
    return timeToPrint
}