import { BsTelephone, BsChatLeft } from 'react-icons/bs'
import { CiLocationOn } from "react-icons/ci"

export function Footer(){
  return(
    <div className="flex flex-row px-20 py-5 gap-5 bg-blue-100">
      <div className="flex flex-col w-3/5 ">
        <h2 className='text-5xl pb-7 text-justify font-normal'>
        Online-Shop
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit malesuada dapibus ut pulvinar neque arcu, commodo. Pharetra nisi egestas nisi fermentum. Sollicitudin egestas senectus pellentesque enim mauris vel odio commodo. Pellentesque orci vestibulum sed in molestie consequat. 
        </p>
      </div>
      <div className="flex flex-col w-1/5">
        <h3 className='text-2xl font-medium'>Contact Us</h3>
        <p className='flex flex-row gap-3 py-3 items-center'><BsTelephone/>+255 752 186 174</p>
        <p className='flex flex-row gap-3 py-3  items-center'><BsChatLeft/>lisajocktan@gmail.com</p>
        <p className='flex flex-row gap-3  py-3 items-center'><CiLocationOn />Kijitonyama</p>
      </div>
      <div className="flex flex-col w-1/5">
        <h3 className='text-2xl font-medium'>About Us</h3>
        <a href="#" className=' gap-3 py-3'>Support</a>
        <a href="#"  className=' gap-3 py-3'>Privacy & Policy</a>
      </div>
    </div>
  )
}