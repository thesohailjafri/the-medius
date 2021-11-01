import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import reportWebVitals from './reportWebVitals'
import { AppProvider } from './context'
import { HashRouter } from 'react-router-dom'
import { createBrowserHistory } from "history"
//bootstrap

import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Animation Style

import 'aos/dist/aos'
import 'aos/dist/aos.css'

//styles
import './Styles/SCSS/Dashboard.css'
import './Styles/SCSS/AccountExtra.css'
import './Styles/SCSS/App.css'
import './Styles/SCSS/CollectionAccounts.css'
import './Styles/SCSS/CollectionBatch.css'
import './Styles/SCSS/Header.css'
import './Styles/SCSS/MainHeader.css'
import './Styles/SCSS/Sidebar.css'
import './Styles/SCSS/Agent.css'



axios.defaults.baseURL = 'https://api.themedius.ai'
sessionStorage.getItem('admin_medius_x_token') && (axios.defaults.headers.common['Authorization'] = `Token ${sessionStorage.getItem('admin_medius_x_token')}`)
sessionStorage.getItem('agent_medius_x_token') && (axios.defaults.headers.common['Authorization'] = `Token ${sessionStorage.getItem('agent_medius_x_token')}`)

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.params = {}
axios.defaults.params['client_id'] = sessionStorage.getItem('admin_medius_x_clientId') || sessionStorage.getItem('agent_medius_x_clientId')






const customHistory = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <HashRouter history={customHistory}>
      <AppProvider>
        <App />
      </AppProvider>
    </HashRouter>

  </React.StrictMode>
  ,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


//td fix calender
//td downlaod