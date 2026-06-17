import Image from "next/image";
import Link from "next/link";
import db from "@/lib/db";
import { RowDataPacket } from "mysql2";
import BotaoAdicionar from "./components/post_form";
import BotaoEditar from "./components/put_form";
import DeletarTamanho from "./components/delete_form";


type Tamanhos = RowDataPacket & {
  id: number;
  nome: string;
}


export default async function Home() {

  const [tamanhos] = await db.query<Tamanhos[]>("SELECT * FROM tamanhos");



  return (
  <>
    <div className="mt-5 text-center">
          <h1 className="text-5xl">TAMANHOS</h1>
        </div>
        <div className="flex flex-row justify-center gap-15">
         <BotaoAdicionar/>
         <BotaoEditar/>
         <DeletarTamanho/>
        </div>
         <ul className="flex flex-row gap-10 justify-center items-center h-80 font-semibold text-3xl">
          {tamanhos.map((tamanho) => (
            <li className="hover:text-blue-500 select-none cursor-pointer" key= {tamanho.id}>{tamanho.nome}</li>
            ))}
         </ul>
      </>
);
}
