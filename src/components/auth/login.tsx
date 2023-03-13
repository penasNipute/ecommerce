import React from "react";
import { IoLogoGoogle } from "react-icons/io";
import { useState } from "react";
import { useForm } from "react-hook-form";


export const Login_Signin = () => {
    const [auth, setAuth] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const loginData = data => console.log(data);
    const cadastroData = data => console.log(data);


    const Login = () => {
        return (
            <section className="">
                <div className="flex mb-5">
                    <button id="up" className="uppercase w-1/2 h-12 rounded-l-xl $`{auth ? bg-slate-500 : bg-slate-300}`">
                        Login
                    </button>
                    <button id="in" className="uppercase w-1/2 h-12 rounded-r-xl $`{auth ? bg-slate-300 : bg-slate-500}`" onClick={() => setAuth(!auth)}>
                        signin
                    </button>
                </div>
                <div className="space-y-2 w-80">
                    <h1 className="font-bold text-3xl">Welcome Back</h1>
                    <form action="" method="post" className="flex flex-col space-y-10" onSubmit={handleSubmit(loginData)}>
                    <span className="flex flex-col">
                            <span>Email</span>
                            <input type="email" id="" className="outline-none border border-b-black py-5 px-5" {...register("email", {required: true})}/>
                            { errors.email && <span className="text-red-500">O email e obrigatorio</span> }
                        </span>
                        <span className="flex flex-col">
                            <span>Password</span>
                            <input type="password" id="" className="outline-none border border-b-black py-5 px-5" {...register("password", {required: true})}/>
                            { errors.password && <span className="text-red-500">O email e obrigatorio</span> }
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
            </section>
        )
    }

    const SignIn = () => {
        return (
            <section className="">
                <div className="flex mb-5">
                    <button id="up" className="uppercase w-1/2 h-12 rounded-l-xl $`{auth ? bg-slate-300 : bg-slate-500}`" onClick={() => setAuth(!auth)}>
                        Login
                    </button>
                    <button id="in" className="uppercase  w-1/2 h-12 rounded-r-xl $`{auth ? bg-slate-500 : bg-slate-300}`">
                        Signin
                    </button>
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold text-3xl">Create an account</h1>
                    <p className="text-lg">Let's get started with your 30 days free trial</p>
                    <form action="" method="post" className="flex flex-col space-y-10" onSubmit={handleSubmit(cadastroData)}>
                        <span className="flex flex-col">
                            <span>Nome</span>
                            <input type="text" id="" className="outline-none border border-b-black py-5 px-5" {...register("nome", { required: true })} />
                            { errors.nome && <span className="text-red-500">O nome e obrigatorio</span> }
                        </span>
                        <span className="flex flex-col">
                            <span>Email</span>
                            <input type="email" id="" className="outline-none border border-b-black py-5 px-5" {...register("email", {required: true})}/>
                            { errors.email && <span className="text-red-500">O email e obrigatorio</span> }
                        </span>
                        <span className="flex flex-col">
                            <span>Password</span>
                            <input type="password" id="" className="outline-none border border-b-black py-5 px-5" {...register("password", {required: true})}/>
                            { errors.password && <span className="text-red-500">O password e obrigatorio</span> }
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
            </section>
        )
    }

    return (
        <section className="container mx-auto">
            <div className="flex lg:justify-between items-center h-screen justify-center">
                <div className="hidden lg:block lg:w-1/2">
                    <img src="assets/auth_img.svg" alt="imagem" />
                </div>
                <div className="flex lg:w-1/2 justify-center items-center">
                    {auth ? <SignIn /> : <Login />}
                </div>
            </div>
        </section>
    )
}