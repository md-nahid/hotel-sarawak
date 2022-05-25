import React from 'react';

export default function Loadmore({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-3 px-10 bg-orange-600 border-2 border-orange-600 text-white text-xl font-semibold rounded-md hover:bg-transparent hover:text-orange-600 duration-300"
    >
      Load More
    </button>
  );
}
