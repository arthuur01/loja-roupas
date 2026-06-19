import db from "@/lib/db";
import { revalidatePath } from "next/cache";



export default function DeletarProduto({nome} : {nome:string}){
    async function deletarProduto(){
        "use server";
        await db.query(
            "DELETE FROM produtos WHERE nome = ?",
            [nome]
        );
           revalidatePath("/crud/produtos");
    }


    return (
        <>
            <form action={deletarProduto} className="flex justify-center">
                <button type="submit"><img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.png" className="w-5 h-5"></img></button>
            </form>
        </>
    );

}