import { useState } from "react";
import Card from "../components/Card";

const produtos = [
    {
        id: 1,
        nome: "Ração Premium",
        categoria: "Alimentação",
        preco: 89.9,
        descricao: "Nutrição completa para cães adultos.",
        imagem:
            "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        nome: "Brinquedo Mordedor",
        categoria: "Brinquedos",
        preco: 29.9,
        descricao: "Diversão e estímulo para seu cachorro.",
        imagem:
            "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        nome: "Cama Confortável",
        categoria: "Acessórios",
        preco: 119.9,
        descricao: "Um espaço macio para seu pet descansar.",
        imagem:
            "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        nome: "Coleira Ajustável",
        categoria: "Acessórios",
        preco: 39.9,
        descricao: "Conforto e segurança durante os passeios.",
        imagem:
            "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        nome: "Petisco Natural",
        categoria: "Alimentação",
        preco: 19.9,
        descricao: "Um agrado saboroso para seu companheiro.",
        imagem:
            "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        nome: "Brinquedo Interativo",
        categoria: "Brinquedos",
        preco: 49.9,
        descricao: "Estimula a curiosidade e a atividade física.",
        imagem:
            "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=800&q=80",
    },
];

export default function Produtos() {
    const [categoria, setCategoria] = useState("Todos");

    const categorias = [
        "Todos",
        "Alimentação",
        "Brinquedos",
        "Acessórios",
    ];

    const produtosFiltrados =
        categoria === "Todos"
            ? produtos
            : produtos.filter((produto) => produto.categoria === categoria);

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    Nossos produtos
                </h1>

                <p className="text-gray-500 mt-3">
                    Tudo para deixar seu pet feliz.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
                {categorias.map((item) => (
                    <button
                        key={item}
                        onClick={() => setCategoria(item)}
                        className={`px-5 py-2 rounded-full font-semibold transition ${categoria === item
                                ? "bg-amber-500 text-white"
                                : "bg-white text-gray-700 hover:bg-amber-100"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {produtosFiltrados.map((produto) => (
                    <Card key={produto.id} produto={produto} />
                ))}
            </div>

            {produtosFiltrados.length === 0 && (
                <p className="text-center text-gray-500 py-12">
                    Nenhum produto encontrado.
                </p>
            )}
        </section>
    );
}