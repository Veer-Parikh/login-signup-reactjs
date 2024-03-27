import firebase from 'firebase/app'
import "firebase/auth"
import dotenv from 'dotenv'
dotenv.firebaseConfig()

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_apikey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.envREACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  });

export const auth = app.auth()
export default app
  