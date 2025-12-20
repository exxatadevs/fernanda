import { motion, useScroll, useTransform } from 'motion/react';
import { Header } from './Header';
import { Shield, Eye, Network, Zap, Target, Brain } from 'lucide-react';

interface CyberdefenseProps {
  onMenuClick: () => void;
}

function CyberdefenseBackground() {
  const { scrollYProgress } = useScroll();
  
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  return (
    <>
      {/* Losango principal animado */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10">
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

      {/* Losangos flutuantes menores */}
      <motion.div
        className="fixed top-1/4 left-1/4 pointer-events-none -z-10"
        animate={{
          y: [0, -30, 0],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-20 h-20 border border-[#AEAEB7]/30"
          style={{ 
            transform: 'rotateZ(45deg)',
            background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
            opacity: 0.3
          }}
        />
      </motion.div>

      <motion.div
        className="fixed top-2/3 right-1/4 pointer-events-none z-0"
        animate={{
          y: [0, 40, 0],
          rotateZ: [360, 180, 0],
        }}
        transition={{
          duration: 10,
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

      <motion.div
        className="fixed top-1/2 right-1/3 pointer-events-none z-0"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotateZ: [0, 90, 180],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-12 h-12 border border-[#AEAEB7]/20"
          style={{ 
            transform: 'rotateZ(45deg)',
            background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
            opacity: 0.2
          }}
        />
      </motion.div>
    </>
  );
}

export function Cyberdefense({ onMenuClick }: CyberdefenseProps) {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#09182b' }}>
      <Header onMenuClick={onMenuClick} />
      <CyberdefenseBackground />
      
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
              Cyberdefense
            </h1>
            <h2 className="text-3xl md:text-4xl mb-8 text-gray-300">
              Cibersegurança orientada por Inteligência Humana
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
              Nós atuamos com um modelo de cibersegurança que combina inteligência humana com o uso de 
              ferramentas avançadas de prevenção, detecção, correlação e resposta.
            </p>
            <p className="text-white text-lg max-w-3xl leading-relaxed">
              A tecnologia entrega escala e velocidade. A inteligência humana entrega o que mais importa 
              em incidentes reais: <span className="font-semibold">contexto, julgamento e decisão</span>.
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
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
              Além do Monitoramento
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-6">
              Não operamos apenas "monitoramento de alertas". Nós conduzimos um ciclo completo de segurança, 
              alinhado ao risco do negócio, reduzindo ruído, priorizando o que é crítico e acelerando 
              contenção e recuperação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Arquitetura de Defesa */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-16 uppercase text-center"
          >
            Arquitetura Integrada
          </motion.h2>

          <div className="relative flex items-center justify-center min-h-[600px] py-12">
            {/* Centro - CyberFusion Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute z-30"
            >
              <div 
                className="w-64 h-64 border-2 border-blue-500/60 bg-gradient-to-br from-blue-950/40 to-purple-950/40 backdrop-blur-sm flex items-center justify-center"
                style={{ transform: 'rotate(45deg)' }}
              >
                <div style={{ transform: 'rotate(-45deg)' }} className="text-center px-6">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Center</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Plataforma integrada com EDR, XDR, SIEM, Honeypot, UEBA, SOAR e IA
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Firewall - Superior Esquerdo */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-0 left-1/4 z-20"
            >
              <div 
                className="w-48 h-48 border border-red-500/50 bg-gradient-to-br from-red-950/30 to-black/30 backdrop-blur-sm flex items-center justify-center"
                style={{ transform: 'rotate(45deg)' }}
              >
                <div style={{ transform: 'rotate(-45deg)' }} className="text-center px-4">
                  <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">Firewall</h4>
                  <p className="text-[10px] text-gray-400 leading-tight">
                    IDS/IPS, antivírus, VPN, DPI e bloqueio em tempo real
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Monitor - Inferior Esquerdo */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-0 left-1/4 z-20"
            >
              <div 
                className="w-48 h-48 border border-cyan-500/50 bg-gradient-to-br from-cyan-950/30 to-black/30 backdrop-blur-sm flex items-center justify-center"
                style={{ transform: 'rotate(45deg)' }}
              >
                <div style={{ transform: 'rotate(-45deg)' }} className="text-center px-4">
                  <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">Monitor</h4>
                  <p className="text-[10px] text-gray-400 leading-tight">
                    Supervisão em tempo real de servidores, redes e aplicações
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MAP - Superior Direito */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-0 right-1/4 z-20"
            >
              <div 
                className="w-48 h-48 border border-purple-500/50 bg-gradient-to-br from-purple-950/30 to-black/30 backdrop-blur-sm flex items-center justify-center"
                style={{ transform: 'rotate(45deg)' }}
              >
                <div style={{ transform: 'rotate(-45deg)' }} className="text-center px-4">
                  <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">MAP</h4>
                  <p className="text-[10px] text-gray-400 leading-tight">
                    Painéis analíticos e relatórios inteligentes
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Linhas de conexão sutis */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ opacity: 0.15 }}>
              <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="url(#gradient1)" strokeWidth="1" />
              <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="url(#gradient2)" strokeWidth="1" />
              <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="url(#gradient3)" strokeWidth="1" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-gray-400 text-sm mt-8 max-w-3xl mx-auto"
          >
            Todos os componentes externos alimentam e são orquestrados pelo Center, 
            criando um ecossistema unificado de inteligência e resposta automatizada.
          </motion.p>
        </div>
      </section>

      {/* Como Operamos */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-16 uppercase"
          >
            Como Nós Operamos
          </motion.h2>
          
          <div className="space-y-16">
            <OperationCard
              number="01"
              icon={<Shield className="w-12 h-12" />}
              title="Prevenção e Controle na Borda"
              subtitle="NGFW - Next-Gen Firewall"
              description="Nós implementamos e operamos controles de borda com Next-Gen Firewall (NGFW), aplicando políticas e bloqueios com:"
              features={[
                "IDS/IPS para detecção e prevenção de intrusões",
                "DPI (Deep Packet Inspection) e controle L7 por aplicação",
                "VPN (IPSec/SSL) para acesso remoto seguro e segmentação",
                "Inspeções anti-malware/filtragem e bloqueio de ameaças em tempo real"
              ]}
              highlight="A diferença está no 'como': nós ajustamos regras, segmentações e exceções com base em inteligência humana, evitando tanto permissividade perigosa quanto bloqueios que param a operação."
            />

            <OperationCard
              number="02"
              icon={<Eye className="w-12 h-12" />}
              title="Monitoramento Contínuo"
              subtitle="Infraestrutura e Aplicações"
              description="Nós coletamos telemetria e eventos de servidores, redes e aplicações para manter visibilidade operacional e de segurança, com alertas inteligentes e monitoramento de integridade."
              highlight="Em vez de 'alertar por alertar', nossa equipe interpreta sinais, identifica correlações e valida o que é incidente real versus ruído de ambiente."
            />

            <OperationCard
              number="03"
              icon={<Network className="w-12 h-12" />}
              title="Detecção e Correlação"
              subtitle="SIEM + XDR + UEBA"
              description="Nós centralizamos e correlacionamos sinais de segurança usando:"
              features={[
                "SIEM para consolidação, normalização e correlação de logs",
                "XDR/EDR para detecção e resposta em endpoints e camadas adicionais",
                "UEBA para análise comportamental de usuários e entidades, detectando desvios sutis (incluindo ameaças internas e comprometimentos silenciosos)"
              ]}
              highlight="Aqui, a tecnologia identifica padrões. A inteligência humana valida, interpreta e prioriza — porque o mesmo evento pode ser irrelevante em um contexto e crítico em outro."
            />

            <OperationCard
              number="04"
              icon={<Zap className="w-12 h-12" />}
              title="Resposta Orquestrada e Automatizada"
              subtitle="SOAR - Security Orchestration"
              description="Nós aplicamos SOAR para acelerar resposta e padronizar ações por playbooks, como:"
              features={[
                "Bloqueio de tráfego malicioso",
                "Isolamento de ativos comprometidos",
                "Contenção de credenciais/sessões",
                "Acionamento de fluxos de investigação e remediação"
              ]}
              highlight="Quando faz sentido, automatizamos. Quando o cenário exige discernimento, nós decidimos e executamos com base no impacto, criticidade do ativo e risco de continuidade."
            />

            <OperationCard
              number="05"
              icon={<Target className="w-12 h-12" />}
              title="Deception e Inteligência de Ameaça"
              subtitle="Honeypots + IOCs"
              description="Nós utilizamos honeypots e inteligência de ameaça para capturar TTPs, enriquecer indicadores (IOCs) e antecipar vetores."
              highlight="Isso alimenta correlação e aumenta precisão — mas, principalmente, nos permite aplicar inteligência humana para entender intenção, persistência e superfície de ataque real do adversário."
            />
          </div>
        </div>
      </section>

      {/* Por que Inteligência Humana */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
              Por que Inteligência Humana
              <br />
              Muda o Jogo
            </h2>
            <p className="text-3xl text-white mb-12">
              Ferramentas isoladas geram alertas.
              <br />
              <span className="text-gray-400">Nós geramos decisão.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BenefitCard
              title="Redução de Falsos Positivos"
              description="Reduzir falsos positivos sem criar pontos cegos"
            />
            <BenefitCard
              title="Priorização Inteligente"
              description="Priorizar incidentes por impacto operacional (não só severidade técnica)"
            />
            <BenefitCard
              title="Adaptação ao Contexto"
              description="Adaptar playbooks e políticas ao ambiente real do cliente"
            />
            <BenefitCard
              title="Investigação Profunda"
              description="Conduzir investigação com hipóteses, evidências e causalidade"
            />
            <BenefitCard
              title="Ação Precisa"
              description="Agir com rapidez, sem disparar ações automáticas que gerem indisponibilidade"
            />
            <BenefitCard
              title="Contexto e Decisão"
              description="Entregar contexto, julgamento e decisão em incidentes reais"
            />
          </div>
        </div>
      </section>

      {/* Ciclo Contínuo */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 uppercase text-center">
            Resultado: Segurança com
            <br />
            Velocidade e Precisão
          </h2>
          
          <div className="border border-white/20 p-12 bg-black/60 backdrop-blur-sm mb-12">
            <p className="text-2xl text-center mb-8 text-gray-300">
              Nós operamos um ciclo contínuo:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl">
              <span className="text-white font-semibold">Prevenção (NGFW)</span>
              <span className="text-gray-500">→</span>
              <span className="text-white font-semibold">Detecção (XDR/UEBA)</span>
              <span className="text-gray-500">→</span>
              <span className="text-white font-semibold">Correlação (SIEM)</span>
              <span className="text-gray-500">→</span>
              <span className="text-white font-semibold">Resposta (SOAR)</span>
              <span className="text-gray-500">→</span>
              <span className="text-white font-semibold">Aprendizado</span>
            </div>
          </div>

          <p className="text-xl text-gray-300 text-center leading-relaxed">
            Com uma camada decisória baseada em inteligência humana, garantindo 
            <span className="text-white font-semibold"> visibilidade total, resposta rápida e controle real do risco</span>.
          </p>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center border border-white/20 p-12 lg:p-16 bg-black/60 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 uppercase">
            Proteja Seu Negócio com
            <br />
            Inteligência Real
          </h2>
          <p className="text-gray-300 text-xl mb-10 leading-relaxed">
            Entre em contato com nossa equipe de especialistas em cibersegurança
          </p>
          <button 
            onClick={() => window.location.hash = 'contato'}
            className="px-10 py-4 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors uppercase"
          >
            Agendar Avaliação de Segurança
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

interface OperationCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  highlight: string;
}

function OperationCard({ number, icon, title, subtitle, description, features, highlight }: OperationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-l-2 border-white/20 pl-8"
    >
      <div className="lg:col-span-1 flex items-start">
        <span className="text-5xl font-bold text-white/20">{number}</span>
      </div>
      
      <div className="lg:col-span-11">
        <div className="flex items-start gap-4 mb-6">
          <div className="text-white/80 mt-1">
            {icon}
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl mb-2 uppercase">{title}</h3>
            <p className="text-xl text-gray-400 uppercase tracking-wider">{subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="border-l-4 border-white/40 pl-6 py-2 bg-white/5">
          <p className="text-white text-lg leading-relaxed italic">
            {highlight}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface BenefitCardProps {
  title: string;
  description: string;
}

function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="border border-white/20 p-6 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-all"
    >
      <h3 className="text-xl mb-3 uppercase text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
