import { db } from "@/db";
import { products } from "@/db/schema";
import ProductList from "./product-list";

export default async function HomePage() {
  const allProducts = await db.select().from(products);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Shoe Store
            </h1>
            <span className="text-sm text-gray-500">
              Powered by Nike
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Featured Products
        </h2>
        <ProductList products={allProducts} />
      </div>
    </main>
  );
}
