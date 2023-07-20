import { React } from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import talemDemo from '.././Images/talemDemo.png';
import LazyLoad from 'react-lazy-load';

const features = [
  {
    name: 'No Signup or Login.',
    description:
      "Talem doesn't require you to sign-up or log-in at all. Just head on over to our database, and explore for yourself.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Free Forever.',
    description: 'Talem will always be free and stay free. We are committed to make sure every highschooler has the equal chance of getting the information they deserve.',
    icon: LockClosedIcon,
  },
  {
    name: 'Built with your help.',
    description: 'Talem was built with YOUR suggestions and feedback. You can help us out by submitting an activity or joining our discord server!',
    icon: ServerIcon,
  },
];

export default function DetailsFree() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="max-w-8xl lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 xl:mx-0 xl:max-w-none xl:grid-cols-12">
          <div className="lg:pr-8 lg:pt-4 col-span-5 flex justify-center items-center">
            <div className="lg:max-w-lg px-4">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Pure data at your fingertips.</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">No Paywall, No Sign-Up required.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                It seems like these days, everything is hidden behind a paywall. Talem is{' '}
                <span className="font-bold">100% free and <span className="underline">always</span> will be. </span>
                We believe that every high schooler should have <span className="underline">equal</span> access to opportunities.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="col-span-7 flex justify-start items-center">
            <LazyLoad>
              <img
              src={talemDemo}
              alt="Product screenshot"
              className="w-[95%] rounded-xl shadow-md ring-gray-400/10 mr-10"
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}
