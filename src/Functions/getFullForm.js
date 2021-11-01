function functionName(val) {
    const disp = [
        "Wrong Number",
        "Switched Off",
        "Ringing, No Response",
        "Promise To Pay",
        "Broken PTP",
        "Dispute",
        "Surender",
        "Paid",
        "Paying Now",
        "Call Back",
        "Want Settlement",
        "Language Barrier",
        "Do Not Disturb",
        "Refuse To Pay",
        "Not Captured Yet"
    ]


    const sval = val.toUpperCase()

    switch (sval) {
        case "WN":
            return disp[0]
        case "SW":
            return disp[1]
        case "RNR":
            return disp[2]
        case "PTP":
            return disp[3]
        case "BPTP":
            return disp[4]
        case "DIS":
            return disp[5]
        case "SUR":
            return disp[6]
        case "PAID":
            return disp[7]
        case "PN":
            return disp[8]
        case "CB":
            return disp[9]
        case "SETL":
            return disp[10]
        case "LANG":
            return disp[11]
        case "DND":
            return disp[12]
        case "RTP":
            return disp[13]
        case "NC":
            return disp[14]
        case "NONE":
            return disp[14]
        default:
            return sval
    }
}

export default functionName