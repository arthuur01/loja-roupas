"use client";
import { useState } from "react";

type Option = { id: number; nome: string };

export default function Dropdown({ name, placeholder, options }: { name: string; placeholder: string; options: Option[] }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(null);

    return (
        <div className="relative">
            <input type="hidden" name={name} value={selected?.id ?? ""} />
            <button type="button" onClick={() => setOpen(!open)} className="w-full border border-gray-300 rounded-md p-2 bg-white text-black text-center">
                {selected ? selected.nome : placeholder} ▾
            </button>
            {open && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow mt-1">
                    {options.map((o) => (
                        <div key={o.id} onClick={() => { setSelected(o); setOpen(false); }} className="px-4 py-2 cursor-pointe text-black hover:bg-gray-100 text-center">
                            {o.nome}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
