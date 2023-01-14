import React from 'react'
import settings from '../../assets/Vector.png'
import { AiFillCalendar } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFillEyeFill } from 'react-icons/bs'
import { HiDocument } from 'react-icons/hi2'
import { HiChevronLeft } from 'react-icons/hi2'
import { HiChevronRight } from 'react-icons/hi2'

const Attendence = () => {
  return (
    <div className="pl-2 common_bg mb-10 lg:mt-10">
      {/* Head section----- */}
      <div className="grid grid-cols-2">
        <div>
          <h2 className="title2 mb-16">Attendance</h2>
        </div>
        <div className="flex justify-end mr-5">
          <button className="button_style3 ">Download Report</button>
          <div className="w-20 ml-5 mt-2">
            <img src={settings} />
          </div>
        </div>
      </div>

      {/* grid box----- */}
      <div className="grid md:grid-cols-4 w-8/12 gap-6 mb-10 ">
        <div className="bg-white w-52 text-zinc-500 h-12 rounded-xl shadow-md p-2 flex justify-between">
          January 03,2023
          <div className="mt-1">
            <AiFillCalendar size={20} />
          </div>
        </div>
        <div className="bg-white w-52 text-zinc-500 h-12 rounded-xl shadow-md p-2 flex justify-between">
          Department
        </div>
        <div className="bg-white w-52 text-zinc-500 h-12 rounded-xl shadow-md p-2 flex justify-between">
          Attendance
          <div className="mt-1">
            <IoIosArrowDown size={20} />
          </div>
        </div>
        <div className="bg-white w-52 text-zinc-500 h-12 rounded-xl shadow-md p-2 flex justify-between">
          Present
          <div className="mt-1">
            <IoIosArrowDown size={20} />
          </div>
        </div>
        <div className="bg-white w-52 text-zinc-500 h-12 rounded-xl shadow-md p-2 flex justify-between">
          Department
        </div>
        <div className="bg-white w-52 text-zinc-500 h-12 rounded-xl shadow-md p-2 flex justify-between">
          Location
        </div>
        <div className="bg-white w-52 text-zinc-500 h-12 rounded-xl shadow-md p-2 flex justify-between">
          Designation
          <div className="mt-1">
            <IoIosArrowDown size={20} />
          </div>
        </div>
        <div className="bg-white w-52 text-zinc-500 h-12 rounded-xl shadow-md p-2 flex justify-between">
          Department
          <div className="mt-1">
            <IoIosArrowDown size={20} />
          </div>
        </div>
      </div>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Remark</th>
                <th>Hours</th>
                <th>Overtime</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="font-bold">Jahid Hasan</div>
                  </div>
                </td>
                <td>HR & Admin</td>
                <td>
                  <buttion className="tbl_button ">09.45am</buttion>
                </td>
                <th>
                  <buttion className="tbl_button ">06.05pm</buttion>
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  <div>
                    <BsFillEyeFill size={30} />
                  </div>
                </th>
              </tr>

              {/* <!-- row 2 --> */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" checked className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="font-bold">Jahid Hasan</div>
                  </div>
                </td>
                <td>HR & Admin</td>
                <td>
                  <buttion className="tbl_button_red ">10.30 am</buttion>
                </td>
                <th>
                  <buttion className="tbl_button_red ">05.30 pm</buttion>
                </th>
                <th>
                  <div>
                    <HiDocument size={30} />
                    Docs
                  </div>
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  <div>
                    <BsFillEyeFill size={30} />
                  </div>
                </th>
              </tr>
              {/* <!-- row 3 --> */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="font-bold">Jahid Hasan</div>
                  </div>
                </td>
                <td>HR & Admin</td>
                <td>
                  <buttion className="tbl_button ">09.45am</buttion>
                </td>
                <th>
                  <buttion className="tbl_button ">06.30pm</buttion>
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  <div>
                    <BsFillEyeFill size={30} />
                  </div>
                </th>
              </tr>
              {/* <!-- row 4 --> */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="font-bold">Jahid Hasan</div>
                  </div>
                </td>
                <td>HR & Admin</td>
                <td>
                  <buttion className="tbl_button_red ">10.45 am</buttion>
                </td>
                <th>
                  <buttion className="tbl_button-red ">05.45 pm</buttion>
                </th>
                <th>
                  <div>
                    <HiDocument size={30} />
                    Docs
                  </div>
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  {/* <buttion className="tbl_button ">06.05pm</buttion> */}
                </th>
                <th>
                  <div>
                    <BsFillEyeFill size={30} />
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer>
        <div className="flex justify-end mr-5">
          <div className="mt-4">
            <HiChevronLeft />
          </div>
          <button className="btn btn-active ml-3 border-0 bg-white text-black font-semibold">
            1
          </button>
          <button className="btn btn-active ml-3 border-0 bg-white text-black font-semibold">
            2
          </button>
          <button className="btn btn-active ml-3 border-0 bg-white text-black font-semibold">
            3
          </button>
          <button className="btn btn-active ml-3 border-0 bg-white text-black font-semibold">
            4
          </button>
          <div className="mt-4">
            <HiChevronRight />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Attendence
