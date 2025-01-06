// reducer.js
export const initialState = {
    basket: [],  // Initialisation du panier comme tableau vide
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],  // Ajouter un article au panier
            };
        case "SET_LOGIN":
            return {
                ...state,
                loginuser: action.user
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((item) => item.id === action.id);
            let newbasket = [...state.basket];
            if (index >= 0) {
                newbasket.splice(index, 1);  // Retirer un article du panier
            }
            return {
                ...state,
                basket: newbasket,
            };
        default:
            return state;
    }
};
export default reducer;