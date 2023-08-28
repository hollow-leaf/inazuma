import { SellerTableItemType } from "../type";
import { formatAddress } from "../utils/stringify";
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import ABI from "../service/ABI.json"

function DetailButton(props: SellerTableItemType) {
  const powerNameBook = {
    sun: "Solar",
    water: "Hydro",
    wind: "Wind",
    Wind: "Wind",
    Solar: "Solar",
    Hydro: "Hydro",
  };

  const inazuma_abi = [
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
  

  const { config, error } = usePrepareContractWrite({
    address: '0xB904d09c31Aeb6EC1EF2d9dA2611Abd1A176c584',
    abi: inazuma_abi,
    chainId: 5,
    functionName: 'verify',
    args:[props.tokenId, props.hyperCID, props.kWh]
  })
  const { write } = useContractWrite(config)

  const handleVerify = () => {
    // verify(Number(props.tokenId), props.hyperCID, props.kWh);
  }

  return (
    <>
      <button
        className="btn btn-xs btn-info"
        // @ts-ignore
        onClick={() => {
          if (document) {
            (
              document.getElementById(
                `my_modal_${props.sequence}`
              ) as HTMLFormElement
            ).showModal();
          }
        }}
      >
        Detail
      </button>
      <dialog id={`my_modal_${props.sequence}`} className="modal">
        <form method="dialog" className="modal-box bg-white py-10">
          <h3 className="font-bold text-lg">DETAIL</h3>
          <div className="px-16 mt-8 flex flex-col space-y-3">
            <div className="flex">
              <p>Provider:</p>
              <p className="ml-auto">{formatAddress(props.provider)}</p>
            </div>
            <div className="flex ">
              <p>Power Type:</p>
              <p className="ml-auto">
                {
                  // @ts-ignore
                  powerNameBook[props.powerType]
                }
              </p>
            </div>
            <div className="flex ">
              <p>Generation Capacity:</p>
              <p className="ml-auto">{props.kWh}</p>
            </div>
            <div className="flex ">
              <p>Date:</p>
              <p className="ml-auto">{props.date}</p>
            </div>
            <div className="flex ">
              <p>location:</p>
              <p className="ml-auto">{props.location}</p>
            </div>
            <div className="flex ">
              <p>CO2 CID</p>
              <p className="ml-auto">{formatAddress(props.Co2CID)}</p>
            </div>
            <div className="flex ">
              <p>hyperCert CID</p>
              <p className="ml-auto">{formatAddress(props.hyperCID)}</p>
            </div>
            <div className="flex ">
              <p>token ID</p>
              <p className="ml-auto">{formatAddress(props.tokenId)}</p>
            </div>
            <div className="flex ">
              <p>Status</p>
              <p className="ml-auto">
                {props.status ? "Confirmed" : "Unconfirm"}
              </p>
            </div>
            {props.status ? null : (
              <div>
                <button className="btn btn-success w-full mt-6" onClick={write}>VERIFY</button>
              </div>
            )}
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default DetailButton;
