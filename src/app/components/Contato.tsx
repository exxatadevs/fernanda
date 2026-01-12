import { motion, useScroll, useTransform } from 'motion/react';
import { Header } from './Header';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContatoProps {
  onMenuClick: () => void;
}

function ContatoBackground() {
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
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="fixed top-1/4 right-1/4 pointer-events-none z-0"
        animate={{
          y: [0, -30, 0],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 10,
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
    </>
  );
}

export function Contato({ onMenuClick }: ContatoProps) {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#aa0e0e' }}>
      <Header onMenuClick={onMenuClick} />
      <ContatoBackground />
      
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
                Contato
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
                Entre em contato com nossa equipe para uma consulta confidencial sobre suas necessidades 
                de inteligência estratégica e cibersegurança.
              </p>
              <p className="text-white text-lg max-w-3xl leading-relaxed">
                Todas as comunicações são tratadas com absoluta confidencialidade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl mb-8 uppercase">
                Fale Conosco
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Entre em contato através do nosso formulário para uma consulta confidencial
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ContactInfo
                  icon={<Mail className="w-6 h-6" />}
                  title="E-mail"
                  info="comercial@exxata.com.br"
                  description="Resposta em até 24 horas"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ContactInfo
                  icon={<Phone className="w-6 h-6" />}
                  title="Telefones"
                  info="(31) 2519-8624"
                  description="(31) 9 9874-7114"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactInfo
                  icon={<MapPin className="w-6 h-6" />}
                  title="Belo Horizonte"
                  info="Av. Getúlio Vargas, n° 671"
                  description="8° e 10° Andar, Funcionários"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ContactInfo
                  icon={<MapPin className="w-6 h-6" />}
                  title="São Paulo"
                  info="Av. Eng. Luiz Carlos Berrini, n° 105"
                  description="Ed. Thera Berrini Office, Sala 111, Brooklin"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center border border-white/20 p-12 lg:p-16 bg-black/60 backdrop-blur-sm"
            >
              <h3 className="text-3xl md:text-4xl mb-6 uppercase">
                Envie sua Mensagem
              </h3>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Clique no botão abaixo para acessar nosso formulário de contato e entrar em contato 
                com nossa equipe de especialistas.
              </p>
              <a
                href="https://exxata.com.br/contato/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors uppercase"
              >
                Acessar Formulário de Contato
              </a>
            </motion.div>
          </div>
        </section>

        {/* Confidencialidade */}
        <section className="py-24 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center border border-white/20 p-12 lg:p-16 bg-black/60 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 uppercase">
              Confidencialidade Garantida
            </h2>
            <p className="text-gray-300 text-xl mb-6 leading-relaxed">
              Todas as consultas e comunicações são tratadas com absoluto sigilo profissional. 
              Seus dados e informações estão protegidos por rigorosos protocolos de segurança.
            </p>
            <p className="text-white text-lg">
              Sua privacidade é nossa prioridade.
            </p>
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

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  description: string;
}

function ContactInfo({ icon, title, info, description }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-white/80 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl uppercase mb-1">{title}</h3>
        <p className="text-white text-lg mb-1">{info}</p>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
