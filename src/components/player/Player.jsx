import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sumEnergy, addEnergy, reduceEnergy } from '../../redux/energyDusk';
import { cardsOfHand } from '../../redux/cardsDusk';

/*Hasta ahora hay dos reducer, player y cards. Son dos state independientes pero que tienen qye ver
una vez que se ejecuta el boton de pasar turno se debe ejecutar la actualizacion de los estados,
el conteo de las energias funciona OK el problema esta en el conteo de las cartas. En el state de player que es
el de las energias hay una variable booleana inicializada en false. Cuando se ejecuta el boton de pasar round
cambia a true y esa seria la condicional para que se sumen y resten las cartas. hay varios aspectos que me han generado
duda y consumido toda la mañana. Y es como decirle a cardsOfHand(funcion que ejecuta la action) que se ejecute cuando
lea el estado de player.roundDone = true.

Ahi hago un intento de muchos que deben haber. pero tengo algo mal. en este momento la aplicacion se ejecuta pero no
hay nada en lo visual*/

const Player = () =>{
    const dispatch = useDispatch();
    const player = useSelector(store => store.player)
    const cards = useSelector(store => store.cards)
    
    

    return (
        <div>
            <h1>{player.round}</h1>
            <h2>{player.energy}</h2>
            <button onClick={()=>dispatch(addEnergy())}>Add</button>
            <button onClick={()=>dispatch(reduceEnergy())}>Put off</button>
            
            <div>
            {/*Pasar turno */}
            <button 
                className='btn btn-primary'
                onClick={()=>dispatch(sumEnergy())}
                onChange = {()=>{
                    if(player.roundDone === true)
                     dispatch(cardsOfHand())
                }}
                >Next round</button>
            </div>

            <div>
            <h2>Cards of hand {cards.cardsHand}</h2>
            <div>
               <h2>Maso of cards {cards.cantCards}</h2> 
            </div>
        </div>
    </div>    
    
    );
}


export default Player;