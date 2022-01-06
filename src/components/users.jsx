import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { obtenerSiguientePagina, obtenerUsuariosExito } from '../redux/userDusk';

const Users = () =>{
    const dispatch = useDispatch();

    const users = useSelector(store =>store.users.array)
    console.log(users)
    return(
        <div>
            <button onClick={ () => dispatch(obtenerUsuariosExito())}>Mostrar</button>
            <ul>
                {users.map(item => (
                    <li key = {item.id}>
                        {item.first_name}
                    </li>
                ))}
            </ul>
            <button onClick={()=>dispatch(obtenerSiguientePagina())}>Siguiente pagina</button>        
        </div>
    );
}

export default Users;