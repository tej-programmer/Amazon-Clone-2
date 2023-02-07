const firebaseConfig = {
  apiKey: "AIzaSyBMiM2uYrOd0VaAlxIfzWdDDw_noUjKjOM",
  authDomain: "clone-2-fe5a5.firebaseapp.com",
  projectId: "clone-2-fe5a5",
  storageBucket: "clone-2-fe5a5.appspot.com",
  messagingSenderId: "932141969711",
  appId: "1:932141969711:web:baea157b89ad5d2b5eb1da",
  measurementId: "G-KM3QRFQ4M2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const db = firebase.firestore();