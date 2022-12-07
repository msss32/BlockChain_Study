import React from "react";
import "./App.css";
import Scan from "./component/Scan";
import useWeb3 from "./hooks/useWeb3";

function App() {
  const [web3, account] = useWeb3();

  if (!account) return <h1>메타마스크 연결 필요</h1>;
  return (
    <div className="App">
      <Scan web3={web3} account={account}></Scan>
    </div>
  );
}

export default App;
