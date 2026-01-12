import { motion, useScroll, useTransform } from 'motion/react';
import { Header } from './Header';
import { Search, FileText, UserCheck, ShieldCheck, Scale, History } from 'lucide-react';

interface InvestigacaoPeritosProps {
  onMenuClick: () => void;
}

function InvestigacaoBackground() {
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
              <div 
                className="absolute w-[300px] h-[300px] border border-[#AEAEB7]/40"
                style={{ 
                  transform: 'rotateX(90deg) translateZ(150px)',
                  background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                  opacity: 0.4
                }}
              />
              <div 
                className="absolute w-[300px] h-[300px] border border-[#AEAEB7]/40"
                style={{ 
                  transform: 'rotateX(-90deg) translateZ(150px)',
                  background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                  opacity: 0.4
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="fixed bottom-1/4 left-1/4 pointer-events-none z-0"
        animate={{
          y: [0, -40, 0],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 12,
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

export function InvestigacaoPeritos({ onMenuClick }: InvestigacaoPeritosProps) {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#aa0e0e' }}>
      <Header onMenuClick={onMenuClick} />
      <InvestigacaoBackground />
      
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
                Consciência
                <br />
                Situacional
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
                Quando o contexto é fragmentado e os riscos são altos, nós reconstruímos o cenário completo — atores, interesses e movimentos — para apoiar decisões críticas.
              </p>
              <p className="text-white text-lg max-w-3xl leading-relaxed">
                Inteligência Humana aplicada para mapear stakeholders, identificar assimetrias de informação e antecipar pontos de pressão em litígios complexos, arbitragens internacionais e crimes de colarinho branco.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nossa Abordagem */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
                Metodologia Tática. Alcance Global.
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mx-auto">
                Não somos limitados por conhecimento, expertise, idioma, conexões ou geografia.
                Conduzimos operações online e offline para identificar atores relevantes, compreender motivações e relações, e transformar sinais dispersos em entendimento situacional.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Search className="w-10 h-10" />}
                title="Inteligência Humana"
                description="Mapeamento de atores, interesses e vulnerabilidades do ambiente. Engenharia social aplicada e validação em campo para revelar o que não aparece em registros formais."
              />
              <FeatureCard
                icon={<FileText className="w-10 h-10" />}
                title="Contexto e Evidências"
                description="Correlacionamos informações públicas e privadas com análise crítica para construir narrativas verificáveis, com rastreabilidade e aderência ao objetivo do caso."
              />
              <FeatureCard
                icon={<Scale className="w-10 h-10" />}
                title="Suporte a Litígios"
                description="Identificação de stakeholders, pontos de influência e sequências prováveis de ação. Entregamos inteligência acionável para orientar estratégia e tomada de decisão."
              />
              <FeatureCard
                icon={<History className="w-10 h-10" />}
                title="Crimes de Colarinho Branco"
                description="Capacidade de revelar corrupção, fraude, suborno, dissipação de ativos e outros crimes financeiros mesmo quando não há rastro documental claro — conectando atores, fatos e contexto."
              />
              <FeatureCard
                icon={<UserCheck className="w-10 h-10" />}
                title="Risco e Exposição"
                description="Levantamento de vínculos, posições e comportamento de stakeholders. Identificação de riscos reputacionais, operacionais e de compliance que impactam diretamente o caso."
              />
              <FeatureCard
                icon={<ShieldCheck className="w-10 h-10" />}
                title="Contrainteligência"
                description="Identificação e mitigação de campanhas negativas, vazamentos de informação e ameaças à reputação corporativa com leitura situacional e resposta proporcional."
              />
            </div>
          </div>
        </section>

        {/* Por que Investigar? */}
        <section className="py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
                Encontramos a Peça que Falta
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Vencer casos complexos exige consciência situacional. O sucesso do seu litígio depende de compreender quem influencia o resultado, o que cada ator busca e onde estão as assimetrias de informação.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Deixe conosco a tarefa de reconstruir o contexto — não importa onde as peças estejam dispersas.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Evidências extensivas por meio de Inteligência Humana aplicada à realidade do caso</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Operativos especializados com experiência em leitura situacional e inteligência estratégica</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Metodologias legais em conformidade com as leis aplicáveis em cada jurisdição</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              {/* Losango decorativo 3D */}
              <div 
                className="absolute -bottom-12 -left-12 w-48 h-48 pointer-events-none"
                style={{ perspective: '800px' }}
              >
                <motion.div
                  animate={{
                    rotateZ: [0, 360],
                    rotateY: [0, 25, 0],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className="absolute inset-0 border border-purple-500/30"
                    style={{ 
                      transform: 'rotateZ(45deg)',
                      background: 'linear-gradient(135deg, #6b21a8 0%, #7c3aed 100%)',
                      opacity: 0.2
                    }}
                  />
                </motion.div>
              </div>

              <div className="border border-white/20 bg-black/40 backdrop-blur-sm p-12 flex flex-col justify-center h-full relative z-10">
                <h3 className="text-3xl mb-6 uppercase text-white">Inteligência Criativa</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Nossa equipe é composta por ex-oficiais de inteligência, advogados e agentes com backgrounds diversos,
                culturas e idiomas variados. Como engenheiros sociais, desenhamos abordagens sob medida para mapear stakeholders,
                validar hipóteses e capturar evidências em litígios internacionais de alto perfil.
              </p>
              <div className="border-l-4 border-white/40 pl-6 py-2">
                <p className="text-white text-lg italic">
                  "Quando ninguém mais consegue, nós encontramos a solução."
                </p>
              </div>
              </div>
            </motion.div>
          </div>
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
              Assegure o Aparentemente
              <br />
              Impossível
            </h2>
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              Somos uma firma de Inteligência Humana que ajuda você a vencer quando o contexto é o diferencial — com leitura situacional, mapeamento de atores e estratégia baseada em evidências.
            </p>
            <button 
              onClick={() => window.location.hash = 'contato'}
              className="px-10 py-4 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors uppercase"
            >
              Falar com Especialista
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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="border border-white/20 p-8 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-all group"
    >
      <div className="text-white/80 mb-6 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl mb-4 uppercase text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
