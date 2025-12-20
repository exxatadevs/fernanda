import { motion } from 'motion/react';
import { Header } from './Header';

interface MetodologiaProps {
  onMenuClick: () => void;
}

export function Metodologia({ onMenuClick }: MetodologiaProps) {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#09182b' }}>
      <Header onMenuClick={onMenuClick} />
      
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
              Inteligência
              <br />
              Humana Aplicada
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
              O método mais eficaz para obter evidências concretas que seriam impossíveis de alcançar por outros meios.
            </p>
            <p className="text-gray-500 text-lg max-w-2xl">
              Quando a inteligência humana é a única opção, você pode confiar na SOPHIA para revelar a verdade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Abordagem Estratégica */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
              Uma Abordagem
              <br />
              Estratégica
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Utilizamos metodologias avançadas de inteligência comportamental, criando cenários realistas 
              e implantando operativos altamente treinados com experiência em análise estratégica.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Isso nos permite revelar práticas ilícitas e reunir evidências para vencer casos complexos, 
              mesmo quando não existe rastro documental.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px]"
            style={{ perspective: '1000px' }}
          >
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="absolute w-72 h-72 border border-[#09182b]/50"
                style={{ 
                  transform: 'rotateZ(45deg) rotateY(25deg) rotateX(25deg)',
                  background: 'linear-gradient(135deg, #09182b 0%, #0a1f3d 100%)',
                  opacity: 0.7
                }}
              />
              <div 
                className="absolute w-64 h-64 border border-[#09182b]/40"
                style={{ 
                  transform: 'rotateZ(45deg) rotateY(-25deg) rotateX(-25deg) translateZ(-50px)',
                  background: 'linear-gradient(135deg, #09182b 0%, #081429 100%)',
                  opacity: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Superioridade Metodológica */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase">
            Superioridade Metodológica
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            O efeito da engenharia social aplicada à psicologia humana, respaldado por estruturas 
            corporativas reais e tecnologia de ponta, é imbatível.
          </p>
          <p className="text-white text-2xl">
            Nossa abordagem revela informações inacessíveis a métodos tradicionais.
          </p>
        </motion.div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-16 uppercase text-center"
          >
            Nossos Diferenciais
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DiferencialBox
              title="Exclusividade"
              description="Somos a única empresa oferecendo nossa abordagem única e altamente sofisticada de inteligência estratégica aplicada."
            />
            <DiferencialBox
              title="Além do Convencional"
              description="Revelamos informações inacessíveis à inteligência de fontes abertas e outros métodos tradicionais de investigação."
            />
            <DiferencialBox
              title="Alcance Internacional"
              description="Operamos de forma integrada em todo território, com equipes especializadas e infraestrutura completa."
            />
          </div>
        </div>
      </section>

      {/* Grandes Números */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
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

      {/* Áreas de Atuação */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-16 uppercase"
          >
            Nossas Soluções
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ServiceCard
              title="Cyberdefense"
              description="Cibersegurança orientada por inteligência humana. Combinamos ferramentas avançadas de prevenção, detecção, correlação e resposta com análise especializada para proteção completa."
              link="cyberdefense"
            />
            <ServiceCard
              title="Inteligência Investigativa"
              description="Análise profunda de perfil profissional e ético de peritos judiciais. Identificação de conflitos de interesse, vínculos ocultos e análise crítica de produção técnica anterior."
              link="investigacao-peritos"
            />
            <ServiceCard
              title="Acordo e Verdade"
              description="Quando todos os métodos convencionais falham, encontramos a solução. Resolução de conflitos complexos através de inteligência estratégica e táticas disruptivas."
              link="assistencia-tecnica"
            />
          </div>
        </div>
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
            Nada é Impossível
          </h2>
          <p className="text-gray-300 text-xl mb-10 leading-relaxed">
            Quando a inteligência humana é a única opção, você pode confiar na SOPHIA para descobrir a verdade 
            e proteger seus interesses estratégicos.
          </p>
          <button 
            onClick={() => window.location.hash = 'contato'}
            className="px-10 py-4 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors uppercase"
          >
            Agendar Consulta Estratégica
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
  );
}

interface DiferencialBoxProps {
  title: string;
  description: string;
}

function DiferencialBox({ title, description }: DiferencialBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border border-white/20 p-8 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-all"
    >
      <h3 className="text-2xl mb-4 uppercase text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  link?: string;
}

function ServiceCard({ title, description, link }: ServiceCardProps) {
  const handleClick = () => {
    if (link) {
      window.location.hash = link;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      onClick={handleClick}
      className={`border border-white/20 p-8 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-all group ${link ? 'cursor-pointer' : ''}`}
    >
      <h3 className="text-2xl md:text-3xl mb-4 uppercase">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
      {link && (
        <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
          <span className="text-sm uppercase tracking-wider">Acessar Solução</span>
          <div className="w-8 h-[1px] bg-white/60 group-hover:w-12 transition-all" />
        </div>
      )}
    </motion.div>
  );
}
