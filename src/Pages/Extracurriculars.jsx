import React from "react";
import Header from "../Components/Header";
import {useState} from "react"
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

export default function Extracurriculars() {

    let [showGrade, setShowGrade] = useState(false)

    function handleGrade() {
        setShowGrade(prevValue => !prevValue)
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

                    <div className="col-span-1 shadow-lg rounded-lg flex flex-col justify-center items-center py-8">

                        {/* Sort by Grade */}
                        <div className="w-11/12 border-y-2 border-slate-400 h-max p-3 flex flex-col">
                            <div className="text-lg p-1 flex justify-between items-center font-outfit" onClick={handleGrade}>
                                Sort by Grade:
                                {showGrade ? <MinusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/> : <PlusCircleIcon className="h-7 w-7 inline mr-2 text-slate-500 hover:text-black cursor-pointer"/>}
                            </div>

                            {showGrade && 
                                <>
                                <div className="w-full mt-5">
                                    <div class="flex items-center mb-4">
                                        <input id="grade9" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="grade9" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Freshman</label>
                                    </div>
                                </div>

                            

                                <div className="w-full">
                                    <div class="flex items-center mb-4">
                                        <input id="grade10" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="grade10" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Sophomore</label>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div class="flex items-center mb-4">
                                        <input id="grade11" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="grade11" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Junior</label>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div class="flex items-center mb-4">
                                        <input id="grade12" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="grade12" class="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Senior</label>
                                    </div>
                                </div>
                                </>
                            }


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