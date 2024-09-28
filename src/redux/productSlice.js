import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to fetch categories
export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    return await response.json();
});

// Thunk to fetch products based on category, search term, and pagination
export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({ category, searchQuery, skip }) => {
    let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;
    if (category === "all") {
        return data.products.filter((product) => product.title === searchQuery)
    }
    if (category) url = `https://dummyjson.com/products/category/${category}?limit=10&skip=${skip}`;
    if (searchQuery !== "") {
        // Fixing the URL for search to include both query and pagination
        url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=10&skip=${skip}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log(data.products);
    return data.products;
});


// Product slice
const productSlice = createSlice({
    name: 'products',
    initialState: {
        categories: [],
        products: [],
        selectedCategory: '',
        loading: false,
        error: null,
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        resetProducts: (state) => {
            state.products = []; // Clear the product list
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = [...state.products, ...action.payload]; // Append products for pagination
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setSelectedCategory, resetProducts } = productSlice.actions;
export default productSlice.reducer;
