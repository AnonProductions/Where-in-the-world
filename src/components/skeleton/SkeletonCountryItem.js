import SkeletonElement from "./SkeletonElement";

const SkeletonCountryItem = ({ darkMode }) => {
  return (
    <div
      className={`rounded-md shadow-lg mx-6 overflow-hidden mb-8 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring ring-teal-500 focus:-translate-y-2 focus:shadow-2xl ${
        darkMode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <SkeletonElement type="image" darkMode={darkMode} />
      <div className="py-6 px-4 mb-6">
        <SkeletonElement type="heading" darkMode={darkMode} />
        <SkeletonElement type="paragraph" darkMode={darkMode} />
        <SkeletonElement type="paragraph" darkMode={darkMode} />
        <SkeletonElement type="paragraph" darkMode={darkMode} />
      </div>
    </div>
  );
};

export default SkeletonCountryItem;
