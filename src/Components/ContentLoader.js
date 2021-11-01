import React from 'react'
import LoaderImg from '../Static/RawImages/loader.gif'



function ContentLoader() {

    return (
        <>
            <div className="loader">
                <div className="loader-img">
                    <img src={LoaderImg} alt="Loader" />
                </div>
            </div>
        </>
    )
}

export default ContentLoader
