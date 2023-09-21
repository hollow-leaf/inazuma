import TonConnect, { toUserFriendlyAddress } from '@tonconnect/sdk';

export async function connectwallet() {
   let  connector = new TonConnect({manifestUrl:"https://gold-xenial-catfish-998.mypinata.cloud/ipfs/QmNQiXeY1si1uVA6KQfUq8nEGAHmmTrk5TjXDY8dCnRhtD"});
    if(!connector.connected){
        try{
            connector = new TonConnect({manifestUrl:"https://gold-xenial-catfish-998.mypinata.cloud/ipfs/QmNQiXeY1si1uVA6KQfUq8nEGAHmmTrk5TjXDY8dCnRhtD"});
            connector.restoreConnection();
            const walletConnectionSource = {
              jsBridgeKey: 'tonkeeper'
            }

            await connector.connect(walletConnectionSource)
            connector.onStatusChange((wallet)=>{
              if(wallet!=null){
                const rawAddress = wallet["account"]['address']
                const testnetOnlyBouncableUserFriendlyAddress = toUserFriendlyAddress(rawAddress, true)
                return true
              }
            })
          }catch(err){
            alert("You have to insatll browser plugin wallet")
          }
    }
  }

export async function iswallet(){
  let connector = new TonConnect()
  try{
    await connector.restoreConnection()
        if(connector.connected){
          if(connector.wallet?.account.address!=undefined){
            return true
          }
        }else{
          return false
        }
  }catch(err){
    console.log(err)
  }
  return false
}