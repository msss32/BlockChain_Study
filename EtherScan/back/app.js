const express = require("express");
const app = express();
const cors = require("cors");
const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

app.post("/api/increment", async (req, res) => {
  const { from } = req.body;
  const nonce = await web3.eth.getTransactionCount(from);
  const networkId = await web3.eth.net.getId();
  const CA = CounterContract.networks[networkId].address;
  const abi = CounterContract.abi;
  const deployed = new web3.eth.Contract(abi, CA);
  const data = await deployed.methods.increment().encodeABI();

  let txObject = {
    nonce,
    from,
    to: CA,
    data,
  };
  console.log(txObject);
  res.json(txObject);
});

app.listen(5000, () => {
  console.log("서버 OPEN");
});
