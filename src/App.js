import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import { useGlobalContext } from './context'

/* AOS Animation */
import AOS from 'aos'
/* Pages */
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Login from './Pages/Login'
//collection
import CollectionBatch from './Pages/Collection/CollectionBatch'
import CollectionAccounts from './Pages/Collection/CollectionAccounts'
import CollectionAccountDetail from './Pages/Collection/CollectionAccountDetail'
import CollectionDailyReport from './Pages/Collection/CollectionDailyReport'

//litigation
import LitigationAdvocates from './Pages/Litigation/LitigationAdvocates'
import LitigationBatch from './Pages/Litigation/LitigationBatch'
import LitigationCalender from './Pages/Litigation/LitigationCalender'
import LitigationCase from './Pages/Litigation/LitigationCase'

//pre-lirigation
import PreLitigationBatch from './Pages/Pre-Litigation/PreLitigationLegalBatch'
import PreLitigationComplaints from './Pages/Pre-Litigation/PreLitigationLegalComplaints'
import PreLitigationFir from './Pages/Pre-Litigation/PreLitigationFirBatch'
import PreLitigationNotices from './Pages/Pre-Litigation/PreLitigationLegalNotices'

//others
import Account from './Pages/Account'
import Communication from './Pages/Communication'
import Dashboard from './Pages/Dashboard'
import AdminBatchReport from './Components/AdminBatchReport'
import Invoices from './Pages/Invoices'
import Settings from './Pages/Settings'
import SuperAdmin from './Pages/SuperAdmin'
import Users from './Pages/Users'

//Agent
import AgentSidebar from './Agent/Components/AgentSidebar'
import AgentHeader from './Agent/Components/AgentHeader'
import AgentLogin from '././Agent/Pages/AgentLogin'
import CurrentCalls from '././Agent/Pages/CurrentCalls'
import AgentChat from '././Agent/Pages/AgentChat'

//Admin
import AdminSidebar from './Admin/Components/AdminSidebar'
import AdminHeader from './Admin/Components/AdminHeader'
import AdminDispositions from './Admin/Pages/AdminDispositions'
import AdminLogin from './Admin/Pages/AdminLogin'
//client-admin
import AdminDashboard from './Pages/Admin/AdminDashboard'
import AdminChannel from './Pages/Admin/AdminChannel'
import AdminAgent from './Pages/Admin/AdminAgent'
import AdminChannelRules from './Pages/Admin/AdminChannelRules'
import AdminState from './Pages/Admin/AdminState'
import AdminUser from './Pages/Admin/AdminUser'
import AdminWhatsapp from './Pages/Admin/AdminWhatsapp'
import AdminBatchReset from './Pages/Admin/AdminBatchReset'
import AdminBatchUpdate from './Pages/Admin/AdminBatchUpdate'


// Error Pages
import ConnectionLost from './Pages/ConnectionLost'




/* Components */



