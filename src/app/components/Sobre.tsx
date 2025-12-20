import { motion, useScroll, useTransform } from 'motion/react';
import { Header } from './Header';

interface SobreProps {
  onMenuClick: () => void;
}

function SobreBackground() {
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
              <div 
                className="absolute w-[300px] h-[300px] border border-[#AEAEB7]/40"
                style={{ 
                  transform: 'rotateY(-90deg) translateZ(150px)',
                  background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                  opacity: 0.4
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="fixed top-1/3 left-1/5 pointer-events-none z-0"
        animate={{
          y: [0, -25, 0],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-16 h-16 border border-[#AEAEB7]/30"
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

export function Sobre({ onMenuClick }: SobreProps) {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#09182b' }}>
      <Header onMenuClick={onMenuClick} />
      <SobreBackground />
      
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
              <h1 className="text-5xl md:text-6xl lg:text-8xl uppercase mb-8 leading-tight">
                Sobre a SOPHIA
              </h1>
              <p className="text-gray-400 text-xl mb-8 max-w-3xl leading-relaxed uppercase tracking-wider">
                Solutions Of Pragmatic Human Intelligence for Analysis
              </p>
              <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
                Somos uma empresa de inteligência estratégica que combina expertise humana com tecnologia de ponta 
                para resolver os desafios mais complexos de segurança e investigação corporativa.
              </p>
              <p className="text-white text-lg max-w-3xl leading-relaxed">
                Inteligência Humana, Aplicada.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
                Nossa Missão
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Proteger organizações através da aplicação de inteligência humana em cada decisão crítica. 
                Não somos apenas uma ferramenta, somos o parceiro estratégico que entende o contexto, 
                antecipa riscos e age com precisão.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Nossa abordagem combina metodologias avançadas de inteligência com tecnologia de última geração, 
                sempre com a supervisão e análise de especialistas altamente qualificados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Losango decorativo 3D */}
              <div 
                className="absolute -top-16 -right-16 w-64 h-64 pointer-events-none"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                    rotateX: [0, 15, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className="absolute inset-0 border border-blue-500/30"
                    style={{ 
                      transform: 'rotateZ(45deg)',
                      background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                      opacity: 0.15
                    }}
                  />
                </motion.div>
              </div>

              <div className="border border-white/20 p-12 bg-black/60 backdrop-blur-sm relative z-10">
                <h3 className="text-3xl mb-6 uppercase">Nossos Valores</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Integridade Absoluta</span>
                    <p className="text-gray-400 mt-1">Operamos com os mais altos padrões éticos e legais</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Excelência Técnica</span>
                    <p className="text-gray-400 mt-1">Profissionais com experiência comprovada em inteligência</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Confidencialidade Total</span>
                    <p className="text-gray-400 mt-1">Sigilo absoluto em todas as operações</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Resultados Mensuráveis</span>
                    <p className="text-gray-400 mt-1">Foco em entregas concretas e acionáveis</p>
                  </div>
                </li>
              </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl mb-16 uppercase text-center"
            >
              O Que Nos Diferencia
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <DiferencialCard
                title="Inteligência Humana"
                description="Nossa equipe é composta por analistas com experiência em inteligência estratégica, capazes de interpretar contextos complexos e tomar decisões críticas."
              />
              <DiferencialCard
                title="Tecnologia Avançada"
                description="Utilizamos as ferramentas mais modernas de cibersegurança, análise de dados e monitoramento, sempre com supervisão humana especializada."
              />
              <DiferencialCard
                title="Abordagem Integrada"
                description="Combinamos diferentes disciplinas - ciberdefesa, inteligência comportamental e análise forense - em uma solução unificada."
              />
            </div>
          </div>
        </section>

        {/* Grandes Números */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl mb-16 uppercase text-center"
            >
              Nossa Experiência
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                  +220
                </div>
                <p className="text-xl text-gray-400 uppercase tracking-wider">
                  Perícias Realizadas
                </p>
                <p className="text-gray-500 mt-2">
                  Experiência acumulada em mais de 220 perícias
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                  +15
                </div>
                <p className="text-xl text-gray-400 uppercase tracking-wider">
                  Anos de Atuação
                </p>
                <p className="text-gray-500 mt-2">
                  Mais de 15 anos de experiência no mercado
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                  Global
                </div>
                <p className="text-xl text-gray-400 uppercase tracking-wider">
                  Atuação Internacional
                </p>
                <p className="text-gray-500 mt-2">
                  Presença e expertise em múltiplas jurisdições
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
              Expertise Comprovada
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-6">
              Atuamos em casos de alta complexidade envolvendo fraudes corporativas, crimes financeiros, 
              espionagem industrial, vazamento de informações e ameaças cibernéticas avançadas.
            </p>
            <p className="text-white text-2xl">
              Quando a verdade precisa ser descoberta, nós a encontramos.
            </p>
          </motion.div>
        </section>

        {/* EXXATA e Leaders League */}
        <section className="py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
                Uma Solução EXXATA
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-6">
                A SOPHIA é uma solução da{' '}
                <a 
                  href="https://exxata.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors underline"
                >
                  EXXATA
                </a>
                , empresa reconhecida nacionalmente por sua excelência em assistência técnica e perícia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto border border-white/20 p-12 lg:p-16 bg-black/60 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center mb-8">
                <img 
                  src="/Leaders-League-2025.png" 
                  alt="Leaders League 2025" 
                  className="h-20 mb-6 object-contain"
                />
                <h3 className="text-3xl md:text-4xl mb-6 uppercase text-center">
                  Reconhecimento Leaders League
                </h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
                A Exxata é destaque no ranking de Leaders League – Brasil nas categorias de 
                Assistência Técnica e Perícia em:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-white/20 p-6 bg-black/40 text-center">
                  <h4 className="text-xl uppercase text-white mb-2">Construção & Engenharia</h4>
                </div>
                <div className="border border-white/20 p-6 bg-black/40 text-center">
                  <h4 className="text-xl uppercase text-white mb-2">Economia & Valorização Financeira</h4>
                </div>
                <div className="border border-white/20 p-6 bg-black/40 text-center">
                  <h4 className="text-xl uppercase text-white mb-2">Contabilidade e Finança</h4>
                </div>
              </div>
              
              <p className="text-gray-400 text-center leading-relaxed">
                O ranking tem foco nas análises de inteligência de mercado em nível executivo internacional 
                e destaca as melhores empresas do Brasil em atuações de Perícias e Arbitragens em Engenharia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center border border-white/20 p-12 lg:p-16 bg-black/60 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 uppercase">
              Proteja Seus Interesses
              <br />
              Estratégicos
            </h2>
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              Entre em contato para uma consulta confidencial com nossa equipe
            </p>
            <button 
              onClick={() => window.location.hash = 'contato'}
              className="px-10 py-4 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors uppercase"
            >
              Agendar Consulta
            </button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 md:px-16 lg:px-24 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-white tracking-widest uppercase text-sm leading-tight">SOPHIA</span>
                <span className="text-white/60 text-[9px] tracking-wider">HUMAN INTELLIGENCE, APPLIED.</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 SOPHIA. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

interface DiferencialCardProps {
  title: string;
  description: string;
}

function DiferencialCard({ title, description }: DiferencialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="border border-white/20 p-8 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-all"
    >
      <h3 className="text-2xl mb-4 uppercase text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
