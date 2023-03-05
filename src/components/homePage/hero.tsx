import React from "react"
import { IoIosSearch, IoMdOptions } from "react-icons/io";

export const Hero = () => {
    return (
        <section className="bg-blue-200">
            <div className="container mx-auto flex items-center justify-between py-10 ">
                <div className="w-2/4 flex flex-col space-y-5">
                    <h1 className="text-3xl text-center w-3/4 mx-auto">Buy & Sell anything in your University Campus
                        Search for any product</h1>
                    <div className="border-2 border-red-500 justify-center items-center rounded-2xl">
                        <div className="flex items-center px-5 space-x-3">
                            <span><IoIosSearch  className=""/></span>
                            <input type="text" name="" id="" className="outline-none w-full h-14 bg-transparent" />
                            <span><IoMdOptions className="" /></span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-2/4">
                    <img src="/assets/hero-image.svg" alt="" className=""/>
                </div>
            </div>
        </section>
    )
}

