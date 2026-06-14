import Image from "next/image";
import Link from "next/link";
import db from "@/lib/db";
import BotaoAdicionar from "./components/post_form";
export default async function Home() {

    const [categorias] = await db.query("SELECT * FROM categorias");


  return (
  <>
    <div className="mt-5 text-center">
      <h1 className="text-5xl">CATEGORIAS</h1>
    </div>
    <div>
     <BotaoAdicionar />
    </div>
     <ul className="flex flex-row gap-10 justify-center items-center h-80 font-semibold text-3xl">
        {(categorias as any[]).map((categorias) => (
            <li className="hover:text-blue-500 select-none cursor-pointer" key= {categorias.id}>{categorias.nome}</li>
        ))}
     </ul>
  </>
    
  );
}
