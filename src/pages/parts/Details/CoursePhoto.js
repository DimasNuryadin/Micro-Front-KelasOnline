import React from 'react';
import Modal from "@/src/components/Modal";
import propTypes from 'prop-types';

// SVG Files
import Preview from '@/public/images/icon-preview.svg';

CoursePhoto.propTypes = {
  data: propTypes.string
}

export default function CoursePhoto({ data }) {
  return (
    <div className="w-1/3 px-4">
      <div className="item relative">
        <figure className="item-image">
          <Preview className="icon" />
          <img src={data} alt={data} className="object-cover h-32 w-full" />
          <Modal content={(toggle) => <img src={data} alt={data} />}>
            {
              (toggle) => <span onClick={toggle} className="link-wrapped"></span>
            }
          </Modal>
        </figure>
      </div>
    </div>
  )
}
