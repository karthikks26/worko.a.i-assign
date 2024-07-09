import React from "react";

function ListCard({ items }) {
  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <div className="bg-white shadow-sm rounded-md p-4">
          <p className="text-gray-600">No items found.</p>
        </div>
      ) : (
        items.map((item, index) => (
          <div key={index} className="bg-white shadow-sm rounded-md p-4">
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ListCard;
