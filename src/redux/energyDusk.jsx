//const 
const dataInicial = {
    round: 1, 
    energy: 3,
    roundDone: false,
};
//types
const Sum_Energy = 'Sum_Energy';
const Max_Energy = 'Max_Energy';
const Add_Energy = 'Add_Energy';
const Add_Max_Energy = 'Add_Max_Energy';
const Reduce_Energy = 'Reduce_Energy';

//reducer
export default function playerReducer(state = dataInicial, action){
    switch(action.type){
        case Sum_Energy:
            return {
                    ...state,
                    round: action.payload.round,
                    energy: action.payload.energy,
                    roundDone: action.payload.roundDone
                   }
        case Max_Energy:
            return {
                    ...state,
                    round: action.payload.round,
                    energy: 10,
                    roundDone: action.payload.roundDone 
            }  
        case Add_Energy:
            return {
                    ...state,
                    energy: action.payload.energy,
                    
            }      
        case Add_Max_Energy:
            return{
                ...state, energy:action.payload.energy,
                
            }     
        case Reduce_Energy:
            return {
                ...state,energy: action.payload.energy,
                }       
            
        default:
            return state                    
    }
}

//actions
export const sumEnergy = () => (dispatch, getState)=>{
    let round = getState().player.round;
    let energy = getState().player.energy;
    
    round +=1;
    energy += 2;
    if(energy < 11){
        dispatch({
            type: Sum_Energy,
            payload: {
                    round: round,
                    energy: energy,
                    roundDone: true,
                }
            })
    }
    else{
        dispatch({
            type: Max_Energy,
            payload:{
                round: round,
                energy: 10,
                roundDone: true,
            }
        })
    }
    


}

export const addEnergy = () => (dispatch, getState)=>{
    let energy = getState().player.energy;
    
    energy +=1;
    if(energy < 10){
        dispatch({
            type: Add_Energy,
            payload: {
            
                energy: energy,
            }
        });
    }
    else{
        dispatch({
            type: Add_Max_Energy,
            payload: {
                energy: 10,
            }
        });
    }

}

export const reduceEnergy = () => (dispatch, getState)=>{
    let energy = getState().player.energy;
    energy -=1;

    dispatch({
        type: Reduce_Energy,
        payload: {
            energy: energy
        }
    });
}