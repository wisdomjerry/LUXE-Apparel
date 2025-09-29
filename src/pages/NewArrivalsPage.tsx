import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

// ProductCard component
interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category?: string;
}

function ProductCard({ image, name, price, category }: ProductCardProps) {
  return (
    <div className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <div className="w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        {category && <p className="text-sm text-gray-500">{category}</p>}
        <h3 className="mt-1 text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-gray-900">${price}</p>
      </div>
    </div>
  );
}

// Main NewArrivalsPage component
export function NewArrivalsPage() {
  const { requireAuth } = useAuth();

  // Protect the page
  requireAuth(() => {});

  const products = [
    { id: 1, name: "Silk Blend Blazer", price: "289.00", image: "https://images.unsplash.com/photo-1602030716310-c9dfd37136fe?w=500" },
    { id: 2, name: "Cashmere Sweater", price: "179.00", image: "https://images.unsplash.com/photo-1687275170170-a54128a6d2b5?w=500" },
    { id: 3, name: "Tailored Wool Coat", price: "349.00", image: "https://images.unsplash.com/photo-1715408153725-186c6c77fb45?w=500" },
    { id: 4, name: "Premium Denim Jeans", price: "149.00", image: "https://images.unsplash.com/photo-1560241088-7ddb7e9513b3?w=500" },
  ];

  const categories = [
    {
      id: 1,
      name: "Women's Collection",
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1972',
      route: "/women"
    },
    {
      id: 2,
      name: "Men's Collection",
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974',
      route: "/men"
    },
    {
      id: 3,
      name: "Accessories",
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D',
      route: "/accessories"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full mb-12">
        {/* Hero Image */}
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
          alt="Autumn Collection 2023"
          className="w-full h-full object-cover"
        />

        {/* Overlay and Content */}
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Autumn Collection 2023</h2>
            <p className="text-lg md:text-xl mb-4 max-w-xl mx-auto">
              Discover timeless elegance with our latest collection.
            </p>
            <Link to={"/shop"}>
              <button className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-yellow-100 transition-colors rounded-lg">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Discover our most coveted pieces, crafted with exceptional materials and attention to detail.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our curated collections for every style and occasion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="relative group rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                    <Link to={category.route}>
                      <button className="bg-white text-gray-900 px-6 py-2 text-sm font-medium hover:bg-yellow-100 transition-colors rounded-lg">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Community</h2>
          <p className="text-gray-300 mb-8">Subscribe to receive updates on new arrivals, special offers, and styling tips.</p>
          <form className="max-w-md mx-auto gap-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-900"
              required
            />
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
