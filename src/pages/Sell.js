import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { useState, React, useRef } from "react";
import Sellcard from "../components/Sellcard";

export default function Sell() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [propList, setpropList] = useState(
    localStorage.getItem("dataList")
      ? JSON.parse(localStorage.getItem("dataList"))
      : []
  );

  const formRef = useRef(null);

  const onSubmit = (data) => {
    const imageReader = new FileReader();
    imageReader.addEventListener("load", () => {
      data.image = imageReader.result;
      setpropList((prevList) => {
        let newList = prevList.slice();
        newList.push(data);
        showHideFormHandler();
        localStorage.setItem("dataList", JSON.stringify(newList));
        return newList;
      });
    });
    imageReader.readAsDataURL(data.image[0]);
  };

  function showHideFormHandler() {
    formRef.current.classList.toggle("opacity-0");
    formRef.current.classList.toggle("pointer-events-none");
    reset();
  }
  return (
    <div className="Sell">
      <div className="min-h-[100vh] w-full bg-slate-100 relative">
        <Navbar />
        <div>
          <h1>Your Products</h1>

          <div className="py-[5vw] px-[4vw] gap-5 flex flex-wrap box-border">
            {propList.map((element) => {
              return (
                <Sellcard
                  propObj={element}
                  key={element["Name"]}
                  setList={setpropList}
                />
              );
            })}
            <button
              className="rounded-md shadow-lg w-[240px] box-border flex text-5xl bg-black/20 text-white text-center justify-center items-center min-h-[17.5rem]"
              onClick={showHideFormHandler}
            >
              <span>+</span>
            </button>
          </div>

          <div
            className="flex justify-center pb-5 box-border absolute h-full w-full opacity-0 left-0 top-0 overflow-auto pointer-events-none bg-black/50 items-center"
            ref={formRef}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-1 w-[40%]  min-w-[300px] pb-2 shadow-2xl rounded-md box-border px-2 bg-white"
            >
              <div className="flex justify-end relative pt-8">
                <button
                  className="py-[0.125rem] px-1.5 bg-red-500 text-white text-xl rounded-md text-center absolute top-0 right-[-0.5rem] w-8 flex items-center justify-center"
                  onClick={showHideFormHandler}
                >
                  <span>x</span>
                </button>
              </div>
              <div className="space-x-2 grid grid-cols-2">
                <label htmlFor="name" className="box-border">
                  Name
                </label>
                <input
                  {...register("Name", { required: true })}
                  id="name"
                  className="rounded-md text-center px-1 border-2"
                />
              </div>
              {errors["Name"] && (
                <span className="text-red-500">Property name is required</span>
              )}
              <div className="space-x-2 grid grid-cols-2">
                <div />
                <select
                  {...register("type", { required: true })}
                  className="border-2 rounded-md"
                >
                  <option value="">--Choose Property Type--</option>
                  <option value="Houses">Houses</option>
                  <option value="Condos">Condos</option>
                  <option value="Townhouses">TownHouses</option>
                  <option value="Multifamily">Multifamily</option>
                </select>
              </div>
              {errors.type && (
                <span className="text-red-500">Property type is required</span>
              )}
              <div className="grid grid-cols-2 space-x-2">
                <label htmlFor="priceno">Price</label>
                <input
                  type="Number"
                  {...register("price", { required: true })}
                  className="rounded-md text-center px-1 border-2"
                  id="priceno"
                />
              </div>
              {errors.price && (
                <span className="text-red-500">Property price is required</span>
              )}
              <div className="space-x-2 grid grid-cols-2">
                <label htmlFor="noofbeds">No of beds</label>
                <input
                  type="Number"
                  {...register("beds", { required: true })}
                  className="rounded-md text-center px-1 border-2"
                  id="noofbeds"
                />
              </div>
              {errors.beds && (
                <span className=" text-red-500">
                  Number of beds is required
                </span>
              )}
              <div className="space-x-2 grid grid-cols-2">
                <label htmlFor="noofbathrooms">No of bathrooms</label>
                <input
                  type="Number"
                  {...register("bathrooms", { required: true })}
                  className="rounded-md text-center px-1 border-2"
                  id="noofbathrooms"
                />
              </div>
              {errors.bathrooms && (
                <span className="text-red-500">
                  Number of bathrooms is required
                </span>
              )}
              <div className="space-x-2 grid grid-cols-2">
                <label htmlFor="proplength">Length</label>
                <input
                  type="Number"
                  {...register("length", { required: true })}
                  className="rounded-md text-center px-1 border-2"
                  id="proplength"
                />
              </div>
              {errors.length && (
                <span className="text-red-500">
                  Property length is required
                </span>
              )}
              <div className="space-x-2 grid grid-cols-2">
                <label htmlFor="propwidth">Width</label>
                <input
                  type="Number"
                  {...register("width", { required: true })}
                  className="rounded-md text-center px-1 border-2"
                  id="propwidth"
                />
              </div>
              {errors.width && (
                <span className="text-red-500">Property width is required</span>
              )}
              <div className="space-x-2 grid grid-cols-2">
                <label htmlFor="propaddress">Address</label>
                <input
                  {...register("address", { required: true })}
                  className="rounded-md text-center px-1 border-2"
                  id="propaddress"
                />
              </div>

              {errors.address && (
                <span className="text-red-500">
                  Property address is required
                </span>
              )}
              <div className="space-x-2 grid grid-cols-2">
                <div />
                <select
                  {...register("location", { required: true })}
                  className="border-2 rounded-md text-center"
                >
                  <option value="">--Select Location--</option>
                  <option value="New York, USA">New York, USA</option>
                  <option value="Los Angeles, USA">Los Angeles, USA</option>
                  <option value="Miami, USA">Miami, USA</option>
                </select>
              </div>
              {errors.location && (
                <span className="text-red-500">Location is required</span>
              )}
              <div className=" space-x-2 grid grid-cols-2">
                <label htmlFor="ImageFile">Property Image</label>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("image", { required: true })}
                    id="ImageFile"
                  />
                </div>
              </div>
              {errors.image && (
                <span className="text-red-500">Property Image is required</span>
              )}

              <input
                type="submit"
                className="border-2 border-violet-600 hover:bg-violet-600 hover:text-white cursor-pointer rounded-md px-3 self-center"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
