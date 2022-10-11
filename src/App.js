import Home from "./pages/Home.js";
import Error from "./pages/Error";
import Sell from "./pages/Sell.js";
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
    default:
      return (
        <>
          <Error />
        </>
      );
  }
}
