import db from "@/lib/db";
import { NextResponse} from "next/server";


export  async function GET(){
    const [rows] = await db.query("SELECT * FROM produtos");
    return NextResponse.json(rows);
}

export async function POST(req: Request){
    const {nome,preco,tamanho_id,categoria_id,estoque} = await req.json();
    await db.query(
        "INSERT INTO produtos(nome,preco,tamanho_id,categoria_id,estoque) VALUES(?, ?, ?, ?, ?)",
        [nome, preco, tamanho_id, categoria_id, estoque]
    );
    return NextResponse.json({
        success: true,
    });
}

export async function PATCH(req: Request){
    const {id, ...campos} = await req.json();

    if(!id){
        return NextResponse.json(
            {success:false, message: "ID não informado"},
            {status:400}
        );
    }
    if(Object.keys(campos).length === 0){
        return NextResponse.json(
            {success:false, message: "Nada Informado"},
            {status:400}
        );
    }

    const updates = Object.keys(campos).map((campo) => '${campo} = ?').join(",");
    const valores = [...Object.values(campos), id];
    await db.query( `UPDATE produtos SET ${updates} WHERE id = ? `,
        valores
    );
    return NextResponse.json({ success: true,});
}

export async function DELETE(req: Request){
    const {nome} = await req.json();
    await db.query("DELETE FROM produtos WHERE nome = ?",
        [nome]
    );
    return NextResponse.json({success:true,});
}