import db from "@/lib/db";
import type { RowDataPacket } from "mysql2";
import BotaoAdicionar from "./components/post_form";
import BotaoEditar from "./components/put_form";

type Categoria = RowDataPacket & {
  id: number;
  nome: string;
};

export default async function Home() {

    const [categorias] = await db.query<Categoria[]>("SELECT * FROM categorias");


  return (
  <>
    <div className="mt-5 text-center">
      <h1 className="text-5xl">CATEGORIAS</h1>
    </div>
    <div className="flex flex-row justify-center gap-15">
     <BotaoAdicionar/>
     <BotaoEditar/>
    </div>
     <ul className="flex flex-row gap-10 justify-center items-center h-80 font-semibold text-3xl">
      {categorias.map((categoria) => (
        <li className="hover:text-blue-500 select-none cursor-pointer" key= {categoria.id}>{categoria.nome}</li>
        ))}
     </ul>
  </>
    
  );
}
