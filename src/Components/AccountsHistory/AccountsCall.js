import React, { useEffect, useState } from 'react'

import AudioPlayer from 'material-ui-audio-player'
import BackgroundOrange from '../../Static/RawImages/record_bar-orange.svg'
import BackgroundYellow from '../../Static/RawImages/record_bar-yellow.svg'
import BackgroundPurple from '../../Static/RawImages/record_bar-purple.svg'

import getCorrentDateFormat from "../../Functions/getCorrentDateFormat"
import ContentLoader from '../ContentLoader'


var sectionStyleorange = {
    backgroundImage: `url(${BackgroundOrange})`
}
var sectionStyleyellow = {
    backgroundImage: `url(${BackgroundYellow})`
}
var sectionStylepurple = {
    backgroundImage: `url(${BackgroundPurple})`
}

const audioArray = [
    sectionStyleorange,
    sectionStyleyellow,
    sectionStylepurple
]

function AccountCall({ data }) {

    const date = new Date().toISOString()

    return (
        data ?
            <>
                {data.length > 0 ?
                    <div className="account_extra_call">

                        <p className="title-hr mt-2 mb-4"><span>{getCorrentDateFormat(date)}</span></p>

                        {/* <p className="title-hr mt-2 mb-4"><span>{date}</span></p> */}

                        {data?.map((item, index) => {
                            let i = index % 3
                            return (
                                <div className="audio-player" style={audioArray[i]}>
                                    <AudioPlayer
                                        elevation={1}
                                        width="100%"
                                        variation="default"
                                        spacing={3}
                                        autoplay={false}
                                        order="standart"
                                        preload="auto"
                                        volume={false}
                                        src={item.RecordingUrl ? item.RecordingUrl : ""}
                                    />
                                </div>
                            )

                        })}


                    </div >
                    :
                    <h4 className='text-center'>No Data found</h4>
                }
            </>
            :

            <ContentLoader />


    )
}

export default AccountCall

// const src = [
//     'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//     'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
// ]

{/* <p className="title-hr mt-2 mb-4"><span>16 May 2021</span></p>

<div className="audio-player" style={sectionStyleorange}>
    <AudioPlayer
        elevation={1}
        width="100%"
        variation="default"
        spacing={3}
        autoplay={false}
        order="standart"
        preload="auto"
        volume={false}
        src={src}
    />
</div>

<div className="audio-player audio-player-yellow" style={sectionStyleyellow}>
    <AudioPlayer
        elevation={1}
        width="100%"
        variation="default"
        spacing={3}
        autoplay={false}
        order="standart"
        preload="auto"
        volume={false}
        src={src}
    />
</div>

<p className="title-hr mt-2 mb-4"><span>16 May 2021</span></p>
<div className="audio-player audio-player-purple" style={sectionStylepurple}>
    <AudioPlayer
        elevation={1}
        width="100%"
        variation="default"
        spacing={3}
        autoplay={false}
        order="standart"
        preload="auto"
        volume={false}
        src={src}
    />
</div> */}
