import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    const [rows] = await db.query("SELECT * FROM categorias");
    return NextResponse.json(rows);
}

export async function POST(req: Request){
    const {nome} = await req.json();
    await db.query(
        "INSERT INTO categorias(nome) VALUES(?)",
        [nome]
    );
    return NextResponse.json({
        success:true,
    });
}