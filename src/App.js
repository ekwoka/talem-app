import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage';
import Extracurriculars from './Pages/Extracurriculars';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app'
import {getFirestore, collection, getDocs, getDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB-R34s08Noa6MHOXTYMH69n8hmJfPflxY",
  authDomain: "talem-app.firebaseapp.com",
  projectId: "talem-app",
  storageBucket: "talem-app.appspot.com",
  messagingSenderId: "573018711035",
  appId: "1:573018711035:web:c297502dc0a64b3ae2615e",
  measurementId: "G-RJY34CXQKX"
};

initializeApp(firebaseConfig)

let extracurricularsArray = []

let db = getFirestore()
let extracurricularsRef = collection(db, 'extracurriculars')
getDocs(extracurricularsRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      extracurricularsArray.push({ ...doc.data(), id: doc.id})
    })
    console.log(extracurricularsArray)
  })
  .catch(err => {
    console.log(err.message)
  })



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/extracurriculars" element={<Extracurriculars ecArray={extracurricularsArray} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
