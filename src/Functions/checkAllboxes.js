const functionName = (arrayIds, idName, checkedState) => {
    console.log('fun check')
    arrayIds.map(id => {
        return (
            document.getElementById(`${idName}_${id}`).checked = checkedState
        )
    })
}

export default functionName