//consts
const dataInicial = {
    cantCards: 18,
    cardsHand: 6
}
//types
const Cards_Of_Hand = 'Cards_Of_Hand';


//reducers
export default function cardsReducer(state = dataInicial, action){
    switch(action.type){
        case Cards_Of_Hand:
            return {...state, cantCards: action.payload.cantCards, cardsHand: action.payload.cardsHand}
        default:
            return state    
    }
}

//actions
export const cardsOfHand = () => (dispatch, getState)=>{
   
    let cantCards = getState().cards.cantCards;
    let cardsHand = getState().cards.cardsHand;
    dispatch({
        type: Cards_Of_Hand,
        payload:{
            cantCards: cantCards,
            cardsHand: cardsHand,
            }    
        }) 
    
}