import "../App.css";
import dataset from "../assets/data.js";
import React, { useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
// import Calendar from 'react-calendar';

function Home() {
  const [type, setType] = useState({ value: "any" });
  const [location, setLocation] = useState({ value: "any" });
  const [price, setPrice] = useState({ value: "any" });
  let filteredDataSet = dataset.slice();
  filteredDataSet = filteredDataSet.filter((dataObj) => {
    if (type.value === "any") {
      return true;
    }
    return dataObj.type === type.value;
  });

  filteredDataSet = filteredDataSet.filter((dataObj) => {
    if (location.value === "any") {
      return true;
    }
    return dataObj.location === location.value;
  });
  let priceRangeString;
  let priceRange;
  if (price.value !== "any") {
    priceRangeString = price.value.split("-");
    priceRange = priceRangeString.map((str) => {
      return parseInt(str, 10);
    });
  }
  filteredDataSet = filteredDataSet.filter((dataObj) => {
    if (price.value === "any") {
      return true;
    }
    if (dataObj.price > priceRange[0] && dataObj.price < priceRange[1]) {
      return true;
    }
    return false;
  });

  let displayedProps = filteredDataSet.map((element) => {
    return <Card propObj={element} key={element["Name"]} />;
  });

  function handleTypeChange(event) {
    setType({ value: event.target.value });
  }
  function handleLocationChange(event) {
    setLocation({ value: event.target.value });
  }
  function handlePriceChange(event) {
    setPrice({ value: event.target.value });
  }
  return (
    <div className="Home">
      <div className=" w-full min-h-[100vh] bg-slate-100">
        <Navbar />
        <div className="mx-5 mb-4 space-x-2 py-1 mt-8">
          <select value={type.value} onChange={handleTypeChange}>
            <option value="any">Any</option>
            <option value="Houses">Houses</option>
            <option value="Condos">Condos</option>
            <option value="Townhouses">TownHouses</option>
            <option value="Multifamily">Multifamily</option>
          </select>
          <select value={location.value} onChange={handleLocationChange}>
            <option value="any">Any</option>
            <option value="New York, USA">New York, USA</option>
            <option value="Los Angeles, USA">Los Angeles, USA</option>
            <option value="Miami, USA">Miami, USA</option>
          </select>
          <select value={price.value} onChange={handlePriceChange}>
            <option value="any">Any</option>
            <option value="1500-2000">1500-2000</option>
            <option value="2000-2500">2000-2500</option>
            <option value="2500-3000">2500-3000</option>
            <option value="3000-4000">3000-4000</option>
          </select>
        </div>

        <div className=" py-[5vw] px-[4vw] gap-5 flex flex-wrap box-border">
          {displayedProps}
        </div>
      </div>
    </div>
  );
}

export default Home;
