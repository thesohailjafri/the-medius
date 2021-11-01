import React from 'react'
import LoaderImg from '../Static/RawImages/loaderSmall.gif'
function SmallLoader() {
    return (
        <>
            <img src={LoaderImg} alt="Loader" style={{ padding: '20px 0px' }} />
        </>
    )
}

export default SmallLoader
