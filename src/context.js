import React, { useState, useContext} from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [AdminMediusToken, setAdminMediusToken] = useState(sessionStorage.getItem('admin_medius_x_token'))
    const [AgentMediusToken, setAgentMediusToken] = useState(sessionStorage.getItem('agent_medius_x_token'))
    
    const [IsTokenValid, setIsTokenValid] = useState(true)
    const [TotalResultFetched, setTotalResultFetched] = useState(null)


    const updateFetchedCount = (payload) => {
        setTotalResultFetched(payload)
    }

    

    return <AppContext.Provider
        value={{
            AdminMediusToken,
            setAdminMediusToken,
            AgentMediusToken,
            setAgentMediusToken,
            IsTokenValid,
            setIsTokenValid,
            TotalResultFetched,
            updateFetchedCount
        }}
    >
        {children}
    </AppContext.Provider>

}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }