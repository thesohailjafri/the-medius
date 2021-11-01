import React from 'react'
import ContentLoader from '../ContentLoader'
import getCorrentDateFormat from '../../Functions/getCorrentDateFormat'
import getCorrectTimeFormat from '../../Functions/getCorrectTimeFormat'
function AccountsWhatsapp(props) {
    const data = props.AccountWhatsappData

    const date = new Date()

    return (
        data ?
            <>
                {data?.length > 0 ?

                    <div className="account_extra_whatsapp">
                        <div className="account_extra_date">
                            <p className="title-hr mt-2 mb-4"><span>{getCorrentDateFormat(date)}</span></p>
                            <hr />
                        </div>
                        {data?.map((item, i) => {
                            return (
                                <>
                                    <div className={item.owner === "Wati" ? 'account_extra_whatsapp_owner' : 'account_extra_whatsapp_user'}>
                                        <div className="account_extra_whatsapp_text">
                                            {item.text}
                                        </div>
                                        <span>{getCorrectTimeFormat(item.created)}</span>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                    :
                    <h4 className='text-center'>No Data found</h4>
                }
            </>
            :
            <>
                <ContentLoader />
            </>
    )
}

export default AccountsWhatsapp
