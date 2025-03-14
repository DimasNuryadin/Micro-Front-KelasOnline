import React from 'react';
import propTypes from 'prop-types';
import RenderItem from "./RenderItem";

ListCourses.propTypes = {
  data: propTypes.array
}

export default function ListCourses({ data }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">New Classes</h2>
          <h3 className="text-xl text-gray-900">Summer <span className="text-teal-400">Productive</span></h3>
        </div>
        <div className="w-auto">
          <a href="/courses" className="text-gray-600 hover:underline text-sm">
            View All Course
          </a>
        </div>
      </div>
      <div className="flex justify-start items-center -mx-4 mt-6">
        {
          data?.length > 0 ? data.map((item, index) => {
            return <RenderItem item={item} key={index + 1} />
          }) : <div className="w-full text-center-py-12">
            No Item Found
          </div>
        }
      </div>
    </>
  )
}
