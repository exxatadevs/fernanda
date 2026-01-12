import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onContactClick?: () => void;
}

export function Header({ onMenuClick, onContactClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between">
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          window.location.hash = '';
        }}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <img 
          src="/logo_white_1.png" 
          alt="FERNANDA - Human Intelligence, Applied" 
          className="h-16 w-auto"
        />
      </a>
      
      <div className="flex items-center gap-6">
        <button 
          onClick={() => {
            if (onContactClick) onContactClick();
            else window.location.hash = 'contato';
          }}
          className="px-6 py-2 border border-white/30 text-white text-sm tracking-wider hover:bg-white/10 transition-colors"
        >
          FALE CONOSCO
        </button>
        <button 
          onClick={onMenuClick}
          className="text-white hover:bg-white/10 p-2 rounded transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}