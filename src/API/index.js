import axios from 'axios'

const apiUrl = {
    collectionBatch: '/dashboard/api/batch/',
    uploadBatch: '/dashboard/api/batch/',
    collectionAccounts: '/dashboard/api/account/',
    login: '/account/api/login/',
    sms: '/message91/api/get_message_converjations_by_customer_mobile_number/',
    whatsapp: '/dashboard/api/get_wati_conversation/',
    disposition: '/dashboard/api/disposition_history/',
    calls: '/call/api/get_call_records/',
    dailyReport: '/dashboard/api/daily-report/',
    checkCurrentUser: '/dashboard/api/check_current_user/',
    postDispoData: '/dashboard/api/add_disposition_data/',
    agentChats: '/dashboard/api/whatspp_chat_name',
    dashboardDateWiseData: '/dashboard/api/datewise-batch-data/',
    dashboardLiveData: '/dashboard/api/live-feed-data/',
    dashboardDispositionData: '/dashboard/api/get-disposition-data/',
    findCustomer: '/dashboard/api/find_customer/',
    sendWaMessage: '/dashboard/api/send_wati_msg/',
    adminReport: '/dashboard/api/get_report/',
    adminBatchReport: '/dashboard/api/get_lang_report/',
    adminChannel: '/dashboard/api/channel',
    adminChannelPut: '/dashboard/api/channel/1',
    adminAgent: '/dashboard/api/agents',
    adminChannelRules: '/dashboard/api/channel_rules',
    adminChannelState: '/dashboard/api/state',
    adminUser: '/dashboard/api/user',
    adminWhatsappTemplate: '/dashboard/api/whatsapp_templates',
    downloadAccountCallingReport: '/dashboard/api/download-calling-report/',
    updateBatchConvo: 'dashboard/api/update_batch_convo/',
    updateBatchCampaign: 'dashboard/api/update_campaign/',
    downloadPrelitiBatchReport: 'dashboard/api/batch_pre_leti_download',
    PreLitiBatchData: '/dashboard/api/batch_pre_leti_get/',
    agentPanelData: '/dashboard/api/panel-data',
    manualCallInitiate: '/call/api/manual_call_initiate/',
    dataWiseBatchData: '/dashboard/api/datewise-batch-data/',
    riskAssessment: '/dashboard/api/risk-assessment/',
    dispositionWiseReport: '/dashboard/api/get-disposition-wise-report/',
    liveFeedData: '/dashboard/api/live-feed-data/',
    totalCollection: '/dashboard/api/total-collection-ptp/',
    prelitiBatch: '/pre_litigation/api/pre_litigation_batch/',
    prelitiNotice: '/pre_litigation/api/notice/',
    commonActivity: 'dashboard/api/get_common_activity'
}


