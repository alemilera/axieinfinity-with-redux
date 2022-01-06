import axios from 'axios';

//const
const dataInicial = {
    array: [],
    page: 1
}

//types 
const OBTEBER_USUARIOS_EXITO = 'OBTEBER_USUARIOS_EXITO'; 
const OBTENER_SIGUIENTE_PAGINA = 'OBTENER_SIGUIENTE_PAGINA';
//reducer
export default function userReducer(state = dataInicial, action){
    switch(action.type){
        case OBTEBER_USUARIOS_EXITO:
            return {...state, array: action.payload}
        case OBTENER_SIGUIENTE_PAGINA:
            return {...state, array: action.payload.array, page: action.payload.page}    
        default:
            return state    
    }
}

//actions
export const obtenerUsuariosExito = () =>async(dispatch, getState)=>{
    const page = getState().users.page
    try{
        const res = await axios.get(`https://reqres.in/api/users?page=${page}`)
        dispatch({
            type: OBTEBER_USUARIOS_EXITO,
            payload: res.data.data,
        })
    }
    catch(error){
        console.log(error)
    }
}

export const obtenerSiguientePagina = () =>async(dispatch, getState)=>{
    const page = getState().users.page
    const siguiente = page + 1
    try{
        const res = await axios.get(`https://reqres.in/api/users?page=${siguiente}`)
        dispatch({
            type: OBTENER_SIGUIENTE_PAGINA,
            payload: {
                array: res.data.data,
                page: siguiente
            }
        })
    }
    catch(error){
        console.log(error)
    }
}