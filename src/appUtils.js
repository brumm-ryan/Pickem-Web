import { auth } from './firebase/firebase';

export const getHeaders = async () => {
    return {
        headers: {
            'Authorization': `Bearer ${await getCurrentUserAuthToken()}`,
            'Content-Type': 'application/json',
        }
    }
}

export const getCurrentUserAuthToken = () => {
    return new Promise((resolve, reject) => {
        const user = auth.currentUser;

        if (user) {
            resolve(user.getIdToken());
        } else {
            reject(new Error('No user is currently signed in.'));
        }
    });
}