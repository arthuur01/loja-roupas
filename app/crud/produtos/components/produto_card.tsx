"use client";

import { useState } from "react";
import EditarProduto from "./put_form";
import DeletarProduto from "./delete_form";

type Produto = {
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

export default function ProdutoCard({ produto }: { produto: Produto }) {
  const [editandoCampo, setEditandoCampo] = useState<string | null>(null);

  const campos = [
    { key: "nome", label: "Nome", valor: produto.nome },
    { key: "preco", label: "Preço", valor: produto.preco },
    { key: "tamanho_nome", label: "Tamanho", valor: produto.tamanho_nome },
    { key: "estoque", label: "Estoque", valor: produto.estoque },
    { key: "categoria_nome", label: "Categoria", valor: produto.categoria_nome },
  ];

  return (
    <div className="bg-gray-800 w-55 h-auto flex gap-2 flex-col font-bold p-3 rounded">
      <div className="flex justify-center">
        <img
          src={produto.image_url}
          alt="Imagem do Produto"
          className="w-20 h-20"
        />
      </div>

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

      <DeletarProduto nome={produto.nome} />
    </div>
  );
}
