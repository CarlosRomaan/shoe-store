"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart-store";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  inStock: boolean;
  createdAt: Date;
}

export default function ProductList({ products }: { products: Product[] }) {
  const addItem = useCartStore((state) => state.addItem);
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <>
      <div className="mb-4 text-right text-sm text-gray-600">
        Cart: {totalItems()} item(s)
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found. Run the seed script to populate the database.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-md"
            >
              <div className="relative h-64 w-full bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                  {product.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.inStock ? (
                    <button
                      onClick={() =>
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        })
                      }
                      className="cursor-pointer rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <span className="text-sm font-medium text-red-500">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
