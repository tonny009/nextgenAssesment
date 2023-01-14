import React from 'react'
import './dashboard.css'
import img from '../../assets/image 5.png'
import pic1 from '../../assets/image.png'
import pic2 from '../../assets/image 6.png'
import pic3 from '../../assets/image 7.png'
import pic4 from '../../assets/image 8.png'
import pic5 from '../../assets/image 9.png'
import pic6 from '../../assets/image 13.png'

const SameRow = ({ number, title }) => {
  return (
    <div>
      <div className="bg-white h-48 rounded-xl shadow-lg pl-4 pt-4 w-56">
        <div>
          <div className="flex mb-2">
            <img src={img} />
            <h2 className="text-xs ml-2 text-slate-400 font-sans">{title}</h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="number_style">{number}</div>
            <div>
              <button className="button_style ">View All</button>
            </div>
          </div>

          <div className="flex mt-8">
            <div>
              <img src={pic1} />
            </div>
            <div className="person_img">
              <img src={pic2} />
            </div>
            <div className="person_img2">
              <img src={pic3} />
            </div>
            <div className="person_img3">
              <img src={pic4} />
            </div>
            <div className="person_img4">
              <img src={pic5} />
            </div>
            <div className="person_img5">
              <img src={pic6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SameRow
