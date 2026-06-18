import { RowDataPacket } from "mysql2";
import db from "@/lib/db";

type Categoria = RowDataPacket &{
    id: number;
    nome: string;
};

type Tamanho = RowDataPacket & {
    id: number;
    nome: string;
};


export default async function CriarProduto(){
   
    
    const [categorias] = await db.query<Categoria[]>("SELECT id, nome FROM categorias");
    const [tamanhos] = await db.query<Tamanho[]>("SELECT id, nome FROM tamanhos");



    async function criarProduto(formData: FormData){
        "use server";
        const nome = formData.get("nome");
        const preco = formData.get("preco");
        const estoque = formData.get("estoque");
        const tamanho_id = formData.get("tamanho_id");
        const categoria_id = formData.get("categoria_id");
        const image_url = formData.get("image_url");

        await fetch("/api/produtos",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({nome, preco, estoque, tamanho_id , categoria_id, image_url})
        });
        location.reload();
    }
    return (
        <>
         <form action = {criarProduto} className="flex justify-center">
            <input name="nome" placeholder="Nome do Produto" className="border p-2 rounded"/> 
            <input name="preco" placeholder="Preço do Produto" className="border p-2 rounded"/> 
            <input name="estoque" placeholder="Quantidade no Estoque" className="border p-2 rounded"/> 
            
            <select name = "tamanho_id" multiple>
                {tamanhos.map((tamanho) =>(
                <option value = {tamanho.nome} key = {tamanho.id}> {tamanho.nome}</option>
                ))}
            </select>
            <select name = "categoria_id" multiple>
                {categorias.map((categoria) =>(
                <option value = {categoria.nome} key = {categoria.id}> {categoria.nome}</option>
                ))}
            </select>
            <input name="image_url" placeholder="URL da imagem do produto" className="border p-2 rounded"/> 
         </form>
        
        
        </>
    );
}