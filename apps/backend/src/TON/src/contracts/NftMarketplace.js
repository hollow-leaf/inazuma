import {
    Address,
    beginCell,
    Cell,
    contractAddress,
    internal,
    SendMode,
  } from "ton-core";
  
  export class NftMarketplace {
    ownerAddress;
  
    constructor(ownerAddress) {
      this.ownerAddress = ownerAddress;
    }
  
  
    get stateInit(){
      const code = this.createCodeCell();
      const data = this.createDataCell();
  
      return { code, data };
    }
  
     createDataCell(){
      const dataCell = beginCell();
  
      dataCell.storeAddress(this.ownerAddress);
  
      return dataCell.endCell();
    }
  
    createCodeCell(){
      const NftMarketplaceCodeBoc = "te6cckEBBAEAbQABFP8A9KQT9LzyyAsBAgEgAgMAqtIyIccAkVvg0NMDAXGwkVvg+kDtRND6QDASxwXy4ZEB0x8BwAGOK/oAMAHU1DAh+QBwyMoHy//J0Hd0gBjIywXLAljPFlAE+gITy2vMzMlx+wCRW+IABPIwjvfM5w==";
      return Cell.fromBase64(NftMarketplaceCodeBoc)
    }

    get address() {
        return contractAddress(0, this.stateInit);
      }

    async deploy(wallet) {
    const seqno = await wallet.contract.getSeqno();
    await wallet.contract.sendTransfer({
        seqno,
        secretKey: wallet.keyPair.secretKey,
        messages: [
        internal({
            value: "0.5",
            to: this.address,
            init: this.stateInit,
        }),
        ],
        sendMode: SendMode.IGNORE_ERRORS + SendMode.PAY_GAS_SEPARATELY,
    });
    return seqno;
    }
  }