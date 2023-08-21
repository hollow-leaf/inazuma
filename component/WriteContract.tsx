'use client'

import { BaseError } from 'viem'
import { useContractWrite, useWaitForTransaction } from 'wagmi'

import { stringify } from '../utils/stringify'
import { erc721_abi } from '../abi/erc721_abi'
import { useState } from 'react'

export function WriteContract() {
  const { write, data, error, isLoading, isError } = useContractWrite({
    address: '0xdA58552e8EE930DFcdeAC982087DB4F81d0e6eb6',
    abi: erc721_abi,
    functionName: 'safeMint',
  })
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
          const formData = new FormData(e.target as HTMLFormElement)
          const input_number = formData.get('input_number') as string
          write({
            args: [input_number],
          })
        }}
      >
        <input name="input_number" placeholder="input number" />
        <button disabled={isLoading} type="submit">
          Mint
        </button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </>
  )
}
