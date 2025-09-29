import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: string;
  onAddToCart?: () => void; // optional prop for adding to cart
}

const ProductCard: React.FC<ProductCardProps> = ({ id: _id, image, name, price, onAddToCart }) => {
   const { requireAuth } = useAuth(); // ✅ use your AuthContext
    const { addToCart } = useCart();
  

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition group">
      {/* Image */}
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-gray-700">${price}</p>
         <button
          onClick={() =>
            requireAuth(() => {
              const product = { id: _id, image, name, price };
              addToCart(product);
              console.log(`${product.name} added to cart`);
              if (onAddToCart) onAddToCart();
            })
          }
          className="mt-4 w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
