import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";



const firebaseConfig = {
    apiKey: "AIzaSyC7nFyg69oLpG4Efd6V94lCV2SFCocRL8k",
    authDomain: "geniustalks-5c704.firebaseapp.com",
    projectId: "geniustalks-5c704",
    storageBucket: "geniustalks-5c704.appspot.com",
    messagingSenderId: "98584376738",
    appId: "1:98584376738:web:fe8d40ce7a5e9b6d2faefb",
    databaseURL:'https://geniustalks-5c704-default-rtdb.firebaseio.com/'
  };

  const app= getApps().length ?  getApp():initializeApp(firebaseConfig);
  const auth=getAuth(app)
  const db=getFirestore(app)
  const functions = getFunctions(app)
  



  export { auth,functions,db }