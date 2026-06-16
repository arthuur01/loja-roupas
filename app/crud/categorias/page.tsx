import db from "@/lib/db";
import type { RowDataPacket } from "mysql2";
import BotaoAdicionar from "./components/post_form";
import BotaoEditar from "./components/put_form";
import DeletarCategoria from "./components/delete_form";


/*O type Categoria existe para o TypeScript saber exatamente qual é o 
formato dos dados que vêm do banco. Essa parte, tem a mesma função que o GET no ROUTE, 
mas não vou deletar a do route.ts pois pode ser útil para outras coisas*/

type Categoria = RowDataPacket & {
  id: number;
  nome: string;
};
/*Então uma categoria válida seria:

const categoria: Categoria = {
  id: 1,
  nome: "Camisas"
}; 
*/

export default async function Home() {
    /*CONSULTAR e retornar um ARRAY de categoria 
    É equivalente a:
    [
      { id: 1, nome: "Camisas" },
      { id: 2, nome: "Calças" },
      { id: 3, nome: "Bermudas" }
    ]
    */
    const [categorias] = await db.query<Categoria[]>("SELECT * FROM categorias");
    
    /*Pega apenas as linhas retornadas pelo MySQL.

      No final, o TypeScript entende que:

      categorias

      tem o tipo:

      Categoria[]

      ou seja:

      [
        { id: 1, nome: "Camisas" },
        { id: 2, nome: "Calças" }
      ] 

      e por isso você consegue usar com segurança:

      categoria.id
      categoria.nome
    */
  return (
  <>
    <div className="mt-5 text-center">
      <h1 className="text-5xl">CATEGORIAS</h1>
    </div>
    <div className="flex flex-row justify-center gap-15">
     <BotaoAdicionar/>
     <BotaoEditar/>
     <DeletarCategoria/>
    </div>
     <ul className="flex flex-row gap-10 justify-center items-center h-80 font-semibold text-3xl">
      
      {categorias.map((categoria) => (
        <li className="hover:text-blue-500 select-none cursor-pointer" key= {categoria.id}>{categoria.nome}</li>
        ))}
     </ul>
  </>
    
  );
}
