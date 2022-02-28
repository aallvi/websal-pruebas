import { DARK_THEME, LIGHT_THEME } from "../actions/theme.actions";


const initialState = {
  
    theme:{ }

}

const ThemeReducer = (state = initialState , action) => {

   switch (action.type) {
       case LIGHT_THEME:
           return {
            ...state,
            theme:action.payload
  
          }

       case DARK_THEME:
        return {
            ...state,
            theme:action.payload
  
          }

           
           
           
   
       default:
           break;
   }


      return state






}


export default ThemeReducer
