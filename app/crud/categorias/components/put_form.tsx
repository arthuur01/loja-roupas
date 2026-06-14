"use client";

import { useState } from "react";


export default function BotaoEditar(){
    const [mostrar, setMostrar] = useState(false);

    async function editarCategoria(formData: FormData){
        const novo_nome = formData.get("novo_nome");
        const antigo_nome = formData.get("antigo_nome");

        await fetch("/api/categorias", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({novo_nome})
        });    
        location.reload();
    }
    return(
         <>
         <h1 onClick= {() => setMostrar(true)} className="text-5xl h-30 flex justify-center items-center cursor-pointer hover:text-blue-500">
            EDITAR
         </h1>
        {mostrar && (
            <form action={editarCategoria} className="flex justify-center">
                <input autoFocus name="antigo_nome" placeholder="Nome Atual"className="border p-2 rounded"/>
                <input autoFocus name="novo_nome" placeholder="Nome novo"className="border p-2 rounded"/>
            </form>
            )}
        </>
    );
}