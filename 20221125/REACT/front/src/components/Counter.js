import React, { useEffect, useState } from "react";
import CounterContract from "../contracts/Counter.json";

const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState(null);

  const increment = async () => {
    // 매개변수로 트랜잭션 계정이 필요
    // 트랜잭션을 발생 시킬거.
    // 상태변수를 변경 send() 함수로
    // 상태 변수를 변경을 하고
    const result = await deployed.methods.increment().send({ from: account });
    if (!result) return;
    // 상태 변수를 가져와서 state값을 변경
    const current = await deployed.methods.current().call();
    setCount(current);
  };
  const decrement = async () => {
    const result = await deployed.methods.decrement().send({ from: account });
    if (!result) return;
    // 상태 변수를 가져와서 state값을 변경
    const current = await deployed.methods.current().call();
    setCount(current);
  };

  useEffect(() => {
    (async () => {
      if (deployed) return;
      // abi와 CA가 필요한데
      // Counter.json 안에 abi가 있고
      // it.address
      // CA : '0xaD32ad9CF4640469675eBeBC070E978EBBdd5064'
      const Deployed = new web3.eth.Contract(
        CounterContract.abi,
        "0xaD32ad9CF4640469675eBeBC070E978EBBdd5064"
      );
      const count = await Deployed.methods.current().call();
      setCount(count);
      setDeployed(Deployed);
    })();
  }, []);

  return (
    <div>
      <h1>개수 : {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
