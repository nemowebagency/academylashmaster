import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface ContactFormProps {
  variant?: 'default' | 'modal'
  onClose?: () => void
  onSubmit?: (formData: FormData) => void
}

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  variant = 'default', 
  onClose,
  onSubmit 
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior
      console.log('Form submitted:', formData);
      alert('Grazie per il tuo interesse! Ti contatteremo presto.');
    }
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Close modal if it's a modal variant
    if (variant === 'modal' && onClose) {
      onClose();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Default form styling
  if (variant === 'default') {
    return (
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200">
        <div className="mb-6 sm:mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">Richiedi Informazioni</h3>
          <p className="text-base sm:text-lg text-black font-light">Compila il form per ricevere tutte le informazioni sui miei corsi</p>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="relative z-10">
              <label className="block text-black text-sm font-medium mb-2">Nome *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
                placeholder="Il tuo nome"
              />
            </div>
            
            <div className="relative z-10">
              <label className="block text-black text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
                placeholder="la.tua@email.com"
              />
            </div>
          </div>
          
          <div className="relative z-10">
            <label className="block text-black text-sm font-medium mb-2">Telefono</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
              placeholder="+39 123 456 7890"
            />
          </div>
          
          <div className="relative z-10">
            <label className="block text-black text-sm font-medium mb-2">Messaggio *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors resize-none text-sm sm:text-base"
              placeholder="Dimmi di più sui corsi che ti interessano..."
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-full font-medium text-base flex items-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-black hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110"
            >
              <span className="relative z-10">Invia Messaggio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Modal form styling
  return (
    <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white elegant-quote">Richiedi Informazioni</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white text-xl sm:text-2xl"
        >
          ×
        </button>
      </div>
      
      <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
        <div className="relative z-10">
          <label className="block text-white text-sm font-medium mb-2">Nome *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
            placeholder="Il tuo nome"
          />
        </div>
        
        <div className="relative z-10">
          <label className="block text-white text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
            placeholder="la.tua@email.com"
          />
        </div>
        
        <div className="relative z-10">
          <label className="block text-white text-sm font-medium mb-2">Telefono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
            placeholder="+39 123 456 7890"
          />
        </div>
        
        <div className="relative z-10">
          <label className="block text-white text-sm font-medium mb-2">Messaggio *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none text-sm sm:text-base"
            placeholder="Dimmi di più sui corsi che ti interessano..."
          />
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-lg sm:rounded-xl font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            Annulla
          </button>
          <button
            type="submit"
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg sm:rounded-xl font-bold hover:bg-gray-200 transition-colors text-sm sm:text-base"
          >
            Invia Richiesta
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
