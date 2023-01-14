import { createBrowserRouter } from 'react-router-dom'
import Attendence from '../Components/Attendence/Attendence'
import Dashboard from '../Components/Dashboard/Dashboard'
import Dashboardlayout from '../Components/Dashboardlayout'

export const routes = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboardlayout></Dashboardlayout>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/attendence',
        element: <Attendence></Attendence>,
      },
    ],
  },
])
