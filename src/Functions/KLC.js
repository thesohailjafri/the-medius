export default function zz(value) {
    if (value !== undefined && value !== null) {
        var val = value
        if (val >= 10000000) {
            val = (val / 10000000).toFixed(2) + ' C'
        } else if (val >= 100000) {
            val = (val / 100000).toFixed(2) + ' L'
        } else if (val >= 1000) {
            val = (val / 1000).toFixed(2) + ' K'
        } else {
            val = value
        }

        return val
    }
}