import React from "react";

export default function Card(props) {
  const { propObj } = props;
  const ImgSrc = propObj.image;
  return (
    <div className="rounded-md shadow-lg">
      <div className="rounded-md">
        <img src={ImgSrc} alt={propObj.name} className=" h-[120] w-[240px]" />
      </div>
      <div className="space-y-1">
        <div>
          <span className="text-lg pl-2">${propObj.price}</span>/month
        </div>
        <div className="text-xl pl-2">{propObj["Name"]}</div>
        <div className="text-center text-sm">{propObj.address}</div>
        <div className="text-sm flex space-x-1">
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
