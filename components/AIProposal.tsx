
import React from 'react';

interface Props {
  onReset: () => void;
}

const AIProposal: React.FC<Props> = ({ onReset }) => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700 py-10">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/10 text-green-500 rounded-full mb-8 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
          <i className="fas fa-check text-4xl"></i>
        </div>
        <h2 className="text-4xl font-black text-white mb-4">Briefing Enviado!</h2>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          Recebemos suas informações com sucesso. Nossa equipe analisará seus requisitos e entrará em contato em breve.
        </p>
      </div>

      <div className="bg-[#15151f]/50 p-8 rounded-3xl border border-gray-800 text-center">
        <h3 className="text-white text-xl font-bold mb-4">O que acontece agora?</h3>
        <div className="space-y-4 text-gray-400">
          <div className="flex items-center justify-center space-x-3">
            <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">1</span>
            <span>Analisamos seu nicho e objetivos</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">2</span>
            <span>Montamos uma proposta comercial exclusiva</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">3</span>
            <span>Chamamos você no WhatsApp para alinhar</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button 
          onClick={() => window.open('https://wa.me/5562981474821', '_blank')}
          className="flex-1 bg-[#25d366] hover:bg-[#20bd5c] text-white font-bold py-5 rounded-2xl shadow-xl shadow-green-900/20 transition-all flex items-center justify-center space-x-3 transform hover:-translate-y-1"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
          <span>Falar no WhatsApp Agora</span>
        </button>
        <button 
          onClick={onReset}
          className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-5 rounded-2xl border border-white/10 transition-all"
        >
          Novo Briefing
        </button>
      </div>
    </div>
  );
};

export default AIProposal;
