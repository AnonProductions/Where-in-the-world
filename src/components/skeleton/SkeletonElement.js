const SkeletonElement = ({ type, darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900" : "bg-gray-400"
      } animate-pulse rounded-sm ${
        type === "image"
          ? "h-52 w-full mb-6"
          : type === "heading"
          ? "w-2/3 h-4 mb-4"
          : "w-full h-2 mb-2"
      }`}
    ></div>
  );
};

export default SkeletonElement;
