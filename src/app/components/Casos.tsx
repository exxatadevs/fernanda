import { motion, useScroll, useTransform } from 'motion/react';
import { Header } from './Header';
import { ArrowRight } from 'lucide-react';

interface CasosProps {
  onMenuClick: () => void;
}

function CasosBackground() {
  const { scrollYProgress } = useScroll();
  
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[500px] h-[500px]" style={{ perspective: '1200px' }}>
          <motion.div
            className="absolute inset-0"
            style={{
              rotateX,
              rotateY,
              rotateZ,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateZ(45deg)' }}>
              <div 
                className="absolute w-[300px] h-[300px] border border-[#AEAEB7]/40"
                style={{ 
                  transform: 'translateZ(150px)',
                  background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                  opacity: 0.4
                }}
              />
              <div 
                className="absolute w-[300px] h-[300px] border border-[#AEAEB7]/40"
                style={{ 
                  transform: 'translateZ(-150px) rotateY(180deg)',
                  background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                  opacity: 0.4
                }}
              />
              <div 
                className="absolute w-[300px] h-[300px] border border-[#AEAEB7]/40"
                style={{ 
                  transform: 'rotateY(90deg) translateZ(150px)',
                  background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                  opacity: 0.4
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="fixed top-1/3 right-1/5 pointer-events-none z-0"
        animate={{
          y: [0, -35, 0],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-24 h-24 border border-[#AEAEB7]/30"
          style={{ 
            transform: 'rotateZ(45deg)',
            background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
            opacity: 0.3
          }}
        />
      </motion.div>
    </>
  );
}

export function Casos({ onMenuClick }: CasosProps) {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#aa0e0e' }}>
      <Header onMenuClick={onMenuClick} />
      <CasosBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 pt-24">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-8xl uppercase mb-12 leading-tight">
                Casos
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
                Conheça alguns dos casos em que aplicamos nossa metodologia de inteligência humana 
                para resolver desafios complexos de segurança e investigação corporativa.
              </p>
              <p className="text-white text-lg max-w-3xl leading-relaxed">
                Resultados concretos através de análise estratégica e execução precisa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid de Casos */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <CaseCard
                image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                title="Aeroporto de Florianópolis - SC"
                description="Protesto de trabalhadores bloqueia acesso ao canteiro de obras no aeroporto."
                category="Acordo e Verdade"
                url="https://g1.globo.com/sc/santa-catarina/noticia/2019/03/19/protesto-de-trabalhadores-bloqueia-acesso-ao-canteiro-de-obras-no-aeroporto-de-florianopolis.ghtml"
              />
              
              <CaseCard
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                title="Praça de Pedágio - São Paulo"
                description="Acordo durante a construção de Praça de Pedágio em São Paulo."
                category="Acordo e Verdade"
                url="https://dcomercio.com.br/publicacao/s/com-apoio-da-facesp-pequenos-negocios-sao-ressarcidos-de-calote-milionario"
              />
              
              <CaseCard
                image="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                title="Parque Solar - Ceará"
                description="Construtora de parque solar acusa multinacional por demissão em massa de funcionários."
                category="Acordo e Verdade"
                url="https://diariodonordeste.verdesmares.com.br/negocios/construtora-de-parque-solar-acusa-multinacional-por-demissao-em-massa-de-funcionarios-no-ceara-1.3543752"
              />
            </div>
          </div>
        </section>

        {/* Metodologia */}
        <section className="py-24 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
              Nossa Abordagem
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-6">
              Cada caso é único e requer uma combinação específica de técnicas de inteligência, 
              análise forense e tecnologia avançada.
            </p>
            <p className="text-white text-lg mb-12">
              O diferencial está na aplicação de inteligência humana em cada etapa do processo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
              {/* Losango decorativo 3D */}
              <div 
                className="absolute -top-24 right-0 w-40 h-40 pointer-events-none hidden md:block"
                style={{ perspective: '800px' }}
              >
                <motion.div
                  animate={{
                    rotateX: [0, 360],
                    rotateZ: [45, 405],
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className="absolute inset-0 border border-emerald-500/30"
                    style={{ 
                      background: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
                      opacity: 0.2
                    }}
                  />
                </motion.div>
              </div>

              <MethodCard
                number="01"
                title="Análise"
                description="Compreensão profunda do contexto e identificação de padrões"
              />
              <MethodCard
                number="02"
                title="Execução"
                description="Aplicação de metodologias avançadas com supervisão especializada"
              />
              <MethodCard
                number="03"
                title="Resultado"
                description="Entrega de evidências acionáveis e insights estratégicos"
              />
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center border border-white/20 p-12 lg:p-16 bg-black/60 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 uppercase">
              Seu Caso Merece
              <br />
              Atenção Especializada
            </h2>
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              Entre em contato para discutir como podemos ajudar em seu desafio específico
            </p>
            <button 
              onClick={() => window.location.hash = 'contato'}
              className="px-10 py-4 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors uppercase"
            >
              Agendar Consulta Confidencial
            </button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 md:px-16 lg:px-24 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-white tracking-widest uppercase text-sm leading-tight">FERNANDA</span>
                <span className="text-white/60 text-[9px] tracking-wider">HUMAN INTELLIGENCE, APPLIED.</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 FERNANDA. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

interface CaseCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  url?: string;
}

function CaseCard({ image, title, description, category, url }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="border border-white/20 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-all group overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-xs uppercase tracking-wider bg-white/10 backdrop-blur-sm px-3 py-1 border border-white/20">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl mb-3 uppercase">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
        
        {url ? (
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors uppercase text-sm tracking-wider"
          >
            <span>Acessar a Matéria</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </a>
        ) : (
          <button className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors uppercase text-sm tracking-wider">
            <span>Acessar a Matéria</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

interface MethodCardProps {
  number: string;
  title: string;
  description: string;
}

function MethodCard({ number, title, description }: MethodCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border border-white/20 p-6 bg-black/40 backdrop-blur-sm"
    >
      <div className="text-5xl font-bold text-white/20 mb-4">{number}</div>
      <h3 className="text-xl mb-2 uppercase text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
