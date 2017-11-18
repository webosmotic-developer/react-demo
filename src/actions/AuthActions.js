import * as types from '../constants/ActionTypes';

export function loginUser(name, password) {
    return {
        type: types.LOGIN_USER,
        name,
        password
    };
}