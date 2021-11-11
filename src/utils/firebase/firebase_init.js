// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

import {
  collection,
  query,
  orderBy,
  addDoc,
  getDocs,
  onSnapshot,
  limitToLast,
} from "firebase/firestore"; 

let firebaseConfig = {
  apiKey: "AIzaSyDzVjl3I_9xjB2TaDRn5wLKmkEkgGtoV-Q",
  authDomain: "hoono-c6bb1.firebaseapp.com",
  projectId: "hoono-c6bb1",
  storageBucket: "hoono-c6bb1.appspot.com",
  messagingSenderId: "935690760913",
  appId: "1:935690760913:web:e56c7ee85bfc8d5b904bf0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addNewData(data){
    try {
        await addDoc(collection(db, "data"), data);
        //console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function getData(){
    const querySnapshot = await getDocs(collection(db, "data"), limitToLast(75));
    return querySnapshot
}

export async function listenData(callback){
    const q = query(collection(db, "data"), orderBy("date"), limitToLast(75));
    const unsub = onSnapshot(q, 
        callback
        //(querySnapshot) => {
        //    const cities = [];
        //    querySnapshot.forEach((doc) => {
        //        cities.push(doc.data().message);
        //    });
        //    console.log("Current cities in CA: ", cities.join(", "));
        //}
    );

    return unsub
}
