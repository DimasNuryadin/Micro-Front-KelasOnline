import React from 'react'
import Link from "next/link";
import propTypes from 'prop-types';
import formatThousand from "@/src/helpers/formatThousand";

RenderItem.propTypes = {
  item: propTypes.any
}

export default function RenderItem({ item }) {
  return (
    <div className="w-1/6 px-4 h-100">
      <div className="card relative transition-all duration-300">
        {item.imageName}
        <div className="card-meta mt-10">
          <h4 className="text-lg transition-all duration-200 w-1/2">{item.name}</h4>
          <h5 className="text-sm transition-all mt-2 duration-500">{formatThousand(item.total)}</h5>
          <Link href="#" className="link-wrapped"></Link>
        </div>
      </div>
    </div>
  )
}
