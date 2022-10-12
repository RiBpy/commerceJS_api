import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyCwxPCTFEZFxz1nWI-AHDRqTHQ2csxQZMg",

    authDomain: "reactecommerceapi.firebaseapp.com",
    
    databaseURL: "https://reactecommerceapi-default-rtdb.firebaseio.com",

    projectId: "reactecommerceapi",

    storageBucket: "reactecommerceapi.appspot.com",

    messagingSenderId: "1074955701977",

    appId: "1:1074955701977:web:8623918d0a162bed9538c8"

  };

  const app=getApps.length>0?getApp():initializeApp(firebaseConfig);//If app is already initialized then show it or initialize app with firebase config.
  const firestore=getFirestore(app)
  const storage=getStorage(app)
  export { app, firestore, storage };

