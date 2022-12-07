import React from "react";

const Scan = ({ web3, account }) => {
  web3.eth.getBlockNumber(function (err, rtn) {
    if (err) return console.log(err);
    let latest_block_number = rtn;
    console.log(latest_block_number);
  });
  return <div>Scan</div>;
};

export default Scan;
