import { editarProduto } from "./actions";

export default function EditarProduto({ campo, id }: { campo: string | number; id: number }) {
    return (
        <form action={editarProduto}>
            <input type="hidden" name="campo" value={campo} />
            <input type="hidden" name="id" value={id} />
            <input name="valor" placeholder="Mudança" className="border p-2 rounded text-center" />
            <button type="submit">
                <img src="https://www.svgrepo.com/show/146083/pencil-edit-button.svg" className="w-5 h-5" />
            </button>
        </form>
    );
}