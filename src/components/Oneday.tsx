import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";

import styled from "styled-components";

import Sidebar from "@common/Sidebar";

import Dashboard from "@components/Dashboard";
import Shop from "@/components/Shop";
import Product from "@components/Product";
import Riders from "@components/Riders";
import Statistics from "@/components/Statistics";
import Member from "@components/Member";
import Orders from "@/components/Orders";

const Onedaybox = styled.div`
  width: 100%;

  position: absolute;
  right: 0;
  transition: 0.19s ease;
`;

function Oneday() {
  const width = 300;
  const [isOpen, setOpen] = useState<boolean>(true);
  const [xPosition, setX] = useState<number>(0);
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width - 50);
      setOpen(false);
    }
  };

  let width2 = "0px";
  if (!isOpen) {
    width2 = "0px";
  } else if (isOpen) {
    width2 = "300px";
  }

  return (
    <>
      <Sidebar xPosition={xPosition}></Sidebar>

      <Onedaybox
        style={{
          width: `calc(100% - ${width2})`,
        }}
      >
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="member" element={<Member />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<Product />} />
          <Route path="riders" element={<Riders />} />
          <Route path="orders" element={<Orders />} />
          <Route path="statistics" element={<Statistics />} />
        </Routes>
      </Onedaybox>
    </>
  );
}

export default Oneday;
