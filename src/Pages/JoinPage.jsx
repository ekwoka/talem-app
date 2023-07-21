import {
  FaHandsHelping,
  FaLaptopCode,
  FaMoneyBillAlt,
  FaRegEnvelope,
  FaRegSmileBeam,
  FaTrophy,
  FaUserTie,
} from 'react-icons/fa';

import Footer from '../Components/Footer';
import Header from '../Components/Header';

const JoinPage = () => {
  const jobPositions = [
    {
      title: 'Frontend Developer',
      description:
        "We're looking for a skilled frontend developer with experience in React and JavaScript to help build and maintain our user interface.",
      icon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Marketing Specialist',
      description:
        'We need a creative marketing specialist to help promote our app and reach out to potential users and partners.',
      icon: <FaUserTie className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Community Manager',
      description:
        "Are you passionate about community engagement? We're seeking a community manager to foster a vibrant and supportive community around our platform.",
      icon: <FaRegEnvelope className="w-8 h-8 text-blue-500" />,
    },
  ];

  const perksList = [
    {
      icon: <FaRegSmileBeam className="w-10 h-10 text-white" />,
      title: 'Positive Work Environment',
      description:
        'Join a team that values collaboration, creativity, and a positive attitude. We strive to create a friendly and inclusive workplace for everyone.',
    },
    {
      icon: <FaHandsHelping className="w-10 h-10 text-white" />,
      title: 'Opportunities to Grow',
      description:
        'We believe in nurturing talent and providing opportunities for professional growth and skill development.',
    },
    {
      icon: <FaTrophy className="w-10 h-10 text-white" />,
      title: 'Recognition and Rewards',
      description:
        'Your hard work and contributions will be acknowledged and rewarded to show our appreciation for your efforts.',
    },
    {
      icon: <FaMoneyBillAlt className="w-10 h-10 text-white" />,
      title: 'Competitive Compensation',
      description:
        'Enjoy a competitive salary package and additional benefits as part of your commitment to our team.',
    },
  ];

  return (
    <>
      <Header />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center flex justify-center flex-col items-center">
            <h2 className="text-6xl font-extrabold text-gray-900 font-outfit">
              Join Our <span className="text-blue-500">Team</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 w-2/3">
              We are always on the lookout for talented individuals who share
              our mission to provide equal access to quality extracurricular
              opportunities for all high school students. Join us and make a
              difference!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {jobPositions.map((position, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 rounded-lg shadow-lg text-center h-full">
                <div className="w-16 h-16 p-4 rounded-full bg-white mb-4">
                  {position.icon}
                </div>
                <h3 className="text-2xl font-bold text-white font-outfit">
                  {position.title}
                </h3>
                <p className="mt-2 text-lg text-gray-100">
                  {position.description}
                </p>
                <button
                  className="mt-4 py-2 px-4 bg-white text-blue-500 rounded-md font-medium focus:outline-none"
                  // Add the link to the application page or email here
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col space-y-4 mx-[8rem] mb-10 font-outfit">
        <div className="flex space-x-4">
          {/* First Card (40% of the row width) */}
          <div className="w-[45%]">
            <div className="bg-blue-500 p-4 rounded-lg flex">
              <div className="text-white w-10 h-10 mr-4 flex items-center justify-center">
                <FaRegSmileBeam className="w-6 h-6" />
              </div>
              <div>
                <h3 className=" text-white text-xl">
                  Positive Work Environment
                </h3>
                <p className="text-white mt-1">
                  Join a team that values collaboration, creativity, and a
                  positive attitude. We strive to create a friendly and
                  inclusive workplace for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card (60% of the row width) */}
          <div className="w-[55%]">
            <div className="bg-blue-500 p-4 rounded-lg flex">
              <div className="text-white w-10 h-10 mr-4 flex items-center justify-center">
                <FaHandsHelping className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white text-xl">Opportunities to Grow</h3>
                <p className="text-white mt-1">
                  We believe in nurturing talent and providing opportunities for
                  professional growth and skill development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          {/* Third Card (40% of the row width) */}
          <div className="w-[55%]">
            <div className="bg-blue-500 p-4 rounded-lg flex">
              <div className="text-white w-10 h-10 mr-4 flex items-center justify-center">
                <FaTrophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white text-xl">Recognition and Rewards</h3>
                <p className="text-white mt-1">
                  Your hard work and contributions will be acknowledged and
                  rewarded to show our appreciation for your efforts.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Card (60% of the row width) */}
          <div className="w-[45%]">
            <div className="bg-blue-500 p-4 rounded-lg flex">
              <div className="text-white w-10 h-10 mr-4 flex items-center justify-center">
                <FaMoneyBillAlt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white text-xl">Competitive Compensation</h3>
                <p className="text-white mt-1">
                  Enjoy a competitive salary package and additional benefits as
                  part of your commitment to our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 py-10 mx-5 lg:mx-20 rounded-xl shadow-lg z-40 mb-10">
        <div className="text-center text-4xl font-bold tracking-normal sm:text-6xl pb-10 text-white font-outfit">
          Get in Touch
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center h-full">
              <div className="w-16 h-16 p-4 rounded-full bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 mb-4">
                <FaRegEnvelope className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-outfit">
                General Inquiries
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                For any general questions or feedback, feel free to reach out to
                us. We'd love to hear from you!
              </p>
              <a
                href="mailto:info@talemapp.com"
                className="mt-4 py-2 px-4 bg-white text-blue-500 rounded-md font-medium focus:outline-none">
                Email Us
              </a>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center h-full">
              <div className="w-16 h-16 p-4 rounded-full bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 mb-4 flex justify-center items-center">
                <FaLaptopCode className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-outfit">
                Technical Support
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Encountering issues or need technical assistance? Our support
                team is here to help you.
              </p>
              <a
                href="mailto:support@talemapp.com"
                className="mt-4 py-2 px-4 bg-white text-blue-500 rounded-md font-medium focus:outline-none">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JoinPage;
