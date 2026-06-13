import Image from "next/image";
import Link from "next/link";
import db from "@/lib/db";

export default async function Home() {

    const [categorias] = await db.query("SELECT * FROM categorias");


  return (
  <>
    <div className="mt-5 text-center">
      <h1 className="text-5xl">CATEGORIAS</h1>
    </div>
     <ul>
        {(categorias as any[]).map((categorias) => (
            <li key= {categorias.id}>{categorias.nome}</li>
        ))}
     </ul>
  </>
    
  );
}
