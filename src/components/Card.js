import React from "react";
import * as allPics from "./picdata";
export default function Card(props) {
  const { propObj } = props;
  return (
    <div className="rounded-sm shadow-lg max-w-min">
      <div className="rounded-sm">
        <img
          src={allPics["House1"]}
          alt={propObj.name}
          className="object-cover h-[360] w-[640px]"
        />
      </div>
      <div className="space-y-1">
        <div>
          <span className="text-lg pl-2">${propObj.price}</span>/month
        </div>
        <div className="text-xl pl-2">{propObj.name}</div>
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
