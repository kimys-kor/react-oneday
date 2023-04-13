import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";

import styled from "styled-components";

import Sidebar from "@common/Sidebar";
import Header from "@common/Header";

import Dashboard from "@components/Dashboard";
import Application from "@/components/Application";
import Product from "@components/Product";
import Saving from "@/components/Saving";
import Chart from "@/components/Statistics";
import Member from "@components/Member";
import AdminUser from "@/components/AdminUser";
import Another from "@components/Another";
import MemberDetail from "./MemberDetail";

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
        {/* <Header toggleMenu={toggleMenu}></Header> */}

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="member" element={<Member />} />
          <Route path="application" element={<Application />} />
          <Route path="product" element={<Product />} />
          <Route path="saving" element={<Saving />} />
          <Route path="chart" element={<Chart />} />
          <Route path="adminuser" element={<AdminUser />} />
          <Route path="another" element={<Another />} />
        </Routes>
      </Onedaybox>
    </>
  );
}

export default Oneday;
