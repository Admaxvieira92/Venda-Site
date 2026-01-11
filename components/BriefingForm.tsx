
import React, { useState } from 'react';
import { BriefingData } from '../types';

interface Props {
  onSubmit: (data: BriefingData) => void;
  isLoading: boolean;
}

const BriefingForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BriefingData>({
    sellingMethod: 'Quero que a pessoa compre e pague direto no site',
    paymentChannel: 'Pagamento direto no site',
    paymentMethods: 'Pix (enviado pelo WhatsApp)',
    deliveryMethod: 'Eu mesma faço a entrega',
    productVariations: 'Produto único (sem variação)',
    productQuantity: '',
    expectations: '',
    visualStyle: 'Clean',
    contact: {
      name: '',
      instagram: '',
      whatsapp: '',
      email: ''
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('contact.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({ ...prev, contact: { ...prev.contact, [field]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const labelClass = "block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider";
  const inputClass = "w-full bg-[#0a0a0f] border border-gray-800 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder-gray-600";

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-bold text-white mb-2">🚀 Modelo de Negócio</h3>
            <div>
              <label className={labelClass}>Como você quer vender?</label>
              <select name="sellingMethod" value={formData.sellingMethod} onChange={handleChange} className={inputClass}>
                <option>Quero que a pessoa compre e pague direto no site</option>
                <option>Escolher no site e finalizar pelo WhatsApp</option>
                <option>Site apenas como vitrine / catálogo</option>
                <option>Ainda não sei, quero orientação</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Onde ocorre o pagamento?</label>
                <select name="paymentChannel" value={formData.paymentChannel} onChange={handleChange} className={inputClass}>
                  <option>Pagamento direto no site</option>
                  <option>Pagamento pelo WhatsApp</option>
                  <option>Ainda não sei</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Método Preferido</label>
                <select name="paymentMethods" value={formData.paymentMethods} onChange={handleChange} className={inputClass}>
                  <option>Pix</option>
                  <option>Cartão de Crédito</option>
                  <option>Link de Pagamento</option>
                  <option>Boleto</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-bold text-white mb-2">📦 Operação e Produtos</h3>
            <div>
              <label className={labelClass}>Logística de Entrega</label>
              <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange} className={inputClass}>
                <option>Eu mesma faço a entrega</option>
                <option>Envio pelos Correios</option>
                <option>Transportadora</option>
                <option>Combinar pelo WhatsApp</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Variações de Produto</label>
              <select name="productVariations" value={formData.productVariations} onChange={handleChange} className={inputClass}>
                <option>Tamanhos (P, M, G...)</option>
                <option>Cores</option>
                <option>Kits / Conjuntos</option>
                <option>Produto Único</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Quantidade aproximada</label>
              <input type="text" name="productQuantity" value={formData.productQuantity} onChange={handleChange} placeholder="Ex: 20 produtos" className={inputClass} />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-bold text-white mb-2">✨ Visão e Estética</h3>
            <div>
              <label className={labelClass}>Estilo Visual Desejado</label>
              <select name="visualStyle" value={formData.visualStyle} onChange={handleChange} className={inputClass}>
                <option>Clean / Minimalista</option>
                <option>Fitness / High Energy</option>
                <option>Feminino / Elegante</option>
                <option>Luxo / Premium Dark</option>
                <option>Estilo Instagram / Moderno</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>O que você espera do site?</label>
              <textarea name="expectations" value={formData.expectations} onChange={handleChange} placeholder="Quais seus maiores objetivos com este novo site?" className={`${inputClass} h-32 resize-none`} />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-bold text-white mb-2">👤 Informações de Contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="contact.name" value={formData.contact.name} onChange={handleChange} placeholder="Nome Completo" className={inputClass} required />
              <input name="contact.whatsapp" value={formData.contact.whatsapp} onChange={handleChange} placeholder="WhatsApp (DDD) 00000-0000" className={inputClass} required />
              <input name="contact.instagram" value={formData.contact.instagram} onChange={handleChange} placeholder="Instagram @usuario" className={inputClass} />
              <input name="contact.email" value={formData.contact.email} onChange={handleChange} placeholder="E-mail" className={inputClass} />
            </div>
            <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 text-sm text-purple-200">
              <i className="fas fa-info-circle mr-2"></i>
              Ao finalizar, entraremos em contato em breve para conversar sobre seu projeto.
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between text-xs font-bold text-gray-500 uppercase mb-3">
          <span>Passo {step} de 4</span>
          <span>{Math.round((step / 4) * 100)}% concluído</span>
        </div>
        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {renderStep()}

      <div className="flex gap-4 mt-10">
        {step > 1 && (
          <button 
            type="button" 
            onClick={prevStep}
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl transition-all"
          >
            Voltar
          </button>
        )}
        
        {step < 4 ? (
          <button 
            type="button" 
            onClick={nextStep}
            className="flex-[2] bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
          >
            Próximo Passo
          </button>
        ) : (
          <button 
            type="button" 
            disabled={isLoading}
            onClick={() => onSubmit(formData)}
            className="flex-[2] bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-xl transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
          >
            {isLoading ? (
              <><i className="fas fa-spinner fa-spin"></i><span>Enviando...</span></>
            ) : (
              <><i className="fas fa-check"></i><span>Finalizar e Enviar</span></>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default BriefingForm;
