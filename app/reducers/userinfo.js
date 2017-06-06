import * as types from '../action-types/userinfo';

export function userInfo(state={},action) {
    switch (action.type){
        case types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}