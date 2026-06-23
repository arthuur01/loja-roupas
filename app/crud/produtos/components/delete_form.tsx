import { deletarProduto } from "./actions";

export default function DeletarProduto({ nome }: { nome: string }) {
    return (
        <form action={deletarProduto} className="flex justify-center">
            <input type="hidden" name="nome" value={nome} />
            <button type="submit">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.png" className="w-5 h-5" />
            </button>
        </form>
    );
}