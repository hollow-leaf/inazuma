import { useContractRead } from 'wagmi'
import { erc1155test_abi } from '../abi/erc1155test_abi'

function App() {
  const { data, isError, isLoading } = useContractRead({
    address: '0x4C41C303Cb7892A13acCe8fF2837D41FbBd2e0Ad',
    abi: erc1155test_abi,
    functionName: 'name',
  })
}
