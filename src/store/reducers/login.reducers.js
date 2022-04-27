import { LOG_OUT, SIGN_IN,RENOV, LOADING } from "../actions/login.actions";

const initialState = {
    data: null,
    token: null,
    autenticado: 'checking',
    errorMsg: null,
    loading: false
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
        case LOADING:
            return {
                ...state,
                loading: !state.loading

            }
    
        default:
            break;
    }


    return state
}


export default LoginReducer