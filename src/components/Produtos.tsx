"use client";

import { motion } from "framer-motion";

const produtos = [
  {
    nome: "Pomada Clássica",
    desc: "Fixação média, brilho natural",
    preco: "R$ 45",
    img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80",
  },
  {
    nome: "Óleo para Barba",
    desc: "Hidratação e crescimento saudável",
    preco: "R$ 55",
    img: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=400&q=80",
  },
  {
    nome: "Cera Modeladora",
    desc: "Estilo e fixação forte",
    preco: "R$ 42",
    img: "https://images.unsplash.com/photo-1605499466577-2e74a2e2e0e4?w=400&q=80",
  },
  {
    nome: "Kit Barbear",
    desc: "Navalha, pincel e sabonete",
    preco: "R$ 120",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80",
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-stone-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Loja</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-50 mt-2 mb-4">Produtos</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Produtos selecionados para você cuidar do visual em casa. Qualidade e preço justo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {produtos.map((item, i) => (
            <motion.div
              key={item.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-stone-900/80 border border-stone-800 hover:border-amber-500/30 transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-stone-100 text-lg mb-1">{item.nome}</h3>
                <p className="text-stone-500 text-sm mb-3">{item.desc}</p>
                <p className="text-amber-500 font-bold">{item.preco}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
