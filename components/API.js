import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAk86-UOXI9ExzScxsAC1SiGDBff3e2W_o',
  authDomain: 'consult-enterprise.firebaseapp.com',
  databaseURL: 'https://consult-enterprise.firebaseio.com',
  projectId: 'consult-enterprise',
  storageBucket: 'consult-enterprise.appspot.com',
  messagingSenderId: '392704685178',
  appId: '1:392704685178:web:e3ed83484721933897b7c3',
  measurementId: 'G-TXR1C8WSEY',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default () => db;
