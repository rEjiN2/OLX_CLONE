import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIKD59lgLsw5_DFZ2HEpuGBNH5yWNaBow",
  authDomain: "olx-clone-fe847.firebaseapp.com",
  projectId: "olx-clone-fe847",
  storageBucket: "olx-clone-fe847.appspot.com",
  messagingSenderId: "758836672109",
  appId: "1:758836672109:web:b226d4522e534371f3b164",
  measurementId: "G-XJH1GBH0QE"
};

 export default firebase.initializeApp(firebaseConfig);

//  const db = firebaseApp.firestore();
//  const auth = firebase.auth();
 
 


