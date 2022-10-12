import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Card from "../components/Card";

export default function Sell() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [propList, setpropList] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    const imageReader = new FileReader();
    imageReader.addEventListener("load", () => {
      data.image = imageReader.result;
      setpropList((prevList) => {
        let newList = prevList.slice();
        newList.push(data);
        return newList;
      });
    });
    imageReader.readAsDataURL(data.image[0]);
  };

  return (
    <div className="Sell">
      <div className="min-h-[100vh] w-full bg-slate-100">
        <Navbar />
        <div>
          <h1>Your Products</h1>
          <div className="py-[5vw] px-[4vw] gap-5 flex flex-wrap box-border">
            {propList.map((element) => {
              return <Card propObj={element} key={element["Name"]} />;
            })}
          </div>
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-1 w-30"
            >
              <div className="space-x-2">
                <label htmlFor="name">Name</label>
                <input
                  {...register("Name", { required: true })}
                  id="name"
                  className="rounded-md"
                />
              </div>
              {errors["Name"] && (
                <span className="text-red-500">Property name is required</span>
              )}
              <div className="space-x-2">
                <select {...register("type", { required: true })}>
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
              <div className="space-x-2">
                <label htmlFor="price">Price</label>
                <input
                  {...register("price", { required: true })}
                  id="price"
                  className="rounded-md"
                />
              </div>
              {errors.price && (
                <span className="text-red-500">Property price is required</span>
              )}
              <div className="space-x-2">
                <label htmlFor="noofbeds">No of beds</label>
                <input
                  {...register("beds", { required: true })}
                  className="rounded-md"
                  id="noofbeds"
                />
              </div>
              {errors.beds && (
                <span className=" text-red-500">
                  Number of beds is required
                </span>
              )}
              <div className="space-x-2">
                <label htmlFor="noofbathrooms">No of bathrooms</label>
                <input
                  {...register("bathrooms", { required: true })}
                  className="rounded-md"
                  id="noofbathrooms"
                />
              </div>
              {errors.bathrooms && (
                <span className="text-red-500">
                  Number of bathrooms is required
                </span>
              )}
              <div className="space-x-2">
                <label htmlFor="proplength">Length</label>{" "}
                <input
                  {...register("length", { required: true })}
                  className="rounded-md"
                  id="proplength"
                />
              </div>
              {errors.length && (
                <span className="text-red-500">
                  Property length is required
                </span>
              )}
              <div className="space-x-2">
                <label htmlFor="propwidth">Width</label>
                <input
                  {...register("width", { required: true })}
                  className="rounded-md"
                  id="propwidth"
                />
              </div>
              {errors.width && (
                <span className="text-red-500">Property width is required</span>
              )}
              <div className="space-x-2">
                <label htmlFor="propaddress">Address</label>
                <input
                  {...register("address", { required: true })}
                  className="rounded-md"
                  id="propaddress"
                />
              </div>

              {errors.address && (
                <span className="text-red-500">
                  Property address is required
                </span>
              )}
              <div className="space-x-2">
                <select {...register("location", { required: true })}>
                  <option value="">--Select Location--</option>
                  <option value="New York, USA">New York, USA</option>
                  <option value="Los Angeles, USA">Los Angeles, USA</option>
                  <option value="Miami, USA">Miami, USA</option>
                </select>
              </div>
              {errors.location && (
                <span className="text-red-500">Location is required</span>
              )}
              <div className="spacex-2">
                <label htmlFor="ImageFile">Property Image</label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: true })}
                  id="ImageFile"
                />
              </div>
              {errors.image && (
                <span className="text-red-500">Property Image is required</span>
              )}

              <input
                type="submit"
                className="border-2 border-violet-600 hover:bg-violet-600 hover:text-white cursor-pointer rounded-md"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
