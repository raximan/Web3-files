// DERİ TESTNET AUTOMATİZATİON
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider('https://rinkeby.arbitrum.io/rpc');
const { BigNumber } = require("bignumber.js");

var fs = require('fs');
let wallets = []

const main = async ()=>{
    let mainWallet = new ethers.Wallet("",provider) // enter the private key of the main wallet that have AETH in it
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
                 await sendAvax(signer,newWallet);
                 break;
             }
            if(await provider.getBalance(signer.address)!=0){
                //take test tokens
                const mınt_usdc = {
                    //nonce:(await provider.getTransactionCount(signer.address)).toString(),
                    to:'0x774382ef196781400a335af0c4219eed684ed713',
                    data:"0xa0712d68000000000000000000000000000000000000000000000000000000003b9aca00" 
                }
                console.log("mınt ıs d")
                const mınt_usdcf =await signer.sendTransaction(mınt_usdc)
                console.log(mınt_usdcf)
                console.log(mınt_usdc)
                await provider.waitForTransaction(mınt_usdcf.hash,1,150000)
                console.log("mınt ıs done")


                //enter markets
                const mınt_lınk = {
                    //nonce:(await provider.getTransactionCount(signer.address)).toString(),
                    to:'0x403052a80d33a79bef4645c0d8ff00fa03f424c7',
                    data:"0xa0712d680000000000000000000000000000000000000000000000056bc75e2d63100000" 
                }
               const mınt_lınkf= await signer.sendTransaction(mınt_lınk)
               await provider.waitForTransaction(mınt_lınkf.hash,1,150000)
               console.log("mınt ıs now done")

                const mınt_daı = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:'0x200c2386a02cba50563b7b64615b43ab1874a06e',
                    data:"0xa0712d6800000000000000000000000000000000000000000000003635c9adc5dea00000"
                }
                const mınt_daıf =await signer.sendTransaction(enterMarket2)
                await provider.waitForTransaction(mınt_daıf.hash,1,150000)

                const mınt_aave = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:'0x31f909c64e93f764dc90d78dcbb38a6a6d1d48de',
                    data: "0xa0712d680000000000000000000000000000000000000000000000008ac7230489e80000"               
                }
                const mınt_aavef = await signer.sendTransaction(mınt_aave)
                await provider.waitForTransaction(mınt_aavef.hash,1,150000)


                const mınt_wbtc = {
                    //nonce : (await provider.getTransactionCount(signer.address)).toString(),
                    to:'0x1f7dc0b961950c69584d0f9ce290a918124d32cd',
                    data:"0xa0712d680000000000000000000000000000000000000000000000000000000002faf080"
                }
                const mınt_wbtcf = await signer.sendTransaction(mınt_wbtc);
                await provider.waitForTransaction(mınt_wbtcf.hash,1,150000)


                const app_usdc = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:'0x774382ef196781400a335af0c4219eed684ed713',
                    data:"0x095ea7b3000000000000000000000000296a1cdde93a99b4591486244f7442e25ca596a6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const app_usdcf = await signer.sendTransaction(app_usdc)
                await provider.waitForTransaction(app_usdcf.hash,1,150000)

                // stake 250 usdc
                const stake_usdc= {
                   // nonce : (await provider.getTransactionCount(signer.address)).toString(),
                    to:'0xf48d3144d632e166690e3ba2c5f45f00f571bb50',
                    data:"0x4355bcd6000000000000000000000000774382ef196781400a335af0c4219eed684ed713000000000000000000000000000000000000000000000000000000000ee6b2800000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000221b5e575db5908f82bf406cb4dd9a5b6c4002f75e43e9a309d52ce4781fd0a4f00000000000000000000000000000000000000000000000000000000626ec1b80000000000000000000000000000000000000000000000000879a46a1454c000000000000000000000000000000000000000000000000000000000000000001c07d4fc2e7fe80ed308430eeb53513f187f9c15341a9a21f70b796c7ed4c3ff140c1d8f0c8e15bf2608e6ebbac239b6a9c371a2ac64d8c216338946634289c9bed688cdd1e80f5af29b34377f1b82df91cbf6f697a25a9b3fd3eac5e52da25ed900000000000000000000000000000000000000000000000000000000626ec1b8000000000000000000000000000000000000000000000000095644090ce20000000000000000000000000000000000000000000000000000000000000000001b49a979d1a65dd93de588303a28d5ae740cd4f52c64ba4d0540d2008159ad35764645ca1354fe84f9e39759c54ea27e98d70fe46273261e1cef85da67c6774d67"
                }
                const stake_usdcf = await signer.sendTransaction(stake_usdc);
                await provider.waitForTransaction(stake_usdcf.hash,1,150000)

                
               /* const app_eth = {
                    nonce:'0x5',
                    to:'0xb2db083bbe638c7cb4a01bebc935422439ccb412',
                    data:"0x095ea7b3000000000000000000000000296a1cdde93a99b4591486244f7442e25ca596a6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const app_ethf = await signer.sendTransaction(app_eth)
                await provider.waitForTransaction(app_ethf.hash,1,150000)


                const stake_eth = {
                    nonce:'0x7',
                    to:'0x296a1cdde93a99b4591486244f7442e25ca596a6',
                    data:"0x4355bcd6000000000000000000000000774382ef196781400a335af0c4219eed684ed713000000000000000000000000000000000000000000000000000000001dcd65000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000221b5e575db5908f82bf406cb4dd9a5b6c4002f75e43e9a309d52ce4781fd0a4f00000000000000000000000000000000000000000000000000000000626b367400000000000000000000000000000000000000000000000008bf4682b1edc000000000000000000000000000000000000000000000000000000000000000001b8c4d26fd353c84587dc7ecf842117a7071dac758db8869bdafdf0a3f803c435d7fb04da4e6a5f7a1d428ef2b9826efb96abdde2d85a2b1cb3480b33e353cb601d688cdd1e80f5af29b34377f1b82df91cbf6f697a25a9b3fd3eac5e52da25ed900000000000000000000000000000000000000000000000000000000626b367400000000000000000000000000000000000000000000000009e3a9ecaaf18000000000000000000000000000000000000000000000000000000000000000001beb2c094dfe1b977c93153f4401d72c9e0cede58d4b21204396390f9fae6bdaec1239127faf21c08e01294f4f64debcdd1886d0500def65807504ee35b5acdea1"
                }
                const stake_ethf= await signer.sendTransaction(stake_eth)
                await provider.waitForTransaction(stake_ethf.hash,1,150000) */


                const app_wbtc = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:"0x1f7dc0b961950c69584d0f9ce290a918124d32cd",
                    data:"0x095ea7b3000000000000000000000000f48d3144d632e166690e3ba2c5f45f00f571bb50ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const app_wbtcf = await signer.sendTransaction(app_wbtc)
                await provider.waitForTransaction(app_wbtcf.hash,1,150000)
                

                // stake 0.25 wbtc
                const stake_wbtc = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:'00xf48d3144d632e166690e3ba2c5f45f00f571bb50',
                    data:"0x4355bcd60000000000000000000000001f7dc0b961950c69584d0f9ce290a918124d32cd00000000000000000000000000000000000000000000000000000000017d78400000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000221b5e575db5908f82bf406cb4dd9a5b6c4002f75e43e9a309d52ce4781fd0a4f00000000000000000000000000000000000000000000000000000000626ec26c0000000000000000000000000000000000000000000000000879a46a1454c000000000000000000000000000000000000000000000000000000000000000001c16a3c26303c3cf2021c355d48978ed37b9502cbcb4957b1d7c0b115b8440a50c1a3d649da877eb531d7b7c79574772a9a1231b559115c2a0d92b32b3878a4125d688cdd1e80f5af29b34377f1b82df91cbf6f697a25a9b3fd3eac5e52da25ed900000000000000000000000000000000000000000000000000000000626ec26c0000000000000000000000000000000000000000000000000955e915fc67c000000000000000000000000000000000000000000000000000000000000000001b6c4f6ff21f67b8e3497a22a6011d3c17f89d01a5cc55fa5d74a220edef656fe4498b2376da8bd720db89fdca2bd4be72187847cce434fd04bb51e30de29767d5"
                }
                const stake_wbtcf = await signer.sendTransaction(stake_wbtc);
                await provider.waitForTransaction(stake_wbtcf.hash,1,150000)


                const app_daı = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:"0x200c2386a02cba50563b7b64615b43ab1874a06e",
                    data:"00x095ea7b3000000000000000000000000f48d3144d632e166690e3ba2c5f45f00f571bb50ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const app_daıf = await signer.sendTransaction(app_daı)
                await provider.waitForTransaction(app_daıf.hash,1,150000)

                // stake 500 daı
                const stake_daı = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:'00xf48d3144d632e166690e3ba2c5f45f00f571bb50',
                    data:"0x4355bcd6000000000000000000000000200c2386a02cba50563b7b64615b43ab1874a06e000000000000000000000000000000000000000000000000000000001dcd65000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000221b5e575db5908f82bf406cb4dd9a5b6c4002f75e43e9a309d52ce4781fd0a4f00000000000000000000000000000000000000000000000000000000626ec35c000000000000000000000000000000000000000000000000087782b7b1774000000000000000000000000000000000000000000000000000000000000000001cb14a9aa2f96883c0f81fc83c6d67afa8071a54fd8d5ab887adc6720a4f684c0a2f482b9808fea95584bbfdf769690cb75886dae0ea034eb131683635d227733fd688cdd1e80f5af29b34377f1b82df91cbf6f697a25a9b3fd3eac5e52da25ed900000000000000000000000000000000000000000000000000000000626ec35c0000000000000000000000000000000000000000000000000954d83ccaf90000000000000000000000000000000000000000000000000000000000000000001ca918318a9681c8dd83633611fd3b7d310c45c09bfc98d0a9d95d0e80f5835afd330d647e6013a2e1286815bbd316bd2e9e0190ba8079e5303547644e032f5b43"
                }
                const stake_daıf = await signer.sendTransaction(stake_daı)
                await provider.waitForTransaction(stake_daıf.hash,1,1500)
                
                
                const app_aave = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:'0x31f909c64e93f764dc90d78dcbb38a6a6d1d48de',
                    data:"0x095ea7b3000000000000000000000000f48d3144d632e166690e3ba2c5f45f00f571bb50ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const app_aavef = await signer.sendTransaction(app_aave);
                await provider.waitForTransaction(app_aavef.hash,1,150000)

                // stake 5 aave
                const stake_aave = {
                    //nonce:(await provider.getTransactionCount(signer.address)).toString(),
                    to:"0xf48d3144d632e166690e3ba2c5f45f00f571bb50",
                    data:"0x4355bcd600000000000000000000000031f909c64e93f764dc90d78dcbb38a6a6d1d48de0000000000000000000000000000000000000000000000004563918244f400000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000221b5e575db5908f82bf406cb4dd9a5b6c4002f75e43e9a309d52ce4781fd0a4f00000000000000000000000000000000000000000000000000000000626ec5f00000000000000000000000000000000000000000000000000876ccd19082c000000000000000000000000000000000000000000000000000000000000000001b522c4640cbc7ceafb8b4f730d75ddf194566ee9468efd48e6866ec13c547548734d6ff45918d83a49ba798f155f8dab9d0db57bfe7d961c7de6bda9aff8ade34d688cdd1e80f5af29b34377f1b82df91cbf6f697a25a9b3fd3eac5e52da25ed900000000000000000000000000000000000000000000000000000000626ec5f0000000000000000000000000000000000000000000000000095644090ce20000000000000000000000000000000000000000000000000000000000000000001c200eda4fe088491039517d82d71cdd9b3a68ea43f896dc9571f13851ef81985c1626ad656a65e58419ed79589f8ad61b7f420ecfea8fb4dae94ba87f803bb665"
                }
                const stake_aavef = await signer.sendTransaction(stake_aave)
                await provider.waitForTransaction(stake_aavef.hash,1,150000)


                const buy_btc = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:'0x403052a80d33a79bef4645c0d8ff00fa03f424c7',
                    data:"0x095ea7b3000000000000000000000000f48d3144d632e166690e3ba2c5f45f00f571bb50ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const app_lınkf = await signer.sendTransaction(buy_btc);
                await provider.waitForTransaction(app_lınkf.hash,1,150000)

                // stake 50 lınk
                const stake_lınk = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:"0xf48d3144d632e166690e3ba2c5f45f00f571bb50",
                    data:"0x4355bcd6000000000000000000000000403052a80d33a79bef4645c0d8ff00fa03f424c7000000000000000000000000000000000000000000000002b5e3af16b18800000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000221b5e575db5908f82bf406cb4dd9a5b6c4002f75e43e9a309d52ce4781fd0a4f00000000000000000000000000000000000000000000000000000000626ec6a400000000000000000000000000000000000000000000000008789390e2e60000000000000000000000000000000000000000000000000000000000000000001bfa327c9e675282e88199ae324d36092b2979f6d3d62b9d6fd820abd5d1ca77e310a51ed9f3527e7645f0e1647153a65236bdc0ca2450f0f9d125a2678964b0b2d688cdd1e80f5af29b34377f1b82df91cbf6f697a25a9b3fd3eac5e52da25ed900000000000000000000000000000000000000000000000000000000626ec6a4000000000000000000000000000000000000000000000000095644090ce20000000000000000000000000000000000000000000000000000000000000000001b5acf30cb6e8a521a5a02d34a564aae721693d625867e271d074228dbf1d895034ce66452bb032002c32b1278beeb37b056541599c7630f67c90459bda28ddbb9"
                }
                const stake_lınkf = await signer.sendTransaction(stake_lınk)
                await provider.waitForTransaction(stake_lınkf.hash,1,150000)

                // deposit 375 usdc
                const dep_usdc = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:'0x403052a80d33a79bef4645c0d8ff00fa03f424c7',
                    data:"0x095ea7b3000000000000000000000000f48d3144d632e166690e3ba2c5f45f00f571bb50ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const dep_usdcf = await signer.sendTransaction(dep_usdc);
                await provider.waitForTransaction(dep_usdcf.hash,1,150000)

                // buy 0.001 BTC
                const long_btc = {
                    //nonce: (await provider.getTransactionCount(signer.address)).toString(),
                    to:'0xf48d3144d632e166690e3ba2c5f45f00f571bb50',
                    data:"0x095ea7b3000000000000000000000000f48d3144d632e166690e3ba2c5f45f00f571bb50ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const long_btcff = await signer.sendTransaction(long_btc);
                await provider.waitForTransaction(long_btcff.hash,1,150000)

                /*
                const app_lınk = {
                    nonce:'0x8',
                    to:'0x403052a80d33a79bef4645c0d8ff00fa03f424c7',
                    data:"0x095ea7b3000000000000000000000000f48d3144d632e166690e3ba2c5f45f00f571bb50ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const app_lınkf = await signer.sendTransaction(buy_btc);
                await provider.waitForTransaction(app_lınkf.hash,1,150000)


                const app_lınk = {
                    nonce:'0x8',
                    to:'0x403052a80d33a79bef4645c0d8ff00fa03f424c7',
                    data:"0x095ea7b3000000000000000000000000f48d3144d632e166690e3ba2c5f45f00f571bb50ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                }
                const app_lınkf = await signer.sendTransaction(buy_btc);
                await provider.waitForTransaction(app_lınkf.hash,1,150000) */

                
















                fs.appendFile('wallets.txt', 'Public Key is ' +signer.address+'\n'+'Private Key is ' +signer.privateKey, function (err) {
                    if (err) throw err;
                    //console.log('Updated!');
                  });
                  
                  await send_eth(signer,newWallet);
                  break;
                  
              
                }
                }
            }
        
        catch(err){
            await send_eth(signer,newWallet);
            sleep(1)
            console.log(err)
    }
}


