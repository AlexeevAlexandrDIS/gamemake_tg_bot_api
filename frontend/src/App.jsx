import { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import CartSummary from './components/CartSummary';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
          <div className="max-w-4xl mx-auto p-4">
            <Header onCartClick={() => setIsCartOpen(!isCartOpen)} />
            <main className="mt-6">
              <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
                Сборщик игрового ПК
              </h1>
              <ProductGrid />
              <CartSummary />
            </main>
          </div>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;