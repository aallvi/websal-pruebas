import {  ARR, DATA_FILTRADA, LINK_PDF, PHOTO_LINK,  } from "../actions/app.actions";

const initialState = {
    links: [],
    photo: ''

}

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case LINK_PDF: 
        return {
          ...state,
          links:[...state.links,action.payload]

        }
        case PHOTO_LINK: 
        return {
          ...state,
          photo: action.payload

        }
    
        default:
            break;
    }
    return state

}

export default AppReducer