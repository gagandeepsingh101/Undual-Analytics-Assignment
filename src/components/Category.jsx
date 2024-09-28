import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Category = ({ categories, onSelectCategory }) => {
    const [searchParams] = useSearchParams(); // Use useSearchParams for URL query parameters
    return (
        <div className="category-select mb-4 flex gap-2 items-center">
            <h2 className="text-xl font-semibold">Select Category</h2>
            <select
            className=' outline-none py-2 px-2 rounded-lg bg-gray-100 '
                value={searchParams.get("category") || ''}
                onChange={(e) => onSelectCategory(e.target.value)}
            >
                <option value="">All</option>
                {categories.map((category, index) => (
                    // Using the index of the array as a key
                    <option key={category.name + index} value={category?.name}>
                        {category?.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Category;
