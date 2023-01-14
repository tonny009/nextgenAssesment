import logo from './logo.svg'
import './App.css'
import { routes } from './Routes/Route'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className="max-w-screen-xl common_bg">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
