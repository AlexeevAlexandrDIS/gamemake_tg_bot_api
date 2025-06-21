import { useCart } from '../context/CartContext';
import Button from './Button';

function CartSummary() {
  const { getTotalPrice, items } = useCart();
  
  return (
    <div className="mt-8 mb-4">
      {items.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="font-bold mb-2 text-gray-900 dark:text-white">В вашей корзине:</h2>
          <div className="space-y-2 mb-4">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">{item.title}</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="h-px bg-gray-200 dark:bg-gray-700 my-3" />
          <div className="flex justify-between items-center font-bold">
            <span className="text-gray-900 dark:text-white">Итого:</span>
            <span className="text-lg text-indigo-600 dark:text-indigo-400">{getTotalPrice().toLocaleString()}</span>
          </div>
        </div>
      )}
      
      <div className="mt-4">
        <Button 
          onClick={() => alert('Оформление заказа')}
          disabled={items.length === 0}
        >
          {items.length === 0 ? 'Корзина пуста' : `КУПИТЬ ${getTotalPrice().toLocaleString()}`}
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;