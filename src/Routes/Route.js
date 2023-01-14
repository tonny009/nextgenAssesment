import { createBrowserRouter } from 'react-router-dom'
import Attendence from '../Components/Attendence/Attendence'
import Dashboard from '../Components/Dashboard/Dashboard'
import Dashboardlayout from '../Components/Dashboardlayout'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboardlayout></Dashboardlayout>,
    children: [
      {
        path: '/',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/attendence',
        element: <Attendence></Attendence>,
      },
    ],
  },
])
