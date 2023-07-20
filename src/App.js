import React, { useEffect, useState } from 'react';
import './index.css';
import Homepage from './Pages/Homepage';
import Extracurriculars from './Pages/Extracurriculars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Analytics } from '@vercel/analytics/react';
import AboutPage from './Pages/AboutPage';
import JoinPage from './Pages/JoinPage';

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

  const [filterConfig, setFilterConfig] = useState([
    { name: "allgrades", tag: "All Grades", value: false },
    { name: "grade9", tag: "9th Grade", value: false },
    { name: "grade10", tag: "10th Grade", value: false },
    { name: "grade11", tag: "11th Grade", value: false },
    { name: "grade12", tag: "12th Grade", value: false },
    { name: "inperson", tag: "In Person", value: false },
    { name: "remote", tag: "Remote/Virtual", value: false },
    { name: "hybrid", tag: "Hybrid", value: false },
    { name: "nonprofit", tag: "Nonprofit Organization", value: false },
    { name: "businesscompany", tag: "Business Corporation", value: false },
    { name: "governmentagency", tag: "Government Agency", value: false },
    { name: "educationalinstitution", tag: "Educational Institution", value: false },
    { name: "academicprogram", tag: "Academic Program", value: false },
    { name: "shortterm", tag: "Short-Term", value: false },
    { name: "longterm", tag: "Long-Term", value: false },
    { name: "teamandindividual", tag: "Both Individual + Team", value: false },
    { name: "individualbased", tag: "Individual-Based", value: false },
    { name: "teambased", tag: "Team-Based", value: false },
    { name: "allskillevels", tag: "All Skill Levels", value: false },
    { name: "beginnerfriendly", tag: "Beginner Friendly", value: false },
    { name: "intermediatelevel", tag: "Intermediate", value: false },
    { name: "advancedlevel", tag: "Advanced", value: false },
    { name: "global", tag: "Global/Worldwide", value: false },
    { name: "eastcoast", tag: "East Coast (USA)", value: false },
    { name: "westcoast", tag: "West Coast (USA)", value: false },
    { name: "midwest", tag: "Mid West(USA)", value: false },
    { name: "allusa", tag: "Only USA", value: false },
    { name: "communityservice", tag: "Community Service", value: false },
    { name: "research", tag: "Academic Research", value: false },
    { name: "competition", tag: "Competition", value: false },
    { name: "club", tag: "Club", value: false },
    { name: "program", tag: "Program", value: false },
    { name: "allsubjects", tag: "All Subjects", value: false },
    { name: "allstem", tag: "All STEM", value: false },
    { name: "allprogramming", tag: "All Programming", value: false },
    { name: "cybersecurity", tag: "Cybersecurity", value: false },
    { name: "softwaredev", tag: "Software Development", value: false },
    { name: "machinelearning", tag: "Machine Learning/AI", value: false },
    { name: "competitiveprogramming", tag: "Competitive Programming", value: false },
    { name: "allengineering", tag: "All Engineering", value: false },
    { name: "mechengineering", tag: "Mechanical Engineering", value: false },
    { name: "electricalengineering", tag: "Electrical Engineering", value: false },
    { name: "aeroengineering", tag: "Aerospace Engineering", value: false },
    { name: "allmathscience", tag: "All Math + Science", value: false },
    { name: "astronomy", tag: "Astronomy", value: false },
    { name: "biology", tag: "Biology", value: false },
    { name: "environmentalscience", tag: "Environmental Science", value: false },
    { name: "chemistry", tag: "Chemistry", value: false },
    { name: "physics", tag: "Physics", value: false },
    { name: "mathematics", tag: "Mathematics", value: false },
    { name: "medicine", tag: "Medicine", value: false },
    { name: "business", tag: "Business", value: false },
    { name: "economics", tag: "Economics", value: false },
    { name: "marketing", tag: "Marketing", value: false },
    { name: "entrepreneurship", tag: "Entrepreneurship", value: false },
    { name: "leadership", tag: "Leadership", value: false },
    { name: "globalgovernment", tag: "Global Government", value: false },
    { name: "law", tag: "Law", value: false },
    { name: "politics", tag: "Politics", value: false },
    { name: "history", tag: "History", value: false },
    { name: "philosophy", tag: "Philosophy", value: false },
    { name: "literature", tag: "Literature and Language", value: false },
    { name: "film", tag: "Film and Video Production", value: false },
    { name: "music", tag: "Music", value: false },
    { name: "drama", tag: "Theatre and Drama", value: false },
    { name: "writing", tag: "Writing", value: false },
    { name: "foreign", tag: "Foreign Languages", value: false },
    { name: "photography", tag: "Photography", value: false },
    { name: "debate", tag: "Debate", value: false },
    { name: "art", tag: "Art/Design", value: false }
  ]);

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

  const toggleValueByName = (arr, name) => {
    return arr.map((obj) => {
      if (obj.name === name) {
        return {
          ...obj,
          value: !obj.value,
        };
      }
      return obj;
    });
  };

  const handleFilterChange = (name) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: !prevValues[name]
    }));

    setFilterConfig(toggleValueByName(filterConfig, name))

  };

  // RESET FILTER VALUES
  function resetFilterValues() {
    setFilterValues({});
    handleFilterChange(null); // Activate the check filter function to clear the filters

    setFilterConfig((prevConfig) =>
      prevConfig.map((filter) => {
        return {
          ...filter,
          value: false
        }
      })
    );

  

  console.log(filterConfig)

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
        ...ec.location,
        ...ec.skill,
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

  function removeTag(tag) {

    const realtag = tag;
    const foundItem = filterConfig.find(item => item.tag === realtag);
    let correspondingName

    if (foundItem) {
      correspondingName = foundItem.name;
      console.log(correspondingName);
    } else {
      console.log("Tag not found");
    }

    handleFilterChange(correspondingName)
    
  }

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
                allFilters={filterConfig}
                removeTag={removeTag}
              />
            }
          />

          <Route 
            path='/about'
            element={<AboutPage />}
          />

          <Route 
            path='/join'
            element={<JoinPage />}
          />

        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
