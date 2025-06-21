import { Moon, Sun, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import {useTelegram} from '../hooks/useTelegram.js';

function Header({ onCartClick }) {
  const { getItemCount } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const {user, onClose} = useTelegram();


  return (
    <header className="py-4 px-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white">
          <span className="font-bold text-xs">PC</span>
        </div>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">GameMake</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          {isDark ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
        </button>
        <button 
          onClick={onCartClick}
          className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <ShoppingCart size={20} className="dark:text-white" />
          {getItemCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getItemCount()}
            </span>
          )}
        </button>
        <span className="text-gray-600 dark:text-gray-300 text-sm">{user?.username}</span>
      </div>
    </header>
  );
}

export default Header;