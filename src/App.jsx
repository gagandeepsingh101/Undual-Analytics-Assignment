import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts, setSelectedCategory, resetProducts } from './redux/productSlice';
import Category from './components/Category';
import ProductList from './components/ProductList';
import { useSearchParams } from 'react-router-dom';


/*  
  Limitation 1: If there are duplicate products, they are re-appended when "Load More" is clicked.
  Limitation 2: Performance could be impacted if a large number of products are loaded without clearing the list.  
  Limitation 3: Search functionality might behave inconsistently if both category and search query are used together.
*/


const App = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [skip, setSkip] = useState(0);
  const { categories, products, selectedCategory } = useSelector((state) => state.products);

  // Fetch categories on mount
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Synchronize URL params with Redux state
  useEffect(() => {
    const category = searchParams.get('category') || '';
    const searchQuery = searchParams.get('search') || '';
    setSearch(searchQuery);

    dispatch(setSelectedCategory(category));
    dispatch(resetProducts()); // Reset products when category or search changes
    dispatch(fetchProducts({ category, searchQuery, skip: 0 }));
  }, [searchParams, dispatch]);

  const handleCategorySelect = (category) => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (search) params.set('search', search);
    setSkip(0); // Reset skip for new data
    setSearchParams(params); // Update the URL
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (search) params.set('search', search);
    setSkip(0); // Reset skip for new data
    setSearchParams(params); // Update URL
  };

  const handleLoadMore = () => {
    const newSkip = skip + 10;
    setSkip(newSkip);
    dispatch(fetchProducts({ category: selectedCategory, searchQuery: search, skip: newSkip }));
  };

  console.log(products);

  return (
    <div className="container mx-auto flex items-center justify-center flex-col gap-10 w-screen h-fit">
      <h1 className="text-3xl font-bold text-center text-blue-700 my-4"> 🛒 Product Store</h1>
      <div className='w-full h-fit flex items-center '>
        <Category categories={categories} onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />

        <form onSubmit={handleSearchSubmit} className="flex justify-center w-1/2">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
            className="border border-gray-300 rounded-lg p-2 w-1/2 mr-2"
          />
          <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition">
            Search
          </button>
        </form>

      </div>
      <ProductList products={products} />
      {products.length > 0 &&
        <button
          aria-disabled={products.length < 10}
          disabled={products.length < 10} // Disable the button when conditions are met
          onClick={handleLoadMore}
          className={`load-more my-10 px-4 py-2 rounded-lg transition 
        ${products.length < 10 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}
    `}>
          Load More
        </button>
      }
    </div>
  );
};

export default App;
