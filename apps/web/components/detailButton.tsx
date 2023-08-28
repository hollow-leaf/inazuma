import { SellerTableItemType } from "../type";
import { formatAddress } from "../utils/stringify";
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { verify, token_is_verified } from "../service/contract";

function DetailButton(props: SellerTableItemType) {
  const powerNameBook = {
    sun: "Solar",
    water: "Hydro",
    wind: "Wind",
    Wind: "Wind",
    Solar: "Solar",
    Hydro: "Hydro",
  };  


  const handleVerify = () => {
    verify(Number(props.tokenId), props.hyperCID, props.kWh);
    //token_is_verified(Number(props.tokenId))
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
              <p>Provider</p>
              <p className="ml-auto">{formatAddress(props.provider)}</p>
            </div>
            <div className="flex ">
              <p>Power Type</p>
              <p className="ml-auto">
                {
                  // @ts-ignore
                  powerNameBook[props.powerType]
                }
              </p>
            </div>
            <div className="flex ">
              <p>Generation Capacity</p>
              <p className="ml-auto">{props.kWh}</p>
            </div>
            <div className="flex ">
              <p>Date</p>
              <p className="ml-auto">{props.date}</p>
            </div>
            <div className="flex ">
              <p>location</p>
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
                <button className="btn btn-success w-full mt-6" onClick={handleVerify}>VERIFY</button>
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
