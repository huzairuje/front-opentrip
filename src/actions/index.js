import axios from 'axios';

const ROOT_URL = "https://sandbox.opentripapp.com";
const API_KEY = "ops:fVC2AygWV2:gkFBczBifQfJoQLGb2WMENmwG";
const AXIOS_INSTANCE = axios.create({
    baseURL: ROOT_URL,
    headers: {
        'Authorization':`Bearer ${API_KEY}`,
        'x-api-key':API_KEY
    }
})

export const FETCH_TRIPS = 'fetch_trip';
export const LOGIN = 'login';
export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

// export function openLoginBox(open) {
//     return {
//         type: 'OPEN_LOGINBOX',
//         payload: open
//     };
// }

export function fetchDataTrips() {
    const request = AXIOS_INSTANCE.get(`${ROOT_URL}/trip/by_explore`);

    return{
        type: FETCH_TRIPS,
        payload: request
    }
}

export function login(values, callback) {
    const request = AXIOS_INSTANCE.post(`${ROOT_URL}/user/login`, values);    
    request.then(()=>{
        callback();
    })
    return{
        type: LOGIN,
        payload: request
    }
}

export function signInAction({email, password}, history) {
    return async (dispatch) => {
        try {
            const res = await AXIOS_INSTANCE.post(`${ROOT_URL}/user/login`, { email, password });
            dispatch({ type: AUTHENTICATED });
            localStorage.setItem('user', res.data.data.access_token)
            history.push('/create_trip');
        } catch (error) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
            });
        }
    }
}