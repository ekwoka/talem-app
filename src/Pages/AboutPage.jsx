import React, { useState } from "react";
import Header from "../Components/Header";
import { BsUnlockFill, BsCheckCircleFill, BsChatDotsFill, BsClock } from "react-icons/bs";
import { FaUserGraduate, FaBullseye, FaLightbulb } from "react-icons/fa"
import Footer from "../Components/Footer";

const AboutPage = () => {
  const statistics = [
    {
      title: "Daily users use our platform to help find extracurriculars everyday.",
      value: "120+",
      details: "According to our analytics, over 100 users use Talem everyday to help them find the perfect extracurricular/internship opportunities.",
    },
    {
      title: "Extracurriculars/Internships in our database with more added daily.",
      value: "100+",
      details: "Our Extracurricular and Internship Database is always growing and expanding. You can submit your own activity as well!",
    },
    {
      title: "Students have used Talem since its public release",
      value: "1,000+",
      details: "Since Talem went public on July 13th, over 1,000 different individuals have used the website as a source to gain information about highschool extracurriculars and internships",
    },
  ];

  const [expandedStatistics, setExpandedStatistics] = useState([]);

  const handleToggleDetails = (index) => {
    if (expandedStatistics.includes(index)) {
      setExpandedStatistics(expandedStatistics.filter((item) => item !== index));
    } else {
      setExpandedStatistics([...expandedStatistics, index]);
    }
  };

  const firststatistics = [
    {
      percentage: "32%",
      description: "of students from low-income families participate in at least one extracurricular activity during high school, compared to 61% of students from higher-income families.",
      source: "Child Trends. (2020). 'Indicators of School Crime and Safety: 2019.",
      soureLink: "https://nces.ed.gov/pubs2020/2020063.pdf"
    },
    {
      percentage: "45%",
      description: "of students from underrepresented communities lack access to quality extracurricular opportunities during high school.",
      source: "National Center for Education Statistics. (2021). 'The Condition of Education 2021.'",
      soureLink: "https://nces.ed.gov/pubs2021/2021144.pdf"
    },
    {
      percentage: "63%",
      description: "of students from rural areas have limited access to extracurricular activities and educational resources.",
      source: "U.S. Department of Education. (2018). 'Rural Education Toolkit.'",
      soureLink: "https://www2.ed.gov/rschstat/eval/title-iii/educational-technology-educator-toolkit.pdf"
    },
  ];

  const [expandedSources, setExpandedSources] = useState([]);

  const toggleSource = (index) => {
    if (expandedSources.includes(index)) {
      setExpandedSources(expandedSources.filter((item) => item !== index));
    } else {
      setExpandedSources([...expandedSources, index]);
    }
  };

  

  return (
    <>
      <Header />
    <section className="bg-white pt-20">
        <div className="mx-4 md:mx-20 lg:mx-60 rounded-lg shadow-lg flex justify-center items-center bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 p-5">
            <div className="text-center w-2/3">
                <h1 className="text-4xl font-bold tracking-normal text-white sm:text-7xl font-outfit">
                    Our Mission
                </h1>

                <p className="mt-4 text-lg text-white">
                    At Talem, we aim to provide equal access to quality extracurricular opportunities for all high school students. Our mission is to empower students to explore their passions, develop skills, and unlock their full potential.
                </p>
            </div>

        </div>
    </section>

    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {firststatistics.map((statistic, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-purple-700 font-outfit">{statistic.percentage}</div>
              <p className="mt-4 text-xl font-medium text-gray-900">{statistic.description}</p>
              <div className="mt-4">
                {expandedSources.includes(index) ? (
                  <div>
                    <p className="text-gray-600">{statistic.source} <a href={statistic.soureLink} className="text-blue-500 hover:underline">Visit Source</a></p>
                    <button
                      className="text-blue-500 underline mt-2 focus:outline-none"
                      onClick={() => toggleSource(index)}
                    >
                      Close Source
                    </button>
                  </div>
                ) : (
                  <button
                    className="text-blue-500 underline focus:outline-none"
                    onClick={() => toggleSource(index)}
                  >
                    View Source
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      
      <section className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 py-10 mx-5 lg:mx-20 rounded-xl shadow-lg z-40">
        <div className="text-center text-4xl font-bold tracking-normal sm:text-6xl pb-10 text-white font-outfit">So, what are we doing about it?</div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {statistics.map((statistic, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center ${
                  expandedStatistics.includes(index) ? "bg-gray-100" : ""
                }`}
              >
                <h3 className="text-5xl font-bold text-purple-700 font-outfit">{statistic.value}</h3>
                <p className="mt-2 text-xl font-medium text-gray-900">{statistic.title}</p>
                {expandedStatistics.includes(index) && (
                  <p className="mt-4 text-base text-gray-600 font-outfit">{statistic.details}</p>
                )}
                <button
                  className="mt-4 text-base font-medium text-blue-500 focus:outline-none"
                  onClick={() => handleToggleDetails(index)}
                >
                  {expandedStatistics.includes(index) ? "Hide details" : "Show details"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 ">
          <div className="text-center flex justify-center flex-col items-center">
            <h2 className="text-3xl font-extrabold text-gray-900 font-outfit">Why Choose Talem?</h2>
            <p className="mt-4 text-lg text-gray-600 w-2/3">
              We are committed to providing high school students with an exceptional platform for discovering and engaging in extracurricular activities and internships. Here's why Talem is the right choice for you:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 p-10 rounded-xl">
            <div className="flex items-center justify-evenly p-4 bg-white rounded-lg shadow-lg text-center gap-2">
              <BsUnlockFill className="w-8 h-8 text-purple-700" />
              <p className="mt-2 text-lg font-outfit font-medium text-gray-900">Equal Access for All</p>
            </div>
            <div className="flex items-center justify-evenly p-4 bg-white rounded-lg shadow-lg text-center gap-2">
              <BsCheckCircleFill className="w-8 h-8 text-purple-700" />
              <p className="mt-2 text-lg font-outfit font-medium text-gray-900">Wide Range of Opportunities</p>
            </div>
            <div className="flex items-center justify-evenly p-4 bg-white rounded-lg shadow-lg text-center gap-2">
              <BsChatDotsFill className="w-8 h-8 text-purple-700" />
              <p className="mt-2 text-lg font-outfit font-medium text-gray-900">Community Support and Engagement</p>
            </div>
            <div className="flex items-center justify-evenly p-4 bg-white rounded-lg shadow-lg text-center gap-2">
              <BsClock className="w-8 h-8 text-purple-700" />
              <p className="mt-2 text-lg font-outfit font-medium text-gray-900">Save Time and Effort</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;