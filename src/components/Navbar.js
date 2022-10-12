export default function Navbar() {
  return (
    <div className="px-6 py-2 flex place-content-between">
      <div className=" space-x-3 flex">
        <div className="px-2 py-1 text-center text-xl mr-4">Estatery</div>
        <div
          className={`px-2 py-1 text-center  hover:text-violet-900 hover:bg-violet-400 rounded-sm ${
            window.location.pathname === "/"
              ? "text-violet-900 bg-violet-400"
              : ""
          }`}
        >
          <a href="/">Rent</a>
        </div>
        <div
          className={`px-2 py-1 text-center hover:text-violet-900 hover:bg-violet-400 rounded-sm ${
            window.location.pathname === "/buy"
              ? "text-violet-900 bg-violet-400"
              : ""
          }`}
        >
          Buy
        </div>
        <div
          className={`px-2 py-1 text-center hover:text-violet-900 hover:bg-violet-400 rounded-sm ${
            window.location.pathname === "/sell"
              ? "text-violet-900 bg-violet-400"
              : ""
          }`}
        >
          <a href="/sell">Sell</a>
        </div>
        <div
          className={`px-2 py-1 text-center hover:text-violet-900 hover:bg-violet-400 rounded-sm ${
            window.location.pathname === "/manage"
              ? "text-violet-900 bg-violet-400"
              : ""
          }`}
        >
          Manage Property
        </div>
        <div
          className={`px-2 py-1 text-center hover:text-violet-900 hover:bg-violet-400 rounded-sm ${
            window.location.pathname === "/resources"
              ? "text-violet-900 bg-violet-400"
              : ""
          }`}
        >
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
  );
}