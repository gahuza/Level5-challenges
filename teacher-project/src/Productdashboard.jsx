import React, { useEffect, useState } from "react";

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products and categories together
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🧠 Run both API calls at the same time
        const [productsRes, categoriesRes] = await Promise.all([
          fetch("https://fakestoreapi.com/products"),
          fetch("https://fakestoreapi.com/products/categories"),
        ]);

        // Wait for both responses and parse JSON
        const [productsData, categoriesData] = await Promise.all([
          productsRes.json(),
          categoriesRes.json(),
        ]);

        // Update state after both are done
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError("Failed to load data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-blue-600">Loading data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Product Dashboard
      </h2>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Categories</h3>
        <ul className="list-disc pl-6">
          {categories.map((cat) => (
            <li key={cat} className="capitalize text-gray-600">{cat}</li>
          ))}
        </ul>
      </div>

      {/* Products */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <div key={p.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h4 className="font-medium text-gray-800">{p.title}</h4>
              <p className="text-gray-500 text-sm">${p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDashboard;
