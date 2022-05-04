// yeti finance(Avalanche Fuji) testnet automazation 
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider('https://speedy-nodes-nyc.moralis.io/29e609a7b35326ef185c7ace/avalanche/testnet');
const wethAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"mintLimit_","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const { BigNumber } = require("bignumber.js");
const troveAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"arrayIndex","type":"uint256"}],"name":"TroveCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"_debt","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"_tokens","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"indexed":false,"internalType":"enum BorrowerOperations.BorrowerOperation","name":"operation","type":"uint8"}],"name":"TroveUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"_YUSDFee","type":"uint256"}],"name":"YUSDBorrowingFeePaid","type":"event"},{"inputs":[],"name":"DECIMAL_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NAME","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collsIn","type":"address[]"},{"internalType":"uint256[]","name":"_amountsIn","type":"uint256[]"},{"internalType":"uint256[]","name":"_leverages","type":"uint256[]"},{"internalType":"uint256[]","name":"_maxSlippages","type":"uint256[]"},{"internalType":"uint256","name":"_YUSDAmount","type":"uint256"},{"internalType":"address","name":"_upperHint","type":"address"},{"internalType":"address","name":"_lowerHint","type":"address"},{"internalType":"uint256","name":"_maxFeePercentage","type":"uint256"}],"name":"addCollLeverUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collsIn","type":"address[]"},{"internalType":"uint256[]","name":"_amountsIn","type":"uint256[]"},{"internalType":"address[]","name":"_collsOut","type":"address[]"},{"internalType":"uint256[]","name":"_amountsOut","type":"uint256[]"},{"internalType":"uint256","name":"_YUSDChange","type":"uint256"},{"internalType":"bool","name":"_isDebtIncrease","type":"bool"},{"internalType":"address","name":"_upperHint","type":"address"},{"internalType":"address","name":"_lowerHint","type":"address"},{"internalType":"uint256","name":"_maxFeePercentage","type":"uint256"}],"name":"adjustTrove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeTrove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collsOut","type":"address[]"},{"internalType":"uint256[]","name":"_amountsOut","type":"uint256[]"},{"internalType":"uint256[]","name":"_maxSlippages","type":"uint256[]"}],"name":"closeTroveUnlever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getEntireSystemColl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEntireSystemDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxFeePercentage","type":"uint256"},{"internalType":"uint256","name":"_YUSDAmount","type":"uint256"},{"internalType":"address","name":"_upperHint","type":"address"},{"internalType":"address","name":"_lowerHint","type":"address"},{"internalType":"address[]","name":"_colls","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"openTrove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxFeePercentage","type":"uint256"},{"internalType":"uint256","name":"_YUSDAmount","type":"uint256"},{"internalType":"address","name":"_upperHint","type":"address"},{"internalType":"address","name":"_lowerHint","type":"address"},{"internalType":"address[]","name":"_colls","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"_leverages","type":"uint256[]"},{"internalType":"uint256[]","name":"_maxSlippages","type":"uint256[]"}],"name":"openTroveLeverUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_troveManagerAddress","type":"address"},{"internalType":"address","name":"_activePoolAddress","type":"address"},{"internalType":"address","name":"_defaultPoolAddress","type":"address"},{"internalType":"address","name":"_gasPoolAddress","type":"address"},{"internalType":"address","name":"_collSurplusPoolAddress","type":"address"},{"internalType":"address","name":"_sortedTrovesAddress","type":"address"},{"internalType":"address","name":"_yusdTokenAddress","type":"address"},{"internalType":"address","name":"_controllerAddress","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_collsOut","type":"address[]"},{"internalType":"uint256[]","name":"_amountsOut","type":"uint256[]"},{"internalType":"uint256[]","name":"_maxSlippages","type":"uint256[]"},{"internalType":"uint256","name":"_YUSDAmount","type":"uint256"},{"internalType":"address","name":"_upperHint","type":"address"},{"internalType":"address","name":"_lowerHint","type":"address"}],"name":"withdrawCollUnleverUp","outputs":[],"stateMutability":"nonpayable","type":"function"}]
var sleep = require('sleep');
var fs = require('fs');
let wallets = []
const main = async ()=>{
    let mainWallet = new ethers.Wallet('0x7d96f78f57b8e4126baf75d2343792a1c328dce0db14dfe6785c27905697db1d',provider)
    wallets.push(mainWallet);
    await createWallet();
    console.log(wallets.length)
    for (let i = 0; i < wallets.length; i++) {
        if(i==wallets.length-1){
            break;
        }
        else{

            await executeTxs(wallets[i],wallets[i+1].address)
          
            console.log('Wallet Count ='+wallets.length+'\n'+wallets[i+1].address)
        }
        sleep.sleep(3)
    }

}

const executeTxs = async (signer,newWallet)=>{
    try{
        while(true){
             console.log('balance is '+await provider.getBalance(signer.address))
            if(await provider.getBalance(signer.address)!=0){
                const wethContract = new ethers.Contract('0xdFFf5a4C84340217c94778339F34fe01C7185088',wethAbi,signer)
    const troveContract = new ethers.Contract('0x45f408f32d15fceb53081eac4a2becdbe2fba5e8',troveAbi,signer)
    await wethContract.mint({
        gasLimit:100000
    })
    sleep.sleep(3)
     await wethContract.approve('0x45F408f32d15FCeB53081Eac4a2BEcDBe2fBa5E8',BigInt('100000000000000000000000'))
    sleep.sleep(3)
     await troveContract.openTrove(BigInt('100000000000000000'),BigInt('2000000000000000000000'),'0x3aC1C48692DDd5694aB7aF148681CF9a20c57969','0x252d56a93FCff849b55A9120cf8b898942b1a0A4',['0xdFFf5a4C84340217c94778339F34fe01C7185088'],[BigInt('20000000000000000000')],{gasLimit:1522024})
    sleep.sleep(3)
    let farmTx = {
        to:'0xa7cab1e6d15d4ad6be9feb1b5064dd82ec008182',
        data:'0x78c77a2400000000000000000000000000000000000000000000003635c9adc5dea00000'
    }
    await signer.sendTransaction(farmTx)
    await sendAvax(signer,newWallet);
    break;
            }
        }
    }
    catch(err){
        await sendAvax(signer,newWallet);
        console.log(err)
    }
}
const sendAvax = async (signer,address)=>{
    sleep.sleep(5)
   while(true){
    let balance = await  provider.getBalance(signer.address)
    console.log('sendAvaxFunction balance is '+ balance);
    if(balance!=0){
        console.log(balance);
    let tx = {
        to:address,
        value: balance.sub(BigInt('2000000000000000')),
        gasLimit:21000
    }
    signer.sendTransaction(tx);
    break;
    }
   }
}

const createWallet = async ()=>{
    
    for (let i = 0; i < 150; i++) {
        sleep.msleep(100)
        let wallet = ethers.Wallet.createRandom().connect(provider);
        wallets.push(wallet);
        fs.appendFile('wallets.txt', 'Public Key is ' +wallet.address+'\n', function (err) {
            if (err) throw err;
          });
          sleep.msleep(200)
        fs.appendFile('wallets.txt', 'Private Key is ' +wallet.privateKey+'\n', function (err) {
            if (err) throw err;
          });
        sleep.msleep(100)
    }
}



main();