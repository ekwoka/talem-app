import React from "react";
import Header from "../Components/Header";
import {useState} from "react"
import { PlusCircleIcon, MinusCircleIcon, AdjustmentsHorizontalIcon, XCircleIcon, ArrowTopRightOnSquareIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import '../index.css';

export default function Extracurriculars(props) {

    let [dropState, setDropState] = useState({
        settingState: false,
        gradeState: false,
        environmentState: false,
        companyState : false,
        durationState: false,
        teamIndividualState: false,
        skillLevelState: false,
        locationState: false,
        programmingState: false,
        engineeringState: false,
        mathScienceState: false,
        businessSocialState: false,
        humanityArtState: false
    })

    function changeAllDropdownState(bool) {
        const updatedDropState = Object.fromEntries(
          Object.entries(dropState).map(([key]) => [key, bool])
        );
      
        setDropState(updatedDropState);
      }
      

    let gradeItems = [
        {id: "allgrades", text: "All Grades"},
        {id: "grade9", text: "Freshman"},
        {id: "grade10", text: "Sophomore"},
        {id: "grade11", text: "Junior"},
        {id: "grade12", text: "Senior"}
    ]

    let companyItems = [
        {id: "nonprofit", text: "Nonprofit Organization"},
        {id: "businesscompany", text: "Business Enterprise"},
        {id: "governmentagency", text: "Government Agency"},
        {id: "educationalinstitution", text: "Educational Institution"}
    ]

    let durationItems = [
        {id: "shortterm", text: "Short-Term Committments"},
        {id: "longterm", text: "Long-Term Committments"}
    ]

    let teamIndividualItems = [
        {id: "individualbased", text: "Individual/Solo Activites"},
        {id: "teambased", text: "Team Based Activites"}
        
    ]

    let skillLevelItems = [
        {id: "beginnerfriendly", text: "Beginner-Friendly"},
        {id: "intermediatelevel", text: "Intermediate"},
        {id: "advancedlevel", text: "Advanced"},
    ]

    let locationItems = [
        {id: "global", text: "Global/Worldwide"},
        {id: "eastcoast", text: "East Coast (USA)"},
        {id: "westcoast", text: "West Coast (USA)"},
        {id: "midwest", text: "MidWest (USA)"},
        {id: "allusa", text: "All of US"}
        
    ]

    function handleGrade(name) {
        setDropState((prevArray) => {
            return {
                ...prevArray,
                [name] : !prevArray[name]
            }
        })
    }

    return (

        <>
            <Header />
            <div className="bg-white">
                    
                <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >

                    <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f6a6c7] to-[#b1acff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    />

                </div>
                
                {/* Filter Content Area*/}
                <div className="grid grid-cols-4 h-max gap-4">

                    {/* Column Span 1 items */}

                    {/* Button Settings Filters */}
                    <div className="col-span-1">

                        <div className="shadow-[0_0_10px_-7px] rounded-lg flex flex-col justify-center items-center py-4 mb-4">
                            <div className="filter bg-gradient-to-r from-yellow-300 to-yellow-500">
                                    <div className="filter-title" onClick={() => handleGrade("settingState")}>
                                        Settings
                                        <AdjustmentsHorizontalIcon className="dropdown-main"/>
                                    </div>

                                    {dropState.settingState && 
                                        <>
                                            <div className="w-full p-3 my-2 flex flex-col justify-center items-center gap-4">
                                                <button className="w-9/12 bg-blue-500 p-3 rounded-md shadow-md font-outfit text-white flex justify-between" onClick={() => changeAllDropdownState(false)}>Close All Filters <XCircleIcon className="dropdown-main"/></button>
                                                <button className="w-9/12 bg-blue-500 p-3 rounded-md shadow-md font-outfit text-white flex justify-between" onClick={() => changeAllDropdownState(true)}>Open All Filters <PlusCircleIcon className="dropdown-main"/></button>
                                            </div>
                                        </>                                    
                                    }


                                </div>
                        </div>

                        <div className="shadow-[0_0_10px_-7px] rounded-lg flex flex-col justify-center items-center py-4">

                            {/* Grade Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("gradeState")}>
                                    Sort by Grade:
                                    {dropState.gradeState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.gradeState && 
                                    <>
                                        {gradeItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} name={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>                                    
                                }


                            </div>
                        
                            {/* Environment Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("environmentState")}>
                                    Work Environment <br /> (In Person/Remote)
                                    {dropState.environmentState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.environmentState && 
                                    <>
                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="inperson" type="checkbox" onChange={() => props.filterChange("inperson")} checked={props.checkVal["inperson"]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inperson" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">In-Person</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="remote" type="checkbox" onChange={() => props.filterChange("remote")} checked={props.checkVal["remote"]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="remote" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Remote</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="hybrid" type="checkbox" onChange={() => props.filterChange("hybrid")} checked={props.checkVal["hybrid"]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="hybrid" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Hybrid</label>
                                        </div>
                                    </div>
                                    </>
                                }


                            </div>

                            {/* Company Type Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("companyState")}>
                                    Company Type
                                    {dropState.companyState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.companyState && 
                                    <>
                                        {companyItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" value="" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                }


                            </div>

                            {/* Duration Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("durationState")}>
                                    Activity Committment (Duration)
                                    {dropState.durationState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.durationState && 
                                    <>
                                        {durationItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                }


                            </div>

                            {/* Solo/Team Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("teamIndividualState")}>
                                    Solo vs. Team-Based Activites
                                    {dropState.teamIndividualState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.teamIndividualState && 
                                    <>
                                        {teamIndividualItems.map((item) => { 
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                }


                            </div>

                            {/* Toughness Level Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("skillLevelState")}>
                                    Skill Level
                                    {dropState.skillLevelState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.skillLevelState && 
                                    <>
                                        {skillLevelItems.map((item) => { 
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                }


                            </div>

                            {/* Location Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("locationState")}>
                                    Activity/EC Location
                                    {dropState.locationState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.locationState && 
                                    <>
                                        {locationItems.map((item) => { 
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                }


                            </div>
                            
                        </div>
                        
                        {/* Subject Filters*/}
                        <div className="shadow-[0_0_10px_-7px] rounded-lg flex flex-col justify-center items-center py-4 mt-4">

                            {/* Programming/Tech Filters*/}
                            <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("programmingState")}>
                                    Programming/Tech 
                                    {dropState.programmingState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.programmingState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div className="flex items-center mb-4">
                                            <input id="cybersecurity" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="cybersecurity" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">CyberSecurity</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="softwaredev" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="softwaredev" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Software Development</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="machinelearning" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="machinelearning" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Machine Learning/AI</label>
                                        </div>
                                    </div>
                                    </>
                                }


                            </div>

                            {/* Engineering Filters*/}
                            <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("engineeringState")}>
                                    Engineering/Design
                                    {dropState.engineeringState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.engineeringState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div className="flex items-center mb-4">
                                            <input id="mechengineering" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="mechengineering" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Mechanical Engineering</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="electricalengineering" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="softwaredev" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Electrical Engineering</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="aeroengineering" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="aeroengineering" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Aerospace Engineering</label>
                                        </div>
                                    </div>
                                    </>
                                }


                            </div>

                            {/* Math/Science Filters*/}
                            <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("mathScienceState")}>
                                    Mathematics/Science
                                    {dropState.mathScienceState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.mathScienceState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div className="flex items-center mb-4">
                                            <input id="astronomy" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="astronomy" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Astronomy</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="biology" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="biology" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Biology</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="chemistry" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="chemistry" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Chemistry</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="globalenviroscience" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="globalenviroscience" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Global/Environmental Science</label>
                                        </div>
                                    </div>

                                    
                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="mathematics" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="mathematics" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Mathematics</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="physics" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="physics" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Physics</label>
                                        </div>
                                    </div>
                                    </>
                                }
                            </div>

                             {/* Business/Social */}
                             <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("businessSocialState")}>
                                    Business/Social Studies
                                    {dropState.businessSocialState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.businessSocialState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div className="flex items-center mb-4">
                                            <input id="business" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="business" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Business</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="economics" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="economics" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Economics</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="marketing" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="marketing" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Marketing/Advertising</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="entrepreneurship" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="entrepreneurship" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Entrepreneurship</label>
                                        </div>
                                    </div>

                                    
                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="globalgovernment" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="globalgovernment" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Global Government</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="law" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="law" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Law</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="politics" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="politics" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Politics</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="geography" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="geography" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Geography</label>
                                        </div>
                                    </div>
                                    </>
                                }
                            </div>

                            {/* Humanities/Art */}
                            <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("humanityArtState")}>
                                    Humanities (+ Art)
                                    {dropState.humanityArtState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.humanityArtState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div className="flex items-center mb-4">
                                            <input id="philosophy" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="philosophy" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Philosophy</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="literature" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="literature" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Literature and Language</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="film" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="film" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Film and Video Production</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="music" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="music" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Music and Performing Arts</label>
                                        </div>
                                    </div>

                                    
                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="theatre" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="theatre" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Theater and Drama</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="writing" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="writing" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Writing</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="foreignlang" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="foreign" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Foreign Languages</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="photography" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="photography" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Photography</label>
                                        </div>
                                    </div>
                                    </>
                                }
                            </div>

                        </div>

                    </div>
                    
                    {/* Search bar/ Col-span-3 stuff*/}
                    <div className="col-span-3 shadow-[0_0_10px_-7px]">
                                
                            {/* Search Bar */}
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative flex">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-10 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <div className="w-full p-7">
                                    <input type="search" id="default-search" className="w-full p-4 pl-10 text-base text-gray-900 border border-none shadow-xl rounded-lg bg-slate-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-outfit" placeholder="Search for a specific extracurricular (Ex: Robotics)" required />
                                    
                                </div>
                                
                            </div>

                            {/* Actual EC Components */}
                            <div className="w-full p-4 px-8 h-max flex-col gap-2 flex justify-center"> {/* Main EC holder */}
                                {props.ecArray.length === 0 ? (
                                    <>
                                        
                                        <div className="status flex justify-center" role="status"> {/* The loady spinny thingy */}
                                            <svg aria-hidden="true" class="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                            </svg>
                                            <span class="sr-only">Loading...</span>
                                        </div>                                    
                                    </>                                   
                                    
                                    ) : (
                                    props.ecArray.map((ec) => (
                                        <div className="shadow-lg rounded-lg bg-white grid grid-cols-4 my-2" key={ec.id}> {/* Individual EC Item holder*/}
                                            <div className="col-span-3 p-10 flex flex-col justify-evenly"> {/* Col-span-3 EC info */}
                                                <h1 className="text-5xl font-outfit">{ec.name}</h1>
                                                <p className="">{ec.description}</p>
                                                <div className="w-full flex flex-wrap gap-3">
                                                    <div className="ec-tag">{ec.commitment}</div>
                                                    <div className="ec-tag">{ec.environment}</div>
                                                    <div className="ec-tag">{ec.grade}</div>
                                                    <div className="ec-tag">{ec.location}</div>
                                                    <div className="ec-tag">{ec.skill}</div>
                                                    <div className="ec-tag">{ec.soloTeam}</div>
                                                    <div className="ec-tag">{ec.type}</div>
                                                    
                                                    {ec.subjects.map((subject) => {
                                                        return (
                                                            <div className="ec-tag">{subject}</div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="col-span-1 p-10 flex flex-col gap-4 justify-evenly">
                                                <img src={ec.src} alt={`Picture of ${ec.name} logo`} className="w-full shadow-md rounded-xl"/>
                                                <a href={ec.link} target="_blank" className="ec-buttons">Visit Site <ArrowTopRightOnSquareIcon className="dropdown-main"/> </a>
                                                <button className="ec-buttons">Bookmark <BookmarkIcon className="dropdown-main hover:text-yellow-500"/> </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                    </div>
                    

                </div>



                </div>
            </div>
        </>
    )
}