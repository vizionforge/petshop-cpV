
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-white">
            <section className="bg-orange-50">
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                    <p className="text-sm font-bold uppercase tracking-widest text-orange-700">
                        PetLife · Cuidado de verdade
                    </p>

                    <h1 className="mt-5 max-w-2xl text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                        Seu melhor amigo merece o melhor.
                    </h1>

                    <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
                        Tudo para cuidar, mimar e deixar a vida do seu pet ainda mais feliz.
                    </p>

                    <Link
                        to="/produtos"
                        className="inline-block mt-8 rounded-full bg-orange-600 px-7 py-3.5 font-bold text-white hover:bg-orange-700 transition"
                    >
                        Conhecer produtos →
                    </Link>
                </div>
            </section>


            <section className="mx-auto max-w-7xl px-6 py-16">
                <h2 className="text-3xl font-extrabold">
                    Nosso jeito de cuidar
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                    Cada pet tem seu jeito e suas necessidades. Escolher os produtos
                    certos também é uma forma de demonstrar carinho.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <article className="rounded-2xl border border-orange-100 p-6">
                        <span className="text-3xl">🥣</span>
                        <h3 className="mt-4 text-xl font-bold">
                            Boa alimentação
                        </h3>
                        <p className="mt-3 leading-7 text-gray-600">
                            Opções para manter seu companheiro bem cuidado em todas as
                            fases da vida.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-orange-100 p-6">
                        <span className="text-3xl">🧸</span>
                        <h3 className="mt-4 text-xl font-bold">
                            Diversão todo dia
                        </h3>
                        <p className="mt-3 leading-7 text-gray-600">
                            Brinquedos e acessórios para estimular as brincadeiras e
                            criar bons momentos.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-orange-100 p-6">
                        <span className="text-3xl">❤️</span>
                        <h3 className="mt-4 text-xl font-bold">
                            Carinho em primeiro lugar
                        </h3>
                        <p className="mt-3 leading-7 text-gray-600">
                            Produtos pensados para fazer parte da rotina de quem você ama.
                        </p>
                    </article>
                </div>
            </section>

        </div>


    );
}
