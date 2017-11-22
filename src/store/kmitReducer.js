import { GET_DATA_FULLFILLED,GET_DATA_PENDING } from "../actionType/actionType.js";

const initialState = {

  isLoading : false,
  content: []
}

const kmitsReducer =(state = initialState , action) => {
 switch(action.type){
   case GET_DATA_PENDING:
    return{
      isLoading: true,
      content: []
    };
   case GET_DATA_FULLFILLED:
   return {
  isLoading: false,
   content:[



   ]
 };
   default:
   return state;
 }

};

export default kmitsReducer;
