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
  const [burnerArray, setBurnerArray] = useState([])

  const [filterValues, setFilterValues] = useState({
    allgrades: false,
    grade9: false,
    grade10: false,
    grade11: false,
    grade12: false,
    inperson: false,
    remote: false,
    hybrid: false,
    nonprofit: false,
    businesscompany: false,
    governmentagency: false,
    educationalinstitution: false
  });

  const handleFilterChange = (name) => {

    setFilterValues((prevArray) => {
      const updatedValues = {
        ...prevArray,
        [name]: !prevArray[name]
      }
      console.log("updated vals:")
      console.log(updatedValues)

      const filteredData = extracurricularsArray.filter((ec) => {
        let ecTags = [ec.commitment, ec.environment, ec.grade, ec.location, ec.skill, ec.soloTeam, ec.type]

        // if (updatedValues.grade9 && ecTags.includes("All Grades") ||
        //     updatedValues.grade10 && ecTags.includes("All Grades") ||
        //     updatedValues.grade11 && ecTags.includes("All Grades") ||
        //     updatedValues.grade12 && ecTags.includes("All Grades")        
        // ) {
        //   return true
        // }

        if (updatedValues.allgrades && !ecTags.includes("All Grades")) {
          return false
        }
        
        if (updatedValues.grade9 && !ecTags.includes("9th Grade")) {
          return false
        }

        if (updatedValues.grade10 && !ecTags.includes("10th Grade")) {
          return false
        }

        if (updatedValues.grade11 && !ecTags.includes("11th Grade")) {
          return false
        }

        if (updatedValues.grade12 && !ecTags.includes("12th Grade")) {
          return false
        }

        if (updatedValues.inperson && !ecTags.includes("In Person")) {
          return false
        }

        if (updatedValues.remote && !ecTags.includes("Remote/Virtual")) {
          return false
        }

        if (updatedValues.hybrid && !ecTags.includes("Hybrid")) {
          return false
        }

        if (updatedValues.nonprofit && !ecTags.includes("Nonprofit Organization")) {
          return false
        }

        if (updatedValues.businesscompany && !ecTags.includes("Business")) {
          return false
        }
        
        if (updatedValues.governmentagency && !ecTags.includes("Government Agency")) {
          return false
        }

        if (updatedValues.educationalinstitution && !ecTags.includes("Educational Institution")) {
          return false
        }

        return true
  
      })  
      setBurnerArray(filteredData)

      console.log(updatedValues)
      return updatedValues

    })

  };
  
  

  useEffect(() => {
    const fetchExtracurriculars = async () => {
      try {
        const db = getFirestore();
        const extracurricularsRef = collection(db, 'extracurriculars');
        const snapshot = await getDocs(extracurricularsRef);
        const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setExtracurricularsArray(data);
        setBurnerArray(data)
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchExtracurriculars();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/extracurriculars" element={<Extracurriculars ecArray={burnerArray} filterChange={handleFilterChange} checkVal={filterValues} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
