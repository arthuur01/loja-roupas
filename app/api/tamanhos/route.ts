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

