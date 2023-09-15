import { Address, beginCell, Cell, internal, SendMode } from "ton-core";
import { TonClient } from "ton";

export class NftItem {
  collection;

  constructor(collection) {
    this.collection = collection;
  }

  async deploy(
    wallet,
    params
  ){
    const seqno = await wallet.contract.getSeqno();
    await wallet.contract.sendTransfer({
      seqno,
      secretKey: wallet.keyPair.secretKey,
      messages: [
        internal({
          value: "0.05",
          to: this.collection.address,
          body: this.collection.createMintBody(params),
        }),
      ],
      sendMode: SendMode.IGNORE_ERRORS + SendMode.PAY_GAS_SEPARATELY,
    });
    return seqno;
  }

  static async getAddressByIndex(
    collectionAddress,
    itemIndex
  ) {
    const client = new TonClient({
      endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
      apiKey: process.env.TONCENTER_API_KEY,
    });

    const response = await client.runMethod(
        collectionAddress,
        "get_nft_address_by_index",
        [{ type: "int", value: BigInt(itemIndex) }]
      );
    return response.stack.readAddress();
    }

    static createTransferBody(params) {
        const msgBody = beginCell();
        msgBody.storeUint(0x5fcc3d14, 32); // op-code 
        msgBody.storeUint(0, 64); // query-id
        msgBody.storeAddress(params.newOwner);
        msgBody.storeAddress(params.responseTo || null);
        msgBody.storeBit(false); // no custom payload
        msgBody.storeCoins(params.forwardAmount || 0);
        msgBody.storeBit(0); // no forward_payload 

        return msgBody.endCell();
      }

    
    static async transfer(
        wallet,
        new_owner,
        itemaddress
        ) {
            const seqno = await wallet.contract.getSeqno();
            const body = NftItem.createTransferBody({newOwner:new_owner, responseTo: wallet.contract.address})

            await wallet.contract.sendTransfer({
                seqno,
                secretKey: wallet.keyPair.secretKey,
                messages: [
                internal({
                    value: "0.05",
                    to: itemaddress,
                    body: body,
                }),
                ],
                sendMode: SendMode.IGNORE_ERRORS + SendMode.PAY_GAS_SEPARATELY,
            });
            return seqno;
        }

    
}