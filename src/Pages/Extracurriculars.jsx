import React from "react";
import Header from "../Components/Header";
import {useState} from "react"
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

export default function Extracurriculars() {

    let [dropState, setDropState] = useState({
        gradeState: false,
        locationState: false,
        companyState : false,
        programmingState: false,
        engineeringState: false,
        mathScienceState: false,
        businessSocialState: false,
        humanityArtState: false
    })

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

                    {/* Normal Filters (Miscellaneous Things)*/}
                    <div className="col-span-1">
                        <div className="shadow-lg rounded-lg flex flex-col justify-center items-center py-4">

                            {/* Grade Filters */}
                            <div className="w-11/12 bg-slate-300 rounded-md h-max p-3 flex flex-col my-2">
                                <div className="text-lg p-1 flex justify-between items-center font-outfit" onClick={() => handleGrade("gradeState")}>
                                    Sort by Grade:
                                    {dropState.gradeState ? <MinusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/> : <PlusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/>}
                                </div>

                                {dropState.gradeState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div class="flex items-center mb-4">
                                            <input id="grade9" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="grade9" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Freshman</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="grade10" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="grade10" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Sophomore</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="grade11" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="grade11" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Junior</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="grade12" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="grade12" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Senior</label>
                                        </div>
                                    </div>
                                    </>
                                }


                            </div>
                        
                            {/* Location Filters */}
                            <div className="w-11/12 bg-slate-300 rounded-md h-max p-3 flex flex-col">
                                <div className="text-lg p-1 flex justify-between items-center font-outfit" onClick={() => handleGrade("locationState")}>
                                    Work Environment <br /> (In Person/Remote)
                                    {dropState.locationState ? <MinusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/> : <PlusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/>}
                                </div>

                                {dropState.locationState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div class="flex items-center mb-4">
                                            <input id="inperson" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inperson" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">In-Person</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="remote" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="remote" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Remote</label>
                                        </div>
                                    </div>
                                    </>
                                }


                            </div>

                            {/* Company Type Filters */}
                            <div className="w-11/12 bg-slate-300 rounded-md h-max p-3 flex flex-col mt-2">
                                <div className="text-lg p-1 flex justify-between items-center font-outfit" onClick={() => handleGrade("companyState")}>
                                    Company Type
                                    {dropState.companyState ? <MinusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/> : <PlusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/>}
                                </div>

                                {dropState.companyState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div class="flex items-center mb-4">
                                            <input id="nonprofit" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="nonprofit" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Nonprofit Organization</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="businesscompany" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="businesscompany" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Business Enterprises</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="governmentagency" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="governmentagency" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Government Agencies</label>
                                        </div>
                                    </div>
                                    </>
                                }


                            </div>
                            
                        </div>
                        
                        {/* Subject Filters*/}
                        <div className="shadow-lg rounded-lg flex flex-col justify-center items-center py-4 mt-4">

                            {/* Programming/Tech Filters*/}
                            <div className="w-11/12 bg-red-300 rounded-md h-max p-3 flex flex-col my-2">
                                <div className="text-lg p-1 flex justify-between items-center font-outfit" onClick={() => handleGrade("programmingState")}>
                                    Programming/Tech 
                                    {dropState.programmingState ? <MinusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/> : <PlusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/>}
                                </div>

                                {dropState.programmingState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div class="flex items-center mb-4">
                                            <input id="cybersecurity" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="cybersecurity" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">CyberSecurity</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="softwaredev" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="softwaredev" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Software Development</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="machinelearning" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="machinelearning" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Machine Learning/AI</label>
                                        </div>
                                    </div>
                                    </>
                                }


                            </div>

                            {/* Engineering Filters*/}
                            <div className="w-11/12 bg-red-300 rounded-md h-max p-3 flex flex-col my-2">
                                <div className="text-lg p-1 flex justify-between items-center font-outfit" onClick={() => handleGrade("engineeringState")}>
                                    Engineering/Design
                                    {dropState.engineeringState ? <MinusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/> : <PlusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/>}
                                </div>

                                {dropState.engineeringState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div class="flex items-center mb-4">
                                            <input id="mechengineering" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="mechengineering" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Mechanical Engineering</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="electricalengineering" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="softwaredev" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Electrical Engineering</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="aeroengineering" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="aeroengineering" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Aerospace Engineering</label>
                                        </div>
                                    </div>
                                    </>
                                }


                            </div>

                            {/* Math/Science Filters*/}
                            <div className="w-11/12 bg-red-300 rounded-md h-max p-3 flex flex-col my-2">
                                <div className="text-lg p-1 flex justify-between items-center font-outfit" onClick={() => handleGrade("mathScienceState")}>
                                    Mathematics/Science
                                    {dropState.mathScienceState ? <MinusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/> : <PlusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/>}
                                </div>

                                {dropState.mathScienceState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div class="flex items-center mb-4">
                                            <input id="astronomy" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="astronomy" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Astronomy</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="biology" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="biology" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Biology</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="chemistry" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="chemistry" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Chemistry</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="globalenviroscience" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="globalenviroscience" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Global/Environmental Science</label>
                                        </div>
                                    </div>

                                    
                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="mathematics" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="mathematics" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Mathematics</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="physics" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="physics" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Physics</label>
                                        </div>
                                    </div>
                                    </>
                                }
                            </div>

                             {/* Business/Social */}
                             <div className="w-11/12 bg-red-300 rounded-md h-max p-3 flex flex-col my-2">
                                <div className="text-lg p-1 flex justify-between items-center font-outfit" onClick={() => handleGrade("businessSocialState")}>
                                    Business/Social Studies
                                    {dropState.businessSocialState ? <MinusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/> : <PlusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/>}
                                </div>

                                {dropState.businessSocialState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div class="flex items-center mb-4">
                                            <input id="business" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="business" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Business</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="economics" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="economics" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Economics</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="marketing" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="marketing" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Marketing/Advertising</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="entrepreneurship" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="entrepreneurship" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Entrepreneurship</label>
                                        </div>
                                    </div>

                                    
                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="globalgovernment" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="globalgovernment" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Global Government</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="law" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="law" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Law</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="politics" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="politics" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Politics</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="geography" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="geography" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Geography</label>
                                        </div>
                                    </div>
                                    </>
                                }
                            </div>

                            {/* Humanities/Art */}
                            <div className="w-11/12 bg-red-300 rounded-md h-max p-3 flex flex-col my-2">
                                <div className="text-lg p-1 flex justify-between items-center font-outfit" onClick={() => handleGrade("humanityArtState")}>
                                    Humanities (+ Art)
                                    {dropState.humanityArtState ? <MinusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/> : <PlusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/>}
                                </div>

                                {dropState.humanityArtState && 
                                    <>
                                    <div className="w-full mt-5">
                                        <div class="flex items-center mb-4">
                                            <input id="philosiphy" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="philosiphy" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Philosiphy</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="literature" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="literature" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Literature and Language</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="film" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="film" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Film and Video Production</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="music" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="music" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Music and Performing Arts</label>
                                        </div>
                                    </div>

                                    
                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="theatre" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="theatre" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Theater and Drama</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="writing" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="writing" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Writing</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="foreignlang" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="foreign" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Foreign Languages</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div class="flex items-center mb-4">
                                            <input id="photography" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="photography" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Photography</label>
                                        </div>
                                    </div>
                                    </>
                                }
                            </div>

                        </div>

                    </div>
                    

                    <div className="col-span-3 bg-red-300">Hi again</div>
                </div>


                <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56"></div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    
                    <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#bcdbe4] to-[#5d9ba7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    />
                </div>
                </div>
            </div>
        </>
    )
}