import * as types from '../constants/ActionTypes';


const initialState = {
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_USER:
            return $.ajax({
                url: "https://api-mean.herokuapp.com/auth/local",
                method: "POST",
                data: {
                    email: action.name,
                    password: action.password
                }
            })
            .done(function (response) {
                console.log("response", response);
                return {"data": "success"};
            })
            .fail(function () {
                return {"data":"error"};
            });
        default:
            return state;
    }
}