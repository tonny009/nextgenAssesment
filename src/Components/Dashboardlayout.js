import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Logo from '../assets/logo-removebg-preview.png'
import Dashpic from '../assets/web.png'
import settings from '../assets/Vector.png'
import bullet from '../assets/bullet-final.png'
import logout from '../assets/logout.png'
import arrow from '../assets/arrow.png'

const Dashboardlayout = () => {
  const MenuList = (
    <>
      <li className="font-semibold btn-colors pl-4  rounded-xl hover:bg-zinc-700">
        <Link to="/">
          <div className="w-7">
            <img src={Dashpic} />
          </div>
          Dashboard
        </Link>
      </li>
      <li className="font-semibold btn-colors pl-4 rounded-xl hover:bg-zinc-700">
        <Link to="/attendence">
          <div className="w-7">
            <img src={Dashpic} />
          </div>
          Attendence
        </Link>
      </li>
      <li className="font-semibold btn-colors pl-4 rounded-xl hover:bg-zinc-700">
        <Link>
          <div className="w-7">
            <img src={Dashpic} />
          </div>
          Employees
        </Link>
      </li>
      <li className="font-semibold btn-colors pl-4 rounded-xl hover:bg-zinc-700">
        <Link>
          <div className="w-7">
            <img src={Dashpic} />
          </div>
          Leaves
        </Link>
      </li>
      <li className="font-semibold btn-colors pl-4 rounded-xl hover:bg-zinc-700">
        <Link>
          <div className="w-7">
            <img src={Dashpic} />
          </div>
          Expense
        </Link>
      </li>
      <li className="font-semibold btn-colors pl-4 rounded-xl hover:bg-zinc-700">
        <Link>
          <div className="w-7">
            <img src={Dashpic} />
          </div>
          Notice
        </Link>
      </li>
      <li className="font-semibold btn-colors pl-4 rounded-xl hover:bg-zinc-700">
        <Link>
          <div className="w-7">
            <img src={Dashpic} />
          </div>
          Department
        </Link>
      </li>
      <li className="font-semibold btn-colors rounded-xl hover:bg-zinc-700 ">
        <Link>
          <div className="w-6">
            <div className="flex gap-4 mb-0">
              <img src={arrow} />

              <img src={settings} />
              <div> Settings</div>
            </div>
            <ul className="ml-10">
              <li>
                <div className="flex pt-3">
                  <div className="w-3">
                    <img src={bullet} />
                  </div>
                  <div>Approval</div>
                </div>
              </li>
              <li>
                <div className="flex pt-0">
                  <div className="w-3 ">
                    <img src={bullet} />
                  </div>
                  <div>Leave</div>
                </div>
              </li>
              <li>
                <div className="flex pt-0 ">
                  <div className="w-3 ">
                    <img src={bullet} />
                  </div>
                  <div>Office_Setting</div>
                </div>
              </li>
              <li>
                <div className="flex pt-0 ">
                  <div className="w-3 ">
                    <img src={bullet} />
                  </div>
                  <div>My_Subscription</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-40 "></div>
        </Link>
      </li>
      <li className="font-semibold btn-colors rounded-xl hover:bg-zinc-700">
        <Link>
          <div className="w-6">
            <img src={logout} />
          </div>
          Logout
        </Link>
      </li>
    </>
  )
  return (
    <div className="md:w-screen w-screen relative">
      <div className="relative min-h-screen  md:flex">
        {/* {loading ? (
                    <Loading></Loading>
                ) : ( */}
        <>
          <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:ml-5">
              <Header></Header>
              <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-blue-900 mr-2 w-72 text-white">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <div className="avatar">
                <ul className="menu p-4 w-80 bg-base-400 ">
                  <div className="w-30 mask  mx-auto mb-4">
                    <img src={Logo} />
                  </div>
                  <div>{MenuList}</div>
                  {/* <!-- Sidebar content here --> */}
                </ul>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Dashboardlayout
