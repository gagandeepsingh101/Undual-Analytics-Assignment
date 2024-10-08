# 🛒 Product Store - Redux Toolkit & Thunk Integration

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [State Management with Redux Toolkit](#state-management-with-redux-toolkit)
5. [Asynchronous Actions with Redux Thunk](#asynchronous-actions-with-redux-thunk)
6. [Folder Structure](#folder-structure)
7. [Installation](#installation)
8. [Usage](#usage)
9. [Limitations](#limitations)
---

## Project Overview

This is a product store web application built using **React**, **Redux Toolkit**, and **Redux Thunk** for state management and asynchronous API handling. The project fetches product data from a dummy API and allows users to filter products based on categories, search for products, and load more results as per pagination.

The application also utilizes URL query parameters to maintain the state between page reloads and user navigation. The Redux store is responsible for managing categories, selected category, search query, and the product list.

---

## Features

- **Category-based Filtering**: Users can filter products by selecting categories from a dropdown.
- **Search Functionality**: Users can search products by title.
- **Load More Products**: Supports pagination and allows users to load more products as needed.
- **Responsive Design**: The application is styled with Tailwind CSS, ensuring mobile-first responsiveness.
- **URL Synchronization**: Uses URL query parameters to maintain state across different pages or on page reload.

---

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Redux Toolkit**: For simplified state management with a more structured Redux architecture.
- **Redux Thunk**: For handling asynchronous operations like API calls.
- **Tailwind CSS**: For styling the UI with a utility-first CSS framework.
- **React Router DOM**: For routing and managing URL parameters.

---

## State Management with Redux Toolkit

This project uses **Redux Toolkit** for easier and more efficient state management. The state is divided into slices:

1. **Categories**: Stores the list of product categories fetched from the API.
2. **Products**: Stores the list of products based on the selected category, search query, and pagination.
3. **Loading/Error States**: Manages loading and error states for API requests.

Key functions:
- **`fetchCategories`**: Fetches the available product categories from the API.
- **`fetchProducts`**: Fetches products based on the selected category, search query, and pagination.

---

## Asynchronous Actions with Redux Thunk

The application uses **Redux Thunk** to handle asynchronous operations such as fetching categories and products from a remote API. Redux Thunk allows dispatching asynchronous action creators to perform side effects before dispatching a synchronous action to update the state.

In this project:
- **`fetchCategories`** and **`fetchProducts`** are asynchronous thunks created using `createAsyncThunk` to fetch data from an external API.
- **`extraReducers`** is used to handle the different states of async actions: `pending`, `fulfilled`, and `rejected`.

---

## Folder Structure

```
src/
│
├── components/
│   ├── Category.js        # Category selection component
│   └── ProductList.js     # Product listing component
│
├── redux/
│   ├── productSlice.js    # Redux slice for product state management
│   └── store.js           # Redux store configuration
│
├── App.js                 # Main application file
└── index.js               # Entry point for React
```

---

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gagandeepsingh101/Undual-Analytics-Assignment
   cd product-store
   ```

2. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed on your machine. Then run:
   ```bash
   npm install
   ```

3. **Run the application**:
   After the dependencies are installed, start the development server:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

---

## Usage

- **Category Selection**: Use the dropdown to filter products based on category.
- **Search Products**: Type in the search bar to find products by name.
- **Load More**: Click the "Load More" button at the bottom to fetch additional products.
- **URL Parameters**: The selected category and search query will be reflected in the URL, so you can share or bookmark the filtered product list.

---

## Limitations

1. **Performance Issues**: If too many products are loaded at once without removing old ones, the app may become slow or laggy.

2. **Inconsistent Search**: The search may not work as expected when both a category and a search term are used at the same time, leading to confusing results.

3. **Basic Search Functionality**: The search feature only finds products that match the exact title. It doesn't support searching for partial titles or similar words.

---
## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
