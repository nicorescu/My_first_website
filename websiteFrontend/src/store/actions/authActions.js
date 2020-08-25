import API from '../utils/api';

export const login = (email, pass) => {
    return (dispatch) => {
        console.log(API);
        API.login(email, pass, res => {
            console.log("Result", res.data);
            dispatch({
                type: 'LOGIN',
                payload: {
                    email: email,
                    token: res.data.id,
                    userId: res.data.userId
                }
            });

            API.getUser(res.data.userId, res.data.id, res2 => {
                dispatch({
                    type: "AFTER_LOGIN",
                    payload: res2.data
                });
            });
        });
    }
}

export const register = (name, email, pass) => {
    return dispatch => {
        API.register(name, email, pass, (res) => {
            if (res.status === 200) {
                dispatch(login(email, pass));
            }
            else {
                if (res) {
                    dispatch({
                        type: 'SHOW_ERROR',
                        payload: "An error occured, do you already have an account?"
                    })
                }
            }
        })
    }
}