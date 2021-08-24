import { authConstants } from "../action/constant";

const initState = {
    name:'riz'
};
export default ((state = initState), action){
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state={

            ...state
        }
        break;
    }
    return state;
};
