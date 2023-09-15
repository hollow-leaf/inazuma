import { getitem } from "./search_ton_asset.js";
import { openWallet } from "./src/utils.js";
import { Collection } from "./src/contracts/NftCollection.js";
import { waitSeqno } from "./src/delay.js";
import { Address, toNano } from "ton-core";
import { NftItem } from "./src/contracts/NftItem.js";
import { NftMarketplace } from "./src/contracts/NftMarketplace.js"
import { NftSale } from "./src/contracts/Sales.js";



export async function mint_nft(provider){
    const nft = await getitem()
    const index = nft.length
    try{
        let nft_address = await Mint(index)
        Salenft(index, provider)
        return nft_address
    }catch(err){
        console.log(err)
    }
}

async function Mint(index) {
    const wallet = await openWallet(process.env.MNEMONIC.split(" "), true);
    const collectionData = {
        ownerAddress: wallet.contract.address,
        royaltyPercent: 0, // 0.05 = 5%
        royaltyAddress: wallet.contract.address,
        nextItemIndex: 0,
        collectionContentUrl: `ipfs://`,
        commonContentUrl: `ipfs://`,
    };
    const collection = new Collection(collectionData);

    console.log(`Start deploy of NFT`);
    const mintParams = {
        queryId: 0,
        itemOwnerAddress: wallet.contract.address,
        itemIndex: index,
        amount: toNano("0.05"),
        commonContentUrl: "",
    };

    const nftItem = new NftItem(collection);
    const seqno = await nftItem.deploy(wallet, mintParams);
    console.log(`Successfully deployed NFT`);
    await waitSeqno(seqno, wallet);
    return (await NftItem.getAddressByIndex(collection.address, index)).toRawString()
}

async function Salenft(index, provider) {
    const wallet = await openWallet(process.env.MNEMONIC.split(" "), true);
    const collectionData = {
        ownerAddress: wallet.contract.address,
        royaltyPercent: 0, // 0.05 = 5%
        royaltyAddress: wallet.contract.address,
        nextItemIndex: 0,
        collectionContentUrl: `ipfs://`,
        commonContentUrl: `ipfs://`,
    };
    const collection = new Collection(collectionData);
    const marketplace = new NftMarketplace(wallet.contract.address);
    const nftToSaleAddress = await NftItem.getAddressByIndex(collection.address, index);

    const saleData = {
        isComplete: false,
        createdAt: Math.ceil(Date.now() / 1000),
        marketplaceAddress: marketplace.address,
        nftAddress: nftToSaleAddress,
        nftOwnerAddress: Address.parse(provider),
        fullPrice: toNano("1"),
        marketplaceFeeAddress: wallet.contract.address,
        marketplaceFee: toNano("0"),
        royaltyAddress: wallet.contract.address,
        royaltyAmount: toNano("0"),
    };
    const nftSaleContract = new NftSale(saleData);
    const seqno = await nftSaleContract.deploy(wallet);
    await waitSeqno(seqno, wallet);

    NftItem.transfer(wallet, nftSaleContract.address, nftToSaleAddress);
}