import React from 'react'
import IconPlay from '@/public/images/icon-play.svg';
import Link from "next/link";
import propTypes from 'prop-types';

RenderItem.propTypes = {
  item: propTypes.any
}

export default function RenderItem({ item }) {
  return (
    <div className="w-1/4 px-4">
      <div className="item relative">
        <figure className="item-image">
          <IconPlay className="icon" />
          <img src={item?.thumbnail ?? ""} alt={item?.name ?? "Some information"} className="w-full" />
        </figure>
        <div className="item-meta mt-2">
          <h4 className="text-lg text-gray-900">{item?.name ?? "Course name"}</h4>
          <h5 className="text-lg text-gray-600">{item?.level ?? "Course level"}</h5>
        </div>
        <Link href="/courses/[slug]" as={`/courses/${item.id}`} className="link-wrapped"></Link>
      </div>
    </div>
  )
}
