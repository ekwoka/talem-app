// In this file, I just store some random components that I MAY end up using. Half this code is plain gibberish, just ignore it


const handleFilterChange = (name) => {

    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      [name]: !prevFilterValues[name]
    }));

  };

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
    
            if (updatedValues.grade9 && ecTags.includes("All Grades")) {
              return true
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
    
            return true
      
          })  
    
          console.log("filtered:")
          console.log(filteredData)
          setBurnerArray(filteredData)
          return updatedValues
    
        })
    
      };


      const handleFilterChange = (name) => {
        setFilterValues((prevValues) => {
          const updatedValues = {
            ...prevValues,
            [name]: !prevValues[name]
          };
      
          const filteredData = extracurricularsArray.filter((ec) => {
            if (
              (updatedValues.grade9 && ec.grade !== "9th Grade") ||
              (updatedValues.grade10 && ec.grade !== "10th Grade") ||
              (updatedValues.grade11 && ec.grade !== "11th Grade") ||
              (updatedValues.grade12 && ec.grade !== "12th Grade")
            ) {
              return false;
            }
            return true;
          });
      
          setExtracurricularsArray(filteredData);
          return updatedValues;
        });
      };