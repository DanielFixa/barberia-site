"use client";

import { motion } from "framer-motion";

const servicos = [
  {
    nome: "Corte de Cabelo",
    desc: "Corte masculino clássico ou moderno, com lavagem e finalização.",
    preco: "R$ 45",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
  },
  {
    nome: "Barba",
    desc: "Aparar, desenhar e finalizar com produtos premium.",
    preco: "R$ 35",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
  },
  {
    nome: "Corte + Barba",
    desc: "Combo completo: corte + barba com desconto.",
    preco: "R$ 70",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
  },
  {
    nome: "Sobrancelha",
    desc: "Design e correção para valorizar o olhar.",
    preco: "R$ 15",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
  },
];

const precos = [
  { servico: "Corte de Cabelo", valor: "R$ 45" },
  { servico: "Barba", valor: "R$ 35" },
  { servico: "Corte + Barba", valor: "R$ 70" },
  { servico: "Sobrancelha", valor: "R$ 15" },
  { servico: "Hidratação Capilar", valor: "R$ 25" },
  { servico: "Pé na máquina", valor: "R$ 10" },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">O que fazemos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-50 mt-2 mb-4">Serviços</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Cortes, barba e cuidados com o visual. Tudo com profissionalismo e produtos de qualidade.
          </p>
        </motion.div>

        {/* Cards de serviços com imagens */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {servicos.map((item, i) => (
            <motion.div
              key={item.nome}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="group rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="grid sm:grid-cols-2 h-full">
                <div className="aspect-[4/3] sm:aspect-auto sm:min-h-[200px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-stone-100 mb-2">{item.nome}</h3>
                  <p className="text-stone-500 text-sm mb-4">{item.desc}</p>
                  <p className="text-amber-500 font-bold text-lg">{item.preco}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabela de preços */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-stone-100 text-center mb-6">Tabela de Preços</h3>
          <div className="rounded-2xl border border-stone-800 bg-stone-900/80 overflow-x-auto">
            <table className="w-full min-w-[300px]">
              <thead>
                <tr className="bg-stone-800/80">
                  <th className="text-left py-4 px-4 sm:px-6 text-amber-500 font-semibold whitespace-nowrap">Serviço</th>
                  <th className="text-right py-4 px-4 sm:px-6 text-amber-500 font-semibold whitespace-nowrap">Valor</th>
                </tr>
              </thead>
              <tbody>
                {precos.map((row, i) => (
                  <motion.tr
                    key={row.servico}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="border-t border-stone-800 hover:bg-stone-800/30 transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6 text-stone-200">{row.servico}</td>
                    <td className="py-4 px-4 sm:px-6 text-right text-amber-500 font-semibold whitespace-nowrap">{row.valor}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
