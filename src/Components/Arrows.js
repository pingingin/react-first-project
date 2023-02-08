import React from "react";
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        <MdNavigateBefore/>
        {/* &#10094; */}
      </span>
      <span className="next" onClick={nextSlide}>
      <MdNavigateNext/>
        {/* &#10095; */}
      </span>
    </div>
  );
}

export default Arrows;