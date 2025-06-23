"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CrearProducto() {
  const router = useRouter();
  const [form, setForm] = useState({ nomPro: "", precioProducto: "", stockProducto: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          precioProducto: parseFloat(form.precioProducto),
          stockProducto: parseInt(form.stockProducto),
        }),
      });

      if (res.ok) {
        alert("Producto creado correctamente");
        router.push("/productos"); // Redirige a la lista de productos
      } else {
        const data = await res.json();
        alert("Error al crear producto: " + (data.message || "Error desconocido"));
      }
    } catch (error) {
      console.error("Error al crear producto:", error);
      alert("No se pudo crear el producto. Intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      <input
        className="border p-2 w-full"
        placeholder="Nombre"
        value={form.nomPro}
        onChange={(e) => setForm({ ...form, nomPro: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Precio"
        type="number"
        step="0.01"
        value={form.precioProducto}
        onChange={(e) => setForm({ ...form, precioProducto: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Stock"
        type="number"
        value={form.stockProducto}
        onChange={(e) => setForm({ ...form, stockProducto: e.target.value })}
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Crear Producto
      </button>
    </form>
  );
}