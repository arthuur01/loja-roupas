import { useState } from "react";


export default function DeletarProduto(){
    const [mostrar, setMostrar] = useState(false);
    async function deletarProduto(formData: FormData){
        const nome = formData.get("nome");
        await fetch("/api/produtos",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({nome}),
            });
            location.reload()
    }


    return (
        <>
         <h1 onClick= {() => setMostrar(!mostrar)} className="text-3xl h-30 flex justify-center items-center cursor-pointer hover:text-blue-500">
            DELETAR
         </h1>
        {mostrar && (
            <form action={deletarProduto} className="flex justify-center">
                <input autoFocus name="nome" placeholder="Nome do Tamanho"className="border p-2 rounded"/>
                <button type="submit">X</button>
            </form>
            )}
        </>
    );

}