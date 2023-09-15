import { mnemonicToPrivateKey } from "ton-crypto";
import {
  beginCell,
  TonClient,
  WalletContractV4,
} from "ton";


export async function openWallet(mnemonic, testnet) {
    const keyPair = await mnemonicToPrivateKey(mnemonic);
    const toncenterBaseEndpoint = testnet
    ? "https://testnet.toncenter.com"
    : "https://toncenter.com";

    const client = new TonClient({
    endpoint: `${toncenterBaseEndpoint}/api/v2/jsonRPC`,
    apiKey: process.env.TONCENTER_API_KEY,
    });

    const wallet = WalletContractV4.create({
        workchain: 0,
        publicKey: keyPair.publicKey,
    });

    const contract = client.open(wallet);
    return { contract, keyPair };
}

function bufferToChunks(buff, chunkSize) {
    const chunks = [];
    while (buff.byteLength > 0) {
      chunks.push(buff.subarray(0, chunkSize));
      buff = buff.subarray(chunkSize);
    }
    return chunks;
  }

  function makeSnakeCell(data) {
    const chunks = bufferToChunks(data, 127);
  
    if (chunks.length === 0) {
      return beginCell().endCell();
    }
  
    if (chunks.length === 1) {
      return beginCell().storeBuffer(chunks[0]).endCell();
    }
  
    let curCell = beginCell();
  
    for (let i = chunks.length - 1; i >= 0; i--) {
      const chunk = chunks[i];
  
      curCell.storeBuffer(chunk);
  
      if (i - 1 >= 0) {
        const nextCell = beginCell();
        nextCell.storeRef(curCell);
        curCell = nextCell;
      }
    }
  
    return curCell.endCell();
  }

  export function encodeOffChainContent(content) {
    let data = Buffer.from(content);
    const offChainPrefix = Buffer.from([0x01]);
    data = Buffer.concat([offChainPrefix, data]);
    return makeSnakeCell(data);
  }