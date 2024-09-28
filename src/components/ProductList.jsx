import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="product-item bg-white flex flex-col gap-2 rounded-lg shadow-md p-4 hover:cursor-pointer hover:shadow-lg transition hover:bg-blue-50">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-red-400 font-bold capitalize">{product.category}</p>
          <p className="text-blue-500 font-bold">Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
