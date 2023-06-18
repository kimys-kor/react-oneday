import React, { useState } from "react";
import styled from "styled-components";

interface pathitem {
  title: string;
  path: string;
}

interface AccordionSidebarProps {
  items: { title: string; content: pathitem[] }[];
}

const AccordionSidebar: React.FC<AccordionSidebarProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onTitleClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index: number) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <Title className={`${active}`} onClick={() => onTitleClick(index)}>
          <i className={`dropdown icon ${active}`}></i>
          {item.title}
        </Title>
        <Content className={`${active}`}>
          {item.content.map((pathitem, index) => (
            <p>{pathitem.title}</p>
          ))}
        </Content>
      </React.Fragment>
    );
  });

  return <Wrapper>{renderedItems}</Wrapper>;
};

const Wrapper = styled.div`
  transition: 0.19s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  position: fixed;

  width: 18.625rem;
  height: 100vh;
`;

const Title = styled.div`
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  &.active {
    background-color: #f1f1f1;
  }

  .dropdown.icon {
    transition: transform 0.2s ease;
    transform-origin: center;
  }

  &.active .dropdown.icon {
    transform: rotate(180deg);
  }
`;

const Content = styled.div`
  padding: 0 1rem;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out;

  &.active {
    max-height: 1000px;
    transition: max-height 0.5s ease-in;
  }

  p {
    margin-top: 0;
  }
`;

export default AccordionSidebar;
