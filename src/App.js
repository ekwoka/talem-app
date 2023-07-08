import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage';
import Extracurriculars from './Pages/Extracurriculars';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore'

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

function App() {

  let [filterValues, setFilterValues] = useState({
    
  })

  const [extracurricularsArray, setExtracurricularsArray] = useState([]);

  

  useEffect(() => {
    const fetchExtracurriculars = async () => {
      try {
        const db = getFirestore();
        const extracurricularsRef = collection(db, 'extracurriculars');
        const snapshot = await getDocs(extracurricularsRef);
        const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setExtracurricularsArray(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchExtracurriculars();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/extracurriculars" element={<Extracurriculars ecArray={extracurricularsArray} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
