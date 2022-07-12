import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  axios
    .get(``)
    .then()
    .catch((error) => {
      console.error(error);
    });

  return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
