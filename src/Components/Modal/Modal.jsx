import React, { useState } from 'react';

const Modal = ({title, content, want, handleSwitch}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="hover:-translate-y-2 transition-all duration-500 my-6 bg-gradient-to-r from-SecColor to-PrimColor text-white font-bold font-Unbounded text-xl p-4 rounded-2xl"
        type="button"
      >
        {title}
      </button>

      {isModalOpen && (
        <div
          id="default-modal"
          className="overflow-y-auto overflow-x-hidden fixed top-1/3 left-1/3 z-50 justify-center items-center w-full inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto flex">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {content}
                </h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  type="button"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Are you sure you want to {want}
                </p>
              </div>
              <div className="flex items-center p-4 border-t border-gray-200 rounded-b justify-center">
                <button
                  onClick={handleSwitch}
                  className="text-white bg-PrimColor focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  type="button"
                >
                  Accept
                </button>
                <button
                  onClick={toggleModal}
                  className="py-2.5 px-5 ms-3 text-sm text-red-500 focus:outline-none rounded-lg font-bold hover:bg-red-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
