
import db from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { RowDataPacket } from "mysql2";
import CriarProduto from "./components/post_form";

type Categoria = RowDataPacket & {
  id: number;
  nome: string;
};

export default  function Home() {



  



  return (
  <>
    <div>
      <CriarProduto/>
    </div>
  </> 
  );
}
