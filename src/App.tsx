import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: black;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Div>dkssud</Div>
    </div>
  );
}

export default App;
