import axios from "../util/api.customize";
import { useEffect } from "react";
import Header from "./components/layout/header/header";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    callAPI();
  }, []);
  const callAPI = async () => {
    const res = await axios("/v1/api/");
    console.log(res);
  };
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
