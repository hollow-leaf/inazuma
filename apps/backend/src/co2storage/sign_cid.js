import { FGStorage } from '@co2-storage/js-api'

export async function sign_cid(cid){

    const authType = "pk"
    const ipfsNodeType = "client"
    //const ipfsNodeAddr = "/ip4/127.0.0.1/tcp/5001"
    //const fgApiUrl = "http://localhost:3020"
    const ipfsNodeAddr = "/dns4/web1.co2.storage/tcp/5002/https"
    const fgApiUrl = "https://web1.co2.storage"

    const fgStorage = new FGStorage({authType: authType, ipfsNodeType: ipfsNodeType, ipfsNodeAddr: ipfsNodeAddr, fgApiHost: fgApiUrl})

    const _cid = cid
    const contributorName = 'Taiwan Power Company (TPC)'
    const contributionLicense = 'CC0 (No Rights Reserved, Public Domain)'
    const contributionNote = 'Verified Green Power Supply Data'
    const indexingDataChain = 'GreenPower'

    const response = await fgStorage.addProvenanceMessage(_cid, contributorName, contributionLicense, contributionNote, indexingDataChain)

    await new Promise(resolve => setTimeout(resolve, 1000))
    return response
    
}
