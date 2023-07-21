import { Analytics } from '@vercel/analytics/react';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { TAGS } from './Data/tags';
import AboutPage from './Pages/AboutPage';
import Extracurriculars from './Pages/Extracurriculars';
import Homepage from './Pages/Homepage';
import JoinPage from './Pages/JoinPage';
import './index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyB-R34s08Noa6MHOXTYMH69n8hmJfPflxY',
  authDomain: 'talem-app.firebaseapp.com',
  projectId: 'talem-app',
  storageBucket: 'talem-app.appspot.com',
  messagingSenderId: '573018711035',
  appId: '1:573018711035:web:c297502dc0a64b3ae2615e',
  measurementId: 'G-RJY34CXQKX',
};

initializeApp(firebaseConfig);

function App() {
  const [filterConfig, setFilterConfig] = useState(TAGS);

  const [extracurricularsArray, setExtracurricularsArray] = useState([]);
  const [burnerArray, setBurnerArray] = useState([]);
  const [filterValues, setFilterValues] = useState({});

  function handleSearchChange(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = extracurricularsArray.filter(
      (extracurricular) =>
        extracurricular.description.toLowerCase().includes(searchTerm) ||
        extracurricular.name.toLowerCase().includes(searchTerm),
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
      [name]: !prevValues[name],
    }));

    setFilterConfig(toggleValueByName(filterConfig, name));
  };

  // RESET FILTER VALUES
  function resetFilterValues() {
    setFilterValues({});
    handleFilterChange(null); // Activate the check filter function to clear the filters

    setFilterConfig((prevConfig) =>
      prevConfig.map((filter) => {
        return {
          ...filter,
          value: false,
        };
      }),
    );

    console.log(filterConfig);
  }

  useEffect(() => {
    const fetchExtracurriculars = async () => {
      try {
        const db = getFirestore();
        const extracurricularsRef = collection(db, 'extracurriculars');
        const snapshot = await getDocs(extracurricularsRef);
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
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
        ...ec.subjects,
      ];

      return filterConfig.every(
        ({ name, tag }) => !filterValues[name] || ecTags.includes(tag),
      );
    });

    setBurnerArray(filteredData);
  }, [extracurricularsArray, filterValues]);

  function removeTag(tag) {
    const realtag = tag;
    const foundItem = filterConfig.find((item) => item.tag === realtag);
    let correspondingName;

    if (foundItem) {
      correspondingName = foundItem.name;
      console.log(correspondingName);
    } else {
      console.log('Tag not found');
    }

    handleFilterChange(correspondingName);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
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
        <Route path="/about" element={<AboutPage />} />

        <Route path="/join" element={<JoinPage />} />
      </>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;
