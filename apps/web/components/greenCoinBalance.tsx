import { BaseError } from "viem";
import { useContractRead } from "wagmi";
import { greencoin_abi } from "../abi/greencoin";
import { useAccount, useEnsName } from "wagmi";

function BalanceOf() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  const { data, error, isLoading, isSuccess } = useContractRead({
    address: "0xe492DF5f551c8889adc1312793aB815E3f773717",
    abi: greencoin_abi,
    functionName: "balanceOf",
    args: [address],
    enabled: Boolean(address),
  });

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-3 rounded-md shadow-md">
      <p className="text-white font-semibold">
        GreenCoin: {isSuccess && data?.toString()}
      </p>
      {error && (
        <div className="bg-red-600 text-white py-1 px-2 rounded">
          {(error as BaseError).shortMessage}
        </div>
      )}
    </div>
  );
}
export default BalanceOf;
