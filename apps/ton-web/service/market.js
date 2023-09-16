import axios from "axios";
import TonConnect, { toUserFriendlyAddress, restoreConnection } from '@tonconnect/sdk';
import qs from "qs";
import {
    Address,
    beginCell,
    Cell,
    contractAddress,
    internal,
    SendMode,
    StateInit,
    storeStateInit,
    toNano,
} from "ton-core";

var QRCode = require('qrcode')


export async function getitem() {
    try {
        const res = await axios({
            method: 'get',
            url: `https://testnet.tonapi.io/v2/nfts/collections/EQDW1G_c_xIb2Iyzof123IAzQlY942Pl3H6XEJ_jRB2ez-Pe/items?limit=1000&offset=0`,
        })
        return res
    }
    catch (err) {
        console.log("error", err);
    }
}

export async function getsale(market){
    let items = await getitem()
    items = items.data["nft_items"]

    let sales = []

    items.forEach(item => {
        if(item["sale"]!=undefined){
            if(item["sale"]["market"]['address']==market){
                sales.push(item)
            }
        }
    });
    return sales
}

//wallet:boolen
export async function buy_nft(address, prize){
    try{
        let connector = new TonConnect()
        await connector.restoreConnection()
        if(typeof window !== 'undefined' && window.localStorage){
        const testnetOnlyBouncableUserFriendlyAddress = toUserFriendlyAddress(address, true)
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: testnetOnlyBouncableUserFriendlyAddress,
                    amount: (prize*(10**9)+5*(10**8)).toString(),
                }
            ]
        }
        const result = await connector.sendTransaction(transaction);
        return 0
        // you can use signed boc to find the transaction 
        const someTxData = await myAppExplorerService.getTransaction(result.boc);
        alert('Transaction was sent successfully', someTxData);
      }
      }catch(err){
        let toaddress = toUserFriendlyAddress(address, true)
        console.log(err)
        const payload = beginCell();
        payload.storeUint(0, 32);//opcode
        payload.storeUint(0, 64);
        payload.storeCoins(toNano("0.05"));
        let deployLink =
        'https://app.tonkeeper.com/transfer/' +
        toaddress +
        "?" +
        qs.stringify({
            amount: toNano(prize.toString()).toString(10),
        });
        
        qrcode_generate(deployLink, address)
      }
}

async function qrcode_generate(link, sale_address){
    const img = document.getElementsByClassName("buy_qrcode_"+sale_address)[0]
    QRCode.toDataURL(link, function (err, url) {
        console.log(url)
        img.setAttribute("src", url)
      })
}