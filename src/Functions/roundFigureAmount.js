export default function zz(amount) {
    var myAmtAry = String(amount).split("").map((num) => {
        return Number(num)
    })
    let round
    if (myAmtAry.length === 1) {
        round = 10
    } else {
        round = myAmtAry.map((val, i) => {
            let newVal
            if (i === 0) {
                newVal = val + 1
            } else {
                newVal = 0
            }
            return newVal
        })
    }
    round = round.join('')
    return (round)
}