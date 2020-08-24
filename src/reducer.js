
export const initialState ={
    basket:[],
    user:null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);



const reducer=(state, action) => {
    console.log(action);

    switch(action.type){

        case "SET_USER":
            return {
                ...state,
                user:action.user,
            };
        break;
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        //logic for adding item to basket
        break;
        case 'REMOVE FROM BASKET':

            let newBasket =[...state.basket];

            const index =state.basket.findIndex((basketItem) => basketItem.id ===action.id);

            if (index >=0) {

                newBasket.splice(index, 1);

            }else{
                console.warn('Cant remove (id: $(action.id)as its no');
            }
            return {...state, basket:newBasket,};
        //logic from remove from basket
        break;
        default:
            return state;
    }
};

export default reducer;