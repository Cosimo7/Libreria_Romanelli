//logica del data layer
export const initialState = {
    cart: [],
    user: null,
};

export const getCartTotal = (cart) =>
    cart.reduce((amount, item) => item.price + amount, 0)



const reducer = (state, action) => {                            //il reducer gestirà tutte le action utilizzabili da altri file tramite il dispatch
    console.log(action);

    switch (action.type) {

        case 'CLEAR_CART':                                                      //action che ripulisce il carrello
            return {
                ...state,
                cart: []
            }
        
       
        case 'SET_USER':                                                        //action per settare l'utente
            return{
                ...state,
                user: action.user};
        
        case 'ADD_TO_CART':                                                     //action per l'aggiunta del prodotto

            return {
                ...state,
                cart: [...state.cart, action.item],
            };


        case 'REMOVE_FROM_CART':                                                //action per la rimozione del prodotto 

            let newCart = [...state.cart];

            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            //se l'id esiste allora rimuovi il prodotto
            if (index >= 0) {
                newCart.splice(index, 1);
            } else { };

            return {
                ...state,
                cart: newCart
            };
        default:
            return state;
    }
}

export default reducer;      // con export posso chiamare reducer fuori dalla funzione stessa
