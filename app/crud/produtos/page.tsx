

import db from "@/lib/db";
import { RowDataPacket } from "mysql2";
import CriarProduto from "./components/post_form";
import ProdutoCard from "./components/produto_card";

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
      <CriarProduto />
      <div className="flex flex-row gap-3 flex-wrap">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}
