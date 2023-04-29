import { useState } from "react";
import styled from "styled-components";

import { Routes, Route } from "react-router-dom";

import Login from "@components/pages/Login";
import Oneday from "@components/pages/Oneday";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/oneday/*" element={<Oneday />}></Route>
      </Routes>
    </div>
  );
}

export default App;
