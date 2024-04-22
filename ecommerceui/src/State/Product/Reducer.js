import { act } from "react-dom/test-utils"
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, DELETE_PRODUCT_SUCCESS } from "./ActionType"

const initialState={
    products:[],
    product:null,
    loading:false,
    error:null
}
export const customerProductReducer = (state=initialState,action)=> {

    switch(action.type){
        case FIND_PRODUCTS_REQUEST:
            case FIND_PRODUCT_BY_ID_SUCCESS:
                return {...state,loading: true, error: null}

        case FIND_PRODUCTS_SUCCESS:
            return{...state, loading: false, error: null, products: action.payload }
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return{...state, loading: false, error: null, product: action.payload }
        
            case DELETE_PRODUCT_SUCCESS:
                return{...state, loading: false, error: null,
                    //products: state.products.filter((item)=> item.id !== action.payload)}        
                    deletedProduct: action.payload }
            
            case FIND_PRODUCTS_FAILURE:
            case FIND_PRODUCT_BY_ID_FAILURE:
                return{...state, loading: false, error: action.payload}
            default:
                return state;

        }
             
}