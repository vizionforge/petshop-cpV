
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
        </div>
    );
}
