
export default function Card({ produto }) {
    return (
        <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
                src={produto.imagem}
                alt={produto.nome}
                loading="lazy"
                className="w-full h-52 object-cover"
            />

            <div className="p-5">
                <span className="text-xs uppercase tracking-wide font-bold text-amber-600">
                    {produto.categoria}
                </span>

                <h3 className="text-xl font-bold text-gray-800 mt-2">
                    {produto.nome}
                </h3>

                <p className="text-gray-500 text-sm mt-2 min-h-10">
                    {produto.descricao}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-5 gap-3">
                    <span className="text-xl font-extrabold text-amber-700">
                        {produto.preco.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </span>

                    <button
                        onClick={() =>
                            alert(`${produto.nome} adicionado ao carrinho!`)
                        }
                        className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-xl transition"
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </article>
    );
}
