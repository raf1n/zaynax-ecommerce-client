/* eslint-disable react/prop-types */

const ToggleButton = ({ handleToggle, status }) => {
  return (
    <div className="text-sm leading-none border border-gray-200 rounded-full inline-flex text-white gap-1 ">
      <button
        type="button"
        onClick={() => handleToggle(true)}
        className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none px-5 py-2  rounded-full  ${
          status
            ? "-mr-4  z-10   rounded-l-full active:bg-red-500 active:text-white bg-green-500 "
            : "text-gray-500 "
        }`}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => handleToggle(false)}
        className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none px-5 py-2 rounded-full  ${
          !status
            ? "-ml-4  z-10 border- rounded-r-full active:bg-red-500 active:text-white bg-red-500"
            : "text-gray-500 "
        }`}
      >
        No
      </button>
    </div>
  );
};

export default ToggleButton;
