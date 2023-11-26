// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import nextConfig from "/next.config";

const firebaseConfig = {
    apiKey: nextConfig.env.API_KEY,
    authDomain: nextConfig.env.AUTH_DOMAIN,
    projectId: nextConfig.env.PROJECT_ID,
    storageBucket: nextConfig.env.STORAGE_BUCKET,
    messagingSenderId: nextConfig.env.MESSAGING_SENDER_ID,
    appId: nextConfig.env.APP_ID,
    measurementId: nextConfig.env.MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;