// src/pages/AccessoriesPage.tsx
import ProductCard from "../components/ProductCard";
import { useAuth } from "../context/AuthContext";

export function AccessoriesPage() {
  const { requireAuth } = useAuth();

  const products = [
    {
      id: 1,
      name: "Timeless Classic Watch",
      price: "250.00",
      image:
        "https://media.istockphoto.com/id/515915980/photo/well-dressed-man-putting-his-wrist-watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=BSH12adxegwBIGffwRSsxDMFpaFn49bD_9N7I-WLERo=",
    },
    {
      id: 2,
      name: "Premium Leather Wallet",
      price: "80.00",
      image:
        "https://images.unsplash.com/photo-1632274472865-015a1de0ddd0?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Aviator Sunglasses",
      price: "120.00",
      image:
        "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Silk Elegance Scarf",
      price: "60.00",
      image:
        "https://plus.unsplash.com/premium_photo-1672680441245-fcd192661cb9?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      name: "Luxury Cufflinks",
      price: "95.00",
      image:
        "https://media.istockphoto.com/id/471073203/photo/diamond-cufflinks.webp?a=1&b=1&s=612x612&w=0&k=20&c=JXASOIeoBNmNJQlr_G1z7yra5plH9B0aSvxZ9DiaLbQ=",
    },
    {
      id: 6,
      name: "Elegant Leather Belt",
      price: "70.00",
      image:
        "https://plus.unsplash.com/premium_photo-1726769202190-ad2a3f2f360b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RWxlZ2FudCUyMExlYXRoZXIlMjBCZWx0fGVufDB8fDB8fHww",
    },
    {
      id: 7,
      name: "Designer Bracelet",
      price: "110.00",
      image:
        "https://images.unsplash.com/photo-1628785517892-dbcd2f2719ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERlc2lnbmVyJTIwQnJhY2VsZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 8,
      name: "Classic Fedora Hat",
      price: "85.00",
      image:
        "https://images.unsplash.com/photo-1745284504844-7979176dc29b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENsYXNzaWMlMjBGZWRvcmElMjBIYXR8ZW58MHx8MHx8fDA%3D",
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
              "url('https://plus.unsplash.com/premium_photo-1681276170683-706111cf496e?w=1200')",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              Accessories
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Complete your look with our premium accessories.
            </p>
            <button
              onClick={() =>
                requireAuth(() => console.log("Go to accessories cart or shop"))
              }
              className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-yellow-100 transition-colors rounded-lg"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* All Products */}
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
          <h3 className="text-3xl font-serif mb-4">Complete Your Look</h3>
          <p className="text-gray-700 mb-6">
            Discover unique accessories to enhance your style.
          </p>
          <button
            onClick={() =>
              requireAuth(() => console.log("Explore more accessories"))
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
            Stay updated on new arrivals and exclusive offers.
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
