import React from "react";

export default function Card(props) {
  const { propObj } = props;
  const ImgSrc = propObj.image;
  return (
    <div className="rounded-md shadow-lg w-[240px] box-border flex flex-col">
      {/* <img
        src={ImgSrc}
        alt={propObj.name}
        className=" rounded-md object-cover"
      /> */}
      <div
        className="bg-cover h-40 rounded-t-md"
        style={{ backgroundImage: `url(${ImgSrc})` }}
      />
      <div className="space-y-1 py-1">
        <div>
          <span className="text-lg pl-2">${propObj.price}</span>/month
        </div>
        <div className="text-xl pl-2">{propObj["Name"]}</div>
        <div className="px-2">
          <hr />
        </div>
        <div className="text-center text-sm">{propObj.address}</div>
        <div className="text-sm flex space-x-1 px-2 justify-center items-center">
          <div className="text-center">{propObj.beds}Beds</div>
          <div className="text-center">{propObj.bathrooms} Bathrooms</div>
          <div className="text-center">
            {propObj.width}x{propObj.length} m<sup>2</sup> area
          </div>
        </div>
      </div>
    </div>
  );
}
