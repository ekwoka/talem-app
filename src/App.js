import React, { useEffect, useState } from 'react';
import './index.css';
import Homepage from './Pages/Homepage';
import Extracurriculars from './Pages/Extracurriculars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Analytics } from '@vercel/analytics/react';

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

const filterConfig = [
  { name: "allgrades", tag: "All Grades" },
  { name: "grade9", tag: "9th Grade" },
  { name: "grade10", tag: "10th Grade" },
  { name: "grade11", tag: "11th Grade" },
  { name: "grade12", tag: "12th Grade" },
  { name: "inperson", tag: "In Person" },
  { name: "remote", tag: "Remote/Virtual" },
  { name: "hybrid", tag: "Hybrid" },
  { name: "nonprofit", tag: "Nonprofit Organization" },
  { name: "businesscompany", tag: "Business Corporation" },
  { name: "governmentagency", tag: "Government Agency" },
  { name: "educationalinstitution", tag: "Educational Institution" },
  { name: "shortterm", tag: "Short-Term" },
  { name: "longterm", tag: "Long-Term" },
  { name: "teamandindividual", tag: "Both Individual + Team" },
  { name: "individualbased", tag: "Individual-Based" },
  { name: "teambased", tag: "Team-Based" },
  { name: "allskillevels", tag: "All Skill Levels" },
  { name: "beginnerfriendly", tag: "Beginner Friendly" },
  { name: "intermediatelevel", tag: "Intermediate" },
  { name: "advancedlevel", tag: "Advanced" },
  { name: "global", tag: "Global/Worldwide" },
  { name: "eastcoast", tag: "East Coast (USA)" },
  { name: "westcoast", tag: "West Coast (USA)" },
  { name: "midwest", tag: "Mid West(USA)" },
  { name: "allusa", tag: "Only USA" },
  { name: "communityservice", tag: "Community Service" },
  { name: "research", tag: "Academic Research" },
  { name: "competition", tag: "Competition" },
  { name: "club", tag: "Club" },
  { name: "allprogramming", tag: "All Programming" },
  { name: "cybersecurity", tag: "Cybersecurity" },
  { name: "softwaredev", tag: "Software Development" },
  { name: "machinelearning", tag: "Machine Learning/AI" },
  { name: "competitiveprogramming", tag: "Competitive Programming" },
  { name: "allengineering", tag: "All Engineering" },
  { name: "mechengineering", tag: "Mechanical Engineering" },
  { name: "electricalengineering", tag: "Electrical Engineering" },
  { name: "aeroengineering", tag: "Aerospace Engineering" },
  { name: "allmathscience", tag: "All Math + Science" },
  { name: "astronomy", tag: "Astronomy" },
  { name: "biology", tag: "Biology" },
  { name: "chemistry", tag: "Chemistry" },
  { name: "physics", tag: "Physics" },
  { name: "mathematics", tag: "Mathematics" },
  { name: "medicine", tag: "Medicine" },
  { name: "business", tag: "Business" },
  { name: "economics", tag: "Economics" },
  { name: "marketing", tag: "Marketing" },
  { name: "entrepreneurship", tag: "Entrepreneurship" },
  { name: "leadership", tag: "Leadership" },
  { name: "globalgovernment", tag: "Global Government" },
  { name: "law", tag: "Law" },
  { name: "politics", tag: "Politics" },
  { name: "geography", tag: "Geography" },
  { name: "philosophy", tag: "Philosophy" },
  { name: "literature", tag: "Literature and Language" },
  { name: "film", tag: "Film and Video Production" },
  { name: "music", tag: "Music" },
  { name: "drama", tag: "Theatre and Drama" },
  { name: "writing", tag: "Writing" },
  { name: "foreign", tag: "Foreign Languages" },
  { name: "photography", tag: "Photography" },
  { name: "debate", tag: "Debate" },
  { name: "art", tag: "Art/Design"}
  // Add more filter names and tags here
];

function App() {
  const [extracurricularsArray, setExtracurricularsArray] = useState([]);
  const [burnerArray, setBurnerArray] = useState([]);
  const [filterValues, setFilterValues] = useState({});

  function handleSearchChange(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = extracurricularsArray.filter((extracurricular) =>
      extracurricular.description.toLowerCase().includes(searchTerm) || extracurricular.name.toLowerCase().includes(searchTerm)
    );
    setBurnerArray(filteredData);
  }

  const handleFilterChange = (name) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: !prevValues[name]
    }));
  };

  function resetFilterValues() {
    setFilterValues({});
    handleFilterChange(null); // Activate the check filter function to clear the filters
  }

  useEffect(() => {
    const fetchExtracurriculars = async () => {
      try {
        const db = getFirestore();
        const extracurricularsRef = collection(db, 'extracurriculars');
        const snapshot = await getDocs(extracurricularsRef);
        const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setExtracurricularsArray(data);
        setBurnerArray(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchExtracurriculars();
  }, []);

  useEffect(() => {
    const filteredData = extracurricularsArray.filter((ec) => {
      const ecTags = [
        ec.commitment,
        ec.environment,
        ec.location,
        ec.skill,
        ec.soloTeam,
        ec.type,
        ...ec.category,
        ...ec.grade,
        ...ec.subjects
      ];

      return filterConfig.every(({ name, tag }) => !filterValues[name] || ecTags.includes(tag));
    });

    setBurnerArray(filteredData);
  }, [extracurricularsArray, filterValues]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route
            path="/extracurriculars"
            element={
              <Extracurriculars
                ecArray={burnerArray}
                resetValues={resetFilterValues}
                filterChange={handleFilterChange}
                checkVal={filterValues}
                searchChange={handleSearchChange}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
