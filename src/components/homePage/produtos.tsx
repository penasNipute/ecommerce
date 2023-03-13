import React from "react"
import { CardMain } from "./cards"



export const Produtos = () => {
    return (
        <section className="container mx-auto py-20">
            <div className="flex justify-evenly">
                <CardMain 
                    titulo = "Used & News"
                    descricao = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In at itaque ratione tempora officiis ad similique consectetur fugiat est! Laborum vel, doloremque eligendi unde laudantium eveniet sint natus id vero."

                    foto = "assets/shopping-cart.svg"
                />
                
                <CardMain
                    titulo="Services"

                    descricao = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta asperiores reprehenderit fugit possimus maxime illo accusantium earum veniam minus, vel quae est eaque officiis repudiandae magni iusto natus porro!"

                    foto = "assets/icons_services.svg"
                />
            </div>
        </section>
    )
}