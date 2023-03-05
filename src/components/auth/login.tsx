import React from "react";
import { IoLogoGoogle } from "react-icons/io";
import { useState } from "react";

const signIn = document.querySelector("#up")

export const Login_Signin = () => {
    const [auth, setAuth] = useState(false);



    return (
        <section className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div>
                    <img src="assets/auth_img.svg" alt="imagem" />
                </div>
                <div>
                    <div className="flex mb-5">
                        <button id="up" className="uppercase bg-slate-300 w-1/2 h-12 rounded-l-xl">
                            sign up
                        </button>
                        <button id="in" className="uppercase bg-slate-500 w-1/2 h-12 rounded-r-xl">
                            sign in
                        </button>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold text-3xl">Create an account</h1>
                        <p className="text-lg">Let's get started with your 30 days free trial</p>
                        <form action="" method="post" className="flex flex-col space-y-10">
                            <span className="flex flex-col">
                                <span>Nome</span>
                                <input type="text" name="" id="" className="outline-none border border-b-black py-5 px-5" />
                            </span>
                            <span className="flex flex-col">
                                <span>Email</span>
                                <input type="email" name="" id="" className="outline-none border border-b-black py-5 px-5" />
                            </span>
                            <span className="flex flex-col">
                                <span>Password</span>
                                <input type="password" name="" id="" className="outline-none border border-b-black py-5 px-5" />
                            </span>
                            <div className="flex flex-col space-y-3">
                                <button type="submit" className="bg-red-500 py-5 rounded-xl text-white">Create Account</button>
                                <a type="submit" className="py-5 rounded-xl text-red-500 flex justify-center items-center gap-1 outline">
                                    <IoLogoGoogle
                                        size={20}
                                    />
                                    <span>Sign up with Google</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}