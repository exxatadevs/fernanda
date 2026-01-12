import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function FullscreenMenu({ isOpen, onClose, onNavigate }: FullscreenMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServiceClick = (service: string) => {
    onNavigate(service);
    onClose();
  };

  const handleMenuClick = () => {
    onNavigate('home');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] overflow-y-auto" style={{ backgroundColor: '#aa0e0e' }}
        >
          {/* Header do menu */}
          <div className="px-8 py-6 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <img 
                src="/logo_white_1.png" 
                alt="FERNANDA - Human Intelligence, Applied" 
                className="h-24 w-auto"
              />
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/10 p-2 rounded transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Conteúdo do menu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-88px)]">
            {/* Lado esquerdo - Navegação */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="p-12 lg:p-16 flex flex-col justify-center border-r border-white/10"
            >
              <nav className="space-y-8">
                <MenuItem text="INÍCIO" onClick={handleMenuClick} />
                <MenuItem text="SOBRE" onClick={() => handleServiceClick('sobre')} />
                <MenuItem text="METODOLOGIA" onClick={() => handleServiceClick('metodologia')} />
                
                {/* Menu Serviços com Dropdown */}
                <div>
                  <MenuItem 
                    text="SERVIÇOS" 
                    hasDropdown 
                    onClick={() => setServicesOpen(!servicesOpen)}
                  />
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden ml-8 mt-4 space-y-4"
                      >
                        <SubMenuItem 
                          text="Cyberdefense" 
                          onClick={() => handleServiceClick('cyberdefense')}
                        />
                        <SubMenuItem 
                          text="Consciência Situacional" 
                          onClick={() => handleServiceClick('consciencia-situacional')}
                        />
                        <SubMenuItem 
                          text="Acordo e Verdade" 
                          onClick={() => handleServiceClick('assistencia-tecnica')}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <MenuItem text="CASOS" onClick={() => handleServiceClick('casos')} />
                <MenuItem text="CONTATO" onClick={() => handleServiceClick('contato')} />
              </nav>
            </motion.div>

            {/* Lado direito - Endereços */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="p-12 lg:p-16 flex flex-col justify-center gap-8"
            >
              <AddressBox
                city="Belo Horizonte/MG"
                address="Av. Getúlio Vargas, n° 671, 8° e 10° Andar"
                district="Funcionários"
              />
              
              <AddressBox
                city="São Paulo/SP"
                address="Av. Engenheiro Luiz Carlos Berrini, n° 105"
                district="Ed. Thera Berrini Office, Sala 111, Brooklin"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface MenuItemProps {
  text: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}

function MenuItem({ text, hasDropdown, onClick }: MenuItemProps) {
  return (
    <motion.a
      href="#"
      className="flex items-center justify-between text-white hover:text-gray-300 transition-colors group"
      whileHover={{ x: 10 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <span className="text-3xl lg:text-4xl uppercase tracking-wide">{text}</span>
      {hasDropdown && (
        <ChevronDown className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
      )}
    </motion.a>
  );
}

interface SubMenuItemProps {
  text: string;
  onClick?: () => void;
}

function SubMenuItem({ text, onClick }: SubMenuItemProps) {
  return (
    <motion.a
      href="#"
      className="flex items-center justify-between text-white hover:text-gray-300 transition-colors group"
      whileHover={{ x: 10 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <span className="text-3xl lg:text-4xl uppercase tracking-wide">{text}</span>
    </motion.a>
  );
}

interface AddressBoxProps {
  city: string;
  address: string;
  district: string;
}

function AddressBox({ city, address, district }: AddressBoxProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="border border-white/20 p-8 hover:border-white/40 transition-colors"
    >
      <h3 className="text-white text-xl mb-4">{city}</h3>
      <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
        {address}
      </p>
      <p className="text-gray-400 text-sm uppercase tracking-wider">
        {district}
      </p>
    </motion.div>
  );
}