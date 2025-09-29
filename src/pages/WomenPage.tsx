// src/pages/WomenPage.tsx
import ProductCard from "../components/ProductCard";
import { useAuth } from "../context/AuthContext";

export function WomenPage() {
  const { requireAuth } = useAuth();

  const products = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: "120.00",
      image:
        "https://media.istockphoto.com/id/469062542/photo/young-woman-running-on-grass.webp?a=1&b=1&s=612x612&w=0&k=20&c=syPLpNRTyxC9dHrqdFaRiGT9s4hFTMRQpn2MSAHwt0I=",
    },
    {
      id: 2,
      name: "Elegant Evening Gown",
      price: "250.00",
      image:
        "https://images.unsplash.com/photo-1571682262898-48532c58b3a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlZ2FudCUyMEV2ZW5pbmclMjBHb3dufGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Casual Summer Top",
      price: "45.00",
      image:
        "https://plus.unsplash.com/premium_photo-1664298388542-a1e6d67dcdc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FzdWFsJTIwU3VtbWVyJTIwVG9wfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Denim Shorts",
      price: "60.00",
      image:
        "https://media.istockphoto.com/id/695708092/photo/one-short-blue-jeans-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=FduTyaKpSD6tK90V0jCH9-9KFGb3Csy26U9pJjL7HEw=",
    },
    {
      id: 5,
      name: "Classic White Shirt",
      price: "70.00",
      image:
        "https://images.unsplash.com/photo-1692862061691-5555f2bbf57d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2xhc3NpYyUyMFdoaXRlJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "Leather Handbag",
      price: "180.00",
      image:
        "https://plus.unsplash.com/premium_photo-1670984076180-22a6c8f27f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TGVhdGhlciUyMEhhbmRiYWd8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 7,
      name: "Sneakers",
      price: "95.00",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 8,
      name: "Stylish Sunglasses",
      price: "50.00",
      image:
        "https://images.unsplash.com/photo-1655849676216-bf75dcde64e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3R5bGlzaCUyMFN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <main className="space-y-16">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>
        <div
          className="h-[70vh] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1749016750415-d0952eb0a221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwc2hvcCUyMGNsb3NldHxlbnwwfHwwfHx8MA%3D%3D')",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Women</h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Explore the latest fashion for women.
            </p>
            <button
              onClick={() =>
                requireAuth(() => console.log("Shop Women collection"))
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
              onAddToCart={() =>
                requireAuth(() => console.log(`Add ${product.name} to cart`))
              }
            />
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="bg-gray-200 py-16 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-3xl font-serif mb-4">Style Made for You</h3>
          <p className="text-gray-700 mb-6">
            From chic dresses to everyday essentials, discover fashion that fits
            your lifestyle.
          </p>
          <button
            onClick={() =>
              requireAuth(() => console.log("Explore more women products"))
            }
            className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="bg-gray-100 text-gray-900 py-16"
        style={{ marginTop: "0px" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-4">Stay in Style</h3>
          <p className="mb-6 text-gray-700">
            Get the latest trends, seasonal picks, and exclusive offers
            delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded flex-1"
            />
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
