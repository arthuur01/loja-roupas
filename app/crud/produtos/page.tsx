
import db from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { RowDataPacket } from "mysql2";
import CriarProduto from "./components/post_form";
import DeletarProduto from "./components/delete_form";

type Produto = RowDataPacket & {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  tamanho_id: number;
  categoria_id: number;
  tamanho_nome: string;
  categoria_nome: string;
  image_url: string;
};

export default async function Home() {

  const [produtos] = await db.query<Produto[]>(`
    SELECT p.*, t.nome AS tamanho_nome, c.nome AS categoria_nome
    FROM produtos p
    JOIN tamanhos t ON p.tamanho_id = t.id
    JOIN categorias c ON p.categoria_id = c.id
  `);

  



  return (
  <>
    <div>
      <CriarProduto/>
    </div>
    <div className="flex flex-row gap-3">
      {produtos.map((produto) => (
        <div key={produto.id} className="bg-gray-800 w-55 h-70 flex gap-2 flex-col font-bold">
          <div className="flex justify-center w-50"><img src={produto.image_url} alt = "Imagem do Produto" className="w-20 h-20"/></div>
          <h1>Nome: {produto.nome}</h1>
          <h1>Preço: {produto.preco}</h1>
          <h1>Tamanho: {produto.tamanho_nome}</h1>
          <h1>Estoque: {produto.estoque}</h1>
          <h1>Categoria: {produto.categoria_nome}</h1>
          <DeletarProduto nome={produto.nome}/>
        </div>
      ))}
    </div>
  </> 
  );
}
