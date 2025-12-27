import { Header } from './components/Header';
import { Sphere3D } from './components/Sphere3D';
import { ContentSection, TextBox } from './components/ContentSection';
import { FullscreenMenu } from './components/FullscreenMenu';
import { AssistenciaTecnica } from './components/AssistenciaTecnica';
import { Metodologia } from './components/Metodologia';
import { Cyberdefense } from './components/Cyberdefense';
import { Sobre } from './components/Sobre';
import { Contato } from './components/Contato';
import { Casos } from './components/Casos';
import { InvestigacaoPeritos } from './components/InvestigacaoPeritos';
import { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.slice(1);
    return hash || 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    window.location.hash = page === 'home' ? '' : page;
    setCurrentPage(page);
  };

  if (currentPage === 'investigacao-peritos') {
    return (
      <>
        <InvestigacaoPeritos onMenuClick={() => setIsMenuOpen(true)} />
        <FullscreenMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onNavigate={handleNavigate}
        />
      </>
    );
  }

  if (currentPage === 'assistencia-tecnica') {
    return (
      <>
        <AssistenciaTecnica onMenuClick={() => setIsMenuOpen(true)} />
        <FullscreenMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onNavigate={handleNavigate}
        />
      </>
    );
  }

  if (currentPage === 'metodologia') {
    return (
      <>
        <Metodologia onMenuClick={() => setIsMenuOpen(true)} />
        <FullscreenMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onNavigate={handleNavigate}
        />
      </>
    );
  }

  if (currentPage === 'cyberdefense') {
    return (
      <>
        <Cyberdefense onMenuClick={() => setIsMenuOpen(true)} />
        <FullscreenMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onNavigate={handleNavigate}
        />
      </>
    );
  }

  if (currentPage === 'sobre') {
    return (
      <>
        <Sobre onMenuClick={() => setIsMenuOpen(true)} />
        <FullscreenMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onNavigate={handleNavigate}
        />
      </>
    );
  }

  if (currentPage === 'contato') {
    return (
      <>
        <Contato onMenuClick={() => setIsMenuOpen(true)} />
        <FullscreenMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onNavigate={handleNavigate}
        />
      </>
    );
  }

  if (currentPage === 'casos') {
    return (
      <>
        <Casos onMenuClick={() => setIsMenuOpen(true)} />
        <FullscreenMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onNavigate={handleNavigate}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#09182b' }}>
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <FullscreenMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
      />
      <Sphere3D />
      
      <div className="relative z-10">
        {/* Seção Hero */}
        <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24">
          <ContentSection align="left">
            <div className="md:bg-transparent bg-black/40 backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-lg">
              <h1 className="text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-8 max-w-4xl">
                INTELIGÊNCIA
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed">
                Um ecossistema integrado de ciberdefesa, inteligência comportamental e automação tática, 
                unificando pessoas, processos e um único núcleo estratégico.
              </p>
              <p className="text-white text-xl mb-8">
                Ciber Segurança, Inteligência Humana e Antecipação da Verdade.
              </p>
              <button 
                onClick={() => window.location.hash = 'contato'}
                className="px-8 py-3 border border-white/30 text-white text-sm tracking-wider hover:bg-white/10 transition-colors uppercase"
              >
                Entrar em Contato
              </button>
            </div>
          </ContentSection>
        </section>

        {/* Seção 2 - Nexo Humano-Máquina */}
        <section className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
          <ContentSection align="right" delay={0.2}>
            <div className="max-w-3xl md:bg-transparent bg-black/40 backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-lg">
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                O Nexo
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl md:ml-auto">
                Integramos arquitetura de defesa impenetrável com inteligência humana, 
                tudo orquestrado por analistas estratégicos.
              </p>
              <p className="text-white text-xl mt-6 md:ml-auto max-w-xl">
                Não apenas bloqueamos a ameaça, nós entendemo-la, rastreamo-la e neutralizamo-la.
              </p>
            </div>
          </ContentSection>
        </section>

        {/* Seção 3 - Escudo Neural */}
        <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24">
          <ContentSection align="left" delay={0.1}>
            <TextBox variant="outlined" className="max-w-md">
              <h3 className="text-3xl md:text-4xl mb-6">
                O Escudo Neural
              </h3>
              <h4 className="text-xl text-gray-400 mb-4">Soberania Interna</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                A sua infraestrutura é um organismo vivo. Nós somos o seu sistema imunitário autônomo.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Criamos um perímetro de Zero Trust com monitorização de endpoints (EDR/XDR). 
                SOC unificado garante visibilidade total em tempo real. Conformidade LGPD nativa 
                e resposta automatizada a ameaças antes que elas toquem no seu núcleo.
              </p>
            </TextBox>
          </ContentSection>
        </section>

        {/* Seção 4 - Dark Web Intelligence */}
        <section className="min-h-screen flex items-center justify-end px-8 md:px-16 lg:px-24">
          <ContentSection align="right" delay={0.1}>
            <TextBox variant="outlined" className="max-w-md">
              <h3 className="text-3xl md:text-4xl mb-6">
                Vigilância do Horizonte Oculto
              </h3>
              <h4 className="text-xl text-gray-400 mb-4">Dark Web Intelligence</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                O que acontece nas sombras define o seu futuro. Nós somos os seus olhos na escuridão.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Estendemos o perímetro de segurança para além da sua rede. Infiltramo-nos na Deep e Dark Web, 
                monitorizamos fugas de credenciais, antecipamos fraudes e detectamos menções à sua organização 
                em fóruns ilícitos.
              </p>
            </TextBox>
          </ContentSection>
        </section>

        {/* Seção 5 - Inteligência */}
        <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24">
          <ContentSection align="left" delay={0.1}>
            <TextBox variant="outlined" className="max-w-md">
              <h3 className="text-3xl md:text-4xl mb-6">
                Inteligência
              </h3>
              <h4 className="text-xl text-gray-400 mb-4">Vendo o Invisível</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                A nossa inteligência permitirá identificação de informações dentro do invisível.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Vendo o invisível.
              </p>
            </TextBox>
          </ContentSection>
        </section>

        {/* Seção 6 - Inteligência Acionável */}
        <section className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
          <ContentSection align="center" delay={0.2}>
            <TextBox variant="default" className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">
                Inteligência Acionável
              </h2>
              <p className="text-gray-300 text-xl mb-6">
                Dados sem contexto são ruído.
              </p>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Nós transformamos informações em estratégia corporativa. 
              </p>
              <p className="text-white text-lg mb-10">
                Tecnologia e Inteligência Humana para Governança de Dados Absoluta e Segurança Cibernética.
              </p>
              <button 
                onClick={() => window.location.hash = 'contato'}
                className="px-10 py-4 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors uppercase"
              >
                Agendar Consulta
              </button>
            </TextBox>
          </ContentSection>
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