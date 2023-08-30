import { fetch_cert_address } from "./hypercert/hypercert.js"
import { verify_status, splitfraction, strict_status } from "./blockchain/blockchain.js"

var address = process.env.ADDRESS


export async function buy_power(amount){
    let token_list = await fetch_cert_address(address)
    token_list = token_list.claimTokens
    let buy_list =  []
    let index = 5
    while(amount>0){
        if(index==token_list.length){
            return "tokens are insufficient"
        }
        const verify = await verify_status(token_list[index].tokenID)
        const strict = await strict_status(token_list[index].tokenID)
        console.log(verify, strict)
        //add check whether token id be verify
        if(verify && strict=="AllowAll"){
            if(token_list[index].units<amount){
                buy_list.push({id:token_list[index].id, tokenID: token_list[index].tokenID, units:String(token_list[index].units)})
                amount = amount - token_list[index].units
            }else{
                //spiltfraction
                if(token_list[index].units != amount){
                   await splitfraction(BigInt(token_list[index].tokenID), amount, token_list[index].units)
                }
                buy_list.push({id:token_list[index].id, tokenID: token_list[index].tokenID, units:String(amount)})
                amount = 0   
            }
        }
        
        index = index + 1
    }
    return buy_list
}
