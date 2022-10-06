import React from "react";
export default function Card(props) {
  const { propObj } = props;
  return (
    <div className="rounded-sm shadow-lg">
      <div className="rounded-sm">
        <img
          src={require(propObj.image).default}
          alt={propObj.name}
          className="object-cover h-48 w-96"
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
