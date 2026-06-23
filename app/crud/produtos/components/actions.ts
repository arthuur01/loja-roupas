"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

const camposPermitidos = ["nome", "preco", "estoque", "tamanho_id", "categoria_id"];

export async function deletarProduto(formData: FormData) {
  const nome = formData.get("nome") as string;
  await db.query("DELETE FROM produtos WHERE nome = ?", [nome]);
  revalidatePath("/crud/produtos");
}

export async function editarProduto(formData: FormData) {
  const campo = formData.get("campo") as string;
  const id = formData.get("id") as string;
  const valor = formData.get("valor");

  if (!camposPermitidos.includes(campo)) return;

  await db.query(`UPDATE produtos SET ${campo} = ? WHERE id = ?`, [valor, Number(id)]);
  revalidatePath("/crud/produtos");
}
