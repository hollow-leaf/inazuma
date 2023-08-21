'use client'

import { useState } from 'react'
import { BaseError } from 'viem'
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'

import { stringify } from '../utils/stringify'
import { erc721_abi } from '../abi/erc721_abi'

//UI mui
import { Box, Button, Card, FormControl, Input } from '@mui/material';

export function WriteContractPrepared() {
  const [address, setAddress] = useState('')

  const { config } = usePrepareContractWrite({
    address: '0xdA58552e8EE930DFcdeAC982087DB4F81d0e6eb6',
    abi: erc721_abi,
    functionName: 'safeMint',
    args: [String(address)],
  })
  const { write, data, error, isLoading, isError } = useContractWrite(config)
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash })

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          write?.()
        }}
      >
        <Input
          placeholder="to address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button disabled={!write} type="submit">
          Mint
        </Button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <Card>
          <Box>Transaction Hash: {data?.hash}</Box>
          <Box>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </Box>
        </Card>
      )}
      {isError && <Card>{(error as BaseError)?.shortMessage}</Card>}
    </>
  )
}
