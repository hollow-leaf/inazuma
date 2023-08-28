import { SellerTableItemType } from "../type";
import DetailButton from "./detailButton";

function SellerTableItem(props: SellerTableItemType) {
  const iconPathBook = {
    sun: "solar-cell.png",
    water: "hydro-power.png",
    wind: "wind-power.png",
    Solar: "solar-cell.png",
    Hydro: "hydro-power.png",
    Wind: "wind-power.png",
  };

  const powerNameBook = {
    sun: "Solar",
    water: "Hydro",
    wind: "Wind",
    Wind: "Wind",
    Solar: "Solar",
    Hydro: "Hydro",
  };
  console.log(props.powerType)

  return (
    <>
      <tr className="text-center">
        <th>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  // @ts-ignore
                  src={iconPathBook[props.powerType]}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">
                {
                  // @ts-ignore
                  powerNameBook[props.powerType]
                }
              </div>
            </div>
          </div>
        </td>
        <td>{props.kWh}</td>
        <td>{props.date}</td>
        <td>{props.status ? "Confirmed" : "Unconfirm"}</td>
        <th>
          <DetailButton
            sequence={props.sequence}
            provider={props.provider}
            powerType={props.powerType}
            status={props.status}
            location={props.location}
            hyperCID={props.hyperCID}
            Co2CID={props.Co2CID}
            tokenId={props.tokenId}
            kWh={props.kWh}
            date={props.date}
          />
        </th>
      </tr>
    </>
  );
}

export default SellerTableItem;
