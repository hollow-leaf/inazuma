import TonConnect, { toUserFriendlyAddress } from '@tonconnect/sdk';

export async function connectwallet() {
    connector = new TonConnect({manifestUrl:"https://gold-xenial-catfish-998.mypinata.cloud/ipfs/QmNQiXeY1si1uVA6KQfUq8nEGAHmmTrk5TjXDY8dCnRhtD"});
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
                setAddress(testnetOnlyBouncableUserFriendlyAddress)
                setConnect(true)
              }
            })
          }catch(err){
            alert("You have to insatll browser plugin wallet")
          }
    }
  }