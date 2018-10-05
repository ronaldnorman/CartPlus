const removeCartItemType = 'REMOVE_CART_ITEM';
const addCartItemType = 'ADD_CART_ITEM';
const searchProductsType = 'SEARCH_PRODUCTS';
const submitCartStartedType = 'SUBMIT_CART_STARTED';
const submitCartCompletedType = 'SUBMIT_CART_COMPLETED';
const inventory = [
    { id: 1, name: 'Product A', description: 'The description of this product A that it is really unique and you have to have it.', price: '40' },
    { id: 2, name: 'Product B', description: 'The description of this product B that it is really unique and you have to have it.', price: '50' },
    { id: 3, name: 'Product C', description: 'The description of this product C that it is really unique and you have to have it.', price: '60' },
    { id: 4, name: 'Product D', description: 'The description of this product D that it is really unique and you have to have it.', price: '70' },
    { id: 5, name: 'Product E', description: 'The description of this product E that it is really unique and you have to have it.', price: '80' },
];
const initialState = {
    cartTotals: {},
    cartItems: [],
    productItems: inventory,
    showSuccessAlert: false,
    showErrorAlert: false,
    isLoading: false
};

export const actionCreators = {
    addCartItem: newProductId => async (dispatch, getState) => {

        let productItem = getState().catalog.productItems.find(e => e.id === newProductId);
        const newCartItem = { id: newProductId, name: productItem.name, qty: '1', lineTotal: productItem.price };

        dispatch({ type: addCartItemType, newCartItem });
    },

    removeCartItem: productIdToRemove => async (dispatch) => {


        dispatch({ type: removeCartItemType, productIdToRemove });
    },

    searchProducts: searchText => async (dispatch) => {

        let filteredProductItems = inventory.filter(function (item) {
            return item.name.toLowerCase().search(
                searchText.toLowerCase()) !== -1;
        });

        dispatch({ type: searchProductsType, filteredProductItems });
    },

    submitCart: () => async (dispatch, getState) => {

        if (getState().catalog.cartItems.length == 0) {
            return;
        }

        dispatch({ type: submitCartStartedType });

        const url = 'api/Store/SubmitCart';

        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(
                {
                    cartItems: getState().catalog.cartItems,
                    cartTotals: getState().catalog.cartTotals
                })
        });

        const success = await response.json();

        dispatch({ type: submitCartCompletedType, success });
    }
};

export const reducer = (state, action) => {
  state = state || initialState;

    if (action.type === addCartItemType) {
        let found = state.cartItems.find(e => e.id === action.newCartItem.id);

        // Only add cart item if doesn't already exist
        if (!found) {
            let newCartItems = state.cartItems.concat(action.newCartItem);
            return { ...state, cartItems: newCartItems, cartTotals: calcCartTotals(newCartItems), showSuccessAlert: true };
        }
    }

    if (action.type === removeCartItemType) {
        let newCartItems = state.cartItems.filter(item => item.id !== action.productIdToRemove);
        return { ...state, cartItems: newCartItems, cartTotals: calcCartTotals(newCartItems), showSuccessAlert: false };
    }

    if (action.type === searchProductsType) {
        return { ...state, productItems: action.filteredProductItems, showSuccessAlert: false };
    }

    if (action.type === submitCartStartedType) {
        return { ...state, isLoading: true, showErrorAlert: false, showSuccessAlert: false };
    }

    if (action.type === submitCartCompletedType) {

        // Reset the shopping cart if it's was successfully submitted
        if (action.success) {
            return {
                ...state, cartItems: [], cartTotals: {}, isLoading: false, showErrorAlert: false, showSuccessAlert: true };
        }

        return { ...state, isLoading: false, showErrorAlert: true, showSuccessAlert: false };
    }

    return state;
};

const calcCartTotals = (cartItems) => {

    if (cartItems.length > 0) {
        let subTotal = cartItems.map(amount).reduce(sum);
        let tax = 0.05 * subTotal;
        let total = subTotal + tax;

        return {
            subTotal,
            tax,
            total
        };
    }

    return {};
}

function amount(item) {
    return Number(item.lineTotal);
}

function sum(prev, next) {
    return prev + next;
}
