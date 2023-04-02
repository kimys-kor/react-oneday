import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";

import styled from "styled-components";

import Sidebar from "@common/Sidebar";
import Header from "@common/Header";

import Dashboard from "@components/Dashboard";
import Shop from "@components/Shop";
import Product from "@components/Product";
import Rider from "@components/Rider";
import Orders from "@components/Orders";
import Member from "@components/Member";

const Onedaybox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 20px;
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
        <Header toggleMenu={toggleMenu}></Header>

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<Product />} />
          <Route path="rider" element={<Rider />} />
          <Route path="orders" element={<Orders />} />
          <Route path="member" element={<Member />} />
        </Routes>
      </Onedaybox>
    </>
  );
}

export default Oneday;
