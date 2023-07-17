import React from 'react';
import { BsUnlockFill, BsCheckCircleFill, BsChatDotsFill } from 'react-icons/bs';
import undrawImage from '../Images/undraw_education_f8ru.png';

const AccessSection = () => {
  return (
    <div className="bg-white py-20">
        <div className="relative isolate px-6 pt-7 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-xl mx-5 lg:mx-20">
        <div className="absolute inset-0 bg-cover bg-center filter blur-md hidden" />
        <div className="relative bg-opacity-50 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-24 sm:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
              <div className="col-span-7">
                <h2 className="text-4xl font-extrabold text-white">Empowering High Schoolers</h2>
                <p className="mt-4 text-lg text-gray-300">
                  Only a fraction of high schoolers have access to quality extracurricular opportunities. At Talem, we
                  are working to change that by providing a platform that connects students to a wide range of enriching
                  activities.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg flex-wrap text-center">
                    <BsUnlockFill className="w-8 h-8 text-purple-700" />
                    <span className="ml-3 text-xl font-medium text-gray-900">No Paywall</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg flex-wrap text-center">
                    <BsCheckCircleFill className="w-8 h-8 text-purple-700" />
                    <span className="ml-3 text-xl font-medium text-gray-900">Free for All</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg flex-wrap text-center">
                    <BsChatDotsFill className="w-8 h-8 text-purple-700 m-2" />
                    <span className="ml-3 text-xl font-medium text-gray-900">Community Support</span>
                  </div>
                </div>
              </div>
              <div className="col-span-5">
                <div className="flex justify-center">
                  <div className="bg-white rounded-lg shadow-lg">
                    <img
                      src={undrawImage}
                      alt="Picture Card"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessSection;
