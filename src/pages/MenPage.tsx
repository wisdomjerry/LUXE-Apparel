// src/pages/MenPage.tsx
import ProductCard from "../components/ProductCard";
import { useAuth } from "../context/AuthContext";


export function MenPage() {
  const { requireAuth } = useAuth();

  const products = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: "89.00",
      image:
        "https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2xhc3NpYyUyMERlbmltJTIwSmFja2V0fGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      price: "35.00",
      image:
        "https://images.unsplash.com/photo-1758915214569-6f72affed688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FzdWFsJTIwVC1TaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Formal Suit",
      price: "250.00",
      image:
        "https://images.unsplash.com/photo-1689620471599-7be7db37e082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9ybWFsJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Leather Shoes",
      price: "120.00",
      image:
        "https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=hP4DwG4wiFJJrlqURQRPo1UHodmhiqI-KvAf1yGqU4o=",
    },
    {
      id: 5,
      name: "Casual Hoodie",
      price: "85.00",
      image:
        "https://media.istockphoto.com/id/2156880213/photo/cool-girl-wearing-a-gray-hoodie.webp?a=1&b=1&s=612x612&w=0&k=20&c=FxeaG1RcWpPheN8KGHCKrkxeIEGJ4Ml6zHuviVtFXFk=",
    },
    {
      id: 6,
      name: "Formal Trousers",
      price: "145.00",
      image:
        "https://media.istockphoto.com/id/1294103843/photo/pants-isolated-on-white-background-hanged-trousers-chino-pants.webp?a=1&b=1&s=612x612&w=0&k=20&c=u-us-7aWX-mxm3XVqw6XW1Ayh2CW7xTi0ROu9BkuxkI=",
    },
    {
      id: 7,
      name: "Snug Fit Jeans",
      price: "145.00",
      image:
        "https://images.unsplash.com/photo-1634564235572-cd6f37694266?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 8,
      name: "Fancy Trousers",
      price: "145.00",
      image:
        "https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?w=500&auto=format&fit=crop&q=60",
    },
  ];


   const handleAddToCart = (product: typeof products[0]) => {
    requireAuth(() => {
      // Get current cart from localStorage or start with empty array
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(`${product.name} added to cart`);
      
    });
  };

  return (
    <main className="space-y-16">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        <div
          className="h-[70vh] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1669207261271-a0041d4b0948?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwY2xvc2V0fGVufDB8fDB8fHww')",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Men</h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Explore the latest fashion for men.
            </p>
            <button
              onClick={() =>
                requireAuth(() => console.log("Shop Men collection"))
              }
              className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-yellow-100 transition-colors rounded-lg"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-5xl text-center font-serif mb-6">Shop All</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
               key={product.id}
              {...product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </section>

      {/* Men’s Style Guide + Accessories (joined, no gap) */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-3xl font-serif mb-4">Men’s Style Guide</h3>
          <p className="text-gray-700 mb-6">
            From business formals to casual streetwear, explore handpicked
            fashion tips for men.
          </p>
          <button
            onClick={() =>
              requireAuth(() => console.log("View Men’s Style Guide"))
            }
            className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Read More
          </button>
        </div>

        <div className="mt-16 bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h3 className="text-2xl font-serif mb-4">Essential Accessories</h3>
            <p className="text-gray-700 mb-6">
              Complete your outfit with our latest collection of men’s watches,
              belts, wallets, and more.
            </p>
            <button
              onClick={() =>
                requireAuth(() => console.log("Explore Men’s Accessories"))
              }
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Shop Accessories
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
