import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";

import Sidebar from "@common/Sidebar";

import Dashboard from "@components/pages/Dashboard";
import Shop from "@components/pages/Shop";
import Rider from "@components/pages/Rider";
import Statistics from "@/components/pages/Statistics";
import Member from "@components/pages/Member";
import Orders from "@components/pages/Orders";
import MemberDetail from "../details/MemberDetail";
import ShopDetail from "../details/ShopDetail";
import RiderDetail from "../details/RiderDetail";
import Question from "./Question";
import QuestionDetail from "../details/QuestionDetail";

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
          <Route path="member/:memberId" element={<MemberDetail />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:shopId" element={<ShopDetail />} />
          <Route path="rider" element={<Rider />} />
          <Route path="rider/:riderId" element={<RiderDetail />} />
          <Route path="question" element={<Question />} />
          <Route path="question/:quetionId" element={<QuestionDetail />} />
          <Route path="orders" element={<Orders />} />
          <Route path="statistics" element={<Statistics />} />
        </Routes>
      </Onedaybox>
    </>
  );
}

export default Oneday;
