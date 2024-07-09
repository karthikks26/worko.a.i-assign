import React from "react";

function SearchComponent({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="max-w-xs">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
}

export default SearchComponent;
