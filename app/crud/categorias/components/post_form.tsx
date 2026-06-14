"use client";
import { useState } from "react";

export default function BotaoAdicionar(){
    const [mostrar, setMostrar] = useState(false);

    async function adicionarCategoria(formData: FormData){

        const nome = formData.get("nome");

        await fetch("/api/categorias", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({nome}),
        });
        location.reload();
    }

    return(
        <>
         <h1 onClick= {() => setMostrar(true)} className="text-5xl h-30 flex justify-center items-center cursor-pointer hover:text-blue-500">
            +
         </h1>
        {mostrar && (
            <form action={adicionarCategoria} className="flex justify-center">
                <input autoFocus name="nome" placeholder="Nome da nova categoria"className="border p-2 rounded"/>
            </form>
            )}
        </>
    );
}