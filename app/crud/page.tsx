import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
  <>
    <div className="mt-5 text-center">
      <h1 className="text-7xl">CRUD TEST</h1>
      <p>Learning with MySQL</p>
    </div>
    <div className="flex items-center justify-center gap-18 h-screen text-2xl font-semibold">
      <Link href="/crud/produtos"><button className="cursor-pointer transition-colors hover:text-blue-500 uppercase">Produtos</button></Link>
      <Link href="/crud/categorias"><button className="cursor-pointer transition-colors hover:text-blue-500 uppercase">Categorias</button></Link>
      <Link href="/crud/tamanhos"><button className="cursor-pointer transition-colors hover:text-blue-500 uppercase">Tamanhos</button></Link>
    </div>
  </>
    
  );
}
