import React, { createContext, useEffect, useState } from "react";
const ContextProvider = React.createContext();

export const ContextApi = ({ children }) => {
  const [cart, setCart] = useState([]);
const [firstVisit,setFirstVisit]=useState(false)
  const addingData = (x) => {
    const findingIndex = cart.findIndex((m) => m.id == x[0]);
    console.log(findingIndex);
    if (findingIndex !== -1) {
      let tempArray = cart.slice();
      tempArray[findingIndex]["qty"] = tempArray[findingIndex]["qty"] + 1;
      setCart(tempArray);
    } else {
      const helperObj = { id: x[0], arr: x, qty: 1 };
      setCart((prev) => [...prev, helperObj]);
    }
  };

  const updateData = (x) => {
    const findingIndex = cart.findIndex((m) => m.id == x["id"]);
    let tempArray = cart.slice();
    tempArray[findingIndex]["qty"] = tempArray[findingIndex]["qty"] + 1;
    setCart(tempArray);
  };

  const removeData = (x) => {
    const findingIndex = cart.findIndex((m) => m.id == x["id"]);
    let tempArray = cart.slice();
    tempArray[findingIndex]["qty"] = tempArray[findingIndex]["qty"] - 1;
    setCart(tempArray);
  };

  const deleteData = (x) => {
    const findingIndex = cart.findIndex((m) => m.id == x["id"]);
    let tempArray = cart.slice();
    tempArray.splice(findingIndex, 1);
    setCart(tempArray);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <ContextProvider.Provider
      value={{
        selectedItems: (x) => addingData(x),
        readingItems: cart,
        insertQty: (x) => updateData(x),
        removeQty: (x) => removeData(x),
        deleteData: (x) => deleteData(x),
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
