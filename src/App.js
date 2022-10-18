import Home from "./pages/Home.js";
import Error from "./pages/Error";
import Sell from "./pages/Sell.js";
import Login from "./pages/Login.js";
export default function App() {
  switch (window.location.pathname) {
    case "/":
      return (
        <>
          <Home />
        </>
      );

    case "/sell":
      return (
        <>
          <Sell />
        </>
      );

    case "/login":
      return (
        <>
          <Login />
        </>
      );

    default:
      return (
        <>
          <Error />
        </>
      );
  }
}
