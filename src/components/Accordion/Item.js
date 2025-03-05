import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';

import ArrowDown from '@/public/images/icon-arrow-down.svg';
import { CSSTransition } from "react-transition-group";

Item.propTypes = {
  name: propTypes.string,
  id: propTypes.number,
  child: propTypes.any,
  active: propTypes.bool,
  toggle: propTypes.any,
  children: propTypes.any
}

export default function Item({ name, id, child, active, toggle, children }) {
  const [height, setHeight] = useState(0);
  const childrenRef = useRef(null);

  function calcHeight(e) {
    setHeight(e.offsetHeight)
  }

  return (
    <div className="bg-white border border-gray-300 overflow-hidden">
      <div className="meta pl-4 py-5 relative flex justify-between items-center">
        <span className="text-gray-600">{name}</span>
        <button className="link-wrapped pr-5 focus:outline-none" onClick={() => toggle(id)}>
          {child && child.length > 0 && <ArrowDown className={['transition-all duration-300 transform', active === id ? "rotate-180" : "rotate-0"].join(" ")} />}
        </button>
      </div>
      <div className="transition-all duration-500" style={{ height: active === id ? height : 0 }}>
        <CSSTransition nodeRef={childrenRef} in={active === id} timeout={500} onEnter={calcHeight} classNames="accordion-item">
          <div className="accordion-item " ref={childrenRef}>
            <div className="py-2 bg-gray-100">
              {children}
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}
