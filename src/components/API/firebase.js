// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
  arrayUnion,
  arrayRemove
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "domotica-caf63.firebaseapp.com",
  projectId: "domotica-caf63",
  storageBucket: "domotica-caf63.appspot.com",
  messagingSenderId: "238720006287",
  appId: "1:238720006287:web:f2eaca727555067b9898fa",
  measurementId: "G-BN9W03ZEL4"
};

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//User


//CRUD
export const deleteDocument = (ref, id) => deleteDoc(doc(db, ref, id));

export const getUser = (ref, callback)=> onSnapshot(query(collection(db, "usuarios"), where("name","==", ref)), callback)

export const addUserDB = async (user) => await addDoc(collection(db, "usuarios"), user);

export const addDispositivo = async (dispositivo) => addDoc(collection(db, "dispositivos"), dispositivo)

export const getDocuments = (ref) => getDocs(collection(db, ref));

export const onGetDocuments = (ref, callback) => onSnapshot(collection(db, ref), callback);

export const onGetDispositivoLeaked = (user, callback) => 
  onSnapshot(query(collection(db, "dispositivos"),  where("user","==", user)), callback);

export const updateDocument = (ref, id, value) => updateDoc(doc(db, ref, id),{
  value: value
});

export const updateEjecutor = (ref, id, value) => updateDoc(doc(db, ref, id),{
  state: value
});

export const updateNameDisp = (ref, id, value) => updateDoc(doc(db, ref, id),{
  name: value
});

export const updateRoomDisp = (ref, id, value) => updateDoc(doc(db, ref, id),{
  room: value
});

export const addRoom = (ref, id, room) => updateDoc(doc(db, ref, id),{
  rooms: arrayUnion(room)
});

export const removeRoom = (ref, id, room) => updateDoc(doc(db, ref, id),{
  rooms: arrayRemove(room)
});

export const onGetRooms = (user, callback) => 
  onSnapshot(query(collection(db, "usuarios"),  where("name","==", user)), callback);

export const updateRoom = (ref, id, value) => updateDoc(doc(db, ref, id),{
  room: value
});