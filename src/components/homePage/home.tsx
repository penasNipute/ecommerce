import React from "react"
import { Hero } from "./hero"
import { NavBar } from "./navbar"
import { Produtos } from "./produtos"

export const Home = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Produtos/>
        </div>
    )
}