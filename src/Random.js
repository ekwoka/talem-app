const handleFilterChange = (name) => {

    setFilterValues((prevArray) => {
      const updatedFilterValues = {
        ...prevArray,
        [name]: !prevFilterValues[name]
      }
    })

    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      [name]: !prevFilterValues[name]
    }));

    const filteredData = extracurricularsArray.filter((extracurricular) => {

    })

  };


  