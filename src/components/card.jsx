import React from "react";

export default function Card({ title, content, image }) {
  return (
    <div className="border-2 border-gray-6 bg-white p-6 flex flex-col items-center text-justify"
         style={{ width: 480, minHeight: 357 }}>
      <div className="w-[140px] h-[150px] bg-gray-200 flex items-center justify-center mb-4 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className=" w-full h-full object-cover"
            style={{ display: "block" }}
          />
        ) : (
          <span className="text-gray-400">No Image Available</span>
        )}
      </div>
      <h2 className="font-bold text-xl w-full text-left mb-1">{title}</h2>
      <p className="text-gray-500 text-base w-full text-left ">{content}</p>
    </div>
  );
}