function App() {
  const [IsSideBarOpen, setIsSideBarOpen] = useState(true)
  const { AdminMediusToken, AgentMediusToken } = useGlobalContext()

  /* AOS Animation */
  AOS.init({
    duration: 1000,
    once: true
  })

  useEffect(() => {
    document.title = "Medius AI"
    if (sessionStorage.getItem('agent_medius_x_token')) {
      document.title = "Agent Panel - Medius AI"
    }
    if (sessionStorage.getItem('admin_medius_x_token')) {
      document.title = "Client Panel - Medius AI"
    }

    sessionStorage.getItem('admin_medius_x_token') && (axios.defaults.headers.common['Authorization'] = `Token ${sessionStorage.getItem('admin_medius_x_token')}`)
    sessionStorage.getItem('agent_medius_x_token') && (axios.defaults.headers.common['Authorization'] = `Token ${sessionStorage.getItem('agent_medius_x_token')}`)
    axios.defaults.params = {}
    sessionStorage.getItem('admin_medius_x_token') && (axios.defaults.params['client_id'] = sessionStorage.getItem('admin_medius_x_clientId'))
    sessionStorage.getItem('agent_medius_x_token') && (axios.defaults.params['client_id'] = sessionStorage.getItem('agent_medius_x_clientId'))

  }, [AdminMediusToken, AgentMediusToken])


  return (
    <div className="App">

      <Switch>

        <Route exact path='/agent/login'>
          <AgentLogin />
        </Route>

        <Route exact path='/admin/login'>
          <AdminLogin />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>


        <Route exact path='/connection-lost'>
          <ConnectionLost />
        </Route>


        {/* Admin Routing */}
        {
          sessionStorage.getItem('admin') &&
          <Route >
            <aside className={`${IsSideBarOpen ? 'sidebar' : 'sidebar sidebar-hide'}`}>
              <AdminSidebar setIsSideBarOpen={setIsSideBarOpen} IsSideBarOpen={IsSideBarOpen} />
            </aside>
            <section className={`${IsSideBarOpen ? 'content' : 'content content-full'}`}>
              <AdminHeader setIsSideBarOpen={setIsSideBarOpen} IsSideBarOpen={IsSideBarOpen} />
              <div className="content-part">
                <Switch>
                  {/* New Admin Page Below */}
                  <Route exact path='/admin/dispositions'>
                    <AdminDispositions />
                  </Route>

                  <Route exact path='*'>
                    <Redirect to='/admin/dispositions' />
                  </Route>

                </Switch>
              </div>
            </section>
          </Route>


        }


        {/* Agent Routing */}
        {
          (sessionStorage.getItem('agent_medius_x_token') && !sessionStorage.getItem('admin_medius_x_token'))
          &&
          <Route >
            <aside className={`${IsSideBarOpen ? 'sidebar' : 'sidebar sidebar-hide'}`}>
              <AgentSidebar setIsSideBarOpen={setIsSideBarOpen} IsSideBarOpen={IsSideBarOpen} />
            </aside>
            <section className={`${IsSideBarOpen ? 'content' : 'content content-full'}`}>
              <AgentHeader setIsSideBarOpen={setIsSideBarOpen} IsSideBarOpen={IsSideBarOpen} />
              <div className="content-part">
                <Switch>



                  {/* calls */}
                  <Route exact path='/agent/calls'>
                    <CurrentCalls />
                  </Route>
                  <Route exact path='/agent/calls/current'>
                    <CurrentCalls />
                  </Route>
                  <Route exact path='/agent/calls/current/:id'>
                    <CurrentCalls />
                  </Route>
                  <Route exact path='/agent/calls/logs'>
                    <CurrentCalls />
                  </Route>

                  {/* Chat */}
                  <Route exact path='/agent/chat/'>
                    <AgentChat />
                  </Route>

                  {/* other agent routes */}
                  <Route exact path='/agent/history'>
                    <CurrentCalls />
                  </Route>
                  <Route exact path='/agent/myreport'>
                    <CurrentCalls />
                  </Route>

                  {/* if not above routes then this route */}
                  <Route exact path='*'>
                    <Redirect to='/agent/calls/current' />
                  </Route>

                </Switch>
              </div>



            </section>
          </Route>
        }


        {/* Admin Routing */}
        {
          (sessionStorage.getItem('admin_medius_x_token') && !sessionStorage.getItem('agent_medius_x_token'))
          &&

          <Route >

            <aside className={`${IsSideBarOpen ? 'sidebar' : 'sidebar sidebar-hide'}`}>
              <Sidebar setIsSideBarOpen={setIsSideBarOpen} IsSideBarOpen={IsSideBarOpen} />
            </aside>
            <section className={`${IsSideBarOpen ? 'content' : 'content content-full'}`}>
              <Header setIsSideBarOpen={setIsSideBarOpen} IsSideBarOpen={IsSideBarOpen} />
              <div className="content-part">
                <Switch>

                  <Route exact path='/'>
                    <Dashboard />
                    {/* <Redirect to='/collection/batch' /> */}
                  </Route>

                  <Route exact path='/admin/dashboard'>
                    <AdminDashboard />
                  </Route>
                  <Route exact path='/admin/dashboard/batch=:id'>
                    <AdminBatchReport />
                  </Route>
                  <Route exact path='/admin/dashboard/reset-campaign/batch=:id'>
                    <AdminBatchReset />
                  </Route>
                  <Route exact path='/admin/dashboard/update-campaign'>
                    <AdminBatchUpdate />
                  </Route>
                  <Route exact path='/admin/dashboard/channels'>
                    <AdminChannel />
                  </Route>
                  <Route exact path='/admin/dashboard/agents'>
                    <AdminAgent />
                  </Route>
                  <Route exact path='/admin/dashboard/channelRules'>
                    <AdminChannelRules />
                  </Route>
                  <Route exact path='/admin/dashboard/state'>
                    <AdminState />
                  </Route>
                  <Route exact path='/admin/dashboard/user'>
                    <AdminUser />
                  </Route>
                  <Route exact path='/admin/dashboard/whatsapp'>
                    <AdminWhatsapp />
                  </Route>

                  <Route exact path='/collection'>
                    <Redirect to='/collection/batch' />
                  </Route>
                  <Route exact path='/collection/batch'>
                    <CollectionBatch />
                  </Route>
                  <Route path='/collection/accounts/:id'>
                    <CollectionAccounts />
                  </Route>
                  <Route path='/collection/accounts'>
                    <CollectionAccounts />
                  </Route>
                  <Route exact path='/collection/account/:id'>
                    <CollectionAccountDetail />
                  </Route>
                  <Route exact path='/collection/dailyreport'>
                    <CollectionDailyReport />
                  </Route>


                  <Route exact path='/prelitigation/legal'>
                    <Redirect to='/prelitigation/legal/batch' />
                  </Route>
                  <Route exact path='/prelitigation/legal/batch'>
                    <PreLitigationBatch />
                  </Route>
                  <Route exact path='/prelitigation/legal/batch/:id'>
                    <PreLitigationBatch />
                  </Route>
                  <Route exact path='/prelitigation/legal/notices'>
                    <PreLitigationNotices />
                  </Route>
                  <Route exact path='/prelitigation/legal/notices/:id'>
                    <PreLitigationNotices />
                  </Route>
                  <Route exact path='/prelitigation/fir/batch'>
                    <PreLitigationFir />
                  </Route>
                  <Route exact path='/prelitigation/fir/complaints'>
                    <PreLitigationComplaints />
                  </Route>


                  <Route exact path='/litigation'>
                    <Redirect to='/litigation/batch' />
                  </Route>
                  <Route exact path='/litigation/batch'>
                    <LitigationBatch />
                  </Route>
                  <Route exact path='/litigation/case'>
                    <LitigationCase />
                  </Route>
                  <Route exact path='/litigation/advocates'>
                    <LitigationAdvocates />
                  </Route>
                  <Route exact path='/litigation/calendar'>
                    <LitigationCalender />
                  </Route>

                  <Route exact path='/account'>
                    <Account />
                  </Route>
                  <Route exact path='/communication'>
                    <Communication />
                  </Route>
                  <Route exact path='/invoices'>
                    <Invoices />
                  </Route>
                  <Route exact path='/settings'>
                    <Settings />
                  </Route>
                  <Route exact path='/superadmin'>
                    <SuperAdmin />
                  </Route>
                  <Route exact path='/users'>
                    <Users />
                  </Route>



                  {/* if not above routes then this route */}
                  <Route exact path='*'>
                    <Redirect to='/collection/batch' />
                  </Route>

                </Switch>
              </div>
            </section>
          </Route>
        }


        {/* Redirects should be kept below the initalized routes */}
        {
          useRouteMatch('/agent') &&
          <>
            {!sessionStorage.getItem('agent_medius_x_token') ?
              <Redirect to='/agent/login' />
              :
              <Redirect to='/agent/calls/current' />
            }
          </>
        }

        {/* Redirects should be kept below the initalized routes */}
        {
          useRouteMatch('/admin') &&
          <>
            {!sessionStorage.getItem('agent_medius_x_token') ?
              <Redirect to='/admin/login' />
              :
              <Redirect to='/admin/dispositions' />
            }
          </>
        }

        {/* If both the token is null redirect to admin login */}
        {
          (!sessionStorage.getItem('agent_medius_x_token') && !sessionStorage.getItem('admin_medius_x_token'))
          &&
          <Redirect to='/login' />
        }

      </Switch>
    </div>
  )
}

export default App
