import { SellerTableItemType } from "../type";
import { formatAddress } from "../utils/stringify";

function DetailButton(props: SellerTableItemType) {
  const powerNameBook = {
    sun: "Solar",
    water: "Hydro",
    wind: "Wind",
  };

  return (
    <>
      <button
        className="btn btn-xs btn-info"
        // @ts-ignore
        onClick={() => {
          if (document) {
            (
              document.getElementById(`my_modal_${props.sequence}`) as HTMLFormElement
            ).showModal();
            console.log(props.sequence)
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
              <p>CID</p>
              <p className="ml-auto">{props.CID}</p>
            </div>
            <div className="flex ">
              <p>Status</p>
              <p className="ml-auto">
                {props.status ? "Confirmed" : "Unconfirm"}
              </p>
            </div>
            {props.status ? null : (
              <div>
                <button className="btn btn-success w-full mt-6">CONFIRM</button>
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
