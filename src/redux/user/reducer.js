// O reducer armazena o state

import UserActionsTypes from "./action-types"

// estado inicial de quando acessamos a aplicacao
const initialState = {
    currentUser: null,
    
}

// pode ser utilizado o switch case ao inves de ifs
const userReducer = (state = initialState, action) => {
    // quando uma action for despachada (dispatch) com esse tipo 'users/login' ele vai pegar todo o objeto do return e vai jogar no state
    if(action.type === UserActionsTypes.LOGIN){
        return{
            // sempre que for retornar um novo objeto é necessario  retornar tudo que ta no state fazendo o spreed operator
            ...state,
            currentUser: 10
        }
    }

    if(action.type === UserActionsTypes.LOGOUT){
        return{
            ...state,
            currentUser: null
        }
    }

    // por padrão colocamos para retonar o state caso nao entre no if
    return state
}

export default userReducer