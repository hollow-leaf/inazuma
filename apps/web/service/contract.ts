'use client'
import { writeContract, prepareWriteContract, getNetwork } from 'wagmi/actions'
import { goerliClient } from './client'

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenID",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			}
		],
		"name": "set_contributer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "verify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "provider",
				"type": "address"
			}
		],
		"name": "provider_given_amount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenID",
				"type": "uint256"
			}
		],
		"name": "token_is_verified",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contractAddress: any = {
  'Goerli': '0x78E3930D2e258e5E88eC4a7f052ce8c7508d5B3B'
}

const publicClients: any = {
  'Goerli': goerliClient,
}

export const verify = async (tokenID: number, cid: string, amount: number) => {
  const { chain } = getNetwork()
  const { request } = await prepareWriteContract({
    address: contractAddress["Goerli"],
    abi: abi,
    functionName: 'verify',
    args: [tokenID, cid, amount],
  })
  await writeContract(request).then(res=>console.log)
}

export const buy = async (token_list: [], amount: number) => {
	const { chain } = getNetwork()
	const { request } = await prepareWriteContract({
		address: contractAddress["Goerli"],
		abi: abi,
		functionName: 'buy',
		args: [token_list, amount],
	})
	await writeContract(request).then(res=>console.log)
}

export const token_is_verified = async (tokenID: number) => {
	const { chain } = getNetwork()
	const { request } = await prepareWriteContract({
		address: contractAddress["Goerli"],
		abi: abi,
		functionName: 'token_is_verified',
		args: [tokenID],
	})
	await writeContract(request).then(res=>console.log)
}