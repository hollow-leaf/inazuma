import ABI from "./ABI.json";
import {
  writeContract,
  prepareWriteContract,
} from "@wagmi/core";

const contractAddress = "0xB904d09c31Aeb6EC1EF2d9dA2611Abd1A176c584";
const goerliId = 5;

export async function verify(
  tokenId: number,
  hyperCID: string,
  amount: number
) {
  const config = await prepareWriteContract({
    address: contractAddress,
    abi: ABI,
    chainId: goerliId,
    functionName: "verify(uint256,string,uint256)",
    args: [tokenId, hyperCID, amount],
  });
  await writeContract(config);
}

export async function buyNFT(tokenIdList: number[], amount: number) {
  const config = await prepareWriteContract({
    address: contractAddress,
    abi: ABI,
    chainId: goerliId,
    functionName: "buy",
    args: [tokenIdList, amount],
  });
  await writeContract(config);
}
