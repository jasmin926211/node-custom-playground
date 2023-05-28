const express = require('express');
const server = express();
const port = 4000;
var Web3 = require('web3');

server.listen(port, () => {
  console.log(`Server Running on ${port}`);
});

server.get('/kong', (req, res) => {
  console.log(req.headers);
  res.status(200).send('Hello world');
});

function setWeb3Url(isLocal) {
  if (isLocal) {
    var web3 = new Web3('http://127.0.0.1:7545');
  } else {
    var web3 = new Web3(
      'https://rinkeby.infura.io/v3/9ecd0ff054074b37875c95c1cb6d82d4'
    );
  }
  return web3;
}

const isLocal = true;
const web3 = setWeb3Url(isLocal);

const getBlockData = async () => {
  const block = await web3.eth.getBlock('latest');
  const accounts = await web3.eth.getAccounts();
  await web3.eth.personal.newAccount('jasmin123');
  return accounts;
};

// getBlockData().then((data) => {
//   console.log(data);
// });

const getAccountBalance = async (accountAddress) => {
  const balance = await web3.eth.getBalance(accountAddress);
  return balance;
};

const accountAddress = '0x836fd1E39A1CDe1cED919A371c767E1bb6dC1f51';
const newAccount = '0x626bBf03c5f6Cf724be0eF70C47eb9570e177504';
const sendAmount = web3.utils.toWei('1', 'ether');

web3.eth
  .sendTransaction(
    {
      from: accountAddress,
      gasPrice: '20000000000',
      gas: '6500000',
      to: newAccount,
      value: sendAmount,
      data: '',
    },
    'this|is|password'
  )
  .then((data) => {
    console.log('transaction::', data);
  });

getAccountBalance(newAccount).then((balance) => {
  const eather = web3.utils.fromWei(balance, 'ether');
  console.log('eather::', eather);
});

// web3.eth.getTransactionCount(accountAddress).then(console.log);

// const account = web3.eth.accounts.create();
// console.log('account::', account);

// created account obj

// {
//   address: '0x8f337c2cb98088fD1d4f80fca57604D8Edadbfe3',
//   privateKey: '0x33d7979aed23703daeed5a125890eeefbb9bb4ae97f8f685ce4201291294392c',
//   signTransaction: [Function: signTransaction],
//   sign: [Function: sign],
//   encrypt: [Function: encrypt]
// }
