// src/pages/CollectionsPage.tsx
import ProductCard from "../components/ProductCard";
import { useAuth } from "../context/AuthContext";

export function CollectionsPage() {
  const { requireAuth } = useAuth();

  const products = [
    {
      id: 1,
      name: "Sneakers Collection",
      price: "99.00",
      image:
        "https://media.istockphoto.com/id/944152242/photo/shoes-on-a-rack-for-sale-at-shoe-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=7chnvQsr0BWhklJUxo8gZSI5sFaZ5MLXYz_5STxK3oA=",
    },
    {
      id: 2,
      name: "Summer Casual Set",
      price: "120.00",
      image:
        "https://images.unsplash.com/photo-1579014133304-7004d757f5d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1bW1lciUyMENhc3VhbCUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Evening Party Outfit",
      price: "180.00",
      image:
        "https://images.unsplash.com/photo-1587137276455-d0e42050e533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEV2ZW5pbmclMjBQYXJ0eSUyME91dGZpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Luxury Watch Set",
      price: "250.00",
      image:
        "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      name: "Haute Winter Ensemble",
      price: "150.00",
      image:
        "https://media.istockphoto.com/id/174477204/photo/music-band-in-winter-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=LvAcjOK8FuTNaDlZTDF9PQX5bzQtiZ9-8A_qsGKdX4M=",
    },
    {
      id: 6,
      name: "Spring Trend Sneakers",
      price: "150.00",
      image:
        "https://images.unsplash.com/photo-1675108657868-de290421805a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNwcmluZyUyMFRyZW5kJTIwU25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 7,
      name: "Urban Street Sneakers",
      price: "150.00",
      image:
        "https://images.unsplash.com/photo-1596423215455-7f91e01daacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXJiYW4lMjBTdHJlZXQlMjBTbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      name: "Cozy Winter Hoodie",
      price: "130.00",
      image:
        "https://images.unsplash.com/photo-1674695670808-0480f62cc7d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q296eSUyMFdpbnRlciUyMEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <main className="space-y-16">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div
          className="h-[70vh] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562008088-e8fe0711f7e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlY3Rpb24lMjBzaG9wJTIwY2xvc2V0fGVufDB8fDB8fHww')",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              Collections
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Curated collections to elevate your style.
            </p>
            <button
              onClick={() =>
                requireAuth(() => console.log("Explore collections"))
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
          <h3 className="text-3xl font-serif mb-4">Complete Your Collection</h3>
          <p className="text-gray-700 mb-6">
            Discover full outfits, curated sets, and exclusive collections.
          </p>
          <button
            onClick={() =>
              requireAuth(() => console.log("Explore full collections"))
            }
            className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="bg-gray-100 text-gray-900 py-16"
        style={{ marginTop: "0px" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-4">Join Our Newsletter</h3>
          <p className="mb-6 text-gray-700">
            Stay updated on new collections, special offers, and styling tips.
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
