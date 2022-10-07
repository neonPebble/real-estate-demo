import "./App.css";
import dataset from "./assets/data.js";
import React, { useState } from "react";
import Card from "./components/Card";
// import Calendar from 'react-calendar';

function App() {
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
    <div className="App">
      <div className=" w-full min-h-[100vh] bg-slate-100">
        <div className="px-6 py-2 flex place-content-between">
          <div className=" space-x-3 flex">
            <div className="px-2 py-1 text-center text-xl mr-4">Estatery</div>
            <div className="px-2 py-1 text-center text-violet-900 bg-violet-400">
              Rent
            </div>
            <div className="px-2 py-1 text-center hover:text-violet-900 hover:bg-violet-400 rounded-sm">
              Buy
            </div>
            <div className="px-2 py-1 text-center hover:text-violet-900 hover:bg-violet-400 rounded-sm">
              Sell
            </div>
            <div className="px-2 py-1 text-center hover:text-violet-900 hover:bg-violet-400 rounded-sm">
              Manage Property
            </div>
            <div className="px-2 py-1 text-center hover:text-violet-900 hover:bg-violet-400 rounded-sm">
              Resources
            </div>
          </div>
          <div className=" flex justify-center items-center space-x-2">
            <button className="text-center px-2 py-1 hover:bg-violet-800 hover:text-white rounded-md shadow-sm border-violet-400 border-2">
              Login
            </button>
            <button className="text-center px-2 py-1 hover:bg-violet-800 hover:text-white rounded-md shadow-sm border-violet-400 border-2">
              Sign Up
            </button>
          </div>
        </div>
        <div className="mx-5 my-4 space-x-2 py-1">
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

export default App;
