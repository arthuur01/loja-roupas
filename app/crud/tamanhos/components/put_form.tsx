"use client";

import { useState } from "react";


export default function BotaoEditar(){
    const [mostrar, setMostrar] = useState(false);

    async function editarTamanho(formData: FormData){
        /* os nomes tem que ser iguais aos do ROUTE*/
        const novo_nome = formData.get("novo_nome");
        const antigo_nome = formData.get("antigo_nome");

        await fetch("/api/tamanhos", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            /* os nomes tem que ser iguais aos do ROUTE*/
            body: JSON.stringify({novo_nome, antigo_nome})
        });    
        location.reload();
    }
    return(
         <>
         <h1 onClick= {() => setMostrar(!mostrar)} className="text-3xl h-30 flex justify-center items-center cursor-pointer hover:text-blue-500">
            EDITAR
         </h1>
        {mostrar && (
            <form action={editarTamanho} className="flex justify-center">
                <input autoFocus name="antigo_nome" placeholder="Nome Atual"className="border p-2 rounded"/>
                <input autoFocus name="novo_nome" placeholder="Nome novo"className="border p-2 rounded"/>
                <button type="submit">Editar</button>
            </form>
            )}
        </>
    );
}