import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <div className="flex flex-col items-center my-10 text-center">
          <span className="text-2xl text-gray-700">🚫 No Product Found 😔</span>
          <p className="text-lg text-gray-600">Search again for new products!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="product-item bg-white flex flex-col gap-2 rounded-lg shadow-md p-4 hover:cursor-pointer hover:shadow-lg transition hover:bg-blue-50">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-red-400 font-bold capitalize">{product.category}</p>
              <p className="text-blue-500 font-bold">Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
