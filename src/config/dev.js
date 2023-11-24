import { defaultConfig } from "../config/default";

const config = {
    API_URL: Boolean(process.env.API_URL) ? process.env.API_URL : defaultConfig.API_URL,
    firebaseConfig: {
        apiKey: process.env.API_KEY ? process.env.API_KEY : defaultConfig.firebaseConfig.apiKey,
        authDomain: process.env.AUTH_DOMAIN ? process.env.AUTH_DOMAIN : defaultConfig.firebaseConfig.authDomain,
        projectId: process.env.PROJECT_ID ? process.env.PROJECT_ID : defaultConfig.firebaseConfig.projectId,
        storageBucket: process.env.STORAGE_BUCKET ? process.env.STORAGE_BUCKET : defaultConfig.firebaseConfig.storageBucket,
        messagingSenderId: process.env.MESSAGING_SENDER_ID ? process.env.MESSAGING_SENDER_ID : defaultConfig.firebaseConfig.messagingSenderId,
        appId: process.env.APP_ID ? process.env.APP_ID : defaultConfig.firebaseConfig.appId,
        measurementId: process.env.MEASUREMENT_ID ? process.env.MEASUREMENT_ID : defaultConfig.firebaseConfig.measurementId
    }
}

module.exports = {config}