import {
    Address,
    beginCell,
    Cell,
    contractAddress,
    internal,
    SendMode,
    storeStateInit,
    toNano,
} from "ton-core";
  

  export class NftSale {
    data
    constructor(data) {
      this.data = data;
    }
  
    createDataCell() {
        const saleData = this.data;

        const feesCell = beginCell();

        feesCell.storeAddress(saleData.marketplaceFeeAddress);
        feesCell.storeCoins(saleData.marketplaceFee);
        feesCell.storeAddress(saleData.royaltyAddress);
        feesCell.storeCoins(saleData.royaltyAmount);

        const dataCell = beginCell();
        dataCell.storeUint(saleData.isComplete ? 1 : 0, 1);
        dataCell.storeUint(saleData.createdAt, 32);
        dataCell.storeAddress(saleData.marketplaceAddress);
        dataCell.storeAddress(saleData.nftAddress);
        dataCell.storeAddress(saleData.nftOwnerAddress);
        dataCell.storeCoins(saleData.fullPrice);
        dataCell.storeRef(feesCell.endCell());
        dataCell.storeUint(1,1)

        return dataCell.endCell();
    }

    get address() {
        return contractAddress(0, this.stateInit);
    }
    
    get stateInit() {
        const code = this.createCodeCell();
        const data = this.createDataCell();
        
        return { code, data };
    }
    
    createCodeCell(){
        const NftFixPriceSaleV2CodeBoc =
            "te6cckECDAEAAikAART/APSkE/S88sgLAQIBIAMCAATyMAIBSAUEAFGgOFnaiaGmAaY/9IH0gfSB9AGoYaH0gfQB9IH0AGEEIIySsKAVgAKrAQICzQgGAfdmCEDuaygBSYKBSML7y4cIk0PpA+gD6QPoAMFOSoSGhUIehFqBSkHCAEMjLBVADzxYB+gLLaslx+wAlwgAl10nCArCOF1BFcIAQyMsFUAPPFgH6AstqyXH7ABAjkjQ04lpwgBDIywVQA88WAfoCy2rJcfsAcCCCEF/MPRSBwCCIYAYyMsFKs8WIfoCy2rLHxPLPyPPFlADzxbKACH6AsoAyYMG+wBxVVAGyMsAFcsfUAPPFgHPFgHPFgH6AszJ7VQC99AOhpgYC42EkvgnB9IBh2omhpgGmP/SB9IH0gfQBqGBNgAPloyhFrpOEBWccgGRwcKaDjgskvhHAoomOC+XD6AmmPwQgCicbIiV15cPrpn5j9IBggKwNkZYAK5Y+oAeeLAOeLAOeLAP0BZmT2qnAbE+OAcYED6Y/pn5gQwLCQFKwAGSXwvgIcACnzEQSRA4R2AQJRAkECPwBeA6wAPjAl8JhA/y8AoAyoIQO5rKABi+8uHJU0bHBVFSxwUVsfLhynAgghBfzD0UIYAQyMsFKM8WIfoCy2rLHxnLPyfPFifPFhjKACf6AhfKAMmAQPsAcQZQREUVBsjLABXLH1ADzxYBzxYBzxYB+gLMye1UABY3EDhHZRRDMHDwBTThaBI=";
        
        return Cell.fromBase64(NftFixPriceSaleV2CodeBoc);
    }

    async deploy(wallet) {
        const stateInit = beginCell()
          .store(storeStateInit(this.stateInit))
          .endCell();
        const payload = beginCell();
        payload.storeUint(1, 32);
        payload.storeCoins(toNano("0.05"));
        payload.storeRef(stateInit);
        payload.storeRef(new Cell());
        const seqno = await wallet.contract.getSeqno();
        await wallet.contract.sendTransfer({
        seqno,
        secretKey: wallet.keyPair.secretKey,
        messages: [
            internal({
            value: "0.05",
            to: this.data.marketplaceAddress,
            body: payload.endCell(),
            }),
        ],
        sendMode: SendMode.IGNORE_ERRORS + SendMode.PAY_GAS_SEPARATELY,
        });
        return seqno;
    }

    async buy(wallet,address) {
        const stateInit = beginCell()
          .store(storeStateInit(this.stateInit))
          .endCell();
        const payload = beginCell();
        payload.storeUint(0, 32);//opcode
        payload.storeCoins(toNano("0.05"));
        
        const seqno = await wallet.contract.getSeqno();
        await wallet.contract.sendTransfer({
        seqno,
        secretKey: wallet.keyPair.secretKey,
        messages: [
            internal({
            value: "4.5",
            to: address
            }),
        ],
            sendMode: SendMode.IGNORE_ERRORS + SendMode.PAY_GAS_SEPARATELY,
        });
        /* let deployLink =
        'https://app.tonkeeper.com/transfer/' +
        address.toString({
            testOnly: true,
        }) +
        "?" +
        qs.stringify({
            amount: toNano("1.5").toString(10),
            bin: payload.endCell().toBoc({idx: false}).toString("base64"),
        });

        console.log(deployLink)

        qrcode.generate(deployLink, {small: true }, (qr) => {
            console.log(qr);
        });
 */
        return 0;
    }
  }