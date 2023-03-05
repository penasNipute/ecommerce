
import React from "react"
// import Desk from '/assets/desk.svg' 


export function Product(){


  return(
    <div className="product-card w-1/1 flex rounded-3xl bg-gray-200 pt-5 pb-10 my-10 mx-4">
      <div className="w-1/2 flex justify-center">
        <img src="/assets/desk.svg" alt="image" />
      </div>
      <div className="w-1/2 ">
        <span className="bg-red-600 py-1 px-4 rounded-md mb-4 inline-block">used</span>
        <h1 className=" flex flex-col text-3xl font-semibold pb-3">
          Apple AirPods Pro
          <span className="text-red-600 font-normal pt-1">TZS 65 000</span>
        </h1>

        <p className="text-green-300 pb-5">20.07.2022, University of  Dar es Salaam</p>

        <h6 className="font-bold pb-2">Description:</h6>
        <p className="font-light text-justify text-xs pb-4 w-1/2">AirPods Pro •••Support wireless charging Contact: 0627468298 * 10 meters is not stuck & continuous. * Squeeze sensor * Call to listen to songs for 3+ hours , long battery life * Out of the box automatic boot/ automatic pairing * Perfectly compatible with IOS /Android and all mobile phones * Transparency mode * High speaker quality * HIFI stereo stereo super quality</p>

        <div className="flex">
          <div className="w-1/5  gap-2 flex flex-col justify-center items-center">
            <div className="flex gap-1">
              <h5 className="font-bold">User:</h5> <p>Penas</p>
            </div>
            <img className="w-10 h-10" src="/assets/user.svg" alt="icon user" />
          </div>
          <div className="w-4/5 gap-5 flex flex-col justify-center items-center">
            <div className="flex gap-1">
              <h5 className="font-bold">Location:</h5> <p>Maputo</p>
            </div>
            <button className="w-3/5 bg-red-700 px-2 py-1 rounded-lg text-white">Call</button>
          </div>
        </div>
      </div>
    </div>
  )
}