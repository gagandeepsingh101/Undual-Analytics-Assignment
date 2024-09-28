const initialState = {
    categories: [],
    products: [],
    selectedCategory: '',
    search: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATEGORIES':
        return { ...state, categories: action.payload };
      case 'ADD_PRODUCTS':
        return { ...state, products: [...state.products, ...action.payload] };
      case 'SELECT_CATEGORY':
        return { ...state, selectedCategory: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  