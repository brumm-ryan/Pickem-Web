import { auth } from './firebase/firebase';
import axios from "axios";

export const getHeaders = async () => {
    const authToken = await getCurrentUserAuthToken();
    console.log('Auth token: ');
    console.log(authToken);
    const headerObj = { headers: {'Content-Type': 'application/json'}};
    if (authToken) {
        headerObj.headers['Authorization'] = `Bearer ${authToken}`
    }
    return headerObj;
}

export const getCurrentUserAuthToken = () => {
    return new Promise((resolve, reject) => {
        const user = auth.currentUser;
        if (user) {
            resolve(user.getIdToken());
        } else {
            resolve("");
        }
    });
}

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Do whatever you want with the response error here:
    console.log(error);
    // But, be SURE to return the rejected promise, so the caller still has
    // the option of additional specialized handling at the call-site:
    return Promise.reject(error);
});