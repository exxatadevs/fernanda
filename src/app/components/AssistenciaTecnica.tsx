import { motion } from 'motion/react';
import { Header } from './Header';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AssistenciaTecnicaProps {
  onMenuClick: () => void;
}

export function AssistenciaTecnica({ onMenuClick }: AssistenciaTecnicaProps) {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#aa0e0e' }}>
      <Header onMenuClick={onMenuClick} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 pt-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto Hero */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase mb-8 leading-tight">
              Acordo e
              <br />
              Verdade
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Quando todos os demais métodos falham, nós encontramos a solução.
            </p>
            <button 
              onClick={() => window.location.hash = 'contato'}
              className="px-8 py-3 border border-white/30 text-white text-sm tracking-wider hover:bg-white/10 transition-colors uppercase"
            >
              Falar com Especialista
            </button>
          </motion.div>

          {/* Losango decorativo 3D */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center"
            style={{ perspective: '1200px' }}
          >
            <motion.div
              animate={{
                rotateY: [0, 360],
                rotateZ: [45, 405],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-96 h-96"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="absolute inset-0 border-2 border-[#AEAEB7]/40"
                style={{ 
                  background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                  opacity: 0.2
                }}
              />
              <div 
                className="absolute inset-0 border border-[#AEAEB7]/20"
                style={{ 
                  transform: 'translateZ(-30px)',
                  background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                  opacity: 0.15
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 uppercase">
            Além da Negociação Convencional
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Conflitos complexos exigem soluções extraordinárias. Quando mediações falham, quando arbitragens 
                emperram, quando litígios se tornam intratáveis — é aí que entramos.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Não somos mediadores convencionais. Somos especialistas em desbloquear o impossível através de 
                inteligência estratégica, análise profunda e táticas inovadoras.
              </p>
            </div>
            <div className="border border-white/20 p-8 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl mb-6">
                Quando Nada Mais Funciona
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Utilizamos metodologias de inteligência aplicada para identificar pontos de pressão ocultos, 
                mapear interesses não declarados e criar caminhos para resolução onde outros veem apenas impasse. 
                Nossa abordagem combina análise forense, inteligência comportamental e estratégia de alto nível.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Seção com Imagem e Texto */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
              alt="Análise de documentos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
              Inteligência Aplicada à Resolução
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Transformamos conflitos aparentemente insolúveis em acordos estratégicos através de 
              inteligência profunda e táticas disruptivas.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                <span className="text-gray-400">Mapeamento de interesses ocultos e pontos de pressão estratégicos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                <span className="text-gray-400">Análise forense de posições e identificação de vulnerabilidades</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                <span className="text-gray-400">Criação de caminhos alternativos quando negociações tradicionais falham</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Seção de Boxes */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceBox
            title="Conflitos Corporativos"
            description="Resolução de disputas empresariais complexas através de inteligência estratégica e análise profunda de interesses."
          />
          <ServiceBox
            title="Litígios Intratáveis"
            description="Desbloqueio de impasses em processos judiciais e arbitrais quando métodos convencionais falham."
          />
          <ServiceBox
            title="Negociações de Alto Risco"
            description="Suporte estratégico em negociações críticas com mapeamento de vulnerabilidades e pontos de pressão."
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center border border-white/20 p-12 bg-black/60 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 uppercase">
            Resolvemos o que Parece
            <br />
            Impossível
          </h2>
          <p className="text-gray-300 text-xl mb-10">
            Quando todos os métodos convencionais falharam, nós encontramos a solução.
          </p>
          <button className="px-10 py-4 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors uppercase">
            Falar com Especialista
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 lg:px-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-white tracking-widest uppercase text-sm">FERNANDA</span>
              </div>
              <p className="text-gray-500 text-sm">
                © 2025 FERNANDA. Inteligência que vence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white text-sm mb-4 uppercase tracking-wider">Belo Horizonte/MG</h4>
                <p className="text-gray-500 text-sm">
                  Av. Getúlio Vargas, n° 671<br />
                  8° e 10° Andar, Funcionários
                </p>
              </div>
              <div>
                <h4 className="text-white text-sm mb-4 uppercase tracking-wider">São Paulo/SP</h4>
                <p className="text-gray-500 text-sm">
                  Av. Eng. Luiz Carlos Berrini, n° 105<br />
                  Ed. Thera Berrini Office, Sala 111, Brooklin
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface ServiceBoxProps {
  title: string;
  description: string;
}

function ServiceBox({ title, description }: ServiceBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="border border-white/20 p-8 hover:border-white/40 transition-all bg-black/40 backdrop-blur-sm"
    >
      <h3 className="text-2xl mb-4 uppercase">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}