
import React, { useState } from 'react';
import BriefingForm from './components/BriefingForm';
import AIProposal from './components/AIProposal';
import { BriefingData } from './types';

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data: BriefingData) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      console.log("Briefing Data Received:", data);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Houve um erro ao enviar. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white selection:bg-purple-500 selection:text-white">
      {/* Header / Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#050507]/80 backdrop-blur-md border-b border-white/5 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black gradient-text">Adolfo</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Sobre Nós</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
          <a 
            href="https://wa.me/5562981474821" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 px-6 py-2.5 rounded-full text-sm font-bold border border-white/10 transition-all flex items-center space-x-2"
          >
            <span>Contato Direto</span>
            <i className="fas fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </nav>

      <header className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/10 blur-[140px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-400/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span>Design Digital Premium 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
            Venda mais com um <br />
            <span className="gradient-text">Site Sob Medida.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Transformamos sua ideia em uma ferramenta de vendas profissional.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 relative z-10">
        
        {!isSubmitted && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            
            {/* Seção de Serviços / O que eu vendo */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-2">Nossos Serviços</h2>
              <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-[#15151f]/40 p-8 rounded-[32px] border border-white/5 hover:border-purple-500/30 transition-all group backdrop-blur-sm">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <i className="fas fa-code text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-white font-black text-xl mb-3 tracking-tight">Frontend</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Interfaces imersivas e responsivas com alta performance e foco na experiência do usuário.
                </p>
              </div>

              <div className="bg-[#15151f]/40 p-8 rounded-[32px] border border-white/5 hover:border-purple-500/30 transition-all group backdrop-blur-sm">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <i className="fas fa-server text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-white font-black text-xl mb-3 tracking-tight">Backend & APIs</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Arquitetura escalável e segurança de dados para sustentar operações robustas e seguras.
                </p>
              </div>

              <div className="bg-[#15151f]/40 p-8 rounded-[32px] border border-white/5 hover:border-purple-500/30 transition-all group backdrop-blur-sm">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <i className="fas fa-robot text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-white font-black text-xl mb-3 tracking-tight">Automação</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Fluxos inteligentes que trabalham por você, otimizando processos e aumentando a produtividade.
                </p>
              </div>
            </div>

            {/* Seção Nossa Missão (Movid para baixo de Serviços) */}
            <div className="mb-20">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#15151f] to-[#0a0a0f] border border-white/5 rounded-[40px] p-10 md:p-16 text-center shadow-2xl">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-600/10 blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500 mb-6">Nossa Missão</h2>
                  <p className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto">
                    Comercializamos sites estratégicos desenvolvidos para <span className="text-purple-400">aumentar vendas</span>, gerar mais oportunidades e transformar visitantes em clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="glass-card rounded-[40px] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden border border-white/5">
          {!isSubmitted ? (
            <>
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">Briefing do Projeto</h2>
                <p className="text-gray-500 max-w-md mx-auto">Responda as etapas abaixo para que possamos desenhar a melhor solution para o seu negócio.</p>
              </div>
              <BriefingForm onSubmit={handleFormSubmit} isLoading={isLoading} />
            </>
          ) : (
            <AIProposal onReset={handleReset} />
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-40 border-t border-gray-900 bg-[#0a0a0f] pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white tracking-tighter">Adolfo Max</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Excelência na venda de sites estratégicos, desenvolvidos para aumentar vendas e gerar resultados reais para o seu negócio.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs border-l-2 border-purple-500 pl-3">Navegação</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs border-l-2 border-purple-500 pl-3">Onde Estamos</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-purple-500 w-4"></i>
                <span>Goiânia - GO</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-purple-500 w-4"></i>
                <span>(62) 98147-4821</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-700 font-medium uppercase tracking-widest">
          <p>© 2026 Adolfo Max Vieira. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">Segurança</a>
            <a href="#" className="hover:text-gray-400">Compliance</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5562981474821" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25d366] text-white p-5 rounded-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center space-x-3 group"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          Falar com Adolfo
        </span>
      </a>
    </div>
  );
};

export default App;
