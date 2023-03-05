import React from "react"
import { IoMdPersonAdd, IoMdCart } from "react-icons/io";

export const NavBar = () => {
    return (
        <section className="py-5">
            <nav className="flex justify-between container mx-auto">
                <h1 className="uppercase text-blue-500 text-xl font-bold">Loja</h1>
                <div className="flex gap-5">
                    <span className="flex items-center gap-3">
                        <IoMdPersonAdd/>
                        <span>Login</span>
                    </span>
                    <span className="flex items-center gap-3">
                        <IoMdCart
                            className="text-red-600"
                        />
                        <span>Carinho</span>
                    </span>
                </div>
            </nav>
        </section>
    )
}

IoMdPersonAdd