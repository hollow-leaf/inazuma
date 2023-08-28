import { FGStorage } from '@co2-storage/js-api'
import { verify_status } from '../blockchain/blockchain.js'
import { resolve } from 'path'
import { fetch_cert_uri } from '../hypercert/hypercert.js'

export async function search_asset(address){
    const authType = "pk"
    const ipfsNodeType = "client"
    //const ipfsNodeAddr = "/ip4/127.0.0.1/tcp/5001"
    //const fgApiUrl = "http://localhost:3020"
    const ipfsNodeAddr = "/dns4/web1.co2.storage/tcp/5002/https"
    const fgApiUrl = "https://web1.co2.storage"

    const fgStorage = new FGStorage({authType: authType, ipfsNodeType: ipfsNodeType, ipfsNodeAddr: ipfsNodeAddr, fgApiHost: fgApiUrl})

    /**
     * Search
     * parameters: (chainName, phrases, dataStructure, cid, parent, name, description, base, 
    1reference, 1contentCid, 1creator, 1createdFrom, 1createdTo, 1version, offset, limit, sortBy, sortDir)
    */
    
    const keyword = 'GreenPower Transaction '+ address
    let searchResponse = await fgStorage.searchAssets('GreenPower', null, null, keyword, null, null, 0, 50, null, null)
    if(searchResponse.error != null) {
        console.error(searchResponse.error)
        await new Promise(reject => setTimeout(reject, 300));
    }

    let asset_list = []

    searchResponse.result.assets.forEach(item => {
        const obj = new Promise((resolve)=>{
          resolve(fgStorage.getAsset(item.block))
        })
        asset_list.push (obj)
    });

    let res_list = []
    await Promise.all(asset_list).then(list=>{
        list.forEach(asset=>{
            res_list.push({cid:asset.result.assetBlock.cid,asset:asset.result.asset})
        })
    }).catch(err=>{
        console.log(err)
    })
    /* res_list.forEach(item=>{
        const obj = new Promise((resolve)=>{
            resolve(fetch_cert_uri(process.env.ADDRESS,item.asset[5].file[0].cid))
        })
        id_list.push(obj);
    })

    let rid_list = []
    await Promise.all(id_list).then(res=>{
        res.forEach(item=>{
            rid_list.push(item)
        })
    }) */

    console.log(res_list)

    /* let rres_list = []
    res_list.forEach(item=>{
        const obj = new Promise((resolve)=>{
            resolve(verify_status(process.env.ADDRESS,item.asset[5].file[0].cid))
        })
    }) */

    /* await Promise.all(rres_list).then(list=>{
        for(let i=0;i<res_list.length;i++){
            res_list[i].status = 
        }
    }) */

    return res_list
}

search_asset(process.env.ADDRESS)

export async function search_proven(address, cid){
    const authType = "pk"
    const ipfsNodeType = "client"
    //const ipfsNodeAddr = "/ip4/127.0.0.1/tcp/5001"
    //const fgApiUrl = "http://localhost:3020"
    const ipfsNodeAddr = "/dns4/web1.co2.storage/tcp/5002/https"
    const fgApiUrl = "https://web1.co2.storage"

    const fgStorage = new FGStorage({authType: authType, ipfsNodeType: ipfsNodeType, ipfsNodeAddr: ipfsNodeAddr, fgApiHost: fgApiUrl})

    /**
     * Search
     * parameters: (chainName, phrases, dataStructure, cid, parent, name, description, base, 
    1reference, 1contentCid, 1creator, 1createdFrom, 1createdTo, 1version, offset, limit, sortBy, sortDir)
    */
    
    let searchResponse = await fgStorage.search('GreenPower', null, 'provenance', null, null, null, null, null, cid, null, address)
    if(searchResponse.error != null) {
        console.error(searchResponse.error)
        await new Promise(reject => setTimeout(reject, 300));
    }

    return {signature: searchResponse.result[0].signature, signature_v: searchResponse.result[0].signature_v, signature_r: searchResponse.result[0].signature_r, signature_s: searchResponse.result[0].signature_s}



}
//search_asset("0xf3419771c2551f88a91Db61cB874347f05640172")
//search_proven("0xf3419771c2551f88a91Db61cB874347f05640172", "bafyreielhkdjwgluc3vi6vobzmvvnrbodea3oguxvsnpflpiuldkn4uv24")