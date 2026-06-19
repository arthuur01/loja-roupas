import { RowDataPacket } from "mysql2";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import Dropdown from "./dropdown";
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

        await db.query(
            "INSERT INTO produtos (nome, preco, estoque, tamanho_id, categoria_id, image_url) VALUES (?, ?, ?, ?, ?, ?)",
            [nome, preco, estoque, tamanho_id, categoria_id, image_url]
        );
        revalidatePath("/crud/produtos");
    }
    return (
        <>
        <div className="w-screen flex justify-center">
         <form action = {criarProduto} className="flex gap-10 flex-col w-100 mt-10">
            <input name="nome" placeholder="Nome do Produto" className="border p-2 rounded text-center"/> 
            <input name="preco" placeholder="Preço do Produto" className="border p-2 rounded text-center"/> 
            <input name="estoque" placeholder="Quantidade no Estoque" className="border p-2 rounded text-center"/> 
            <Dropdown name="tamanho_id" placeholder="Selecione um Tamanho" options={tamanhos} />
            <Dropdown name="categoria_id" placeholder="Selecione uma Categoria" options={categorias} />
            <input name="image_url" placeholder="URL da imagem do produto" className="border p-2 rounded text-center"/> 
            <button type="submit">Enviar</button>
         </form>
        </div>
         
        
        </>
    );
}