import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    /*Pq rows está em [ ] desestruturação de arrays, é a mesma coisa que 
        const resultado = await db.query("SELECT * FROM tamanhos");
        const rows = resultado[0];
       rows → contém os registros retornados pelo banco.
        O segundo elemento (resultado[1]) → contém informações das colunas (metadados).
    
    */
    const [rows] = await db.query("SELECT * FROM tamanhos");
    return NextResponse.json(rows);
}

export async function POST(req: Request){
    const {nome} = await req.json();
    await db.query(
        "INSERT INTO tamanhos(nome) VALUES(?)",
        [nome]
    );
    return NextResponse.json({
        success: true,
    });
}

export async function PUT(req: Request){
    const {novo_nome, antigo_nome} = await req.json();
    await db.query("UPDATE tamanhos SET nome = ? WHERE nome = ?",
        [novo_nome, antigo_nome]
    );
    return NextResponse.json({
        success: true,
    });
}

export async function DELETE(req: Request){
    const {nome} = await req.json();
    await db.query("DELETE FROM tamanhos WHERE nome = ?",
        [nome]
    );
    return NextResponse.json({
        success: true,
    });
}