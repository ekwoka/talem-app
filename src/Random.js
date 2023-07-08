// In this file, I just store some random components that I MAY end up using. Half this code is plain gibberish, just ignore it

//     const handleFilterChange = (name) => {

//         setFilterValues((prevArray) => {
//           const updatedValues = {
//             ...prevArray,
//             [name]: !prevArray[name]
//           }
//           console.log("updated vals:")
//           console.log(updatedValues)
    
//           const filteredData = extracurricularsArray.filter((ec) => {
//             let ecTags = [ec.commitment, ec.environment, ec.grade, ec.location, ec.skill, ec.soloTeam, ec.type]
    
//             if (updatedValues.grade9 && ecTags.includes("All Grades")) {
//               return true
//             }
            
//             if (updatedValues.grade9 && !ecTags.includes("9th Grade")) {
//               return false
//             }
    
//             if (updatedValues.grade10 && !ecTags.includes("10th Grade")) {
//               return false
//             }
    
//             if (updatedValues.grade11 && !ecTags.includes("11th Grade")) {
//               return false
//             }
    
//             if (updatedValues.grade12 && !ecTags.includes("12th Grade")) {
//               return false
//             }
    
//             return true
      
//           })  
    
//           console.log("filtered:")
//           console.log(filteredData)
//           setBurnerArray(filteredData)
//           return updatedValues
    
//         })
    
//       };


//       const handleFilterChange = (name) => {
//         setFilterValues((prevValues) => {
//           const updatedValues = {
//             ...prevValues,
//             [name]: !prevValues[name]
//           };
      
//           const filteredData = extracurricularsArray.filter((ec) => {
//             if (
//               (updatedValues.grade9 && ec.grade !== "9th Grade") ||
//               (updatedValues.grade10 && ec.grade !== "10th Grade") ||
//               (updatedValues.grade11 && ec.grade !== "11th Grade") ||
//               (updatedValues.grade12 && ec.grade !== "12th Grade")
//             ) {
//               return false;
//             }
//             return true;
//           });
      
//           setExtracurricularsArray(filteredData);
//           return updatedValues;
//         });
//       };