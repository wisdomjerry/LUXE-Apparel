import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between border p-4 rounded">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded"/>
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Clear Cart
              </button>
             
              <Link to="/checkout">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
