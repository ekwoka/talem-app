import {
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'One Massive Database.',
    description:
      'Talem boasts a massive database with over 100+ Extracurriculars and Internships for you to search and sort through. Find what you liked has never been easier.',
    icon: ServerStackIcon,
  },
  {
    name: 'Sort & Filter',
    description:
      'No need to spend hours searching for that one right activity for you. Talem allows you to quickly sort and filter through our massive collection of opportunities.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Save For Later',
    description:
      'Find an Internship or Extracurricular that seems interesting? You can always come back to it later by bookmarking it!',
    icon: BookmarkIcon,
  },
  {
    name: 'Join the Community',
    description:
      'Find like-minded individuals with the same passions as you on our discord server. As we grow, we need your feedback to help make Talem a better experience for all.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
];

export default function BodyDescription() {
  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Find Your Talent <span className="underline font-bold">Faster</span>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Finding Extracurriculars and Internships has never been easier.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Talem makes searching for Extracurriculars and Internships easier by
            allowing you to sort and filter through our massive database of over
            500+ items.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
