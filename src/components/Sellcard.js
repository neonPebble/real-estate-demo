export default function Sellcard(props) {
  const { setList } = props;
  const { propObj } = props;
  const ImgSrc = propObj.image;
  function removeHandler() {
    let currentList = JSON.parse(localStorage.getItem("dataList"));
    for (let i = 0; i < currentList.length; i++) {
      if (currentList[i]["Name"] === propObj["Name"]) {
        currentList.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("dataList", JSON.stringify(currentList));
    setList(() => currentList);
  }
  return (
    <div>
      <div className="rounded-md shadow-lg w-[240px] box-border flex flex-col relative">
        <div className="bg-transparent opacity-0 hover:opacity-100 h-full w-full absolute">
          <button
            className="border-2 border-red-400 absolute top-0 right-0 bg-red-500/25 text-white px-1 py-0.5 rounded-md hover:bg-red-800"
            onClick={removeHandler}
          >
            Remove
          </button>
        </div>
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
    </div>
  );
}
