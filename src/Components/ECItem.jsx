import {
  ArrowTopRightOnSquareIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';
import LazyLoad from 'react-lazy-load';

import DescriptionEC from './DescriptionEc';

const ECItem = ({ ec, handleBookmark, bookmarkedItems }) => (
  <LazyLoad offsetVertical={100} threshold={0.5}>
    <div
      className="shadow-lg rounded-lg bg-white grid grid-cols-1 lg:grid-cols-4 my-2"
      key={ec.id}>
      {/* Individual EC Item holder */}
      <div className="grid col-span-3 p-10 flex flex-col justify-evenly gap-3">
        {/* Col-span-3 EC info */}
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-outfit">
          {ec.name}
        </h1>
        <DescriptionEC description={ec.description} />
        <div className="w-full flex flex-wrap gap-3">
          <div className="ec-tag">{ec.commitment}</div>
          <div className="ec-tag">{ec.environment}</div>
          {ec.grade.map((grade) => {
            return <div className="ec-tag">{grade}</div>;
          })}

          {ec.location.map((location) => {
            return <div className="ec-tag">{location}</div>;
          })}

          {ec.skill.map((skill) => {
            return <div className="ec-tag">{skill}</div>;
          })}

          <div className="ec-tag">{ec.soloTeam}</div>
          <div className="ec-tag">{ec.type}</div>

          {ec.category.map((category) => {
            return <div className="ec-tag">{category}</div>;
          })}

          {ec.subjects.map((subject) => {
            return <div className="ec-tag bg-green-300">{subject}</div>;
          })}
        </div>
      </div>
      <div className="col-span-1 p-7 flex flex-col gap-4 justify-center items-center">
        <LazyLoad offsetVertical={100} threshold={0.5}>
          <img
            src={ec.src}
            alt={`Picture of ${ec.name} logo`}
            className="w-[60%] lg:w-full shadow-md rounded-xl p-3"
          />
        </LazyLoad>
        <a
          href={ec.link}
          target="_blank"
          className="ec-buttons"
          rel="noreferrer">
          Visit Site <ArrowTopRightOnSquareIcon className="dropdown-main" />
        </a>
        <button
          className="ec-buttons"
          onClick={() => {
            handleBookmark(ec);
          }}>
          {bookmarkedItems.some((item) => item.id === ec.id)
            ? 'Remove Bookmark'
            : 'Bookmark'}
          {bookmarkedItems.some((item) => item.id === ec.id) ? (
            <BookmarkIcon className="dropdown-main hover:text-yellow-500" />
          ) : (
            <BookmarkIcon className="dropdown-main hover:text-yellow-500" />
          )}
        </button>
      </div>
    </div>
  </LazyLoad>
);

export default ECItem;
