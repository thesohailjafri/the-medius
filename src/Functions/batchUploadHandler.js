import XLSX from 'xlsx'

//parse headers
const handleFile = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('file not provided')
        }

        if (file) {
            let data
            const reader = new FileReader()
            reader.onload = (e) => {
                /* Parse data */
                const ab = e.target.result
                const wb = XLSX.read(ab, { type: 'array' })
                /* Get first worksheet */
                const wsname = wb.SheetNames[0]
                const ws = wb.Sheets[wsname]
                /* Convert array of arrays */
                data = XLSX.utils.sheet_to_json(ws, { header: 1 })
                /* Update state */
                resolve(data[0])
                // console.log(make_cols(ws['!ref']))
            }
            reader.readAsArrayBuffer(file)
        }
    })
}
//parse HeaderName and assign them to HeaderName and HeaderNameMatched
const handleHeaderName = async (file, parameters, setProgressBar, setFileName, setOnImportPage, setHeaderName, setHeaderNameMatched, setUploadHeaders) => {
    setFileName(file.name)
    setOnImportPage(true)
    setProgressBar(50)

    let _HeaderName = []
    let _HeaderNameMatched = {}
    let _UploadHeaders = {}

    handleFile(file).then((parsedHeader) => {
        _HeaderName.push('Ignore This Field')
        parsedHeader.map(item => {
            return item && _HeaderName.push(item.trim())
        })
        // console.log(_HeaderName)
        return _HeaderName
    })
        .then((_HeaderName) => {

            let _copyHeader = _HeaderName.map(item => {
                return item.replaceAll(' ', '')
                    .replaceAll(`-`, '')
                    .replaceAll(`_`, '')
                    .replaceAll(`(`, '')
                    .replaceAll(`)`, '')
                    .replaceAll(`[`, '')
                    .replaceAll(`]`, '')
                    .replaceAll(`+`, '')
                    .replaceAll(`.`, '')
                    .replaceAll(`&`, '')
                    .replaceAll(`#`, '')
                    .replaceAll(`*`, '')
                    .replaceAll(`/`, '')
                    .replaceAll(`@`, '')
                    .replaceAll(`"`, '')
                    .replaceAll(`'`, '')
                    .toLowerCase()
            })
            // console.log(_copyHeader)
            return _copyHeader
        })
        .then((_copyHeader) => {


            for (const [key, value] of Object.entries(parameters)) {

                let status
                // console.log(key, value)
                for (let val of value) {
                    // console.log(val)
                    const r = _copyHeader.indexOf(val)
                    if (r === -1) {
                        status = {
                            found: false,
                            at: r,
                            key: key
                        }
                        continue
                    } else {
                        status = {
                            found: true,
                            at: r,
                            key: key
                        }
                        break
                    }
                }
                // console.log(status)

                const i = status.at
                const headValue = _HeaderName[i]
                // console.log(status)
                if (status.found) {
                    _HeaderNameMatched[key] = headValue
                    _UploadHeaders[headValue] = key
                }

                if (!status.found) {
                    const { key } = status
                    _HeaderNameMatched[key] = null
                    // console.log(headValue, 'bb')
                    // _UploadHeaders[headValue] = null
                }
            }
            return ([setHeaderName(_HeaderName), setHeaderNameMatched(_HeaderNameMatched), setProgressBar(100), setUploadHeaders(_UploadHeaders)])
        })
}
//check if HeaderNameMatched contain filed
const fieldMatcher = (item, HeaderNameMatched) => {
    const result = HeaderNameMatched[item]
    return result
}
//handel update header
const HeaderNameUpdateHandler = (parameter, selectedValue, HeaderNameMatched, setHeaderNameMatched, UploadHeaders, setUploadHeaders) => {
    const equalBtn = document.getElementById(`equalBtn_${parameter}`)
    const notEqualBtn = document.getElementById(`notEqualBtn_${parameter}`)
    const checkbox = document.getElementById(`checkbox_${parameter}`)



    const _HeaderNameMatched = HeaderNameMatched
    const _UploadHeaders = UploadHeaders

    if (selectedValue === 'Ignore This Field') {
        _HeaderNameMatched[parameter] = null
        delete _UploadHeaders[selectedValue]
        equalBtn.style.display = 'none'
        notEqualBtn.style.display = 'block'
        checkbox.checked = false
        checkbox.labels[0].textContent = "Not Matched"
    }
    else {
        _HeaderNameMatched[parameter] = selectedValue
        _UploadHeaders[selectedValue] = parameter
        equalBtn.style.display = 'block'
        notEqualBtn.style.display = 'none'
        checkbox.checked = true
        checkbox.labels[0].textContent = "Matched"
    }


    return [setHeaderNameMatched(_HeaderNameMatched),
    // console.log({ HeaderNameMatched }),
    setUploadHeaders(UploadHeaders),
        // console.log({ UploadHeaders })
    ]
}

export {
    handleHeaderName,
    fieldMatcher,
    HeaderNameUpdateHandler
}