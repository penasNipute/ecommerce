import React from "react"
import { IoIosSearch, IoMdOptions } from "react-icons/io";

export const Hero = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="">
                    <h1>Buy & Sell anything in your University Campus
                        Search for any product</h1>
                    <div className="border-2 border-red-500">
                        <div className="flex items-center mx-3 space-x-3">
                            <span><IoIosSearch /></span>
                            <input type="text" name="" id="" className="outline-none w-full" />
                            <span><IoMdOptions /></span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/hero-image.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

