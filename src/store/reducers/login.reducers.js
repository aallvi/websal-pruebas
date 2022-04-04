import { LOG_OUT, SIGN_IN,RENOV } from "../actions/login.actions";

const initialState = {
    data: null,
    token: null,
    autenticado: 'autenticado',
    errorMsg: null
}

const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                data:action.payload,
                token:action.token,
                autenticado: 'autorizado'

            }
        case LOG_OUT:
            return {
                ...state,
                data:null,
                token:null,
                autenticado: 'no-autorizado'

            }
        case RENOV:
            return {
                ...state,
                data:null,
                token:action.payload,
                autenticado: 'autorizado'

            }
    
        default:
            break;
    }


    return state
}


export default LoginReducer