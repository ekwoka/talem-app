import React, { useEffect, useState } from 'react';
import './index.css';
import Homepage from './Pages/Homepage';
import Extracurriculars from './Pages/Extracurriculars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-R34s08Noa6MHOXTYMH69n8hmJfPflxY",
  authDomain: "talem-app.firebaseapp.com",
  projectId: "talem-app",
  storageBucket: "talem-app.appspot.com",
  messagingSenderId: "573018711035",
  appId: "1:573018711035:web:c297502dc0a64b3ae2615e",
  measurementId: "G-RJY34CXQKX"
};

initializeApp(firebaseConfig);

function App() {
  
  const [extracurricularsArray, setExtracurricularsArray] = useState([]);
  const [filterValues, setFilterValues] = useState({
    grade9: false,
    grade10: false,
    grade11: false,
    grade12: false,
  });

  const handleFilterChange = (name) => {

    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      [name]: !prevFilterValues[name]
    }));

  };

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

  // Apply filtering logic here
  const filteredECs = extracurricularsArray.filter((ec) => {
    if (filterValues.grade9 || filterValues.grade10 || filterValues.grade11 || filterValues.grade12) {

      // Grade Filter Checks
      if (ec.grade === "9th Grade" && filterValues.grade9) {
        return true;
      }

      if (ec.grade === "10th Grade" && filterValues.grade10) {
        return true;
      }

      if (ec.grade === "11th Grade" && filterValues.grade11) {
        return true;
      }

      if (ec.grade === "12th Grade" && filterValues.grade12) {
        return true;
      }

      if (ec.grade === "All Grades") {
        return true;
      }

      return false;
    }
    return true;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/extracurriculars" element={<Extracurriculars ecArray={filteredECs} filterChange={handleFilterChange} checkVal={filterValues} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
