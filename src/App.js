import React from "react";
import Navbar from "./components/header/Navbar";

const App = () => {
  const userName = "Alejandro";

  return (
    <>
      <Navbar name={userName} />
    </>
  );
};

export default App;
