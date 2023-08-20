import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";

import { Routes, Route } from "react-router-dom";
import ToasterProvider from "@components/common/ToasterProvider";

import Login from "@components/pages/Login";
import Oneday from "@components/pages/Oneday";

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ToasterProvider />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/oneday/*" element={<Oneday />}></Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
