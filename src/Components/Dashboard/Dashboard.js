import React from 'react'
import './dashboard.css'
import img from '../../assets/image 5.png'
import pic1 from '../../assets/image.png'
import pic2 from '../../assets/image 6.png'
import pic3 from '../../assets/image 7.png'
import pic4 from '../../assets/image 8.png'
import pic5 from '../../assets/image 9.png'
import pic6 from '../../assets/image 13.png'
import SameRow from './SameRow'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Dashboard = () => {
  const newData = [
    {
      name: 'Nov 1',
      number: 220,
    },
    {
      name: 'Nov 4',
      number: 150,
    },
    {
      name: 'Nov8',
      number: 280,
    },
    {
      name: 'Nov12',
      number: 50,
    },
    {
      name: 'Nov16',
      number: 160,
    },
    {
      name: 'Nov24',
      number: 60,
    },
    {
      name: 'Nov28',
      number: 130,
    },
    {
      name: 'Nov30',
      number: 150,
    },
    {
      name: 'Nov20',
      number: 260,
    },
  ]
  const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({})

    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      }

      setStyle(newStyle)
    }, 200)

    return (
      <div className="progress flex">
        <div className="progress-done" style={style}>
          .
        </div>
        <h5 className="ml-10">{done}/80</h5>
      </div>
    )
  }
  return (
    <div className="pl-2 common_bg mb-10">
      <div className="title mb-16 lg:mt-10 ">Dashboard</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
        {/* first row--- */}
        <SameRow number={'450'} title={'Total Employee'}></SameRow>
        <SameRow number={'420'} title={'Attend Today'}></SameRow>
        <SameRow number={'15'} title={'Employees on Leave'}></SameRow>
        <SameRow number={'5'} title={'New Expense Request'}></SameRow>
      </div>

      {/* Second row------ */}
      <div className="grid md:grid-cols-2 mt-7 gap-8">
        {/* First column-------- */}
        <div className=" bg-white rounded-xl shadow-lg pl-4 pt-4 w-auto h-auto ">
          <div className="grid grid-cols-2 gap-14">
            <div>
              <div className="flex gap-4 text-slate-600 text-xs mt-2">
                <div className="font-bold">Day</div>
                <div>Week</div>
                <div>Month</div>
                <div>Year</div>
              </div>
              <div className="mt-4">
                <h5 className="graph_text">৳45,000</h5>
              </div>
            </div>
            <div>
              <button className="button_style2 ">Export Details</button>
            </div>
          </div>
          <div>
            <AreaChart
              width={420}
              height={200}
              data={newData}
              margin={{
                top: 10,
                right: 5,
                left: 0,
                bottom: 0,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="number"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </div>
        </div>

        {/* Second column------ */}
        <div className="bg-white rounded-xl h-auto shadow-lg pl-4 pt-4 w-72  prograss_style border border-4 border-violet-600 border-dashed">
          <div className="mb-2">
            <h5>Total Task</h5>
            <span className="font-bold">112</span>
          </div>
          <div>
            Completed
            <Progress done={'50'} />
          </div>
          <div>
            In Progress
            <Progress done={'15'} />
          </div>
          <div className="mb-5">
            Pending
            <Progress done={'30'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
