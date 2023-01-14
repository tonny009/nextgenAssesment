import React from 'react'
import { GrNotification } from 'react-icons/gr'
import './header.css'
import { SlCalender } from 'react-icons/sl'

const Header = () => {
  return (
    <div className="navbar bg-zinc-100">
      <div className="flex-1">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="flex-none gap-5">
        <div className="pt-0 not_box">
          <SlCalender size={20} />
        </div>
        <div className="pt-0 not_box">
          <GrNotification size={20} />
          <span className="notification p-2 pt-0 pb-0 pl-1 pr-1 w-1 h-1 text-white">
            .
          </span>
        </div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <label
          tabIndex={1}
          htmlFor="my-drawer-2"
          className="btn btn-ghost lg:hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div> */}
      </div>
    </div>
  )
}

export default Header
