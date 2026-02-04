"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#onde-estamos", label: "Onde Estamos" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link href="#inicio" className="text-xl font-bold">
              <span className="text-amber-500">Corte</span>
              <span className="text-stone-100"> &amp; Estilo</span>
            </Link>
            <p className="text-stone-500 text-sm mt-2">Barbearia &amp; Estilo — São Paulo</p>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-400 hover:text-amber-500 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-stone-800 text-center text-stone-500 text-sm"
        >
          © {new Date().getFullYear()} Corte &amp; Estilo. Todos os direitos reservados.
        </motion.div>
      </div>
    </footer>
  );
}