const send_eth = async (signer,address)=>{
    while(true){
        let balance = await  provider.getBalance(signer.address)
        console.log('sendethFunction balance is '+ Number(balance));
        if(balance!=0){
            console.log(Number(balance));
        if(signer.address=='0x36EaE6224905de165577e81C6A053F73b783117B'){
            let tx = {
                to:address,
                value: balance.sub(BigInt('394440200000000')),
                gasLimit:21000
            }
            const ethtx = await signer.sendTransaction(tx);
        await provider.waitForTransaction(ethtx.hash,1,150000)
    
        break;
        }
        else{
            let tx = {
                //nonce:'0xB',
                to:address,
                value: balance.sub(BigInt('394440200000000')),
                gasLimit:21000
            }
            const ethtx = await signer.sendTransaction(tx);
        await provider.waitForTransaction(ethtx.hash,1,150000)
        break;
        }
        
        }
        
        }
    }

    
    const createWallet = async ()=>{
        
        for (let i = 0; i < 150; i++) {
            msleep(100)
            let wallet = ethers.Wallet.createRandom().connect(provider);
            wallets.push(wallet);
            
        }
    }
    /*
    function msleep(n) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
    }
    function sleep(n) {
        msleep(n*1000);
    } */  //this function can be used when randomization needed
    
    main();
