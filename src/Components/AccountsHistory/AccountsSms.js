import React from 'react'
import getCorrentDateFormat from '../../Functions/getCorrentDateFormat'
import ContentLoader from '../ContentLoader'
function AccountSms(props) {
    const data = props.AccountSmsData
    const date = new Date().toISOString()
    return (
        data ?
            <>
                {data.length > 0 ?

                    < div className="account_extra_sms" >
                        <div className="account_extra_date">
                            <p className="title-hr mt-2 mb-4"><span>{getCorrentDateFormat(date)}</span></p>
                            <hr />
                        </div>
                        {data?.map((item, index) => {
                            return (
                                <div className="sms-data">
                                    {item.message_body}
                                </div>
                            )

                        })}
                    </div >
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

export default AccountSms
