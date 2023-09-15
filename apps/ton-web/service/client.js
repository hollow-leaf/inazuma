import { fallback, createPublicClient, http } from 'viem'
import { goerli } from 'viem/chains'

const goerliProvider = [
  http('https://eth-goerli.api.onfinality.io/public'),
  http('https://goerli.blockpi.network/v1/rpc/public'),
  http('https://ethereum-goerli.publicnode.com'),
  http('https://api.zan.top/node/v1/eth/goerli/public')
]

export const goerliClient = createPublicClient({
  chain: goerli,
  transport: fallback(goerliProvider)
})