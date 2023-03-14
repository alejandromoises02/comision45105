import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNFGagD5_GJ1fFS2Jd91WBul0TME0Ak9w",
  authDomain: "reactcomision45105.firebaseapp.com",
  projectId: "reactcomision45105",
  storageBucket: "reactcomision45105.appspot.com",
  messagingSenderId: "454299897820",
  appId: "1:454299897820:web:60ddb08e7c67c9f42a4919"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


//script para subir los datos de la api fake store en firebase

/*const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const db = firestore.collection("products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    json.forEach((producto) => {
      const { category, description, image, price, title } = producto;
      db.doc().set({ category, description, image, price, title, stock: 50 });
    });
  });
*/