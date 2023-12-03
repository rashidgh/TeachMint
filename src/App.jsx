import React from "react";
import Directory from "./component/directory/Directory";
import Portal from "./component/portal/Portal";
import Context from "./Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Context>
      <div className="mainComp">
        {/* <Directory />
        <Portal /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Directory />} />
            <Route path="portal" element={<Portal />} />
          </Routes>{" "}
        </BrowserRouter>
      </div>
    </Context>
  );
};

export default App;