const fetchCommonActivity = async (id) => {
    try {
        const myParams = {user_id: id}
        const res = await axios.get(apiUrl.commonActivity,{params: myParams})
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const getPreLitiNoticeData = async (SearchParameter) => {
    try {
        const res = await axios.get(apiUrl.prelitiNotice, { params: SearchParameter })
        console.log('notice', res)
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}


const getPreLitiBatchData = async (SearchParameter) => {
    try {
        const res = await axios.get(apiUrl.prelitiBatch, { params: SearchParameter })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const postPreLitiBatchData = async (formData) => {
    try {
        const res = await axios.post(apiUrl.prelitiBatch, formData)
        return (res)
    } catch (error) {
        console.error({ error })
    }
}

const getDataWiseBatchData = async (duration) => {
    try {
        const myParams = { duration }
        const res = await axios.get(apiUrl.dataWiseBatchData, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const getRiskAssessment = async (type, value) => {
    try {
        const myParams = { [type]: value }
        const res = await axios.get(apiUrl.riskAssessment, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const getDispositionWiseReport = async (type, value) => {
    try {
        const myParams = { [type]: value }
        const res = await axios.get(apiUrl.dispositionWiseReport, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const getLiveFeed = async (ordering, page) => {
    try {
        const myParams = { ordering, page }
        const res = await axios.get(apiUrl.liveFeedData, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}


const getTotalCollection = async () => {
    try {
        const res = await axios.get(apiUrl.totalCollection)
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}


const postManualCallInitiate = async (mobileNumber) => {
    try {
        const myData = {
            to_number: mobileNumber
        }
        const res = await axios.post(apiUrl.manualCallInitiate, myData)
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const fetchAgentPanelData = async () => {
    try {
        const res = await axios.get(apiUrl.agentPanelData)
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}


const fetchCollectionBatch = async (SearchParameter) => {
    try {
        const res = await axios.get(apiUrl.collectionBatch, { params: SearchParameter })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}


const patchBatchCampaign = async (batch_ids, date, dispoArray, data) => {
    try {
        let myData = {
            batch_ids,
            date,
            dispositions: dispoArray,
            channels: { ...data }
        }
        const res = await axios.post(apiUrl.updateBatchCampaign, myData)
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const patchBatchConvo = async (batch_id, data, type) => {
    try {
        let myData = {
            batch_id,
            disposition: "SW",
            type: "Not Connected",
            channels: { ...data }
        }
        let myParams = { batch_id }
        const res = await axios.post(apiUrl.updateBatchConvo, myData, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}


const getBatchConvo = async (batch_id) => {
    try {
        let myParams = { batch_id }
        const res = await axios.get(apiUrl.updateBatchConvo, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}


const downloadAccountCallingReport = async (batch_id, mobile_number) => {
    try {
        let myParams = { batch_id, mobile_number }
        const res = await axios.get(apiUrl.downloadAccountCallingReport, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const downloadBatchCallingReport = async (batch_id) => {
    try {
        let myParams = { batch_id }
        const res = await axios.get(apiUrl.downloadAccountCallingReport, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}


const sendWhatsappMessage = async (mobileNumber, text) => {
    try {
        let myData = {
            number: mobileNumber,
            message: text
        }
        // let myData = new FormData()
        // myData.append(   "number",mobileNumber)
        // myData.append(   "message",text)
        const res = await axios.post(apiUrl.sendWaMessage, myData)
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const findCustomer = async (customer_name, mobileNumber, lrn) => {
    try {
        let myData = {
            customer_name: customer_name,
            mob: mobileNumber,
            lrn: lrn
        }
        const res = await axios.post(apiUrl.findCustomer, myData)
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const fetchAccountData = async (id) => {
    try {
        let myParams = { customer_id: id }
        const res = await axios.get(apiUrl.collectionAccounts, { params: myParams })
        return (res.data.data)
    } catch (error) {
        console.error({ error })
    }
}

const fetchLoginData = async (email, password) => {
    try {
        sessionStorage.clear()
        const formData = new FormData()
        formData.append("email", email.toLowerCase().trim())
        formData.append("password", password)
        const res = await axios.post(apiUrl.login, formData)
        console.table('login', res)
        return (res.data)
    } catch (error) {
        console.error(error)
        return ('error')
    }
}

const fetchAccountsPageData = async (SearchParameter) => {
    try {
        const res = await axios.get(apiUrl.collectionAccounts, { params: SearchParameter })
        return (res.data)
    } catch (error) {
        console.error(error)
        return ('error')
    }
}

const fetchReportData = async () => {
    try {
        const res = await axios.get(apiUrl.dailyReport)
        return (res.data)
    } catch (error) {
        console.error(error)
        return ('error')
    }
}

const fetchDispositionData = async (mobileNumber) => {
    try {
        const myParams = { customer_mobile_number: mobileNumber }
        const res = await axios.get(apiUrl.disposition, { params: myParams })
        return (res.data.data)
    } catch (error) {
        console.error({ error })
        return ('error')

    }
}

const fetchCallData = async (mobileNumber) => {
    try {
        //8423050982
        console.log(mobileNumber)
        const myParams = { to_number: mobileNumber }
        const res = await axios.get(apiUrl.calls, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
        return ('error')

    }
}

const fetchWhatsappData = async (mobileNumber) => {
    try {
        const myParams = { number: mobileNumber }
        const res = await axios.get(apiUrl.whatsapp, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
        return ('error')
    }
}

const fetchSmsData = async (mobileNumber) => {
    try {
        let smsUrl = apiUrl.sms + mobileNumber
        const res = await axios.get(smsUrl)
        return (res.data)
    } catch (error) {
        console.error({ error })
        return ('error')
    }
}

const postDispositionData = async (dispoData) => {
    try {
        const res = await axios.post(apiUrl.postDispoData, dispoData)
        return (res)
    } catch (error) {
        console.error({ error })
        return ('error')
    }
}

const fetchOnGoingCurrectCall = async (mobileNumber) => {
    try {
        const myParams = { agent_number: mobileNumber }
        const res = await axios.get(apiUrl.checkCurrentUser, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
        return ('error')
    }
}

const postBatchData = async (formData) => {
    try {
        const res = await axios.post(apiUrl.uploadBatch, formData)
        return (res)
    } catch (error) {
        console.error({ error })
        return ('error')
    }
}

const getAgentChat = async (mobileNumber) => {
    try {
        // /7678690687
        const myParams = {
            agent_number: mobileNumber
        }
        const res = await axios.get(apiUrl.agentChats, { params: myParams })
        return (res.data)
    } catch (error) {
        console.error({ error })
        return ('error')
    }

}

const fetchDashboardDateWise = async (dat) => {
    try {
        const myParams = {
            data: dat
        }
        const res = await axios.get(apiUrl.dashboardDateWiseData, { params: myParams })
        console.log(res)
        return res

    } catch (err) {
        console.error({ err })
    }
}
const fetchDashboardLiveFeed = async () => {
    try {
        const myParams = { page: 1 }
        const res = await axios.get(apiUrl.dashboardLiveData, { params: myParams })
        console.log(res.data.results)
        return res.data.results

    } catch (err) {
        console.error({ err })
    }
}
const fetchDashboardDisposition = async () => {
    try {

        const res = await axios.get(apiUrl.dashboardDispositionData)
        console.log(res)
        return res

    } catch (err) {
        console.error({ err })
    }
}

const fetchAdminReport = async () => {
    try {
        const res = await axios.get(apiUrl.adminReport)
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
const fetchAdminBatchReport = async (id) => {
    try {
        const myParams = { batch_id: id }
        const res = await axios.get(apiUrl.adminBatchReport, { params: myParams })
        console.log(res.data.data)
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}

const fetchAdminChannels = async () => {
    try {
        const res = await axios.get(apiUrl.adminChannel)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

const patchAdminChannels = async (data) => {
    try {
        await axios.put(apiUrl.adminChannel + '/' + 1, data)
    } catch (err) {
        console.log(err)
    }
}

const fetchAdminAgents = async () => {
    try {
        const res = await axios.get(apiUrl.adminAgent)
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

const patchAdminAgents = async (id, data) => {
    try {
        await axios.put(apiUrl.adminAgent + '/' + id, data)
    } catch (err) {
        console.log(err)
    }
}

const fetchAdminChannelRules = async () => {
    try {
        const res = await axios.get(apiUrl.adminChannelRules)
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

const patchAdminChannelRules = async (id, data) => {
    try {
        await axios.put(apiUrl.adminChannelRules + '/' + id, data)
    } catch (err) {
        console.log(err)
    }
}


const fetchAdminState = async () => {
    try {
        const res = await axios.get(apiUrl.adminChannelState)
        console.log(res)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

const patchAdminState = async (id, data) => {

    try {

        await axios.put(apiUrl.adminChannelState, data)
    } catch (err) {
        console.log(err)
    }
}

const fetchAdminUser = async () => {
    try {
        const res = await axios.get(apiUrl.adminUser)
        console.log(res)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

const patchAdminUser = async (id, data) => {
    try {
        await axios.put(apiUrl.adminUser + '/' + id, data)
    } catch (err) {
        console.log(err)
    }
}

const fetchAdminWhatsappTemplate = async () => {
    try {
        const res = await axios.get(apiUrl.adminWhatsappTemplate)
        console.log(res)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

const patchAdminWhatsappTemplate = async (id, data) => {
    try {
        await axios.put(apiUrl.adminWhatsappTemplate + '/' + id, data)
    } catch (err) {
        console.log(err)
    }
}



const downloadPreBatchReport = async () => {
    try {
        // let myParams = { batch_id }
        const res = await axios.get(apiUrl.downloadPrelitiBatchReport)
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}

const fetchPreLitiBatchData = async () => {
    try {
        const res = await axios.get(apiUrl.PreLitiBatchData)
        return (res.data)
    } catch (error) {
        console.error({ error })
    }
}


export {
    fetchCommonActivity,
    fetchAccountData,
    fetchAccountsPageData,
    fetchLoginData,
    fetchDispositionData,
    fetchCallData,
    fetchWhatsappData,
    fetchSmsData,
    fetchReportData,
    postDispositionData,
    fetchOnGoingCurrectCall,
    postBatchData,
    getAgentChat,
    fetchDashboardDateWise,
    fetchDashboardLiveFeed,
    fetchDashboardDisposition,
    findCustomer,
    sendWhatsappMessage,
    fetchAdminReport,
    fetchAdminBatchReport,
    fetchAdminChannels,
    fetchAdminAgents,
    fetchAdminChannelRules,
    fetchAdminState,
    fetchAdminUser,
    fetchAdminWhatsappTemplate,
    downloadAccountCallingReport,
    downloadBatchCallingReport,
    patchBatchConvo,
    getBatchConvo,
    downloadPreBatchReport,
    fetchPreLitiBatchData,
    patchBatchCampaign,
    fetchCollectionBatch,
    patchAdminChannels,
    patchAdminAgents,
    patchAdminChannelRules,
    patchAdminState,
    patchAdminUser,
    patchAdminWhatsappTemplate,
    fetchAgentPanelData,
    postManualCallInitiate,
    getDataWiseBatchData,
    getDispositionWiseReport,
    getRiskAssessment,
    postPreLitiBatchData,
    getTotalCollection,
    getLiveFeed,
    getPreLitiBatchData,
    getPreLitiNoticeData,
}