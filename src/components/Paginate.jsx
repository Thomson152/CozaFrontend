import React from 'react';

const Paginate = ({ pages, page,  keyword = '' }) => {
  return (
    pages > 1 && (
      <ul className="flex justify-center my-4">
        {[...Array(pages).keys()].map((x) => (
          <li key={x + 1} className="mx-1">
            <button
              className={`py-2 px-4 rounded ${
                x + 1 === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() =>
                console.log('Handle pagination click:', x + 1) // Replace with your logic
              }
            >
              {x + 1}
            </button>
          </li>
        ))}
      </ul>
    )
  );
};

export default Paginate;
