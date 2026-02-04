"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-stone-950/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/50 to-stone-950" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-500/90 uppercase tracking-[0.3em] text-sm font-semibold mb-4"
        >
          Barbearia &amp; Estilo
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-50 tracking-tight mb-6"
        >
          Corte &amp; Estilo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto mb-10"
        >
          Tradição e estilo no mesmo lugar. Cortes clássicos e modernos para você se sentir único.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#servicos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full bg-amber-500 text-stone-950 font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25"
          >
            Ver Serviços
          </motion.a>
          <motion.a
            href="#onde-estamos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full border-2 border-amber-500/60 text-amber-400 hover:bg-amber-500/10 transition-colors"
          >
            Agendar
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-amber-500/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-amber-500/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
