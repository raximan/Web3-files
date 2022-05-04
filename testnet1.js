// NEXON FİNANCE TESTNET AUTOMATİZATİON
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider('https://testnet.aurora.dev/');
var fs = require('fs');
let wallets = []
const main = async ()=>{
    let mainWallet = new ethers.Wallet('',provider) // input here the private key of the wallet which has "aurora testnet ETH"
    wallets.push(mainWallet);
    await createWallet();
    console.log(wallets.length)
    for (let i = 0; i < wallets.length; i++) {

        if(i==wallets.length-1){
            break;
        }
        else{
            let wallet_order = i+1
            await executeTxs(wallets[i],wallets[i+1].address)
            console.log('Wallet Count ='+wallet_order+'\n'+wallets[i+1].address)
        }
    }

}

const executeTxs = async (signer,newWallet)=>{
    try{
        while(true){
             console.log('balance is '+await provider.getBalance(signer.address))
             if(signer.address=='0x36EaE6224905de165577e81C6A053F73b783117B'){
                 await sendETH(signer,newWallet);
                 break;
             }
            if(await provider.getBalance(signer.address)!=0){
                //take test tokens
                const testnetToken = {
                    nonce:'0x0',
                    to:'0x6baa99310fbf58d4c33e8a8015cc887685071b97',
                    data:'0xb5511e93000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000030000000000000000000000009c5061b4fe43c95783a4bb2d05d1b789c454c1490000000000000000000000009d29f395524b3c817ed86e2987a14c1897aff8490000000000000000000000008a65fcf15ed8feb70fba2d10d2fafead4185835e'
                }
                const testnetTokenTX =await signer.sendTransaction(testnetToken)
                await provider.waitForTransaction(testnetTokenTX.hash,1,150000)

                //enter markets
                const enterMarket1 = {
                    nonce:'0x1',
                    to:'0x298b766de27a731baca301f14b0169bb04de6133',
                    data:'0xc2998238000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000007e0a9c51790a542b000ac96a063d4510cbd679b0'
                }
               const enterMarket1tx= await signer.sendTransaction(enterMarket1)
               await provider.waitForTransaction(enterMarket1tx.hash,1,150000)


                const enterMarket2 = {
                    nonce:'0x2',
                    to:'0x298b766de27a731baca301f14b0169bb04de6133',
                    data:'0xc2998238000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000004feab816fefd22e27e0a6a7f73211df73de3c510'
                }
                const enterMarket2tx =await signer.sendTransaction(enterMarket2)
                await provider.waitForTransaction(enterMarket2tx.hash,1,150000)


                const enterMarket3 = {
                    nonce:'0x3',
                    to:'0x298b766de27a731baca301f14b0169bb04de6133',
                    data:'0xc2998238000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000007567b98d4ad4f7c73534582f26610e14561c7cf4'
                }
                const enterMarket3tx = await signer.sendTransaction(enterMarket3)
                await provider.waitForTransaction(enterMarket3tx.hash,1,150000)
                

                const wethTxdata = {
                    nonce:'0x4',
                    to:'0x9d29f395524b3c817ed86e2987a14c1897aff849',
                    data:'0x095ea7b30000000000000000000000004feab816fefd22e27e0a6a7f73211df73de3c510feac697b188b4b7f60d61e1ea5419c3b45a1e6aef410a7ffffffffffffffffff'
                }
                const wethtx = await signer.sendTransaction(wethTxdata);
                await provider.waitForTransaction(wethtx.hash,1,150000)


                let neartxdata = {
                    nonce:'0x5',
                    to:'0x8a65fcf15ed8feb70fba2d10d2fafead4185835e',
                    data:'0x095ea7b30000000000000000000000007e0a9c51790a542b000ac96a063d4510cbd679b0feac697b188b4b7f60d61e1ea5419c3b45a1e6aef410a7ffffffffffffffffff'
                }
                const neartx = await signer.sendTransaction(neartxdata)
                await provider.waitForTransaction(neartx.hash,1,150000)

                //mint collateral tokens
                const mintEth= {
                    nonce:'0x6',
                    to:'0x4feab816fefd22e27e0a6a7f73211df73de3c510',
                    data:'0xa0712d680000000000000000000000000000000000000000000000000de0b6b3a7640000'
                }
                const mintEthtx = await signer.sendTransaction(mintEth);
                await provider.waitForTransaction(mintEthtx.hash,1,150000)


                const mintNear = {
                    nonce:'0x7',
                    to:'0x7e0a9c51790a542b000ac96a063d4510cbd679b0',
                    data:'0xa0712d680000000000000000000000000000000000000000000000000de0b6b3a7640000'
                }
                const mintNeartx= await signer.sendTransaction(mintNear)
                await provider.waitForTransaction(mintNeartx.hash,1,150000)

                //borrow tokens
                const borrowETH = {
                    nonce:'0x8',
                    to:'0x4feab816fefd22e27e0a6a7f73211df73de3c510',
                    data:'0xc5ebeaec000000000000000000000000000000000000000000000000058d15e176280000'
                }
                const borrowETHtx = await signer.sendTransaction(borrowETH);


                const borrowNear = {
                    nonce:'0x9',
                    to:'0x7e0a9c51790a542b000ac96a063d4510cbd679b0',
                    data:'0xc5ebeaec0000000000000000000000000000000000000000000000000de0b6b3a7640000'
                }
                const borrowNeartx = await signer.sendTransaction(borrowNear);

                //repay borrow
                const repayETH = {
                    nonce:'0xA',
                    to:'0x4feab816fefd22e27e0a6a7f73211df73de3c510',
                    data:'0x0e752702000000000000000000000000000000000000000000000000058d15e176280000'
                }
                const repayETHtx = await signer.sendTransaction(repayETH);
                await provider.waitForTransaction(repayETHtx.hash,1,150000)

                fs.appendFile('wallets.txt', 'Public Key is ' +signer.address+'\n'+'Private Key is ' +signer.privateKey, function (err) {
                    if (err) throw err;

                  });
                  

    await sendETH(signer,newWallet);
    break;
            }
        }
    }
    catch(err){
        await sendETH(signer,newWallet);
        sleep(1)
        console.log(err)
    }
}



const sendETH = async (signer,address)=>{
   while(true){
    let balance = await  provider.getBalance(signer.address)
    console.log('sendETHFunction balance is '+ balance);
    if(balance!=0){
        console.log(balance);
    if(signer.address=='0x36EaE6224905de165577e81C6A053F73b783117B'){
        let tx = {
            to:address,
            value: balance.sub(BigInt('394440200000000')),
            gasLimit:21000
        }
        const avaxtx = await signer.sendTransaction(tx);
    await provider.waitForTransaction(avaxtx.hash,1,150000)
    break;
    }
    else{
        let tx = {
            nonce:'0xB',
            to:address,
            value: balance.sub(BigInt('394440200000000')),
            gasLimit:21000
        }
        const avaxtx = await signer.sendTransaction(tx);
    await provider.waitForTransaction(avaxtx.hash,1,150000)
    break;
    }
    
    }
    
   }
}

const createWallet = async ()=>{
    
    for (let i = 0; i < 150; i++) {
        msleep(100)
        let wallet = ethers.Wallet.createRandom().connect(provider);
        //console.log(wallet)
        wallets.push(wallet);
        
    }

}

/*function msleep(n) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
  }
  function sleep(n) {
    msleep(n*1000);
  } */  // this function can be used if the code is customized for randomization

main();


