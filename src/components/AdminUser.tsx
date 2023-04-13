import styled from "styled-components";
import { useState } from "react";

import AdminBoard from "@/components/common/board/AdminBoard";
import AdminUserDetail from "@/components/AdminUserDetail";

import { adminBoardTitle, adminBoardData } from "@data/admin/adminData";

import AdminForm from "./AdminForm";

function AdminUser() {
  const [isDetailOpen, setDetailOpen] = useState(false);
  const handleDetailOpen = (index: number) => {
    setDetailOpen(true);
    console.log(index);
  };
  const handleDetailClose = () => {
    setDetailOpen(false);
  };

  const [isAddAdminOpen, setAddAdminOpen] = useState(false);
  const handleAddAdmin = () => {
    setAddAdminOpen((prev) => !prev);
  };

  const [activeAdmin, setActiveAdmin] = useState(0);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleOpenIndex = (index: number) => {
    setActiveAdmin(openIndex);
    setOpenIndex(index);
  };

  return (
    <Adminbox>
      <Content>
        <Layout>
          <Addbox>
            <Addbutton onClick={handleAddAdmin}>+관리자 추가하기</Addbutton>
          </Addbox>

          {/* 관리자 리스트 테이블 */}
          <AdminBoard
            boardMenu={adminBoardTitle}
            boardData={adminBoardData}
            handleDetailOpen={handleDetailOpen}
            openIndex={openIndex}
            handleOpenIndex={handleOpenIndex}
          ></AdminBoard>
        </Layout>
      </Content>

      {/* 관리자 상세 창 */}
      <AdminUserDetail
        onClose={handleDetailClose}
        isDetailOpen={isDetailOpen}
        admin={adminBoardData[activeAdmin]}
      />

      {/* 관리자 추가창 */}
      <AdminForm
        isAddAdminOpen={isAddAdminOpen}
        handleAddAdmin={handleAddAdmin}
      ></AdminForm>
    </Adminbox>
  );
}

export default AdminUser;

const Adminbox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
`;

const Addbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Addbutton = styled.div`
  width: 183px;
  height: 37px;
  color: #bbbbcf;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #f4f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: #bbbbcf;
    color: #fff;
  }
`;

const Content = styled.div`
  width: 100%;
  min-height: 1000px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Layout = styled.div`
  margin-top: 54px;
  width: 90%;
`;
