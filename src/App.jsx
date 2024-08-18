import axios from "../util/api.customize";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    callAPI();
  }, []);
  const callAPI = async () => {
    const res = await axios("/v1/api/");
    console.log(res);
  };
  return <></>;
}

export default App;
