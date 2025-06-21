import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';

function ProductCard({ product }) {
  const { addToCart, items } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  
  const isInCart = items.some(item => item.id === product.id);
  
  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(product);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1000);
    }
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700"
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-2 mb-3 flex items-center justify-center h-32">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-28 object-contain"
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="mb-2">
            <h3 className="font-medium text-sm text-gray-600 dark:text-gray-400">{product.category}</h3>
            <h2 className="font-bold text-gray-900 dark:text-white mb-1">{product.title}</h2>
          </div>
          
          <div className="mt-auto">
            <p className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Стоимость: <span className="text-indigo-600 dark:text-indigo-400">{product.price.toLocaleString()}</span>
            </p>
            <Button 
              onClick={handleAddToCart} 
              disabled={isInCart}
              isSuccess={isAdded}
            >
              {isInCart ? 'В корзине' : 'Добавить в корзину'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;