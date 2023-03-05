import React from "react"

export const CardMain = ({titulo, descricao, foto}: any) => {
    return (
        <section className="shadow-2xl shadow-black w-fit rounded-2xl p-5">
            <div className="flex items-center">
                <div className="w-96 flex flex-col justify-center space-y-3">
                    <h1 className="uppercase font-bold text-2xl text-justify">{titulo}</h1>
                    <p className="text-lg">{descricao}</p>
                    <a className="bg-red-700 justify-center text-center items-center flex h-8 w-40 rounded-full" href="">View More</a>
                </div>
                <div className="w-40">
                    <img src={foto} alt="foto" />
                </div>
            </div>
        </section>
    )
}