"use client";

import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80"
                alt="Barbearia interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-amber-500/60 rounded-2xl -z-10" />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-500 uppercase tracking-widest text-sm font-semibold"
            >
              Nossa História
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-stone-50 mt-2 mb-6"
            >
              Mais do que uma barbearia
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-400 leading-relaxed mb-4"
            >
              A <strong className="text-stone-200">Corte &amp; Estilo</strong> nasceu da paixão por cortes clássicos e pelo cuidado com cada detalhe. Aqui, cada cliente é tratado com atenção e profissionalismo.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-stone-400 leading-relaxed mb-6"
            >
              Usamos os melhores produtos e técnicas para garantir que você saia satisfeito. Ambiente aconchegante, música no estilo e um café à disposição.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <div>
                <span className="text-3xl font-bold text-amber-500">+5</span>
                <p className="text-stone-500 text-sm">Anos de experiência</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-amber-500">100%</span>
                <p className="text-stone-500 text-sm">Clientes satisfeitos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
