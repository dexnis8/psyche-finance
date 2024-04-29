/* eslint-disable react/prop-types */
// import React from 'react'

export const Icon = ({ src, alt, size }) => {
  return (
    <>
      <div
        className={`w-[${size}px] h-[${size}px] overflow-hidden cursor-pointer`}
      >
        <img src={src} alt={alt} />
      </div>
    </>
  );
};
