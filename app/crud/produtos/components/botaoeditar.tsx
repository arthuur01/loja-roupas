"use client";

import { useState } from "react";
import EditarProduto from "./put_form";
import { RowDataPacket } from "mysql2";

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


export default function ProdutoItem({ produto }: {produto: Produto}) {
  const [editandoCampo, setEditandoCampo] = useState<string | null>(null);

  const campos = [
    { key: "nome", label: "Nome", valor: produto.nome },
    { key: "preco", label: "Preço", valor: produto.preco },
    { key: "estoque", label: "Estoque", valor: produto.estoque },
    { key: "tamanho_nome", label: "Tamanho", valor: produto.tamanho_nome },
    { key: "categoria_nome", label: "Categoria", valor: produto.categoria_nome },
  ];

  return (
    <div className="flex flex-col gap-3">
      {campos.map((campo) => (
        <div key={campo.key} className="flex gap-2 items-center">

          {editandoCampo !== campo.key ? (
            <>
              <h1>
                {campo.label}: {campo.valor}
              </h1>

              <button onClick={() => setEditandoCampo(campo.key)}>
                Editar
              </button>
            </>
          ) : (
            <>
              <EditarProduto campo={campo.key} id={produto.id} />

              <button onClick={() => setEditandoCampo(null)}>
                Cancelar
              </button>
            </>
          )}

        </div>
      ))}
    </div>
  );
}